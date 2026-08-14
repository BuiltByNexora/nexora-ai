"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

import { signUpWithEmail } from "@/lib/auth/auth";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");

    if (!name.trim()) {
      setError("Please enter your name.");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);

    const { error } = await signUpWithEmail({
      name: name.trim(),
      email: email.trim(),
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    setSuccess(true);
    setLoading(false);
  }

  if (success) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-black px-6 text-white">
        <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-center">
          <div className="mx-auto mb-5 grid size-14 place-items-center rounded-2xl border border-blue-400/20 bg-blue-400/10 text-xl">
            ✓
          </div>

          <h1 className="text-2xl font-semibold">
            Check your email
          </h1>

          <p className="mt-3 text-sm leading-6 text-white/60">
            We've sent a verification link to{" "}
            <span className="font-medium text-white">
              {email}
            </span>
            .
          </p>

          <p className="mt-2 text-sm text-white/40">
            Verify your email address to activate your Nexora account.
          </p>

          <Link
            href="/login"
            className="mt-7 inline-flex h-11 items-center justify-center rounded-xl bg-white px-6 text-sm font-medium text-black transition hover:bg-white/90"
          >
            Back to sign in
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black px-5 py-10 text-white sm:px-6">
      <div className="mx-auto w-full max-w-md">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-5 grid size-11 place-items-center rounded-xl border border-white/10 bg-white/[0.05] font-semibold">
            N
          </div>

          <h1 className="text-3xl font-semibold tracking-tight">
            Create your Nexora account
          </h1>

          <p className="mt-3 text-sm leading-6 text-white/50">
            Create your account and start using Nexora.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl sm:p-8"
        >
          <div className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-white/80"
              >
                Name
              </label>

              <input
                id="name"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Muhammad Hadi"
                autoComplete="name"
                className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 text-sm text-white outline-none placeholder:text-white/25 focus:border-blue-400/50"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-white/80"
              >
                Email
              </label>

              <input
                id="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@example.com"
                autoComplete="email"
                className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 text-sm text-white outline-none placeholder:text-white/25 focus:border-blue-400/50"
                required
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-white/80"
              >
                Password
              </label>

              <input
                id="password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="At least 8 characters"
                autoComplete="new-password"
                className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 text-sm text-white outline-none placeholder:text-white/25 focus:border-blue-400/50"
                required
              />
            </div>

            <div>
              <label
                htmlFor="confirm-password"
                className="mb-2 block text-sm font-medium text-white/80"
              >
                Confirm password
              </label>

              <input
                id="confirm-password"
                type="password"
                value={confirmPassword}
                onChange={(event) =>
                  setConfirmPassword(event.target.value)
                }
                placeholder="Repeat your password"
                autoComplete="new-password"
                className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 text-sm text-white outline-none placeholder:text-white/25 focus:border-blue-400/50"
                required
              />
            </div>
          </div>

          {error && (
            <div className="mt-5 rounded-xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-300">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="mt-6 h-12 w-full rounded-xl bg-white font-medium text-black transition hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Creating account..." : "Create account"}
          </button>

          <p className="mt-6 text-center text-sm text-white/50">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-blue-400 transition hover:text-blue-300"
            >
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </main>
  );
}