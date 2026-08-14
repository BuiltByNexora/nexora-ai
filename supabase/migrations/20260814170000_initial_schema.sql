-- ============================================================
-- Nexora Initial Database Schema
-- Version: 1
-- ============================================================

-- ------------------------------------------------------------
-- PROFILES
-- Extends Supabase's built-in auth.users table.
-- ------------------------------------------------------------

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text,
  avatar_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- ------------------------------------------------------------
-- CONVERSATIONS
-- Each conversation belongs to one authenticated user.
-- ------------------------------------------------------------

create table public.conversations (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  title text not null default 'New conversation',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index conversations_user_id_idx
  on public.conversations(user_id);

create index conversations_updated_at_idx
  on public.conversations(updated_at desc);

-- ------------------------------------------------------------
-- MESSAGES
-- Each message belongs to one conversation.
-- ------------------------------------------------------------

create table public.messages (
  id uuid primary key default gen_random_uuid(),
  conversation_id uuid not null
    references public.conversations(id)
    on delete cascade,
  role text not null
    check (role in ('user', 'assistant', 'system', 'tool')),
  content text not null,
  created_at timestamptz not null default now()
);

create index messages_conversation_id_idx
  on public.messages(conversation_id);

create index messages_created_at_idx
  on public.messages(created_at);

-- ------------------------------------------------------------
-- ROW LEVEL SECURITY
-- ------------------------------------------------------------

alter table public.profiles enable row level security;
alter table public.conversations enable row level security;
alter table public.messages enable row level security;

-- ------------------------------------------------------------
-- PROFILE POLICIES
-- ------------------------------------------------------------

create policy "Users can view their own profile"
  on public.profiles
  for select
  to authenticated
  using (auth.uid() = id);

create policy "Users can update their own profile"
  on public.profiles
  for update
  to authenticated
  using (auth.uid() = id)
  with check (auth.uid() = id);

-- ------------------------------------------------------------
-- CONVERSATION POLICIES
-- ------------------------------------------------------------

create policy "Users can view their own conversations"
  on public.conversations
  for select
  to authenticated
  using (auth.uid() = user_id);

create policy "Users can create their own conversations"
  on public.conversations
  for insert
  to authenticated
  with check (auth.uid() = user_id);

create policy "Users can update their own conversations"
  on public.conversations
  for update
  to authenticated
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create policy "Users can delete their own conversations"
  on public.conversations
  for delete
  to authenticated
  using (auth.uid() = user_id);

-- ------------------------------------------------------------
-- MESSAGE POLICIES
--
-- Messages inherit ownership from their conversation.
-- ------------------------------------------------------------

create policy "Users can view messages in their conversations"
  on public.messages
  for select
  to authenticated
  using (
    exists (
      select 1
      from public.conversations
      where conversations.id = messages.conversation_id
        and conversations.user_id = auth.uid()
    )
  );

create policy "Users can create messages in their conversations"
  on public.messages
  for insert
  to authenticated
  with check (
    exists (
      select 1
      from public.conversations
      where conversations.id = messages.conversation_id
        and conversations.user_id = auth.uid()
    )
  );

create policy "Users can delete messages in their conversations"
  on public.messages
  for delete
  to authenticated
  using (
    exists (
      select 1
      from public.conversations
      where conversations.id = messages.conversation_id
        and conversations.user_id = auth.uid()
    )
  );

  -- ------------------------------------------------------------
-- AUTOMATIC PROFILE CREATION
--
-- Creates a profile whenever a new authenticated user is
-- created in Supabase Auth.
-- ------------------------------------------------------------

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (
    id,
    display_name,
    avatar_url
  )
  values (
    new.id,
    coalesce(new.raw_user_meta_data ->> 'display_name', ''),
    new.raw_user_meta_data ->> 'avatar_url'
  );

  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row
  execute procedure public.handle_new_user();