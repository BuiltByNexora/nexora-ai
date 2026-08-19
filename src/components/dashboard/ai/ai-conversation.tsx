"use client";

import type { ReactNode } from "react";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

type AIConversationProps = {
  messages: Message[];
  children: (message: Message) => ReactNode;
};

export function AIConversation({
  messages,
  children,
}: AIConversationProps) {
  return (
    <div className="flex-1">
      <div className="space-y-8 py-10 sm:py-12">
        {messages.map((message) => (
          <div
            key={message.id}
            className={
              message.role === "user"
                ? "flex justify-end"
                : "flex justify-start"
            }
          >
            {children(message)}
          </div>
        ))}
      </div>
    </div>
  );
}