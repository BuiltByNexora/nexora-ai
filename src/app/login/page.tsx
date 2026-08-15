import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { AuthShell } from "@/components/auth/auth-shell";
import { LoginForm } from "@/components/auth/login-form";
import { SocialButtons } from "@/components/auth/social-buttons";
import { Suspense } from "react";
import { SocialButtonsWrapper } from "@/components/auth/social-buttons-wrapper";

export default function LoginPage() {
  return (
    <AuthShell>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-white/50 transition hover:text-white"
          >
            <ArrowLeft className="size-4" />
            Back
          </Link>

          <div className="flex items-center gap-2">
            <div className="grid size-8 place-items-center rounded-lg border border-white/10 bg-white/[0.06] text-sm font-bold">
              N
            </div>

            <span className="text-sm font-semibold tracking-tight">
              Nexora
            </span>
          </div>
        </div>

        <section className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-8">
          <div className="mb-8 space-y-3">
            <div className="inline-flex rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-xs font-medium text-blue-300">
              Welcome back
            </div>

            <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Sign in to Nexora
            </h1>

            <p className="max-w-sm text-sm leading-6 text-white/45">
              Your intelligent workspace for AI, automation, and everything
              you want to get done.
            </p>
          </div>

          <SocialButtonsWrapper />

          <div className="my-7 flex items-center gap-4">
            <div className="h-px flex-1 bg-white/10" />
            <span className="text-xs text-white/30">OR</span>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <Suspense
            fallback={
              <div className="h-12 w-full animate-pulse rounded-xl bg-white/[0.04]" />
            }
          >
            <LoginForm />
          </Suspense>

          <p className="mt-7 text-center text-sm text-white/40">
            Don't have an account?{" "}
            <Link
              href="/signup"
              className="font-medium text-blue-400 transition hover:text-blue-300"
            >
              Create one
            </Link>
          </p>
        </section>

        <p className="px-4 text-center text-xs leading-5 text-white/25">
          By continuing, you agree to Nexora's Terms of Service and Privacy
          Policy.
        </p>
      </div>
    </AuthShell>
  );
}