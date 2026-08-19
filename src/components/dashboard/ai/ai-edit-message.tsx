"use client";

import {
  useEffect,
  useRef,
} from "react";

import { Check, X } from "lucide-react";

type AIEditMessageProps = {
  value: string;
  onChange: (value: string) => void;
  onCancel: () => void;
  onSave: () => void;
};

export function AIEditMessage({
  value,
  onChange,
  onCancel,
  onSave,
}: AIEditMessageProps) {
  const textareaRef =
    useRef<HTMLTextAreaElement>(null);

  /*
   * Focus the textarea and place the cursor
   * at the END of the existing message.
   */

  useEffect(() => {
    const textarea = textareaRef.current;

    if (!textarea) return;

    textarea.focus();

    const length = textarea.value.length;

    textarea.setSelectionRange(length, length);
  }, []);

  return (
    <div className="w-full min-w-[280px] rounded-2xl border border-blue-400/20 bg-white/[0.045] p-3 shadow-xl shadow-black/20">
      <textarea
        ref={textareaRef}
        value={value}
        onChange={(event) =>
          onChange(event.target.value)
        }
        onKeyDown={(event) => {
          if (
            event.key === "Enter" &&
            !event.shiftKey
          ) {
            event.preventDefault();
            onSave();
          }

          if (event.key === "Escape") {
            onCancel();
          }
        }}
        rows={3}
        className="w-full resize-none overflow-y-auto bg-transparent text-sm leading-6 text-white outline-none placeholder:text-white/25"
      />

      <div className="mt-2 flex items-center justify-end gap-2">
        <button
          type="button"
          onClick={onCancel}
          className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs text-white/40 transition hover:bg-white/[0.05] hover:text-white/70"
        >
          <X className="size-3.5" />
          Cancel
        </button>

        <button
          type="button"
          onClick={onSave}
          disabled={!value.trim()}
          className="flex items-center gap-1.5 rounded-lg bg-white px-3 py-1.5 text-xs font-medium text-black transition hover:bg-white/90 disabled:cursor-not-allowed disabled:bg-white/[0.5]"
        >
          <Check className="size-3.5" />
          Save
        </button>
      </div>
    </div>
  );
}