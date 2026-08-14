import type { ReactNode } from "react";

interface AuthShellProps {
  children: ReactNode;
}

export function AuthShell({ children }: AuthShellProps) {
  return (
    <main className="relative flex min-h-dvh items-center justify-center overflow-hidden bg-[#05070d] px-4 py-8 text-white sm:px-6">
      {/* Ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute left-1/2 top-[-18rem] h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[120px]" />

        <div className="absolute bottom-[-16rem] left-[-10rem] h-[28rem] w-[28rem] rounded-full bg-cyan-500/5 blur-[120px]" />

        <div className="absolute right-[-12rem] top-1/3 h-[28rem] w-[28rem] rounded-full bg-indigo-500/5 blur-[120px]" />
      </div>

      {/* Subtle grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 w-full max-w-md">
        {children}
      </div>
    </main>
  );
}