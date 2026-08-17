import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { LandingBackground } from "@/components/landing/background";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";

export default function CookiesPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#03050b] text-white">
      <LandingBackground />
      <Navbar />

      <section className="relative z-10 px-6 pb-24 pt-36 sm:pt-40 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Back */}
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-sm text-white/40 transition hover:text-white"
          >
            <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
            Back to Nexora
          </Link>

          {/* Header */}
          <div className="mt-12">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-400">
              Legal
            </p>

            <h1 className="mt-4 text-5xl font-semibold tracking-[-0.04em] sm:text-6xl">
              Cookie Policy
            </h1>

            <p className="mt-5 text-base leading-7 text-white/40">
              This Cookie Policy explains how Nexora may use cookies and
              similar technologies when you visit our website or use our
              services.
            </p>

            <p className="mt-4 text-sm text-white/30">
              Last updated: August 2026
            </p>
          </div>

          {/* Content */}
          <div className="mt-16 space-y-14">
            <section>
              <h2 className="text-2xl font-semibold">
                1. What Are Cookies?
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/50">
                Cookies are small text files that websites can store on your
                device. They allow websites to remember information about your
                visit, maintain sessions, understand how services are used, and
                provide certain functionality.
              </p>

              <p className="mt-4 text-sm leading-7 text-white/50">
                Nexora may also use technologies similar to cookies, including
                local storage, pixels, SDKs, and other identifiers where
                appropriate.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">
                2. How Nexora Uses Cookies
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/50">
                We may use cookies and similar technologies for several
                purposes, including:
              </p>

              <ul className="mt-6 space-y-3 text-sm leading-7 text-white/45">
                <li>• Keeping you signed in to your Nexora account.</li>
                <li>• Maintaining authentication and security sessions.</li>
                <li>• Remembering preferences and settings.</li>
                <li>• Understanding how users interact with our website.</li>
                <li>• Measuring product performance and reliability.</li>
                <li>• Detecting suspicious activity and protecting accounts.</li>
                <li>• Improving the functionality and experience of Nexora.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">
                3. Types of Cookies We May Use
              </h2>

              <div className="mt-6 space-y-7">
                <div>
                  <h3 className="text-base font-medium text-white/80">
                    Essential cookies
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-white/45">
                    These cookies are necessary for core functionality such as
                    authentication, account security, session management, and
                    other essential features. Without them, parts of Nexora may
                    not function correctly.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-medium text-white/80">
                    Preference cookies
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-white/45">
                    These cookies may remember choices such as interface
                    preferences or other settings so that Nexora can provide a
                    more consistent experience.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-medium text-white/80">
                    Analytics and performance technologies
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-white/45">
                    Where enabled, analytics technologies may help us
                    understand website traffic, feature usage, performance, and
                    technical issues so we can improve Nexora.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-medium text-white/80">
                    Security technologies
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-white/45">
                    We may use cookies or similar technologies to detect
                    suspicious activity, prevent abuse, protect accounts, and
                    maintain the security of our services.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">
                4. Third-Party Technologies
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/50">
                Some features of Nexora may rely on third-party providers.
                These providers may use cookies or similar technologies in
                connection with the services they provide.
              </p>

              <p className="mt-4 text-sm leading-7 text-white/50">
                Examples may include authentication, analytics, payment,
                infrastructure, security, communication, and other service
                providers.
              </p>

              <p className="mt-4 text-sm leading-7 text-white/50">
                Third-party providers may have their own privacy and cookie
                policies. Their use of these technologies is governed by their
                respective policies and terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">
                5. Managing Cookies
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/50">
                Most modern browsers allow you to control or delete cookies
                through their settings.
              </p>

              <p className="mt-4 text-sm leading-7 text-white/50">
                You can generally configure your browser to block cookies,
                delete existing cookies, or notify you before a cookie is
                stored.
              </p>

              <p className="mt-4 text-sm leading-7 text-white/50">
                However, disabling essential cookies may prevent certain
                Nexora features from working correctly, including account
                authentication and secure sessions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">
                6. Local Storage and Similar Technologies
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/50">
                Nexora may use technologies such as browser local storage,
                session storage, pixels, software development kits, and similar
                mechanisms where necessary to provide functionality, maintain
                security, remember preferences, or understand product usage.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">
                7. Changes to This Cookie Policy
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/50">
                We may update this Cookie Policy as our technology, services,
                or legal requirements change.
              </p>

              <p className="mt-4 text-sm leading-7 text-white/50">
                Any updated version will be published on this page with a
                revised “Last updated” date where appropriate.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">
                8. Contact
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/50">
                If you have questions about how Nexora uses cookies or similar
                technologies, please contact us through the contact information
                provided on our website.
              </p>
            </section>
          </div>

          {/* Bottom navigation */}
          <div className="mt-16 border-t border-white/10 pt-8">
            <div className="flex flex-wrap gap-5 text-sm text-white/35">
              <Link
                href="/privacy"
                className="transition hover:text-white"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="transition hover:text-white"
              >
                Terms of Service
              </Link>

              <Link
                href="/contact"
                className="transition hover:text-white"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}