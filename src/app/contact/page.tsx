"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Mail,
  MessageSquare,
  Send,
} from "lucide-react";

import { LandingBackground } from "@/components/landing/background";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#03050b] text-white">
      <LandingBackground />
      <Navbar />

      {/* Hero */}
      <section className="relative z-10 px-6 pb-20 pt-36 sm:pt-40 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-sm text-white/40 transition hover:text-white"
          >
            <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
            Back to Nexora
          </Link>

          <div className="mx-auto mt-16 max-w-3xl text-center">
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/[0.08] px-4 py-2 text-xs font-medium text-blue-300 backdrop-blur-xl">
              <MessageSquare className="size-3.5" />
              We'd love to hear from you
            </div>

            <h1 className="mt-7 text-5xl font-semibold tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              Let's build{" "}
              <span className="bg-gradient-to-r from-white via-blue-200 to-cyan-300 bg-clip-text text-transparent">
                something useful.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/40 sm:text-lg sm:leading-8">
              Have a question, need help, or want to explore what Nexora can
              do for your business? Send us a message and we'll get back to
              you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact area */}
      <section className="relative z-10 px-6 pb-32 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Contact information */}
          <div className="rounded-3xl border border-white/[0.08] bg-white/[0.025] p-7 backdrop-blur-xl sm:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
              Contact
            </p>

            <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
              Tell us what you're working on.
            </h2>

            <p className="mt-4 text-sm leading-7 text-white/40">
              Whether you're exploring AI, automation, agents, or a custom
              software solution, we're here to help you figure out the next
              step.
            </p>

            <div className="mt-10 space-y-4">
              <a
                href="mailto:hello@nexora.dev"
                className="group flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4 transition hover:border-blue-400/20 hover:bg-white/[0.04]"
              >
                <div className="grid size-11 shrink-0 place-items-center rounded-xl border border-blue-400/15 bg-blue-500/[0.08]">
                  <Mail className="size-4 text-blue-300" />
                </div>

                <div className="min-w-0">
                  <p className="text-xs text-white/30">Email</p>
                  <p className="mt-1 truncate text-sm text-white/70">
                    hello@nexora.dev
                  </p>
                </div>

                <ArrowUpRight className="ml-auto size-4 text-white/25 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white/60" />
              </a>
            </div>

            <div className="mt-10 border-t border-white/[0.07] pt-8">
              <p className="text-sm font-medium text-white/70">
                What can we help with?
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  "AI Solutions",
                  "AI Agents",
                  "Automation",
                  "Software",
                  "Integrations",
                  "General enquiry",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/[0.08] bg-white/[0.025] px-3.5 py-2 text-xs text-white/40"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-3xl border border-white/[0.08] bg-white/[0.025] p-7 shadow-2xl backdrop-blur-xl sm:p-9">
            {submitted ? (
              <div className="flex min-h-[520px] flex-col items-center justify-center text-center">
                <div className="grid size-14 place-items-center rounded-2xl border border-blue-400/20 bg-blue-500/[0.08]">
                  <CheckCircle2 className="size-6 text-blue-300" />
                </div>

                <h2 className="mt-6 text-2xl font-semibold">
                  Message received.
                </h2>

                <p className="mt-3 max-w-md text-sm leading-7 text-white/40">
                  Thanks for reaching out to Nexora. We'll review your message
                  and get back to you as soon as possible.
                </p>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-sm font-medium text-blue-400 transition hover:text-blue-300"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight">
                    Send us a message
                  </h2>

                  <p className="mt-2 text-sm text-white/35">
                    Fill out the form below and we'll be in touch.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium text-white/75"
                      >
                        Name
                      </label>

                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your name"
                        autoComplete="name"
                        required
                        className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.035] px-4 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-blue-400/40 focus:bg-white/[0.05]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-white/75"
                      >
                        Email
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        autoComplete="email"
                        required
                        className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.035] px-4 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-blue-400/40 focus:bg-white/[0.05]"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="mb-2 block text-sm font-medium text-white/75"
                    >
                      Subject
                    </label>

                    <select
                      id="subject"
                      name="subject"
                      defaultValue=""
                      required
                      className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.035] px-4 text-sm text-white/70 outline-none transition focus:border-blue-400/40"
                    >
                      <option value="" disabled className="bg-[#0b0d13]">
                        Select a subject
                      </option>
                      <option value="ai" className="bg-[#0b0d13]">
                        AI Solutions
                      </option>
                      <option value="agents" className="bg-[#0b0d13]">
                        AI Agents
                      </option>
                      <option value="automation" className="bg-[#0b0d13]">
                        Automation
                      </option>
                      <option value="software" className="bg-[#0b0d13]">
                        Software Development
                      </option>
                      <option value="partnership" className="bg-[#0b0d13]">
                        Partnership
                      </option>
                      <option value="general" className="bg-[#0b0d13]">
                        General Enquiry
                      </option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium text-white/75"
                    >
                      Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows={7}
                      placeholder="Tell us a little about what you're trying to build..."
                      required
                      className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3.5 text-sm leading-6 text-white outline-none transition placeholder:text-white/20 focus:border-blue-400/40 focus:bg-white/[0.05]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-white text-sm font-semibold text-black transition hover:bg-white/90"
                  >
                    Send message
                    <Send className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>

                  <p className="text-center text-xs leading-5 text-white/25">
                    By submitting this form, you agree to our{" "}
                    <Link
                      href="/privacy"
                      className="text-white/40 transition hover:text-white"
                    >
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}