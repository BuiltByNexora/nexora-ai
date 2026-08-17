"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import {
  ArrowRight,
  Bot,
  Sparkles,
  Zap,
  Shield,
  Workflow,
  BrainCircuit,
} from "lucide-react";

const features = [
  {
    icon: BrainCircuit,
    title: "Intelligent AI",
    description:
      "Build intelligent experiences that understand your work and help you move faster.",
  },
  {
    icon: Workflow,
    title: "Automation",
    description:
      "Connect your tools, automate repetitive work, and let Nexora handle the busywork.",
  },
  {
    icon: Zap,
    title: "Built for speed",
    description:
      "A modern workspace designed to keep your ideas, projects, and workflows moving.",
  },
];

const floatingItems = [
  {
    icon: Bot,
    label: "AI Agents",
    position: "left-[5%] top-[30%]",
    delay: 0,
  },
  {
    icon: Sparkles,
    label: "Intelligence",
    position: "right-[4%] top-[22%]",
    delay: 0.8,
  },
  {
    icon: Workflow,
    label: "Automation",
    position: "left-[9%] bottom-[22%]",
    delay: 1.6,
  },
  {
    icon: Shield,
    label: "Secure",
    position: "right-[8%] bottom-[20%]",
    delay: 2.4,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#03050b] text-white">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(37,99,235,0.14),transparent_38%)]" />

        <div className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:56px_56px]" />

        <motion.div
          className="absolute left-1/2 top-[35%] h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[120px]"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.35, 0.6, 0.35],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Navigation */}
      
      <Navbar />

      {/* Hero */}
      <section className="relative z-10 mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl flex-col items-center px-6 pt-20 text-center lg:px-8 lg:pt-28">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/[0.08] px-4 py-2 text-xs font-medium text-blue-300 backdrop-blur-xl"
        >
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-blue-400 opacity-50" />
            <span className="relative inline-flex size-2 rounded-full bg-blue-400" />
          </span>

          The intelligent workspace
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-5xl text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl lg:text-8xl"
        >
          Work smarter.
          <br />

          <span className="bg-gradient-to-r from-blue-300 via-blue-500 to-cyan-300 bg-clip-text text-transparent">
            Build the future.
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-7 max-w-2xl text-base leading-7 text-white/45 sm:text-lg"
        >
          Nexora brings AI, automation, and intelligent tools into one
          powerful workspace — helping you turn ideas into action.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-9 flex flex-col items-center gap-3 sm:flex-row"
        >
          <Link
            href="/signup"
            className="group flex h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 text-sm font-semibold text-black shadow-xl shadow-white/5 transition hover:bg-white/90"
          >
            Start building
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            href="/login"
            className="flex h-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] px-6 text-sm font-medium text-white/70 backdrop-blur-xl transition hover:border-white/20 hover:bg-white/[0.07] hover:text-white"
          >
            Sign in
          </Link>
        </motion.div>

        {/* 3D Scene */}
        <div className="relative mt-20 h-[420px] w-full max-w-5xl sm:h-[500px]">
          {/* Floating labels */}
          {floatingItems.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
                className={`absolute ${item.position} z-20 hidden items-center gap-2 rounded-xl border border-white/10 bg-white/[0.045] px-4 py-2.5 text-xs text-white/60 shadow-2xl shadow-black/30 backdrop-blur-xl md:flex`}
                animate={{
                  y: [0, -12, 0],
                  rotate: [0, 1.5, 0],
                }}
                transition={{
                  duration: 5,
                  delay: item.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Icon className="size-4 text-blue-400" />
                {item.label}
              </motion.div>
            );
          })}

          {/* Orbital system */}
          <div
            className="absolute left-1/2 top-1/2 h-[310px] w-[310px] -translate-x-1/2 -translate-y-1/2 sm:h-[390px] sm:w-[390px]"
            style={{ perspective: "1000px" }}
          >
            {/* Outer glow */}
            <motion.div
              className="absolute inset-[-40px] rounded-full bg-blue-600/10 blur-[60px]"
              animate={{
                scale: [0.9, 1.1, 0.9],
                opacity: [0.3, 0.55, 0.3],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Outer orbit */}
            <motion.div
              className="absolute inset-0 rounded-full border border-blue-400/15"
              animate={{ rotate: 360 }}
              transition={{
                duration: 24,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Second orbit */}
            <motion.div
              className="absolute inset-[30px] rounded-full border border-cyan-400/10"
              animate={{ rotate: -360 }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Tilted orbit */}
            <motion.div
              className="absolute inset-[55px] rounded-full border border-white/10"
              style={{ transform: "rotateX(65deg)" }}
              animate={{ rotate: 360 }}
              transition={{
                duration: 14,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Core */}
            <motion.div
              className="absolute left-1/2 top-1/2 grid size-36 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-[2rem] border border-blue-300/20 bg-gradient-to-br from-blue-500/20 via-blue-950/40 to-black/80 shadow-[0_0_80px_rgba(37,99,235,0.3)] backdrop-blur-2xl sm:size-44"
              animate={{
                rotateY: [0, 8, 0, -8, 0],
                rotateX: [0, -5, 0, 5, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="absolute inset-3 rounded-[1.5rem] border border-white/10" />

              <div className="relative grid size-16 place-items-center rounded-2xl border border-blue-300/20 bg-blue-500/10 shadow-lg shadow-blue-500/20 sm:size-20">
                <span className="text-3xl font-semibold text-blue-200 sm:text-4xl">
                  N
                </span>
              </div>
            </motion.div>

            {/* Orbit particles */}
            <motion.div
              className="absolute left-1/2 top-[-5px] size-3 -translate-x-1/2 rounded-full bg-blue-300 shadow-[0_0_20px_rgba(96,165,250,0.9)]"
              animate={{ rotate: 360 }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{ transformOrigin: "0 200px" }}
            />

            <motion.div
              className="absolute bottom-[15%] right-[-3px] size-2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.9)]"
              animate={{ y: [-10, 10, -10] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <motion.div
              className="absolute bottom-[12%] left-[4%] size-2 rounded-full bg-blue-400 shadow-[0_0_18px_rgba(59,130,246,0.9)]"
              animate={{ y: [10, -10, 10] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        className="relative z-10 border-t border-white/[0.06]"
      >
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-blue-400">
              ONE WORKSPACE
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">
              Everything you need to move forward.
            </h2>

            <p className="mt-5 text-base leading-7 text-white/40">
              Nexora is being built as an intelligent layer between you,
              your work, and the technology you use every day.
            </p>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  className="group rounded-3xl border border-white/[0.08] bg-white/[0.025] p-7 backdrop-blur-xl transition hover:border-blue-400/20 hover:bg-white/[0.04]"
                >
                  <div className="grid size-11 place-items-center rounded-xl border border-blue-400/15 bg-blue-500/10 text-blue-300">
                    <Icon className="size-5" />
                  </div>

                  <h3 className="mt-6 text-lg font-semibold">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-white/40">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="start"
        className="relative z-10 border-t border-white/[0.06]"
      >
        <div className="mx-auto max-w-4xl px-6 py-32 text-center">
          <div className="absolute left-1/2 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-600/10 blur-[100px]" />

          <Sparkles className="mx-auto size-6 text-blue-400" />

          <h2 className="mt-6 text-4xl font-semibold tracking-tight sm:text-6xl">
            Your next workspace
            <br />
            starts here.
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-white/40">
            Create your Nexora workspace and start building a smarter way
            to work.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/signup"
              className="group flex h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 text-sm font-semibold text-black transition hover:bg-white/90"
            >
              Create your workspace
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/login"
              className="flex h-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] px-6 text-sm font-medium text-white/70 transition hover:bg-white/[0.07] hover:text-white"
            >
              Sign in
            </Link>
          </div>
        </div>
      </section>

      <Footer/ >
    </main>
  );
}