"use client";

import { ArrowRight, Eye, EyeOff, Loader2 } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

import {
  signInAsGuest,
  signInWithEmail,
} from "@/lib/auth/auth";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState<"email" | "guest" | null>(null);
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");
    setLoading("email");

    const { error } = await signInWithEmail(email, password);

    if (error) {
      setError(error.message);
      setLoading(null);
      return;
    }

    window.location.href = "/";
  }

  async function handleGuest() {
    setError("");
    setLoading("guest");

    const { error } = await signInAsGuest();

    if (error) {
      setError(error.message);
      setLoading(null);
      return;
    }

    window.location.href = "/";
  }

  return (
    <div className="space-y-5">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="text-sm font-medium text-white/80"
          >
            Email
          </label>

          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="you@example.com"
            className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 text-sm text-white outline-none placeholder:text-white/30 transition focus:border-blue-500/60 focus:bg-white/[0.06] focus:ring-4 focus:ring-blue-500/10"
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="text-sm font-medium text-white/80"
            >
              Password
            </label>

            <Link
              href="/forgot-password"
              className="text-xs text-blue-400 transition hover:text-blue-300"
            >
              Forgot password?
            </Link>
          </div>

          <div className="relative">
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter your password"
              className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 pr-12 text-sm text-white outline-none placeholder:text-white/30 transition focus:border-blue-500/60 focus:bg-white/[0.06] focus:ring-4 focus:ring-blue-500/10"
            />

            <button
              type="button"
              onClick={() => setShowPassword((value) => !value)}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-2 text-white/40 transition hover:bg-white/5 hover:text-white/80"
              aria-label={
                showPassword ? "Hide password" : "Show password"
              }
            >
              {showPassword ? (
                <EyeOff className="size-4" />
              ) : (
                <Eye className="size-4" />
              )}
            </button>
          </div>
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
          disabled={loading !== null}
          className="group flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-white px-5 text-sm font-semibold text-black transition hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading === "email" ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              Signing in...
            </>
          ) : (
            <>
              Continue
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </>
          )}
        </button>
      </form>

      <button
        type="button"
        onClick={handleGuest}
        disabled={loading !== null}
        className="flex h-11 w-full items-center justify-center rounded-xl text-sm font-medium text-white/60 transition hover:bg-white/[0.04] hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
      >
        {loading === "guest" ? "Starting guest session..." : "Continue as guest"}
      </button>
    </div>
  );
}