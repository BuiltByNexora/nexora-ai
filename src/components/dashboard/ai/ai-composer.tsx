"use client";

import {
  ArrowUp,
  Globe,
  Paperclip,
  Plus,
} from "lucide-react";

export function AIComposer({
  message,
  setMessage,
  onSend,
  onKeyDown,
}: {
  message: string;
  setMessage: (value: string) => void;
  onSend: () => void;
  onKeyDown: (
    event: React.KeyboardEvent<HTMLTextAreaElement>,
  ) => void;
}) {
  return (
    <div className="group relative rounded-[1.35rem] border border-white/[0.1] bg-white/[0.035] p-2.5 shadow-2xl shadow-black/20 backdrop-blur-2xl transition focus-within:border-blue-400/20 focus-within:bg-white/[0.045]">
      <textarea
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        onKeyDown={onKeyDown}
        placeholder="Ask Nexora anything..."
        rows={2}
        className="min-h-[48px] w-full resize-none bg-transparent px-3 py-2 text-sm leading-6 text-white outline-none placeholder:text-white/25"
      />

      <div className="mt-1 flex items-center justify-between gap-3 px-1">
        <div className="flex items-center gap-1">
          <button
            type="button"
            aria-label="Attach file"
            className="grid size-9 place-items-center rounded-xl text-white/30 transition hover:bg-white/[0.06] hover:text-white/70"
          >
            <Paperclip className="size-4" />
          </button>

          <button
            type="button"
            aria-label="Add tools"
            className="grid size-9 place-items-center rounded-xl text-white/30 transition hover:bg-white/[0.06] hover:text-white/70"
          >
            <Plus className="size-4" />
          </button>

          <button
            type="button"
            className="hidden items-center gap-2 rounded-xl px-3 py-2 text-xs text-white/30 transition hover:bg-white/[0.05] hover:text-white/60 sm:flex"
          >
            <Globe className="size-3.5" />
            Web
          </button>
        </div>

        <button
          type="button"
          onClick={onSend}
          disabled={!message.trim()}
          aria-label="Send message"
          className="grid size-9 place-items-center rounded-xl bg-white text-black transition hover:bg-white/90 disabled:cursor-not-allowed disabled:bg-white/[0.08] disabled:text-white/20"
        >
          <ArrowUp className="size-4" />
        </button>
      </div>
    </div>
  );
}