"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Navbar } from "@/components/landing/navbar";
import { LandingBackground } from "@/components/landing/background";
import { Footer } from "@/components/landing/footer";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Layers3,
  Sparkles,
  Zap,
} from "lucide-react";

const principles = [
  {
    icon: BrainCircuit,
    title: "Intelligence first",
    description:
      "Nexora is being built around intelligent software that understands context, adapts to workflows, and helps people get more done.",
  },
  {
    icon: Zap,
    title: "Automation by default",
    description:
      "Repetitive work should not require repetitive effort. Nexora connects intelligence with automation to turn ideas into action.",
  },
  {
    icon: Layers3,
    title: "Built to scale",
    description:
      "From a simple workspace to complex business systems, Nexora is designed as a foundation that can grow with its users.",
  },
];

export default function AboutPage() {
  return (
    
    <main className="relative min-h-screen overflow-hidden bg-[#030712] text-white">

        <LandingBackground />
        <Navbar />
      {/* Atmospheric background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-[-20%] h-[700px] w-[900px] -translate-x-1/2 rounded-full bg-blue-600/[0.08] blur-[140px]" />
        <div className="absolute bottom-[-20%] left-[-10%] h-[500px] w-[500px] rounded-full bg-indigo-600/[0.06] blur-[130px]" />
        <div className="absolute right-[-10%] top-[35%] h-[500px] w-[500px] rounded-full bg-cyan-500/[0.05] blur-[130px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      {/* Hero */}
      <section className="mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-20 pt-36 sm:px-8 lg:px-10">
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-4xl text-center"
          >
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/[0.08] px-3.5 py-1.5 text-xs font-medium text-blue-300">
              <Sparkles className="size-3.5" />
              Why Nexora
            </div>

            <h1 className="text-5xl font-semibold tracking-[-0.04em] sm:text-6xl lg:text-8xl">
              We&apos;re building the
              <span className="block bg-gradient-to-r from-white via-blue-200 to-blue-500 bg-clip-text text-transparent">
                intelligent future.
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-white/45 sm:text-lg sm:leading-8">
              Nexora is our vision for software that does more than wait for
              instructions. Intelligent systems, automation, and beautiful
              experiences working together as one.
            </p>
          </motion.div>

          {/* Core statement */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.25, duration: 0.8 }}
            className="relative mx-auto mt-24 max-w-5xl"
          >
            <div className="absolute inset-0 rounded-[2rem] bg-blue-500/[0.08] blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-8 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-12 lg:p-16">
              <div className="absolute right-[-100px] top-[-100px] size-72 rounded-full bg-blue-500/[0.08] blur-3xl" />

              <div className="relative">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-400">
                  The idea
                </p>

                <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl">
                  Software should work
                  <span className="text-white/35"> with you.</span>
                </h2>

                <p className="mt-6 max-w-2xl text-base leading-7 text-white/45 sm:text-lg sm:leading-8">
                  We believe the next generation of software should understand
                  what you are trying to accomplish, remove unnecessary
                  complexity, and help turn intent into meaningful results.
                </p>

                <Link
                  href="/features"
                  className="group mt-9 inline-flex items-center gap-2 text-sm font-medium text-white"
                >
                  Explore what we&apos;re building
                  <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Principles */}
      <section className="mx-auto max-w-7xl px-6 py-28 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-400">
            What drives us
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
            Three principles.
            <span className="block text-white/35">
              One direction.
            </span>
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {principles.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="group rounded-3xl border border-white/10 bg-white/[0.025] p-7 transition duration-500 hover:-translate-y-1 hover:border-blue-400/20 hover:bg-white/[0.045]"
              >
                <div className="grid size-11 place-items-center rounded-2xl border border-blue-400/15 bg-blue-400/[0.08] text-blue-300 transition group-hover:scale-105">
                  <Icon className="size-5" />
                </div>

                <h3 className="mt-7 text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/40">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Vision */}
      <section className="mx-auto max-w-7xl px-6 py-28 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.055] to-white/[0.015] p-8 sm:p-12 lg:p-16"
        >
          <div className="absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-400/60 to-transparent" />

          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-400">
              Our vision
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-5xl">
              Empower people to
              <span className="block bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
                build without limits.
              </span>
            </h2>

            <p className="mt-6 text-base leading-7 text-white/40 sm:text-lg sm:leading-8">
              From intelligent assistants to automated workflows and the
              software behind tomorrow&apos;s businesses, Nexora is being
              built to make powerful technology more accessible.
            </p>
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-32 pt-20 text-center sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm text-white/35">
            The future is being built now.
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
            Ready to see what&apos;s next?
          </h2>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/signup"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 text-sm font-semibold text-black transition hover:bg-white/90"
            >
              Get started
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>

            <Link
              href="/features"
              className="inline-flex h-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-6 text-sm font-medium text-white/75 transition hover:bg-white/[0.06] hover:text-white"
            >
              Explore features
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}