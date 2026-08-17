import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { LandingBackground } from "@/components/landing/background";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";

export default function TermsPage() {
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
              Terms of Service
            </h1>

            <p className="mt-5 text-base leading-7 text-white/40">
              These Terms of Service govern your access to and use of Nexora,
              including our website, software, AI services, agents,
              automations, and related products.
            </p>

            <p className="mt-4 text-sm text-white/30">
              Last updated: August 2026
            </p>
          </div>

          {/* Content */}
          <div className="mt-16 space-y-14">
            <section>
              <h2 className="text-2xl font-semibold">
                1. Acceptance of These Terms
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/50">
                By creating an account, accessing, or using Nexora, you agree
                to these Terms of Service and our Privacy Policy. If you do not
                agree with these terms, you should not use the service.
              </p>

              <p className="mt-4 text-sm leading-7 text-white/50">
                If you are using Nexora on behalf of a business or
                organization, you confirm that you have the authority to bind
                that organization to these terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">
                2. About Nexora
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/50">
                Nexora is a software platform designed to provide intelligent
                software, AI-powered tools, AI agents, automation, knowledge
                management, integrations, and related digital services.
              </p>

              <p className="mt-4 text-sm leading-7 text-white/50">
                Features may change, expand, or be discontinued as Nexora
                develops. Some features may be experimental, limited, or
                available only to certain plans or users.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">
                3. Your Account
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/50">
                You are responsible for providing accurate account information
                and keeping your login credentials secure.
              </p>

              <p className="mt-4 text-sm leading-7 text-white/50">
                You are responsible for activity performed through your
                account and should immediately notify Nexora if you believe
                your account has been accessed without authorization.
              </p>

              <p className="mt-4 text-sm leading-7 text-white/50">
                You may not create an account using false information,
                impersonate another person or organization, or use another
                person's account without authorization.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">
                4. AI Services and Outputs
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/50">
                Nexora uses artificial intelligence and related technologies to
                generate responses, recommendations, classifications,
                summaries, actions, and other outputs.
              </p>

              <p className="mt-4 text-sm leading-7 text-white/50">
                AI-generated output may be incomplete, inaccurate, outdated, or
                inappropriate for a particular situation. You are responsible
                for reviewing important outputs before relying on them.
              </p>

              <p className="mt-4 text-sm leading-7 text-white/50">
                Nexora does not guarantee that AI-generated information will
                always be accurate, complete, or suitable for your intended
                purpose.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">
                5. AI Agents and Automated Actions
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/50">
                Nexora may allow you to create or configure AI agents that can
                interact with external services, process information, execute
                workflows, communicate with users, or perform other actions
                according to instructions and permissions you provide.
              </p>

              <p className="mt-4 text-sm leading-7 text-white/50">
                You are responsible for the instructions, permissions,
                integrations, data, and actions associated with agents you
                configure.
              </p>

              <p className="mt-4 text-sm leading-7 text-white/50">
                You should not configure an agent to perform actions that are
                unlawful, deceptive, abusive, unauthorized, or likely to cause
                harm.
              </p>

              <p className="mt-4 text-sm leading-7 text-white/50">
                Automated actions may occur without direct human intervention.
                You are responsible for implementing appropriate review,
                approval, monitoring, and safety controls for important
                workflows.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">
                6. Automations and Integrations
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/50">
                Nexora may allow you to connect third-party services and
                automate actions between them.
              </p>

              <p className="mt-4 text-sm leading-7 text-white/50">
                You authorize Nexora to access connected services only to the
                extent necessary to perform the functions you request.
              </p>

              <p className="mt-4 text-sm leading-7 text-white/50">
                Third-party services may experience outages, restrictions,
                changes, delays, or other limitations. Nexora is not
                responsible for failures caused by third-party services that
                are outside our reasonable control.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">
                7. Your Content and Data
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/50">
                You retain ownership of content and information that you
                submit to Nexora, subject to the rights necessary for us to
                provide the service.
              </p>

              <p className="mt-4 text-sm leading-7 text-white/50">
                You grant Nexora a limited right to host, process, transmit,
                and otherwise handle your content as reasonably necessary to
                operate the services you request.
              </p>

              <p className="mt-4 text-sm leading-7 text-white/50">
                You are responsible for ensuring that you have the necessary
                rights and permissions to provide information or content to
                Nexora and to process it through the services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">
                8. Acceptable Use
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/50">
                You agree not to use Nexora to:
              </p>

              <ul className="mt-6 space-y-3 text-sm leading-7 text-white/45">
                <li>
                  • Violate applicable laws, regulations, or third-party
                  rights.
                </li>
                <li>
                  • Commit fraud, impersonation, deception, or unauthorized
                  activity.
                </li>
                <li>
                  • Distribute malware, malicious code, or harmful content.
                </li>
                <li>
                  • Attempt to gain unauthorized access to Nexora or another
                  person's account.
                </li>
                <li>
                  • Abuse, overload, disrupt, or interfere with the service.
                </li>
                <li>
                  • Circumvent usage limits, security controls, or access
                  restrictions.
                </li>
                <li>
                  • Use automated systems to generate harmful or abusive
                  communications.
                </li>
                <li>
                  • Process information without the necessary legal authority
                  or permission.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">
                9. Communications and Messaging
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/50">
                Certain Nexora features may allow users or AI agents to send
                messages through email, WhatsApp, phone systems, websites, or
                other communication channels.
              </p>

              <p className="mt-4 text-sm leading-7 text-white/50">
                You are responsible for ensuring that your communications
                comply with applicable laws, consent requirements, messaging
                rules, platform policies, and anti-spam requirements.
              </p>

              <p className="mt-4 text-sm leading-7 text-white/50">
                Nexora does not authorize or encourage unsolicited, deceptive,
                abusive, or unlawful communications.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">
                10. Subscriptions and Payments
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/50">
                Certain Nexora features may require a paid subscription or
                usage-based payment.
              </p>

              <p className="mt-4 text-sm leading-7 text-white/50">
                Pricing, billing periods, usage limits, and included features
                will be presented before you purchase a paid plan.
              </p>

              <p className="mt-4 text-sm leading-7 text-white/50">
                Unless otherwise stated, subscriptions may automatically renew
                according to the billing period selected by the customer.
              </p>

              <p className="mt-4 text-sm leading-7 text-white/50">
                We may change pricing or plan features in the future. Where
                required, we will provide appropriate notice before changes
                take effect.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">
                11. Intellectual Property
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/50">
                Nexora and its underlying software, interfaces, branding,
                designs, trademarks, technology, documentation, and other
                materials are owned by or licensed to Nexora and are protected
                by applicable intellectual property laws.
              </p>

              <p className="mt-4 text-sm leading-7 text-white/50">
                These terms do not grant you ownership of Nexora's technology
                or intellectual property.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">
                12. Third-Party Services
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/50">
                Nexora may integrate with third-party products and services.
                Those services are controlled by their respective providers
                and may have separate terms, privacy policies, pricing, and
                availability.
              </p>

              <p className="mt-4 text-sm leading-7 text-white/50">
                Your use of third-party services remains subject to the terms
                and policies of those providers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">
                13. Service Availability
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/50">
                We aim to keep Nexora reliable and available, but we do not
                guarantee uninterrupted or error-free operation.
              </p>

              <p className="mt-4 text-sm leading-7 text-white/50">
                Service availability may be affected by maintenance, technical
                problems, infrastructure failures, third-party services,
                security incidents, or circumstances outside our reasonable
                control.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">
                14. Account Suspension and Termination
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/50">
                We may suspend or terminate access to Nexora where reasonably
                necessary to protect the service, users, third parties, or our
                legal rights, including where a user violates these terms.
              </p>

              <p className="mt-4 text-sm leading-7 text-white/50">
                You may stop using Nexora at any time and may request closure
                of your account, subject to any applicable contractual or
                billing obligations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">
                15. Disclaimer of Warranties
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/50">
                To the extent permitted by applicable law, Nexora is provided
                on an “as available” and “as is” basis without warranties of
                any kind that are not expressly stated in these terms.
              </p>

              <p className="mt-4 text-sm leading-7 text-white/50">
                We do not guarantee that the service will meet every
                requirement, operate without interruption, or produce specific
                business results.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">
                16. Limitation of Liability
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/50">
                To the maximum extent permitted by applicable law, Nexora and
                its operators, employees, partners, and service providers will
                not be liable for indirect, incidental, special,
                consequential, or punitive damages arising from your use of
                the service.
              </p>

              <p className="mt-4 text-sm leading-7 text-white/50">
                Nothing in these terms is intended to exclude or limit
                liability where doing so would be prohibited by applicable
                law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">
                17. Indemnification
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/50">
                To the extent permitted by applicable law, you agree to
                indemnify and hold harmless Nexora from claims, damages,
                liabilities, and expenses arising from your unlawful use of the
                service, violation of these terms, or infringement of another
                party&apos;s rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">
                18. Changes to These Terms
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/50">
                We may update these Terms of Service as Nexora evolves or as
                legal and regulatory requirements change.
              </p>

              <p className="mt-4 text-sm leading-7 text-white/50">
                If we make material changes, we may provide reasonable notice
                before the updated terms become effective.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">
                19. Governing Law
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/50">
                These terms will be governed by the laws applicable to Nexora
                and its operating entity, subject to any mandatory legal
                requirements that apply to you.
              </p>

              <p className="mt-4 text-sm leading-7 text-white/50">
                The final governing law and jurisdiction should be confirmed
                once Nexora&apos;s legal entity and place of incorporation are
                finalized.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">
                20. Contact
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/50">
                If you have questions about these Terms of Service, please
                contact Nexora through the contact information provided on our
                website.
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