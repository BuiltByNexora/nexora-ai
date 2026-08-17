"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Sparkles,
  Zap,
  Building2,
} from "lucide-react";
import { useState } from "react";

import { LandingBackground } from "@/components/landing/background";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";

const plans = [
  {
    name: "Free",
    description: "Explore Nexora and discover a smarter way to work.",
    monthly: 0,
    yearly: 0,
    icon: Sparkles,
    features: [
      "Personal Nexora workspace",
      "Core AI-powered tools",
      "Essential automation",
      "Project and workspace management",
      "Access to the Nexora community",
    ],
    cta: "Start for free",
    href: "/signup",
    featured: false,
  },
  {
    name: "Pro",
    description: "For individuals who want to build, automate, and move faster.",
    monthly: 19,
    yearly: 15,
    icon: Zap,
    features: [
      "Everything you need to build with Nexora",
      "Advanced AI capabilities",
      "AI agents and intelligent workflows",
      "Advanced automation",
      "Higher usage capacity",
      "Early access to new capabilities",
    ],
    cta: "Get started",
    href: "/signup",
    featured: true,
  },
  {
    name: "Business",
    description: "For teams and organizations building at a larger scale.",
    monthly: 49,
    yearly: 39,
    icon: Building2,
    features: [
      "Everything in Pro",
      "Team workspaces and collaboration",
      "Advanced access and permissions",
      "Organization-level controls",
      "Business-focused automation",
      "Priority support",
    ],
    cta: "Start building",
    href: "/signup",
    featured: false,
  },
];
export default function PricingPage() {
  const [yearly, setYearly] = useState(false);

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#03050b] text-white">
      <LandingBackground />
      <Navbar />

      {/* Hero */}
      <section className="relative z-10 px-6 pb-16 pt-36 sm:pt-40 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/[0.08] px-4 py-2 text-xs font-medium text-blue-300 backdrop-blur-xl"
          >
            <Sparkles className="size-3.5" />
            Simple, transparent pricing
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-8 text-5xl font-semibold tracking-[-0.04em] sm:text-6xl lg:text-7xl"
          >
            Choose the workspace
            <br />
            <span className="bg-gradient-to-r from-blue-300 via-blue-500 to-cyan-300 bg-clip-text text-transparent">
              that fits you.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/40 sm:text-lg"
            >
            Start with Nexora for free. Upgrade when you need more power,
            advanced capabilities, and greater flexibility.
          </motion.p>

          {/* Billing Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 inline-flex items-center rounded-2xl border border-white/10 bg-white/[0.04] p-1.5 backdrop-blur-xl"
          >
            <button
              type="button"
              onClick={() => setYearly(false)}
              className={`rounded-xl px-5 py-2.5 text-sm font-medium transition ${
                !yearly
                  ? "bg-white text-black shadow-lg"
                  : "text-white/45 hover:text-white"
              }`}
            >
              Monthly
            </button>

            <button
              type="button"
              onClick={() => setYearly(true)}
              className={`rounded-xl px-5 py-2.5 text-sm font-medium transition ${
                yearly
                  ? "bg-white text-black shadow-lg"
                  : "text-white/45 hover:text-white"
              }`}
            >
              Yearly
              <span className="ml-2 text-xs text-blue-400">
                Save 20%
              </span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="relative z-10 px-6 pb-32 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            const price = yearly ? plan.yearly : plan.monthly;

            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className={`relative rounded-3xl border p-7 backdrop-blur-2xl transition ${
                  plan.featured
                    ? "border-blue-400/30 bg-blue-500/[0.07] shadow-[0_0_80px_rgba(37,99,235,0.12)]"
                    : "border-white/[0.08] bg-white/[0.025] hover:border-white/[0.15]"
                }`}
              >
                {plan.featured && (
                  <div className="absolute right-6 top-6 rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-[11px] font-medium text-blue-300">
                    Most popular
                  </div>
                )}

                <div className="grid size-11 place-items-center rounded-xl border border-blue-400/15 bg-blue-500/10 text-blue-300">
                  <Icon className="size-5" />
                </div>

                <h2 className="mt-6 text-xl font-semibold">
                  {plan.name}
                </h2>

                <p className="mt-2 min-h-12 text-sm leading-6 text-white/40">
                  {plan.description}
                </p>

                <div className="mt-7 flex items-end gap-2">
                  <span className="text-5xl font-semibold tracking-tight">
                    ${price}
                  </span>

                  <span className="pb-1.5 text-sm text-white/35">
                    / month
                  </span>
                </div>

                {yearly && price > 0 && (
                  <p className="mt-2 text-xs text-blue-400">
                    Billed annually
                  </p>
                )}

                <Link
                  href={plan.href}
                  className={`group mt-8 flex h-12 w-full items-center justify-center gap-2 rounded-xl text-sm font-semibold transition ${
                    plan.featured
                      ? "bg-white text-black hover:bg-white/90"
                      : "border border-white/10 bg-white/[0.05] text-white hover:bg-white/[0.09]"
                  }`}
                >
                  {plan.cta}

                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <div className="my-8 border-t border-white/[0.08]" />

                <p className="text-xs font-medium uppercase tracking-wider text-white/30">
                  Included
                </p>

                <ul className="mt-5 space-y-4">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-white/55"
                    >
                      <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-blue-500/10 text-blue-300">
                        <Check className="size-3" />
                      </span>

                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative z-10 border-t border-white/[0.06]">
        <div className="mx-auto max-w-4xl px-6 py-28 text-center">
          <div className="absolute left-1/2 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-600/10 blur-[100px]" />

          <p className="text-sm font-medium text-blue-400">
            BUILD WITHOUT LIMITS
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Start building with Nexora.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-white/40">
            Create your workspace today and discover what's possible when
            intelligent software works alongside you.
          </p>

          <Link
            href="/signup"
            className="group mx-auto mt-8 inline-flex h-12 items-center gap-2 rounded-xl bg-white px-6 text-sm font-semibold text-black transition hover:bg-white/90"
          >
            Get started
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}