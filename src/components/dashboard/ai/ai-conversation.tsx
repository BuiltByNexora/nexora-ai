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
  const turns: Message[][] = [];

  for (const message of messages) {
    if (message.role === "user") {
      turns.push([message]);
      continue;
    }

    const currentTurn = turns[turns.length - 1];

    if (currentTurn) {
      currentTurn.push(message);
    } else {
      turns.push([message]);
    }
  }

  return (
    <div className="flex-1">
      <div className="py-8">
        {turns.map((turn, index) => (
          <div
            key={turn[0]?.id ?? index}
            className="mb-8 last:mb-0"
          >
            <div className="flex flex-col gap-3">
              {turn.map((message) => (
                <div key={message.id}>
                  {children(message)}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}