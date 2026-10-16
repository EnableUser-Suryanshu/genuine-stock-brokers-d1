import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import MediaBand from "@/components/MediaBand";
import CtaBanner from "@/components/CtaBanner";
import { kycDocuments, company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Account Opening Procedure",
  description:
    "Open your trading and demat account with Genuine Stock Brokers — a simple, transparent step-by-step procedure with a clear list of required documents.",
};

const steps = [
  {
    title: "Download the account opening form",
    desc: "Download and fill the Client Registration (KYC) form, or the Saral Account Opening form, from our Downloads section.",
  },
  {
    title: "Complete your KYC details",
    desc: "Fill in your personal, financial and bank account details accurately, and complete the Know Your Customer (KYC) requirements.",
  },
  {
    title: "Attach supporting documents",
    desc: "Self-attest and attach copies of your identity, address, bank and income proofs as listed in the requirements.",
  },
  {
    title: "Submit & verification",
    desc: "Submit the completed form with documents to our office. Our team verifies your details and completes in-person verification (IPV).",
  },
  {
    title: "Account activation",
    desc: "Once verified, your trading and demat account is activated and your login credentials are shared with you.",
  },
];

const documents = [
  "PAN Card (mandatory)",
  "Aadhaar Card / Passport / Voter ID / Driving Licence (identity & address proof)",
  "Recent passport-size photographs",
  "Cancelled cheque or bank statement / passbook copy",
  "Income proof (for derivatives) — bank statement, ITR or salary slip",
  "Signature on white paper",
];

export default function AccountOpeningPage() {
  return (
    <>
      <PageHero
        eyebrow="Account Opening Procedure"
        title="Open your Trading Account."
        description="A simple, transparent procedure to start trading with Genuine Stock Brokers. Follow the steps below and keep your documents ready."
        crumbs={[{ label: "Account Opening" }]}
      />

      {/* Steps */}
      <section className="container-page py-20">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Reveal>
              <span className="eyebrow">Step by step</span>
              <h2 className="mt-5 font-display text-3xl font-semibold text-forest sm:text-4xl">
                How to open your account
              </h2>
            </Reveal>

            <div className="mt-10 space-y-2">
              {steps.map((s, i) => (
                <Reveal key={s.title} delay={i * 80}>
                  <div className="relative flex gap-5 rounded-2xl border border-mint-200 bg-white p-6">
                    <div className="flex flex-col items-center">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand-700 font-display text-lg font-semibold text-white">
                        {i + 1}
                      </span>
                      {i < steps.length - 1 && (
                        <span className="mt-2 h-full w-px flex-1 bg-slate-200" />
                      )}
                    </div>
                    <div className="pb-2">
                      <h3 className="text-lg font-semibold text-forest">
                        {s.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Sidebar: documents + downloads */}
          <div className="space-y-6">
            <Reveal delay={120}>
              <div className="rounded-3xl border border-mint-200 bg-mint-50 p-8">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                  Documents required
                </h3>
                <ul className="mt-5 space-y-3">
                  {documents.map((d) => (
                    <li
                      key={d}
                      className="flex items-start gap-3 text-sm text-slate-700"
                    >
                      <svg className="mt-0.5 shrink-0 text-brand-600" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={180}>
              <div className="relative overflow-hidden rounded-[2rem] bg-brand-800 p-8 text-white shadow-lift">
                <div className="bg-dots pointer-events-none absolute inset-0 opacity-20" />
                <h3 className="relative z-10 text-sm font-semibold uppercase tracking-wider text-brand-100">
                  Download forms
                </h3>
                <div className="relative z-10 mt-5 space-y-3">
                  {kycDocuments.slice(0, 2).map((doc) => (
                    <a
                      key={doc.title}
                      href={doc.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between gap-3 rounded-xl border border-white/15 bg-white/10 px-5 py-4 backdrop-blur transition-colors hover:bg-white/20"
                    >
                      <span className="text-sm font-medium">{doc.title}</span>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-brand-100"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" /></svg>
                    </a>
                  ))}
                </div>
                <p className="relative z-10 mt-6 text-sm leading-relaxed text-white/80">
                  Need help? Call us at{" "}
                  <a href={`tel:${company.phone}`} className="font-semibold text-white hover:underline">
                    {company.phone}
                  </a>{" "}
                  or email{" "}
                  <a href={`mailto:${company.email}`} className="font-semibold text-white hover:underline">
                    {company.email}
                  </a>
                  .
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Investing image band */}
      <MediaBand
        src="/6.jpg"
        alt=""
        eyebrow="Start investing"
        title="Your account is the first step to the markets."
        paragraphs={[
          "Once your trading and demat account is active, you can trade across cash and derivatives segments with the training, technology and support of Genuine Stock Brokers behind you.",
          "Have your documents ready and our team will guide you through every step of the way.",
        ]}
        bullets={[
          "Simple, transparent onboarding",
          "Trade across cash and derivatives segments",
          "Dedicated support throughout the process",
        ]}
        reverse
      />

      <CtaBanner />
    </>
  );
}
