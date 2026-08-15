"use client";

import {
  Bot,
  BrainCircuit,
  Layers3,
  Workflow,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Bot,
    number: "01",
    title: "AI Agents",
    description:
      "Create intelligent agents that understand your goals, use tools, and help execute real work.",
    className: "lg:col-span-2",
  },
  {
    icon: Workflow,
    number: "02",
    title: "Automation",
    description:
      "Turn repetitive workflows into intelligent automations that run when you need them.",
    className: "lg:col-span-1",
  },
  {
    icon: BrainCircuit,
    number: "03",
    title: "Knowledge",
    description:
      "Give Nexora the context it needs with your documents, information, and connected knowledge.",
    className: "lg:col-span-1",
  },
  {
    icon: Layers3,
    number: "04",
    title: "One Workspace",
    description:
      "Bring your AI, workflows, projects, and connected tools together instead of switching between systems.",
    className: "lg:col-span-2",
  },
];

export function Features() {
  return (
    <section
      id="product"
      className="relative px-4 py-28 sm:px-6 sm:py-36 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="mb-5 inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-white/50"
          >
            Everything connected
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="text-balance text-4xl font-semibold tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl"
          >
            Your work.
            <span className="text-white/35"> One intelligent system.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-base leading-7 text-white/40 sm:text-lg sm:leading-8"
          >
            Nexora connects the intelligence, automation, and context behind
            your work so you can spend less time managing tools and more time
            getting things done.
          </motion.p>
        </div>

        {/* Feature grid */}
        <div className="mt-16 grid gap-4 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.article
                key={feature.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.08,
                }}
                className={`group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-blue-400/20 hover:bg-white/[0.045] sm:p-8 ${feature.className}`}
              >
                {/* Background glow */}
                <div className="pointer-events-none absolute -right-20 -top-20 size-48 rounded-full bg-blue-500/10 opacity-0 blur-[70px] transition duration-700 group-hover:opacity-100" />

                <div className="relative">
                  <div className="flex items-start justify-between">
                    <div className="grid size-11 place-items-center rounded-xl border border-white/10 bg-white/[0.05] text-blue-300 transition duration-500 group-hover:border-blue-400/20 group-hover:bg-blue-400/10">
                      <Icon className="size-5" />
                    </div>

                    <span className="text-xs font-medium tracking-wider text-white/20">
                      {feature.number}
                    </span>
                  </div>

                  <div className="mt-12 max-w-lg">
                    <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                      {feature.title}
                    </h3>

                    <p className="mt-3 max-w-xl text-sm leading-6 text-white/40 sm:text-base sm:leading-7">
                      {feature.description}
                    </p>
                  </div>

                  <div className="mt-8 flex items-center gap-2 text-xs font-medium text-white/25 transition duration-300 group-hover:text-blue-300/70">
                    Explore capability
                    <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}