"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

import { AIComposer } from "@/components/dashboard/ai/ai-composer";
import { AIConversation } from "@/components/dashboard/ai/ai-conversation";
import { AIEmptyState } from "@/components/dashboard/ai/ai-empty-state";
import {
  AIMessage,
  type AIMessageData,
} from "@/components/dashboard/ai/ai-message";

type MessageVersion = {
  userMessage: AIMessageData;
  assistantMessage: AIMessageData;
};

type VersionGroup = {
  id: string;
  versions: MessageVersion[];
  currentVersion: number;
};

function createId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

function mockResponse(message: string) {
  return `I understand. You asked:

"${message}"

This is currently a local Nexora response. The next step will be connecting this conversation interface to the actual AI model and streaming real responses.`;
}

export function AIWorkspace() {
  /*
   * =============================================================
   * MESSAGE STATE
   * =============================================================
   *
   * messages contains the currently visible conversation.
   *
   * When a message has multiple versions, messages contains
   * whichever user + assistant pair is currently selected.
   */

  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState<AIMessageData[]>([]);

  /*
   * =============================================================
   * VERSION STATE
   * =============================================================
   *
   * Every version contains BOTH:
   *
   * 1. The user message
   * 2. The assistant response
   *
   * This keeps the two messages synchronized.
   */

  const [versionGroups, setVersionGroups] = useState<
    VersionGroup[]
  >([]);

  /*
   * =============================================================
   * EDITING STATE
   * =============================================================
   */

  const [editingId, setEditingId] = useState<string | null>(
    null,
  );

  const [editingText, setEditingText] = useState("");

  /*
   * =============================================================
   * COPY STATE
   * =============================================================
   */

  const [copiedId, setCopiedId] = useState<string | null>(
    null,
  );

  const hasConversation = messages.length > 0;

  /*
  */

  const bottomRef = useRef<HTMLDivElement>(null);
  
  const composerRef = useRef<HTMLDivElement>(null);

  const [showScrollDown, setShowScrollDown] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const distanceFromBottom =
        document.documentElement.scrollHeight -
        window.scrollY -
        window.innerHeight;

      setShowScrollDown(distanceFromBottom > 300);
    }

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function scrollToBottom() {
    if (!bottomRef.current) return;

    const composerHeight =
      composerRef.current?.getBoundingClientRect().height ?? 0;

    const targetTop =
      bottomRef.current.getBoundingClientRect().top +
      window.scrollY -
      (window.innerHeight - composerHeight - 24);

    window.scrollTo({
      top: Math.max(0, targetTop),
      behavior: "smooth",
    });
  }

  /*
   * =============================================================
   * FIND VERSION GROUP
   * =============================================================
   *
   * Version groups are identified by the USER message id.
   *
   * The user message keeps the same id across its versions.
   */

  function findVersionGroup(messageId: string) {
    return versionGroups.find((group) =>
      group.versions.some(
        (version) => version.userMessage.id === messageId,
      ),
    );
  }

  /*
   * =============================================================
   * SEND MESSAGE
   * =============================================================
   */

  function sendMessage(text?: string) {
    const content = (text ?? message).trim();

    if (!content) return;

    const userMessage: AIMessageData = {
      id: createId(),
      role: "user",
      content,
    };

    const assistantMessage: AIMessageData = {
      id: createId(),
      role: "assistant",
      content: mockResponse(content),
    };

    setMessages((current) => [
      ...current,
      userMessage,
      assistantMessage,
    ]);

    setMessage("");
  }

  /*
   * =============================================================
   * START EDITING
   * =============================================================
   */

  function startEditing(messageToEdit: AIMessageData) {
    setEditingId(messageToEdit.id);
    setEditingText(messageToEdit.content);
  }

  /*
   * =============================================================
   * CANCEL EDITING
   * =============================================================
   */

  function cancelEditing() {
    setEditingId(null);
    setEditingText("");
  }

  /*
   * =============================================================
   * SAVE EDIT
   * =============================================================
   *
   * Every edit creates a NEW conversation version.
   *
   * Example:
   *
   * Version 1
   * User:      "Hello"
   * Assistant: Response to "Hello"
   *
   * Version 2
   * User:      "Hello Nexora"
   * Assistant: Response to "Hello Nexora"
   *
   * Version 3
   * User:      "Hello Nexora AI"
   * Assistant: Response to "Hello Nexora AI"
   *
   * Nothing is deleted.
   */

  function saveEdit(messageId: string) {
    const updatedText = editingText.trim();

    if (!updatedText) return;

    const userIndex = messages.findIndex(
      (msg) => msg.id === messageId,
    );

    if (userIndex === -1) return;

    const originalUserMessage = messages[userIndex];

    /*
     * We only allow editing user messages.
     */

    if (originalUserMessage.role !== "user") {
      return;
    }

    /*
     * The assistant response immediately follows
     * the user message.
     */

    const originalAssistantMessage =
      messages[userIndex + 1];

    if (
      !originalAssistantMessage ||
      originalAssistantMessage.role !== "assistant"
    ) {
      return;
    }

    /*
     * Create the new user message.
     *
     * IMPORTANT:
     *
     * We keep the original user message ID so all
     * versions belong to the same version group.
     */

    const newUserMessage: AIMessageData = {
      ...originalUserMessage,
      content: updatedText,
    };

    /*
     * Generate the new assistant response.
     */

    const newAssistantMessage: AIMessageData = {
      id: createId(),
      role: "assistant",
      content: mockResponse(updatedText),
    };

    /*
     * Find an existing version group.
     */

    const existingGroup = findVersionGroup(messageId);

    /*
     * =========================================================
     * FIRST EDIT
     * =========================================================
     *
     * The original conversation has never been versioned.
     *
     * Create:
     *
     * Version 1 = original user + original response
     * Version 2 = edited user + new response
     */

    if (!existingGroup) {
      const newGroup: VersionGroup = {
        id: createId(),

        versions: [
          {
            userMessage: originalUserMessage,
            assistantMessage: originalAssistantMessage,
          },
          {
            userMessage: newUserMessage,
            assistantMessage: newAssistantMessage,
          },
        ],

        currentVersion: 2,
      };

      setVersionGroups((current) => [
        ...current,
        newGroup,
      ]);

      /*
       * Display the newly edited version.
       */

      const updatedMessages = [...messages];

      updatedMessages[userIndex] = newUserMessage;

      updatedMessages[userIndex + 1] =
        newAssistantMessage;

      setMessages(updatedMessages);
    } else {
      /*
       * =======================================================
       * ADD ANOTHER VERSION
       * =======================================================
       */

      const newVersion: MessageVersion = {
        userMessage: newUserMessage,
        assistantMessage: newAssistantMessage,
      };

      setVersionGroups((current) =>
        current.map((group) => {
          if (group.id !== existingGroup.id) {
            return group;
          }

          return {
            ...group,

            versions: [
              ...group.versions,
              newVersion,
            ],

            currentVersion:
              group.versions.length + 1,
          };
        }),
      );

      /*
       * Display the newly created version.
       */

      const updatedMessages = [...messages];

      updatedMessages[userIndex] = newUserMessage;

      updatedMessages[userIndex + 1] =
        newAssistantMessage;

      setMessages(updatedMessages);
    }

    cancelEditing();
  }

  /*
   * =============================================================
   * CHANGE VERSION
   * =============================================================
   *
   * Changing version changes BOTH:
   *
   * - User message
   * - Assistant response
   *
   * This keeps the conversation logically correct.
   */

  function changeVersion(
    messageId: string,
    direction: "previous" | "next",
  ) {
    const group = findVersionGroup(messageId);

    if (!group) return;

    let nextVersion = group.currentVersion;

    if (direction === "previous") {
      nextVersion = Math.max(
        1,
        group.currentVersion - 1,
      );
    }

    if (direction === "next") {
      nextVersion = Math.min(
        group.versions.length,
        group.currentVersion + 1,
      );
    }

    /*
     * Already at the requested boundary.
     */

    if (nextVersion === group.currentVersion) {
      return;
    }

    const selectedVersion =
      group.versions[nextVersion - 1];

    if (!selectedVersion) return;

    /*
     * Update the selected version number.
     */

    setVersionGroups((current) =>
      current.map((item) =>
        item.id === group.id
          ? {
              ...item,
              currentVersion: nextVersion,
            }
          : item,
      ),
    );

    /*
     * Find the currently displayed user message.
     */

    const userIndex = messages.findIndex(
      (msg) => msg.id === messageId,
    );

    if (userIndex === -1) return;

    const assistantIndex = userIndex + 1;

    /*
     * Replace BOTH messages.
     */

    const updatedMessages = [...messages];

    updatedMessages[userIndex] =
      selectedVersion.userMessage;

    updatedMessages[assistantIndex] =
      selectedVersion.assistantMessage;

    setMessages(updatedMessages);
  }

  /*
   * =============================================================
   * COPY MESSAGE
   * =============================================================
   */

  async function copyMessage(messageToCopy: AIMessageData) {
    await navigator.clipboard.writeText(
      messageToCopy.content,
    );

    setCopiedId(messageToCopy.id);

    window.setTimeout(() => {
      setCopiedId((current) =>
        current === messageToCopy.id
          ? null
          : current,
      );
    }, 1500);
  }

  /*
   * =============================================================
   * COMPOSER KEYBOARD
   * =============================================================
   */

  function handleComposerKeyDown(
    event: React.KeyboardEvent<HTMLTextAreaElement>,
  ) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();

      sendMessage();
    }
  }

  /*
   * =============================================================
   * RENDER
   * =============================================================
   */

  return (
    <section className="relative flex min-h-[calc(100vh-72px)] flex-col px-5 sm:px-7 lg:px-10">
      {/* Ambient AI glow */}

      <div className="pointer-events-none absolute left-1/2 top-[12%] -z-10 h-[420px] w-[700px] -translate-x-1/2 rounded-full bg-blue-600/[0.045] blur-[140px]" />

      {!hasConversation ? (
        /*
         * =========================================================
         * EMPTY STATE
         * =========================================================
         */

        <AIEmptyState
          message={message}
          setMessage={setMessage}
          onSend={() => sendMessage()}
          onKeyDown={handleComposerKeyDown}
        />
      ) : (
        /*
         * =========================================================
         * CONVERSATION
         * =========================================================
         */

        <div className="mx-auto flex w-full max-w-4xl flex-1 flex-col">
          <AIConversation messages={messages}>
            {(currentMessage) => {
              /*
               * Find the message index.
               */

              const currentIndex = messages.findIndex(
                (msg) =>
                  msg.id === currentMessage.id,
              );

              /*
               * The message before an assistant response
               * should be its user message.
               */

              const previousMessage =
                currentIndex > 0
                  ? messages[currentIndex - 1]
                  : undefined;

              /*
               * Version groups belong to USER messages.
               */

              const previousGroup =
                previousMessage?.role === "user"
                  ? findVersionGroup(
                      previousMessage.id,
                    )
                  : undefined;

              /*
               * Version controls only appear on the
               * assistant response belonging to a
               * versioned user message.
               */

              const isVersionedAssistant =
                currentMessage.role === "assistant" &&
                previousGroup !== undefined;

              const version =
                isVersionedAssistant
                  ? previousGroup.currentVersion
                  : 1;

              const totalVersions =
                isVersionedAssistant
                  ? previousGroup.versions.length
                  : 1;

              return (
                <AIMessage
                  message={currentMessage}
                  isEditing={
                    editingId === currentMessage.id
                  }
                  editingText={editingText}
                  copiedId={copiedId}
                  onStartEditing={startEditing}
                  onCancelEditing={cancelEditing}
                  onEditingTextChange={setEditingText}
                  onSaveEdit={saveEdit}
                  onCopyMessage={copyMessage}
                  version={version}
                  totalVersions={totalVersions}
                  onPreviousVersion={() =>
                    previousMessage &&
                    changeVersion(
                      previousMessage.id,
                      "previous",
                    )
                  }
                  onNextVersion={() =>
                    previousMessage &&
                    changeVersion(
                      previousMessage.id,
                      "next",
                    )
                  }
                />
              );
            }}
          </AIConversation>

          <div ref={bottomRef} />

          {/* Composer */}

          <div
            ref={composerRef}
            className="relative sticky bottom-0 bg-[#03050b]/90 pb-5 pt-3 backdrop-blur-xl sm:pb-7"
          >
            {showScrollDown && (
              <button
                type="button"
                onClick={scrollToBottom}
                aria-label="Scroll to latest message"
                className="absolute left-1/2 top-[-58px] z-30 grid size-12 -translate-x-1/2 place-items-center rounded-full border border-white/[0.12] bg-[#0b0f18]/95 text-white/70 shadow-xl shadow-black/30 backdrop-blur-xl transition hover:bg-[#111827] hover:text-white"
              >
                <ChevronDown className="size-5" />
              </button>
            )}

            <AIComposer
              message={message}
              setMessage={setMessage}
              onSend={() => sendMessage()}
              onKeyDown={handleComposerKeyDown}
            />

            <p className="mt-2 text-center text-[10px] text-white/15">
              Nexora can make mistakes. Review important information before acting on it.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}