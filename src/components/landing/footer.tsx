import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const productLinks = [
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookie Policy", href: "/cookies" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="group inline-flex items-center gap-2.5"
            >
              <div className="grid size-9 place-items-center rounded-xl border border-white/10 bg-white/[0.07] text-sm font-bold text-white transition group-hover:border-blue-400/30 group-hover:bg-white/10">
                N
              </div>

              <span className="text-base font-semibold tracking-tight text-white">
                Nexora
              </span>
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-6 text-white/35">
              Intelligent software, automation, and digital experiences
              designed for the future of work.
            </p>

            <Link
              href="/signup"
              className="group mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-white/65 transition hover:text-white"
            >
              Get started
              <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold text-white">
              Product
            </h3>

            <div className="mt-5 flex flex-col gap-3">
              {productLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="w-fit text-sm text-white/35 transition hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white">
              Company
            </h3>

            <div className="mt-5 flex flex-col gap-3">
              {companyLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="w-fit text-sm text-white/35 transition hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-white">
              Legal
            </h3>

            <div className="mt-5 flex flex-col gap-3">
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="w-fit text-sm text-white/35 transition hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/25 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Nexora. All rights reserved.</p>

          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link
              href="/privacy"
              className="transition hover:text-white/60"
            >
              Privacy
            </Link>

            <Link
              href="/terms"
              className="transition hover:text-white/60"
            >
              Terms
            </Link>

            <Link
              href="/cookies"
              className="transition hover:text-white/60"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}