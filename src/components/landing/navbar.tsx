"use client";

import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";

const navigation = [
  { label: "Features", href: "#features" },
  { label: "Why Nexora", href: "#about" },
  { label: "Get started", href: "#start" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <nav className="mx-auto max-w-7xl rounded-2xl border border-white/10 bg-black/35 px-4 py-3 shadow-2xl shadow-black/20 backdrop-blur-xl sm:px-5">
        <div className="flex h-10 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            onClick={closeMenu}
            className="group flex items-center gap-2.5"
          >
            <div className="grid size-9 place-items-center rounded-xl border border-white/10 bg-white/[0.07] text-sm font-bold text-white shadow-lg shadow-blue-500/10 transition group-hover:border-blue-400/30 group-hover:bg-white/10">
              N
            </div>

            <span className="text-base font-semibold tracking-tight text-white">
              Nexora
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm text-white/55 transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-2 sm:flex">
            <Link
              href="/login"
              className="rounded-xl px-4 py-2 text-sm font-medium text-white/70 transition hover:bg-white/[0.05] hover:text-white"
            >
              Log in
            </Link>

            <Link
              href="/signup"
              className="group inline-flex items-center gap-1.5 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-white/90"
            >
              Get started
              <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid size-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-white/75 transition hover:bg-white/[0.08] hover:text-white sm:hidden"
          >
            {open ? (
              <X className="size-5" />
            ) : (
              <Menu className="size-5" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {open && (
          <div className="border-t border-white/10 pt-4 sm:hidden">
            <div className="flex flex-col gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={closeMenu}
                  className="rounded-xl px-3 py-3 text-sm text-white/65 transition hover:bg-white/[0.05] hover:text-white"
                >
                  {item.label}
                </Link>
              ))}

              <div className="mt-3 grid grid-cols-2 gap-2 border-t border-white/10 pt-4">
                <Link
                  href="/login"
                  onClick={closeMenu}
                  className="flex h-11 items-center justify-center rounded-xl border border-white/10 text-sm font-medium text-white/75 transition hover:bg-white/[0.05] hover:text-white"
                >
                  Log in
                </Link>

                <Link
                  href="/signup"
                  onClick={closeMenu}
                  className="flex h-11 items-center justify-center rounded-xl bg-white text-sm font-semibold text-black transition hover:bg-white/90"
                >
                  Get started
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}