"use client";

import { useState } from "react";
import {
  ChevronDown,
  LifeBuoy,
  Menu,
  Search,
  X,
} from "lucide-react";

import { Sidebar } from "@/components/dashboard/sidebar";

export function DashboardShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#03050b] text-white">
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[15%] top-[-20%] h-[600px] w-[600px] rounded-full bg-blue-600/[0.06] blur-[140px]" />

        <div className="absolute bottom-[-20%] right-[-10%] h-[500px] w-[500px] rounded-full bg-cyan-500/[0.04] blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg,rgba(255,255,255,.8) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Sidebar */}
      <Sidebar
        mobileOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />

      {/* Main application */}
      <div className="lg:pl-[270px]">
        {/* Topbar */}
        <header className="sticky top-0 z-30 border-b border-white/[0.07] bg-[#03050b]/80 backdrop-blur-2xl">
          <div className="flex h-[72px] items-center gap-4 px-5 sm:px-7">
            {/* Mobile menu */}
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation"
              className="grid size-10 place-items-center rounded-xl border border-white/[0.08] bg-white/[0.025] text-white/50 transition hover:bg-white/[0.05] hover:text-white lg:hidden"
            >
              <Menu className="size-5" />
            </button>

            {/* Search */}
            <button
              type="button"
              className="hidden h-10 w-full max-w-md items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.025] px-3.5 text-left text-sm text-white/25 transition hover:border-white/[0.12] hover:bg-white/[0.04] sm:flex"
            >
              <Search className="size-4" />

              <span>Search Nexora...</span>

              <span className="ml-auto rounded-md border border-white/[0.08] bg-white/[0.03] px-1.5 py-0.5 text-[10px] text-white/20">
                ⌘ K
              </span>
            </button>

            {/* Right side */}
            <div className="ml-auto flex items-center gap-2">
              {/* Help */}
              <button
                type="button"
                className="grid size-10 place-items-center rounded-xl text-white/35 transition hover:bg-white/[0.04] hover:text-white"
                aria-label="Help"
              >
                <LifeBuoy className="size-4" />
              </button>

              <div className="mx-1 h-6 w-px bg-white/[0.08]" />

              {/* Account */}
              <button
                type="button"
                className="flex items-center gap-2 rounded-xl p-1.5 transition hover:bg-white/[0.04]"
              >
                <div className="grid size-8 place-items-center rounded-lg bg-gradient-to-br from-blue-500/30 to-cyan-400/10 text-xs font-semibold text-blue-200">
                  U
                </div>

                <div className="hidden text-left sm:block">
                  <p className="text-xs font-medium text-white/70">
                    Your account
                  </p>

                  <p className="text-[10px] text-white/25">
                    Free plan
                  </p>
                </div>

                <ChevronDown className="hidden size-3.5 text-white/25 sm:block" />
              </button>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="min-h-[calc(100vh-72px)]">
          {children}
        </main>
      </div>
    </div>
  );
}