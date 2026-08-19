"use client";

import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

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
              <div className="max-w-full min-w-0 break-words whitespace-pre-wrap text-sm leading-7 text-white/85">
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
      <div className="group min-w-0 max-w-[90%] sm:max-w-[80%]">
        {/* Assistant identity */}

        <div className="mb-2 flex items-center gap-2">
          <div className="grid size-7 place-items-center rounded-lg border border-blue-400/15 bg-blue-500/[0.07]">
            <Sparkles className="size-3.5 text-blue-300" />
          </div>

          <span className="text-xs font-medium text-white/45">
            Nexora
          </span>
        </div>

        {/* =====================================================
            MARKDOWN RESPONSE
           ===================================================== */}

        <div className="max-w-full min-w-0 break-words text-sm leading-7 text-white/70">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              p: ({ children }) => (
                <p className="mb-4 last:mb-0">
                  {children}
                </p>
              ),

              strong: ({ children }) => (
                <strong className="font-semibold text-white">
                  {children}
                </strong>
              ),

              em: ({ children }) => (
                <em className="italic text-white/85">
                  {children}
                </em>
              ),

              h1: ({ children }) => (
                <h1 className="mb-4 mt-6 text-xl font-semibold text-white first:mt-0">
                  {children}
                </h1>
              ),

              h2: ({ children }) => (
                <h2 className="mb-3 mt-6 text-lg font-semibold text-white first:mt-0">
                  {children}
                </h2>
              ),

              h3: ({ children }) => (
                <h3 className="mb-3 mt-5 text-base font-semibold text-white first:mt-0">
                  {children}
                </h3>
              ),

              ul: ({ children }) => (
                <ul className="mb-4 ml-5 list-disc space-y-1">
                  {children}
                </ul>
              ),

              ol: ({ children }) => (
                <ol className="mb-4 ml-5 list-decimal space-y-1">
                  {children}
                </ol>
              ),

              li: ({ children }) => (
                <li className="pl-1">
                  {children}
                </li>
              ),

              blockquote: ({ children }) => (
                <blockquote className="my-4 border-l-2 border-blue-400/30 pl-4 text-white/55">
                  {children}
                </blockquote>
              ),

              code: ({ children }) => (
                <code className="rounded-md border border-white/[0.08] bg-white/[0.05] px-1.5 py-0.5 font-mono text-[13px] text-blue-200">
                  {children}
                </code>
              ),

              pre: ({ children }) => (
                <pre className="my-4 overflow-x-auto rounded-xl border border-white/[0.08] bg-[#080b12] p-4">
                  {children}
                </pre>
              ),

              a: ({ children, href }) => (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 underline decoration-blue-300/30 underline-offset-4 hover:text-blue-200"
                >
                  {children}
                </a>
              ),

              table: ({ children }) => (
                <div className="my-5 w-full overflow-x-auto rounded-xl border border-white/[0.08]">
                  <table className="w-full border-collapse text-left text-sm">
                    {children}
                  </table>
                </div>
              ),

              thead: ({ children }) => (
                <thead className="border-b border-white/[0.08] bg-white/[0.03]">
                  {children}
                </thead>
              ),

              th: ({ children }) => (
                <th className="px-4 py-3 font-semibold text-white/90">
                  {children}
                </th>
              ),

              td: ({ children }) => (
                <td className="border-t border-white/[0.06] px-4 py-3 text-white/65">
                  {children}
                </td>
              ),

              hr: () => (
                <hr className="my-6 border-white/[0.08]" />
              ),
            }}
          >
            {message.content}
          </ReactMarkdown>
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