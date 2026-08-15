"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

import { SocialButtons } from "./social-buttons";

function SocialButtonsContent() {
  const searchParams = useSearchParams();
  const next = searchParams.get("next") || "/dashboard";

  return <SocialButtons next={next} />;
}

export function SocialButtonsWrapper() {
  return (
    <Suspense
      fallback={
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="h-12 animate-pulse rounded-xl bg-white/[0.04]" />
          <div className="h-12 animate-pulse rounded-xl bg-white/[0.04]" />
        </div>
      }
    >
      <SocialButtonsContent />
    </Suspense>
  );
}