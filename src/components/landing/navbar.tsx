"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navigation = [
  { label: "Features", href: "/features" },
  { label: "Why Nexora", href: "/about" },
  { label: "Pricing", href: "/pricing" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <nav className="mx-auto max-w-7xl rounded-2xl border border-white/[0.08] bg-[#03050b]/70 px-4 py-3 shadow-2xl shadow-black/30 backdrop-blur-2xl sm:px-5">
        <div className="flex h-10 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            onClick={closeMenu}
            className="group flex items-center gap-2.5"
          >
            <motion.div
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.2 }}
              className="grid size-9 place-items-center rounded-xl border border-white/10 bg-white/[0.06] text-sm font-bold text-white shadow-lg shadow-blue-500/[0.08] transition-colors duration-300 group-hover:border-blue-400/30 group-hover:bg-blue-500/[0.08]"
            >
              N
            </motion.div>

            <span className="text-base font-semibold tracking-tight text-white">
              Nexora
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="relative rounded-xl px-4 py-2 text-sm font-medium transition-colors duration-200"
                >
                  <span
                    className={
                      active
                        ? "text-white"
                        : "text-white/50 hover:text-white"
                    }
                  >
                    {item.label}
                  </span>

                  {active && (
                    <motion.span
                      layoutId="navbar-active"
                      className="absolute inset-x-3 -bottom-[1px] h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-2 sm:flex">
            <Link
              href="/login"
              className="rounded-xl px-4 py-2 text-sm font-medium text-white/60 transition-all duration-200 hover:bg-white/[0.05] hover:text-white"
            >
              Log in
            </Link>

            <Link
              href="/signup"
              className="group inline-flex items-center gap-1.5 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black transition-all duration-200 hover:bg-white/90 hover:shadow-lg hover:shadow-white/[0.08]"
            >
              Get started

              <ArrowUpRight className="size-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid size-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-white/70 transition-all duration-200 hover:bg-white/[0.08] hover:text-white sm:hidden"
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -45, scale: 0.7 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 45, scale: 0.7 }}
                  transition={{ duration: 0.16 }}
                >
                  <X className="size-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: 45, scale: 0.7 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: -45, scale: 0.7 }}
                  transition={{ duration: 0.16 }}
                >
                  <Menu className="size-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{
                duration: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="overflow-hidden sm:hidden"
            >
              <div className="border-t border-white/[0.08] pt-4">
                <div className="flex flex-col gap-1">
                  {navigation.map((item, index) => {
                    const active = pathname === item.href;

                    return (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.2,
                          delay: index * 0.04,
                        }}
                      >
                        <Link
                          href={item.href}
                          onClick={closeMenu}
                          className={`flex items-center justify-between rounded-xl px-3 py-3 text-sm transition-colors ${
                            active
                              ? "bg-blue-500/[0.08] text-white"
                              : "text-white/60 hover:bg-white/[0.05] hover:text-white"
                          }`}
                        >
                          <span>{item.label}</span>

                          {active && (
                            <span className="size-1.5 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.8)]" />
                          )}
                        </Link>
                      </motion.div>
                    );
                  })}

                  <div className="mt-3 grid grid-cols-2 gap-2 border-t border-white/[0.08] pt-4">
                    <Link
                      href="/login"
                      onClick={closeMenu}
                      className="flex h-11 items-center justify-center rounded-xl border border-white/10 text-sm font-medium text-white/70 transition-all hover:bg-white/[0.05] hover:text-white"
                    >
                      Log in
                    </Link>

                    <Link
                      href="/signup"
                      onClick={closeMenu}
                      className="flex h-11 items-center justify-center rounded-xl bg-white text-sm font-semibold text-black transition-all hover:bg-white/90"
                    >
                      Get started
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}