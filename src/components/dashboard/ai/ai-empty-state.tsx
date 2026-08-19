"use client";

import { Sparkles } from "lucide-react";

import { AIComposer } from "@/components/dashboard/ai/ai-composer";
import { AISuggestions } from "@/components/dashboard/ai/ai-suggestions";

type AIEmptyStateProps = {
  message: string;
  setMessage: (value: string) => void;
  onSend: () => void;
  onKeyDown: (
    event: React.KeyboardEvent<HTMLTextAreaElement>,
  ) => void;
};

export function AIEmptyState({
  message,
  setMessage,
  onSend,
  onKeyDown,
}: AIEmptyStateProps) {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center py-16 sm:py-20">
      {/* Greeting */}
      <div className="text-center">
        <div className="mx-auto mb-5 grid size-11 place-items-center rounded-2xl border border-blue-400/15 bg-blue-500/[0.07] shadow-[0_0_35px_rgba(37,99,235,0.08)]">
          <Sparkles className="size-5 text-blue-300" />
        </div>

        <p className="text-xs font-medium uppercase tracking-[0.2em] text-blue-400/70">
          Nexora AI
        </p>

        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
          What can I help you
          <span className="text-white/30">
            {" "}
            accomplish?
          </span>
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-white/35 sm:text-base">
          Ask Nexora to research, reason, create, analyze,
          or help move your work forward.
        </p>
      </div>

      {/* Composer */}
      <div className="mx-auto mt-12 w-full max-w-3xl">
        <AIComposer
          message={message}
          setMessage={setMessage}
          onSend={onSend}
          onKeyDown={onKeyDown}
        />

        <p className="mt-3 text-center text-[11px] text-white/20">
          Nexora can make mistakes. Review important
          information before acting on it.
        </p>
      </div>

      {/* Suggestions */}
      <AISuggestions onSelect={setMessage} />

      {/* Bottom status */}
      <div className="mx-auto mt-14 text-center">
        <p className="text-[10px] uppercase tracking-[0.16em] text-white/15">
          Intelligent workspace
        </p>
      </div>
    </div>
  );
}