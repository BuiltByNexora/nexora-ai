import { createClient } from "@/lib/supabase/client";

export async function signInWithGoogle() {
  const supabase = createClient();

  return supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${window.location.origin}/auth/callback`,
    },
  });
}

export async function signInWithEmail(
  email: string,
  password: string,
) {
  const supabase = createClient();

  return supabase.auth.signInWithPassword({
    email,
    password,
  });
}

export async function signUpWithEmail(
  email: string,
  password: string,
  displayName?: string,
) {
  const supabase = createClient();

  return supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        display_name: displayName ?? "",
      },
    },
  });
}

export async function signInAsGuest() {
  const supabase = createClient();

  return supabase.auth.signInAnonymously();
}

export async function signOut() {
  const supabase = createClient();

  return supabase.auth.signOut();
}