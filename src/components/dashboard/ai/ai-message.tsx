"use client";

import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

import { AIEditMessage } from "@/components/dashboard/ai/ai-edit-message";
import { AIMessageActions } from "@/components/dashboard/ai/ai-message-actions";

export type AIMessageData = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

type AIMessageProps = {
  message: AIMessageData;

  isEditing: boolean;
  editingText: string;
  copiedId: string | null;

  onStartEditing: (message: AIMessageData) => void;
  onCancelEditing: () => void;
  onEditingTextChange: (value: string) => void;
  onSaveEdit: (messageId: string) => void;
  onCopyMessage: (message: AIMessageData) => void;

  /*
   * Message version navigation.
   *
   * Example:
   * ← 1 / 2 →
   */
  version?: number;
  totalVersions?: number;
  onPreviousVersion?: () => void;
  onNextVersion?: () => void;
};

export function AIMessage({
  message,
  isEditing,
  editingText,
  copiedId,
  onStartEditing,
  onCancelEditing,
  onEditingTextChange,
  onSaveEdit,
  onCopyMessage,
  version = 1,
  totalVersions = 1,
  onPreviousVersion,
  onNextVersion,
}: AIMessageProps) {
  const hasVersions = totalVersions > 1;

  /*
   * =============================================================
   * USER MESSAGE
   * =============================================================
   */

  if (message.role === "user") {
    return (
      <div className="flex w-full justify-end">
        <div className="group flex w-fit max-w-[85%] flex-col items-end">
          {isEditing ? (
            <AIEditMessage
              value={editingText}
              onChange={onEditingTextChange}
              onCancel={onCancelEditing}
              onSave={() => onSaveEdit(message.id)}
            />
          ) : (
            <>
              <div className="w-fit max-w-full rounded-2xl rounded-br-md border border-blue-400/10 bg-blue-500/[0.08] px-4 py-3 text-sm leading-6 text-white/85 break-words">
                {message.content}
              </div>

              <AIMessageActions
                copied={copiedId === message.id}
                canEdit
                onEdit={() => onStartEditing(message)}
                onCopy={() => onCopyMessage(message)}
              />
            </>
          )}
        </div>
      </div>
    );
  }
  /*
   * =============================================================
   * ASSISTANT MESSAGE
   * =============================================================
   */

  return (
    <div className="flex justify-start">
      <div className="group max-w-[90%] sm:max-w-[80%]">
        {/* Assistant identity */}
        <div className="mb-2 flex items-center gap-2">
          <div className="grid size-7 place-items-center rounded-lg border border-blue-400/15 bg-blue-500/[0.07]">
            <Sparkles className="size-3.5 text-blue-300" />
          </div>

          <span className="text-xs font-medium text-white/45">
            Nexora
          </span>
        </div>

        {/* Response */}
        <div className="text-sm leading-7 text-white/70">
          {message.content}
        </div>

        {/* Assistant actions */}
        <AIMessageActions
          copied={copiedId === message.id}
          onCopy={() => onCopyMessage(message)}
        />

        {/* Version navigation */}
        {hasVersions && (
          <div className="mt-2 flex items-center gap-1 text-white/25">
            <button
              type="button"
              onClick={onPreviousVersion}
              disabled={version <= 1}
              aria-label="Previous response"
              className="grid size-6 place-items-center rounded-md transition hover:bg-white/[0.05] hover:text-white/70 disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ChevronLeft className="size-3.5" />
            </button>

            <span className="min-w-[42px] text-center text-[10px] font-medium tabular-nums">
              {version} / {totalVersions}
            </span>

            <button
              type="button"
              onClick={onNextVersion}
              disabled={version >= totalVersions}
              aria-label="Next response"
              className="grid size-6 place-items-center rounded-md transition hover:bg-white/[0.05] hover:text-white/70 disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ChevronRight className="size-3.5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}