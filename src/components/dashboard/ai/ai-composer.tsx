"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  ArrowUp,
  Brain,
  Check,
  FileText,
  Globe,
  Image,
  Loader2,
  Paperclip,
  Plus,
  X,
} from "lucide-react";

type AIComposerProps = {
  message: string;
  setMessage: (value: string) => void;
  onSend: () => void;
  onKeyDown: (
    event: React.KeyboardEvent<HTMLTextAreaElement>,
  ) => void;
  webSearch: boolean;
  setWebSearch: React.Dispatch<React.SetStateAction<boolean>>;
};

type AttachedFile = {
  file: File;
  id: string;
  loading: boolean;
};

function createFileId() {
  return `${Date.now()}-${Math.random()
    .toString(36)
    .slice(2)}`;
}

function formatFileSize(bytes: number) {
  if (bytes < 1024) {
    return `${bytes} B`;
  }

  if (bytes < 1024 * 1024) {
    return `${(bytes / 1024).toFixed(1)} KB`;
  }

  if (bytes < 1024 * 1024 * 1024) {
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  }

  return `${(bytes / (1024 * 1024 * 1024)).toFixed(1)} GB`;
}

export function AIComposer({
  message,
  setMessage,
  onSend,
  onKeyDown,
  webSearch,
  setWebSearch,
}: AIComposerProps) {
  const textareaRef =
    useRef<HTMLTextAreaElement>(null);

  const toolsRef =
    useRef<HTMLDivElement>(null);

  const fileInputRef =
    useRef<HTMLInputElement>(null);

  const [toolsOpen, setToolsOpen] =
    useState(false);

  const [deepThink, setDeepThink] =
    useState(false);

  const [createImage, setCreateImage] =
    useState(false);

  const [attachedFiles, setAttachedFiles] =
    useState<AttachedFile[]>([]);

  /*
   * =============================================================
   * AUTO RESIZE
   * =============================================================
   */

  useEffect(() => {
    const textarea = textareaRef.current;

    if (!textarea) return;

    textarea.style.height = "auto";

    const maxHeight = 180;

    textarea.style.height = `${Math.min(
      textarea.scrollHeight,
      maxHeight,
    )}px`;

    textarea.style.overflowY =
      textarea.scrollHeight > maxHeight
        ? "auto"
        : "hidden";
  }, [message]);

  /*
   * =============================================================
   * CLOSE TOOLS MENU
   * =============================================================
   */

  useEffect(() => {
    function handlePointerDown(
      event: PointerEvent,
    ) {
      if (!toolsRef.current) return;

      if (
        !toolsRef.current.contains(
          event.target as Node,
        )
      ) {
        setToolsOpen(false);
      }
    }

    document.addEventListener(
      "pointerdown",
      handlePointerDown,
    );

    return () => {
      document.removeEventListener(
        "pointerdown",
        handlePointerDown,
      );
    };
  }, []);

  /*
   * =============================================================
   * ESCAPE
   * =============================================================
   */

  useEffect(() => {
    function handleKeyDown(
      event: KeyboardEvent,
    ) {
      if (event.key === "Escape") {
        setToolsOpen(false);
      }
    }

    document.addEventListener(
      "keydown",
      handleKeyDown,
    );

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown,
      );
    };
  }, []);

  /*
   * =============================================================
   * FILE SELECTION
   * =============================================================
   */

  function handleFileSelect(
    event: React.ChangeEvent<HTMLInputElement>,
  ) {
    const files = Array.from(
      event.target.files ?? [],
    );

    if (files.length === 0) return;

    const newFiles: AttachedFile[] = files.map(
      (file) => ({
        file,
        id: createFileId(),
        loading: true,
      }),
    );

    setAttachedFiles((current) => [
      ...current,
      ...newFiles,
    ]);

    /*
    * Simulate processing for each file.
    * This will later become the real upload/processing
    * request when we connect the AI backend.
    */

    newFiles.forEach((newFile) => {
      window.setTimeout(() => {
        setAttachedFiles((current) =>
          current.map((item) =>
            item.id === newFile.id
              ? {
                  ...item,
                  loading: false,
                }
              : item,
          ),
        );
      }, 1200);
    });

    /*
    * Allow the same file to be selected again.
    */

    event.target.value = "";
  }

  /*
   * =============================================================
   * REMOVE FILE
   * =============================================================
   */

  function removeFile(id: string) {
    setAttachedFiles((current) =>
      current.filter((item) => item.id !== id),
    );
  }

  return (
    <div className="group relative rounded-[1.35rem] border border-white/[0.1] bg-white/[0.035] p-2.5 shadow-2xl shadow-black/20 backdrop-blur-2xl transition focus-within:border-blue-400/20 focus-within:bg-white/[0.045]">

      {/* ===================================================== */}
      {/* ATTACHED FILE */}
      {/* ===================================================== */}

      {attachedFiles.length > 0 && (
       <div className="mb-2 flex gap-2 overflow-x-auto scrollbar-hide px-1 pb-1">
          {attachedFiles.map((attachedFile) => (
            <div
              key={attachedFile.id}
              className="flex min-w-[220px] max-w-[280px] flex-1 items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.035] px-3 py-2.5">

              {/* File icon */}

              <div className="grid size-9 shrink-0 place-items-center rounded-lg border border-white/[0.08] bg-white/[0.04]">
                {attachedFile.loading ? (
                  <Loader2 className="size-4 animate-spin text-blue-300" />
                ) : (
                  <FileText className="size-4 text-white/45" />
                )}
              </div>

              {/* File information */}

              <div className="min-w-0 flex-1">
                <p className="truncate text-xs font-medium text-white/75">
                  {attachedFile.file.name}
                </p>

                <div className="mt-0.5 flex items-center gap-1.5">
                  <span className="text-[10px] text-white/30">
                    {formatFileSize(
                      attachedFile.file.size,
                    )}
                  </span>

                  {attachedFile.loading ? (
                    <>
                      <span className="text-white/15">
                        •
                      </span>

                      <span className="text-[10px] text-blue-300/60">
                        Processing...
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="text-white/15">
                        •
                      </span>

                      <span className="text-[10px] text-emerald-300/60">
                        Ready
                      </span>
                    </>
                  )}
                </div>
              </div>

              {/* Remove */}

              <button
                type="button"
                onClick={() =>
                  removeFile(attachedFile.id)
                }
                aria-label={`Remove ${attachedFile.file.name}`}
                className="grid size-7 shrink-0 place-items-center rounded-lg text-white/25 transition hover:bg-white/[0.06] hover:text-white/70"
              >
                <X className="size-3.5" />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* ===================================================== */}
      {/* HIDDEN FILE INPUT */}
      {/* ===================================================== */}

      <input
        ref={fileInputRef}
        type="file"
        multiple
        className="hidden"
        onChange={handleFileSelect}
        accept=".pdf,.doc,.docx,.txt,.csv,.xlsx,.xls,.ppt,.pptx,.json,.md,.jpg,.jpeg,.png,.webp"
      />

      {/* ===================================================== */}
      {/* INPUT */}
      {/* ===================================================== */}

      <textarea
        ref={textareaRef}
        value={message}
        onChange={(event) =>
          setMessage(event.target.value)
        }
        onKeyDown={onKeyDown}
        placeholder="Ask Nexora anything..."
        rows={1}
        className="block max-h-[180px] min-h-[48px] w-full resize-none overflow-hidden bg-transparent px-3 py-2 text-sm leading-6 text-white outline-none placeholder:text-white/25"
      />

      {/* ===================================================== */}
      {/* BOTTOM CONTROLS */}
      {/* ===================================================== */}

      <div className="mt-1 flex items-center justify-between gap-3 px-1">

        {/* LEFT CONTROLS */}

        <div className="flex items-center gap-1">

          {/* ================================================= */}
          {/* ATTACH */}
          {/* ================================================= */}

          <button
            type="button"
            aria-label="Attach file"
            onClick={() =>
              fileInputRef.current?.click()
            }
            className={`grid size-9 place-items-center rounded-xl transition ${
              attachedFiles.length > 0
                ? "bg-blue-500/[0.08] text-blue-300"
                : "text-white/30 hover:bg-white/[0.06] hover:text-white/70"
            }`}
          >
            <Paperclip className="size-4" />
          </button>

          {/* ================================================= */}
          {/* TOOLS */}
          {/* ================================================= */}

          <div
            ref={toolsRef}
            className="relative"
          >
            <button
              type="button"
              aria-label="Add tools"
              aria-expanded={toolsOpen}
              onClick={() =>
                setToolsOpen(
                  (current) => !current,
                )
              }
              className={`grid size-9 place-items-center rounded-xl transition ${
                toolsOpen
                  ? "bg-white/[0.08] text-white/75"
                  : "text-white/30 hover:bg-white/[0.06] hover:text-white/70"
              }`}
            >
              <Plus className="size-4" />
            </button>

            {/* ================================================= */}
            {/* TOOLS MENU */}
            {/* ================================================= */}

            {toolsOpen && (
              <div className="absolute bottom-full left-0 z-50 mb-2 w-64 overflow-hidden rounded-2xl border border-white/[0.1] bg-[#0a0e17]/95 p-1.5 shadow-2xl shadow-black/40 backdrop-blur-2xl">

                <div className="px-3 pb-2 pt-2">
                  <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-white/25">
                    Nexora tools
                  </p>
                </div>

                {/* DEEP THINK */}

                <button
                  type="button"
                  onClick={() =>
                    setDeepThink(
                      (current) =>
                        !current,
                    )
                  }
                  className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition hover:bg-white/[0.06]"
                >
                  <div
                    className={`grid size-8 shrink-0 place-items-center rounded-lg border transition ${
                      deepThink
                        ? "border-blue-400/25 bg-blue-500/10 text-blue-300"
                        : "border-white/[0.08] bg-white/[0.03] text-white/40"
                    }`}
                  >
                    <Brain className="size-4" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-medium text-white/75">
                      Deep Think
                    </p>

                    <p className="mt-0.5 text-[10px] leading-4 text-white/30">
                      Give complex questions more reasoning time
                    </p>
                  </div>

                  {deepThink && (
                    <Check className="size-3.5 shrink-0 text-blue-300" />
                  )}
                </button>

                {/* CREATE IMAGE */}

                <button
                  type="button"
                  onClick={() =>
                    setCreateImage(
                      (current) =>
                        !current,
                    )
                  }
                  className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition hover:bg-white/[0.06]"
                >
                  <div
                    className={`grid size-8 shrink-0 place-items-center rounded-lg border transition ${
                      createImage
                        ? "border-blue-400/25 bg-blue-500/10 text-blue-300"
                        : "border-white/[0.08] bg-white/[0.03] text-white/40"
                    }`}
                  >
                    <Image className="size-4" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-medium text-white/75">
                      Create Image
                    </p>

                    <p className="mt-0.5 text-[10px] leading-4 text-white/30">
                      Generate images with Nexora
                    </p>
                  </div>

                  {createImage && (
                    <Check className="size-3.5 shrink-0 text-blue-300" />
                  )}
                </button>
              </div>
            )}
          </div>

          {/* ================================================= */}
          {/* WEB */}
          {/* ================================================= */}

          <button
            type="button"
            aria-label="Toggle web search"
            aria-pressed={webSearch}
            onClick={() =>
              setWebSearch((current) => !current)
            }
            className={`hidden items-center gap-2 rounded-xl px-3 py-2 text-xs transition sm:flex ${
              webSearch
                ? "bg-blue-500/10 text-blue-300"
                : "text-white/30 hover:bg-white/[0.05] hover:text-white/60"
            }`}
          >
            <Globe
              className={`size-3.5 ${
                webSearch ? "text-blue-300" : ""
              }`}
            />

            Web
          </button>
        </div>

        {/* =================================================== */}
        {/* SEND */}
        {/* =================================================== */}

        <button
          type="button"
          onClick={onSend}
          disabled={
            !message.trim() ||
            attachedFiles.some(
              (file) => file.loading,
            )
          }
          aria-label="Send message"
          className="grid size-9 place-items-center rounded-xl bg-white text-black transition hover:bg-white/90 disabled:cursor-not-allowed disabled:bg-white/[0.08] disabled:text-white/20"
        >
          <ArrowUp className="size-4" />
        </button>
      </div>
    </div>
  );
}