"use client";

import { Check, Copy, Pencil } from "lucide-react";

type AIMessageActionsProps = {
  copied: boolean;
  canEdit?: boolean;
  onCopy: () => void;
  onEdit?: () => void;
};

export function AIMessageActions({
  copied,
  canEdit = false,
  onCopy,
  onEdit,
}: AIMessageActionsProps) {
  return (
    <div className="mt-1.5 flex items-center gap-1 opacity-0 transition group-hover:opacity-100">
      {canEdit && (
        <div className="group/action relative">
          <button
            type="button"
            onClick={onEdit}
            aria-label="Edit message"
            className="grid size-7 place-items-center rounded-lg text-white/25 transition hover:bg-white/[0.05] hover:text-white/70"
          >
            <Pencil className="size-3.5" />
          </button>

          {/* Edit tooltip */}
          <span className="pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 scale-95 whitespace-nowrap rounded-md border border-white/[0.08] bg-[#0b0e16] px-2 py-1 text-[10px] font-medium text-white/70 opacity-0 shadow-xl transition-all duration-150 group-hover/action:scale-100 group-hover/action:opacity-100">
            Edit
          </span>
        </div>
      )}

      <div className="group/action relative">
        <button
          type="button"
          onClick={onCopy}
          aria-label={copied ? "Copied" : "Copy message"}
          className="grid size-7 place-items-center rounded-lg text-white/25 transition hover:bg-white/[0.05] hover:text-white/70"
        >
          {copied ? (
            <Check className="size-3.5 text-emerald-400" />
          ) : (
            <Copy className="size-3.5" />
          )}
        </button>

        {/* Copy tooltip */}
        <span className="pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 scale-95 whitespace-nowrap rounded-md border border-white/[0.08] bg-[#0b0e16] px-2 py-1 text-[10px] font-medium text-white/70 opacity-0 shadow-xl transition-all duration-150 group-hover/action:scale-100 group-hover/action:opacity-100">
          {copied ? "Copied" : "Copy"}
        </span>
      </div>
    </div>
  );
}