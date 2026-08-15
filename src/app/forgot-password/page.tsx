"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { ArrowLeft, CheckCircle2, Loader2 } from "lucide-react";

import { sendPasswordResetEmail } from "@/lib/auth/auth";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");
    setLoading(true);

    const { error } = await sendPasswordResetEmail(email.trim());

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    setSent(true);
    setLoading(false);
  }

  return (
    <main className="relative flex min-h-dvh items-center justify-center overflow-hidden bg-[#05070d] px-4 py-8 text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[-18rem] h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[120px]"
      />

      <div className="relative z-10 w-full max-w-md">
        <Link
          href="/login"
          className="mb-6 inline-flex items-center gap-2 text-sm text-white/50 transition hover:text-white"
        >
          <ArrowLeft className="size-4" />
          Back to sign in
        </Link>

        <section className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-8">
          {!sent ? (
            <>
              <div className="mb-8 space-y-3">
                <div className="grid size-11 place-items-center rounded-xl border border-blue-400/20 bg-blue-400/10 text-blue-300">
                  <span className="text-lg">N</span>
                </div>

                <h1 className="text-3xl font-semibold tracking-tight">
                  Forgot your password?
                </h1>

                <p className="text-sm leading-6 text-white/45">
                  Enter your email and we'll send you a secure link to reset
                  your Nexora password.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
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
                    required
                    autoComplete="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="you@example.com"
                    className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 text-sm text-white outline-none placeholder:text-white/25 transition focus:border-blue-500/60 focus:bg-white/[0.06] focus:ring-4 focus:ring-blue-500/10"
                  />
                </div>

                {error && (
                  <div
                    role="alert"
                    className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300"
                  >
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-white text-sm font-semibold text-black transition hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? (
                    <>
                      <Loader2 className="size-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send reset link"
                  )}
                </button>
              </form>
            </>
          ) : (
            <div className="text-center">
              <div className="mx-auto mb-6 grid size-14 place-items-center rounded-2xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-300">
                <CheckCircle2 className="size-7" />
              </div>

              <h1 className="text-2xl font-semibold">
                Check your email
              </h1>

              <p className="mt-3 text-sm leading-6 text-white/50">
                If an account exists for{" "}
                <span className="font-medium text-white">
                  {email}
                </span>
                , we've sent instructions to reset your password.
              </p>

              <p className="mt-3 text-xs leading-5 text-white/30">
                Check your spam or junk folder if you don't see it.
              </p>

              <Link
                href="/login"
                className="mt-7 inline-flex h-11 items-center justify-center rounded-xl bg-white px-6 text-sm font-semibold text-black transition hover:bg-white/90"
              >
                Back to sign in
              </Link>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}