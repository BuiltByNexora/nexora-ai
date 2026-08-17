"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  BrainCircuit,
  Database,
  GitBranch,
  Layers3,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";

import { LandingBackground } from "@/components/landing/background";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";

const featureGroups = [
  {
    eyebrow: "INTELLIGENCE",
    title: "AI that understands the work.",
    description:
      "Nexora is being built around intelligent systems that can understand context, reason through tasks, and help turn intent into action.",
    icon: BrainCircuit,
    visual: "intelligence",
  },
  {
    eyebrow: "AI AGENTS",
    title: "Give software the ability to act.",
    description:
      "Create intelligent agents that can work across tasks, tools, and workflows instead of simply waiting for another instruction.",
    icon: Bot,
    visual: "agents",
  },
  {
    eyebrow: "AUTOMATION",
    title: "Turn repetitive work into systems.",
    description:
      "Connect the things you already use and create workflows that move work forward automatically.",
    icon: Workflow,
    visual: "automation",
  },
  {
    eyebrow: "KNOWLEDGE",
    title: "Make your information useful.",
    description:
      "Bring knowledge, documents, and business context together so intelligent tools can work with the information that matters.",
    icon: Database,
    visual: "knowledge",
  },
];

function IntelligenceVisual() {
  return (
    <div className="relative h-[360px] overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#050914]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(37,99,235,0.18),transparent_45%)]" />

      <motion.div
        className="absolute left-1/2 top-1/2 size-40 -translate-x-1/2 -translate-y-1/2 rounded-[2rem] border border-blue-400/20 bg-blue-500/[0.08] shadow-[0_0_100px_rgba(37,99,235,0.2)] backdrop-blur-xl"
        animate={{
          rotate: [0, 4, 0, -4, 0],
          scale: [1, 1.03, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="absolute inset-4 rounded-[1.5rem] border border-white/[0.08]" />

        <div className="absolute inset-0 grid place-items-center">
          <div className="grid size-16 place-items-center rounded-2xl border border-blue-300/20 bg-blue-500/10">
            <BrainCircuit className="size-7 text-blue-300" />
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute left-[18%] top-[22%] rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-xs text-white/50 backdrop-blur-xl"
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        Understand
      </motion.div>

      <motion.div
        className="absolute right-[16%] top-[30%] rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-xs text-white/50 backdrop-blur-xl"
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        Reason
      </motion.div>

      <motion.div
        className="absolute bottom-[20%] left-1/2 -translate-x-1/2 rounded-xl border border-blue-400/15 bg-blue-500/[0.07] px-5 py-3 text-xs text-blue-300 backdrop-blur-xl"
        animate={{ y: [0, -6, 0] }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        Take action
      </motion.div>

      <div className="absolute left-[25%] top-[39%] h-px w-[18%] bg-gradient-to-r from-transparent via-blue-400/40 to-blue-400/10" />
      <div className="absolute right-[25%] top-[44%] h-px w-[18%] bg-gradient-to-l from-transparent via-blue-400/40 to-blue-400/10" />
    </div>
  );
}

function AgentsVisual() {
  return (
    <div className="relative h-[360px] overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#050914]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.12),transparent_50%)]" />

      <div className="absolute left-1/2 top-1/2 w-[76%] -translate-x-1/2 -translate-y-1/2">
        <div className="relative rounded-2xl border border-white/10 bg-white/[0.035] p-5 shadow-2xl backdrop-blur-xl">
          <div className="flex items-center gap-3 border-b border-white/[0.07] pb-4">
            <div className="grid size-9 place-items-center rounded-xl bg-blue-500/10 text-blue-300">
              <Bot className="size-4" />
            </div>

            <div>
              <p className="text-sm font-medium text-white/80">
                Nexora Agent
              </p>
              <p className="text-xs text-white/30">
                Working on your behalf
              </p>
            </div>

            <span className="ml-auto size-2 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.8)]" />
          </div>

          <div className="mt-5 space-y-3">
            {[
              "Understand the request",
              "Choose the right tools",
              "Execute the workflow",
            ].map((step, index) => (
              <motion.div
                key={step}
                initial={{ opacity: 0.35 }}
                animate={{ opacity: [0.35, 1, 0.35] }}
                transition={{
                  duration: 3,
                  delay: index * 0.7,
                  repeat: Infinity,
                }}
                className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.025] px-4 py-3"
              >
                <span className="grid size-6 place-items-center rounded-lg bg-blue-500/10 text-[10px] text-blue-300">
                  {index + 1}
                </span>

                <span className="text-xs text-white/50">{step}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function AutomationVisual() {
  return (
    <div className="relative h-[360px] overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#050914]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.12),transparent_55%)]" />

      <div className="absolute inset-x-[10%] top-1/2 -translate-y-1/2">
        <div className="flex items-center justify-between gap-3">
          {[
            { icon: Zap, label: "Trigger" },
            { icon: GitBranch, label: "Process" },
            { icon: Sparkles, label: "Result" },
          ].map((item, index) => {
            const Icon = item.icon;

            return (
              <div key={item.label} className="flex items-center gap-3">
                <motion.div
                  className="relative grid size-16 place-items-center rounded-2xl border border-white/10 bg-white/[0.035] shadow-xl backdrop-blur-xl"
                  animate={{
                    y: [0, -6, 0],
                    borderColor: [
                      "rgba(255,255,255,0.1)",
                      "rgba(96,165,250,0.3)",
                      "rgba(255,255,255,0.1)",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    delay: index * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Icon className="size-5 text-blue-300" />

                  <span className="absolute -bottom-7 text-[10px] text-white/30">
                    {item.label}
                  </span>
                </motion.div>

                {index < 2 && (
                  <motion.div
                    className="h-px w-10 bg-gradient-to-r from-blue-400/30 to-blue-400/5"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{
                      duration: 2,
                      delay: index * 0.5,
                      repeat: Infinity,
                    }}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function KnowledgeVisual() {
  return (
    <div className="relative h-[360px] overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#050914]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.08),transparent_50%)]" />

      <div className="absolute left-1/2 top-1/2 grid w-[70%] -translate-x-1/2 -translate-y-1/2 gap-3">
        {[
          { icon: Database, title: "Knowledge", width: "w-full" },
          { icon: Layers3, title: "Context", width: "w-[88%]" },
          { icon: Sparkles, title: "Intelligence", width: "w-[76%]" },
        ].map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
              className={`${item.width} mx-auto flex items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.035] px-4 py-3 backdrop-blur-xl`}
              animate={{ x: [0, index % 2 === 0 ? 4 : -4, 0] }}
              transition={{
                duration: 4 + index,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="grid size-8 place-items-center rounded-lg bg-blue-500/10 text-blue-300">
                <Icon className="size-4" />
              </div>

              <span className="text-xs text-white/50">{item.title}</span>

              <span className="ml-auto h-1.5 w-1.5 rounded-full bg-blue-400/70" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

function FeatureVisual({ type }: { type: string }) {
  if (type === "intelligence") return <IntelligenceVisual />;
  if (type === "agents") return <AgentsVisual />;
  if (type === "automation") return <AutomationVisual />;

  return <KnowledgeVisual />;
}

export default function FeaturesPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#03050b] text-white">
      <LandingBackground />
      <Navbar />

      {/* Hero */}
      <section className="relative z-10 px-6 pb-24 pt-36 sm:pt-40 lg:px-8 lg:pb-32">
        <div className="mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/[0.08] px-4 py-2 text-xs font-medium text-blue-300 backdrop-blur-xl"
          >
            <Sparkles className="size-3.5" />
            What Nexora is building
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-8 text-5xl font-semibold tracking-[-0.045em] sm:text-6xl lg:text-8xl"
          >
            Powerful tools.
            <br />
            <span className="bg-gradient-to-r from-white via-blue-200 to-cyan-300 bg-clip-text text-transparent">
              One intelligent workspace.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-7 max-w-2xl text-base leading-7 text-white/40 sm:text-lg sm:leading-8"
          >
            Nexora brings intelligence, agents, automation, and knowledge
            together into a workspace designed to help you move from intent
            to execution.
          </motion.p>
        </div>
      </section>

      {/* Feature showcase */}
      <section className="relative z-10 px-6 pb-32 lg:px-8">
        <div className="mx-auto max-w-6xl space-y-28">
          {featureGroups.map((feature, index) => {
            const Icon = feature.icon;
            const reversed = index % 2 !== 0;

            return (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.75 }}
                className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
              >
                <div className={reversed ? "lg:order-2" : ""}>
                  <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-blue-400">
                    <Icon className="size-4" />
                    {feature.eyebrow}
                  </div>

                  <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-5xl">
                    {feature.title}
                  </h2>

                  <p className="mt-5 max-w-xl text-base leading-7 text-white/40 sm:text-lg sm:leading-8">
                    {feature.description}
                  </p>

                  <Link
                    href="/signup"
                    className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-white"
                  >
                    Start building
                    <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                </div>

                <div className={reversed ? "lg:order-1" : ""}>
                  <FeatureVisual type={feature.visual} />
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* Capability strip */}
      <section className="relative z-10 border-y border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-400">
              One foundation
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
              Built to become more
              <span className="text-white/35"> as Nexora evolves.</span>
            </h2>

            <p className="mt-5 text-base leading-7 text-white/40 sm:text-lg">
              These capabilities are the foundation. As Nexora grows, the
              workspace will expand with new intelligence, tools, and ways to
              turn ideas into useful systems.
            </p>
          </div>

          <div className="mx-auto mt-14 flex max-w-4xl flex-wrap justify-center gap-3">
            {[
              "AI",
              "Agents",
              "Automation",
              "Knowledge",
              "Workflows",
              "Integrations",
              "Analytics",
              "Intelligent tools",
            ].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                }}
                className="rounded-full border border-white/[0.08] bg-white/[0.025] px-5 py-2.5 text-sm text-white/45 backdrop-blur-xl transition hover:border-blue-400/20 hover:text-white/70"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 px-6 py-32 text-center lg:px-8">
        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-1/2 top-1/2 -z-10 size-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[110px]" />

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Sparkles className="mx-auto size-6 text-blue-400" />

            <h2 className="mt-6 text-4xl font-semibold tracking-tight sm:text-6xl">
              Build what comes next.
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-white/40 sm:text-lg">
              Start exploring Nexora and build a smarter way to work.
            </p>

            <Link
              href="/signup"
              className="group mx-auto mt-9 inline-flex h-12 items-center gap-2 rounded-xl bg-white px-6 text-sm font-semibold text-black transition hover:bg-white/90"
            >
              Get started
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}