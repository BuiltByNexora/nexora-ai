"use client";

import Link from "next/link";
import { ArrowLeft, Check, Eye, EyeOff } from "lucide-react";
import { FormEvent, useMemo, useState } from "react";

import { LandingBackground } from "@/components/landing/background";
import { signUpWithEmail } from "@/lib/auth/auth";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const passwordRequirements = useMemo(
    () => ({
      length: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      number: /[0-9]/.test(password),
      special: /[^A-Za-z0-9]/.test(password),
    }),
    [password]
  );

  const passwordScore = Object.values(passwordRequirements).filter(
    Boolean
  ).length;

  const passwordStrength =
    passwordScore === 0
      ? {
          label: "",
          width: "w-0",
        }
      : passwordScore <= 2
        ? {
            label: "Weak",
            width: "w-1/3",
          }
        : passwordScore <= 4
          ? {
              label: "Good",
              width: "w-2/3",
            }
          : {
              label: "Strong",
              width: "w-full",
            };

  const allPasswordRequirementsMet = passwordScore === 5;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");

    if (!name.trim()) {
      setError("Please enter your name.");
      return;
    }

    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    if (!allPasswordRequirementsMet) {
      setError(
        "Please create a stronger password that meets all the requirements."
      );
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
      <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 text-white">
        <LandingBackground />

        <div className="relative z-10 w-full max-w-md rounded-3xl border border-white/10 bg-[#0b0d14]/90 p-8 text-center shadow-2xl backdrop-blur-xl">
          <div className="mx-auto mb-5 grid size-14 place-items-center rounded-2xl border border-blue-400/20 bg-blue-400/10 text-blue-300">
            <Check className="size-6" />
          </div>

          <h1 className="text-2xl font-semibold">
            Check your email
          </h1>

          <p className="mt-3 text-sm leading-6 text-white/60">
            We've sent a verification link to{" "}
            <span className="font-medium text-white">{email}</span>.
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
    <main className="relative min-h-screen overflow-hidden px-5 py-10 text-white sm:px-6">
      <LandingBackground />

      <div className="relative z-10 mx-auto w-full max-w-md">
        {/* Top navigation */}
        <div className="mb-8 flex items-center justify-between">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-sm text-white/50 transition hover:text-white"
          >
            <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-0.5" />
            Back
          </Link>

          <Link
            href="/"
            className="flex items-center gap-2.5"
          >
            <div className="grid size-9 place-items-center rounded-xl border border-white/10 bg-white/[0.05] text-sm font-semibold">
              N
            </div>

            <span className="text-sm font-semibold tracking-tight">
              Nexora
            </span>
          </Link>
        </div>

        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Create your Nexora account
          </h1>

          <p className="mt-3 text-sm leading-6 text-white/50">
            Create your account and start using Nexora.
          </p>
        </div>

        {/* Signup form */}
        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-white/10 bg-[#0b0d14]/90 p-6 shadow-2xl backdrop-blur-xl sm:p-8"
        >
          <div className="space-y-5">
            {/* Name */}
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
                placeholder="Enter your name"
                autoComplete="name"
                className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 text-sm text-white outline-none placeholder:text-white/25 focus:border-blue-400/50"
                required
              />
            </div>

            {/* Email */}
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

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-white/80"
              >
                Password
              </label>

              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Create a strong password"
                  autoComplete="new-password"
                  className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 pr-12 text-sm text-white outline-none placeholder:text-white/25 focus:border-blue-400/50"
                  required
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((value) => !value)}
                  aria-label={
                    showPassword ? "Hide password" : "Show password"
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-1.5 text-white/35 transition hover:bg-white/[0.05] hover:text-white/70"
                >
                  {showPassword ? (
                    <EyeOff className="size-4" />
                  ) : (
                    <Eye className="size-4" />
                  )}
                </button>
              </div>

              {/* Password strength */}
              {password.length > 0 && (
                <div className="mt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-white/40">
                      Password strength
                    </span>

                    <span
                      className={`text-xs font-medium ${
                        passwordScore <= 2
                          ? "text-red-400"
                          : passwordScore <= 4
                            ? "text-yellow-400"
                            : "text-blue-400"
                      }`}
                    >
                      {passwordStrength.label}
                    </span>
                  </div>

                  <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/[0.08]">
                    <div
                      className={`h-full rounded-full transition-all duration-300 ${
                        passwordScore <= 2
                          ? "bg-red-400"
                          : passwordScore <= 4
                            ? "bg-yellow-400"
                            : "bg-blue-400"
                      } ${passwordStrength.width}`}
                    />
                  </div>

                  <div className="mt-4 space-y-2">
                    <PasswordRequirement
                      met={passwordRequirements.length}
                      text="At least 8 characters"
                    />

                    <PasswordRequirement
                      met={passwordRequirements.uppercase}
                      text="One uppercase letter"
                    />

                    <PasswordRequirement
                      met={passwordRequirements.lowercase}
                      text="One lowercase letter"
                    />

                    <PasswordRequirement
                      met={passwordRequirements.number}
                      text="One number"
                    />

                    <PasswordRequirement
                      met={passwordRequirements.special}
                      text="One special character"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Confirm password */}
            <div>
              <label
                htmlFor="confirm-password"
                className="mb-2 block text-sm font-medium text-white/80"
              >
                Confirm password
              </label>

              <div className="relative">
                <input
                  id="confirm-password"
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(event) =>
                    setConfirmPassword(event.target.value)
                  }
                  placeholder="Repeat your password"
                  autoComplete="new-password"
                  className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 pr-12 text-sm text-white outline-none placeholder:text-white/25 focus:border-blue-400/50"
                  required
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword((value) => !value)
                  }
                  aria-label={
                    showConfirmPassword
                      ? "Hide password"
                      : "Show password"
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-1.5 text-white/35 transition hover:bg-white/[0.05] hover:text-white/70"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="size-4" />
                  ) : (
                    <Eye className="size-4" />
                  )}
                </button>
              </div>

              {confirmPassword.length > 0 && (
                <div className="mt-2">
                  <PasswordRequirement
                    met={
                      password === confirmPassword &&
                      confirmPassword.length > 0
                    }
                    text={
                      password === confirmPassword
                        ? "Passwords match"
                        : "Passwords must match"
                    }
                  />
                </div>
              )}
            </div>
          </div>

          {/* Error */}
          {error && (
            <div className="mt-5 rounded-xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-300">
              {error}
            </div>
          )}

          {/* Submit */}
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

function PasswordRequirement({
  met,
  text,
}: {
  met: boolean;
  text: string;
}) {
  return (
    <div
      className={`flex items-center gap-2 text-xs transition-colors ${
        met ? "text-blue-300" : "text-white/35"
      }`}
    >
      <span
        className={`grid size-4 shrink-0 place-items-center rounded-full border transition ${
          met
            ? "border-blue-400/40 bg-blue-400/10"
            : "border-white/10 bg-white/[0.03]"
        }`}
      >
        {met && <Check className="size-2.5" />}
      </span>

      <span>{text}</span>
    </div>
  );
}