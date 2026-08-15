"use client";

import { useEffect, useState } from "react";

import {
  signInWithGitHub,
  signInWithGoogle,
} from "@/lib/auth/auth";

interface SocialButtonsProps {
  next: string;
}

export function SocialButtons({ next }: SocialButtonsProps) {
  const [loading, setLoading] = useState<"google" | "github" | null>(null);

  useEffect(() => {
    function handlePageShow() {
      setLoading(null);
    }

    window.addEventListener("pageshow", handlePageShow);

    return () => {
      window.removeEventListener("pageshow", handlePageShow);
    };
  }, []);

  async function handleGoogle() {
    setLoading("google");

    const { error } = await signInWithGoogle(next);

    if (error) {
      console.error("Google sign-in error:", error);
      setLoading(null);
    }
  }

  async function handleGitHub() {
    setLoading("github");

    const { error } = await signInWithGitHub(next);

    if (error) {
      console.error("GitHub sign-in error:", error);
      setLoading(null);
    }
  }

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      <button
        type="button"
        onClick={handleGoogle}
        disabled={loading !== null}
        className="flex h-12 items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 text-sm font-medium text-white transition hover:border-white/20 hover:bg-white/[0.07] disabled:cursor-not-allowed disabled:opacity-60"
      >
        <span
          aria-hidden="true"
          className="grid size-5 place-items-center rounded-full bg-white text-xs font-bold text-black"
        >
          G
        </span>

        {loading === "google" ? "Connecting..." : "Google"}
      </button>

      <button
        type="button"
        onClick={handleGitHub}
        disabled={loading !== null}
        className="flex h-12 items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 text-sm font-medium text-white transition hover:border-white/20 hover:bg-white/[0.07] disabled:cursor-not-allowed disabled:opacity-60"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="size-5 fill-current"
        >
          <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.15c-3.2.7-3.88-1.36-3.88-1.36-.53-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.25 3.34.96.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18a10.95 10.95 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.07.78 2.16v3.2c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
        </svg>

        {loading === "github" ? "Connecting..." : "GitHub"}
      </button>
    </div>
  );
}