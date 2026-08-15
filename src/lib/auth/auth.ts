import { createClient } from "@/lib/supabase/client";

export async function signInWithGoogle(next = "/dashboard") {
  const supabase = createClient();

  const safeNext =
    next.startsWith("/") && !next.startsWith("//")
      ? next
      : "/dashboard";

  return supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${window.location.origin}/auth/callback?next=${encodeURIComponent(
        safeNext,
      )}`,
    },
  });
}

export async function signInWithGitHub(next = "/dashboard") {
  const supabase = createClient();

  const safeNext =
    next.startsWith("/") && !next.startsWith("//")
      ? next
      : "/dashboard";

  return supabase.auth.signInWithOAuth({
    provider: "github",
    options: {
      redirectTo: `${window.location.origin}/auth/callback?next=${encodeURIComponent(
        safeNext,
      )}`,
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

export async function signUpWithEmail({
  name,
  email,
  password,
}: {
  name: string;
  email: string;
  password: string;
}) {
  const supabase = createClient();

  return supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        display_name: name,
      },
      emailRedirectTo: `${window.location.origin}/auth/callback`,
    },
  });
}

export async function sendPasswordResetEmail(email: string) {
  const supabase = createClient();

  return supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${window.location.origin}/auth/callback?next=/reset-password`,
  });
}

export async function updatePassword(password: string) {
  const supabase = createClient();

  return supabase.auth.updateUser({
    password,
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