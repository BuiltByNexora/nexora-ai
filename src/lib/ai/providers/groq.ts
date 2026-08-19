type GroqMessage = {
  role: "system" | "user" | "assistant";
  content: string;
};

type GroqResponse = {
  choices?: Array<{
    message?: {
      content?: string;
    };
  }>;
};

export async function generateWithGroq(
  messages: GroqMessage[],
) {
  const apiKey = process.env.GROQ_API_KEY;

  if (!apiKey) {
    throw new Error("GROQ_API_KEY is not configured.");
  }

  const response = await fetch(
    "https://api.groq.com/openai/v1/chat/completions",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "openai/gpt-oss-120b",
        messages,
        temperature: 0.7,
      }),
    },
  );

  if (!response.ok) {
    const errorText = await response.text();

    throw new Error(
      `Groq request failed: ${response.status} ${errorText}`,
    );
  }

  const data =
    (await response.json()) as GroqResponse;

  const content =
    data.choices?.[0]?.message?.content;

  if (!content) {
    throw new Error(
      "Groq returned an empty response.",
    );
  }

  return content;
}