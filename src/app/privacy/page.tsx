import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { LandingBackground } from "@/components/landing/background";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";

export default function PrivacyPage() {
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
              Privacy Policy
            </h1>

            <p className="mt-5 text-base leading-7 text-white/40">
              Your privacy matters to us. This Privacy Policy explains how
              Nexora collects, uses, stores, and protects information when you
              use our website, products, services, and applications.
            </p>

            <p className="mt-4 text-sm text-white/30">
              Last updated: August 2026
            </p>
          </div>

          {/* Content */}
          <div className="mt-16 space-y-14">
            <section>
              <h2 className="text-2xl font-semibold">
                1. Information We Collect
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/50">
                When you use Nexora, we may collect information that you
                provide directly, information generated through your use of
                our services, and certain technical information collected
                automatically.
              </p>

              <div className="mt-6 space-y-5">
                <div>
                  <h3 className="text-base font-medium text-white/80">
                    Account information
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-white/45">
                    This may include your name, email address, authentication
                    information, profile information, and other information
                    required to create and maintain your account.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-medium text-white/80">
                    Business information
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-white/45">
                    If you use Nexora for business purposes, you may provide
                    company information, business documents, customer
                    information, workflows, instructions, and other
                    information needed to configure your workspace.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-medium text-white/80">
                    Usage and technical information
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-white/45">
                    We may collect information about how you interact with
                    Nexora, including device information, browser information,
                    approximate location, IP address, log information, and
                    product usage data.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">
                2. How We Use Information
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/50">
                We use information to provide, operate, maintain, secure, and
                improve Nexora and its services.
              </p>

              <ul className="mt-6 space-y-3 text-sm leading-7 text-white/45">
                <li>• Create and manage user accounts.</li>
                <li>• Provide AI-powered features and services.</li>
                <li>• Execute workflows and automations requested by users.</li>
                <li>• Operate AI agents and connected integrations.</li>
                <li>• Provide customer support.</li>
                <li>• Detect fraud, abuse, security issues, and unauthorized access.</li>
                <li>• Improve reliability, performance, and user experience.</li>
                <li>• Communicate important service and account information.</li>
                <li>• Process subscriptions and other transactions.</li>
                <li>• Comply with applicable legal obligations.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">
                3. AI, Agents, and Automated Processing
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/50">
                Nexora provides AI-powered features that may process information
                supplied by you or made available through integrations you
                authorize.
              </p>

              <p className="mt-4 text-sm leading-7 text-white/50">
                Depending on the features you use, this may include documents,
                messages, customer enquiries, business information, workflow
                instructions, and other content required for an AI assistant,
                AI agent, or automation to perform its requested task.
              </p>

              <p className="mt-4 text-sm leading-7 text-white/50">
                AI-generated results may contain errors or inaccuracies. You
                remain responsible for reviewing important outputs and
                decisions before relying on them.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">
                4. Information Shared Through Integrations
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/50">
                Nexora may allow you to connect third-party services such as
                email, messaging platforms, calendars, business tools,
                communication services, storage providers, and other
                integrations.
              </p>

              <p className="mt-4 text-sm leading-7 text-white/50">
                When you authorize an integration, Nexora may access or
                transmit information necessary to provide the functionality
                you requested. Your use of those third-party services is also
                subject to their respective terms and privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">
                5. How We Share Information
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/50">
                We do not sell your personal information.
              </p>

              <p className="mt-4 text-sm leading-7 text-white/50">
                We may share information with trusted service providers,
                infrastructure providers, authentication providers, payment
                providers, AI technology providers, communication providers,
                and other partners when necessary to operate Nexora or provide
                requested functionality.
              </p>

              <p className="mt-4 text-sm leading-7 text-white/50">
                We may also disclose information when required by law, to
                protect our rights and users, or in connection with a business
                transaction such as a merger, acquisition, financing, or sale
                of assets.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">
                6. Data Security
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/50">
                We use reasonable technical and organizational measures
                designed to protect information against unauthorized access,
                alteration, disclosure, or destruction.
              </p>

              <p className="mt-4 text-sm leading-7 text-white/50">
                However, no internet-based service can guarantee absolute
                security. You are also responsible for maintaining the
                security of your account credentials and connected services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">
                7. Data Retention
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/50">
                We retain information for as long as reasonably necessary to
                provide our services, maintain your account, comply with legal
                obligations, resolve disputes, enforce agreements, and protect
                our legitimate interests.
              </p>

              <p className="mt-4 text-sm leading-7 text-white/50">
                Retention periods may vary depending on the type of information
                and the purpose for which it was collected.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">
                8. Your Choices and Rights
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/50">
                Depending on applicable law, you may have rights relating to
                your personal information, including rights to access,
                correct, delete, restrict, or object to certain processing.
              </p>

              <p className="mt-4 text-sm leading-7 text-white/50">
                You may also be able to update information through your Nexora
                account or request assistance by contacting us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">
                9. Children&apos;s Privacy
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/50">
                Nexora is intended for businesses, organizations, and
                individuals who are legally able to use the service. We do not
                knowingly collect personal information from children in
                violation of applicable law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">
                10. International Data Processing
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/50">
                Depending on the services and infrastructure used, information
                may be processed or stored in countries other than the country
                where you live.
              </p>

              <p className="mt-4 text-sm leading-7 text-white/50">
                Where required, we take appropriate measures for applicable
                cross-border data transfers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">
                11. Changes to This Policy
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/50">
                We may update this Privacy Policy as Nexora evolves or as legal
                and regulatory requirements change. When appropriate, we will
                provide notice of material changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">
                12. Contact Us
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/50">
                If you have questions about this Privacy Policy or how Nexora
                handles information, please contact us through the contact
                information provided on our website.
              </p>
            </section>
          </div>

          {/* Bottom navigation */}
          <div className="mt-16 border-t border-white/10 pt-8">
            <div className="flex flex-wrap gap-5 text-sm text-white/35">
              <Link
                href="/terms"
                className="transition hover:text-white"
              >
                Terms of Service
              </Link>

              <Link
                href="/cookies"
                className="transition hover:text-white"
              >
                Cookie Policy
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