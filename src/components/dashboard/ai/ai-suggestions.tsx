"use client";

import {
  FileText,
  Globe,
  WandSparkles,
} from "lucide-react";

const suggestions = [
  {
    icon: Globe,
    label: "Research something",
    prompt:
      "Research this topic for me and give me a clear summary.",
  },
  {
    icon: WandSparkles,
    label: "Create a plan",
    prompt:
      "Help me create a detailed plan for a new project.",
  },
  {
    icon: FileText,
    label: "Analyze a document",
    prompt:
      "Analyze this document and tell me the most important points.",
  },
];

type AISuggestionsProps = {
  onSelect: (prompt: string) => void;
};

export function AISuggestions({
  onSelect,
}: AISuggestionsProps) {
  return (
    <div className="mx-auto mt-10 grid w-full max-w-3xl gap-2 sm:grid-cols-3">
      {suggestions.map((suggestion) => {
        const Icon = suggestion.icon;

        return (
          <button
            key={suggestion.label}
            type="button"
            onClick={() => onSelect(suggestion.prompt)}
            className="group flex items-center gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.02] px-4 py-3.5 text-left transition hover:border-blue-400/15 hover:bg-white/[0.035]"
          >
            <div className="grid size-8 shrink-0 place-items-center rounded-xl border border-white/[0.06] bg-white/[0.035] text-white/35 transition group-hover:border-blue-400/15 group-hover:text-blue-300">
              <Icon className="size-3.5" />
            </div>

            <span className="text-xs text-white/40 transition group-hover:text-white/65">
              {suggestion.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}