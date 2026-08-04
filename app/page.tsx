import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import CtaBanner from "@/components/CtaBanner";
import InvestorQuotes from "@/components/InvestorQuotes";
import RiskDisclosureModal from "@/components/RiskDisclosureModal";
import {
  company,
  stats,
  exchanges,
  attentionInvestors,
  charterQuickLinks,
  investorDocs,
  investorAwareness,
  investorComplaintData,
  smartOdr,
  cautionPoints,
  clientCollateral,
  riskDisclosures,
  riskDisclosureSource,
} from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <RiskDisclosureModal />
      <Hero />
      <LogoStrip />
      <AboutPreview />
      <Services />
      <Features />
      <Compliance />
      <InvestorQuotes />
      <AttentionInvestors />
      <InvestorCharter />
      <InvestorAwareness />
      <InvestorComplaintData />
      <SmartOdr />
      <CautionAwareness />
      <RiskDisclosures />
      <ClientCollaterals />
      <CtaBanner />
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Shared section heading                                              */
/* ------------------------------------------------------------------ */
function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = "left",
}: {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : ""}>
      <Reveal>
        <span className="eyebrow">{eyebrow}</span>
      </Reveal>
      <Reveal delay={80}>
        <h2 id={id} className="h-display mt-5 text-3xl leading-tight sm:text-4xl">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={140}>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}

/** Small "opens in a new tab" arrow + screen-reader hint. */
function ExternalHint() {
  return (
    <>
      <svg
        className="shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M7 17 17 7M7 7h10v10" />
      </svg>
      <span className="sr-only">(opens in a new tab)</span>
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-mesh pt-[128px]">
      {/* Decorative photographic backdrop — see .bg-photo in globals.css */}
      <div className="bg-photo bg-photo-hero" aria-hidden="true" />
      <div className="bg-photo-scrim bg-photo-scrim-hero" aria-hidden="true" />
      <div className="bg-dots absolute inset-0 opacity-50" />
      <div className="blob -right-24 -top-10 h-[30rem] w-[30rem] bg-brand-300/30" />
      <div className="blob -bottom-40 -left-10 h-[26rem] w-[26rem] bg-brand-200/40" />

      <div className="container-page relative z-10 grid items-center gap-14 pb-20 pt-6 lg:grid-cols-[1.05fr_0.95fr] lg:pb-28">
        {/* Left copy */}
        <div>
          <Reveal>
            <span className="eyebrow">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-brand-500" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-500" />
              </span>
              Professional trading since 1996
            </span>
          </Reveal>

          <Reveal delay={90}>
            <h1 className="h-display mt-6 text-[2.6rem] leading-[1.04] sm:text-5xl lg:text-[3.7rem]">
              Exceptional trading{" "}
              <span className="text-gradient">expertise</span> &amp; genuine
              support.
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
              {company.name} is a leading professional trading firm in India. We
              power our people with world-class training and the latest, best
              technology — so every trade is backed by genuine expertise.
            </p>
          </Reveal>

          <Reveal delay={230}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/account-opening-procedure" className="btn-primary">
                Open an Account
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </Link>
              <Link href="/professional-trading" className="btn-outline">
                Explore Professional Trading
              </Link>
            </div>
          </Reveal>

          {/* Inline stats */}
          <Reveal delay={300}>
            <div className="mt-12 grid max-w-lg grid-cols-3 divide-x divide-mint-200 rounded-2xl border border-mint-200 bg-white/70 backdrop-blur">
              {stats.slice(0, 3).map((s) => (
                <div key={s.label} className="px-5 py-4 text-center">
                  <p className="font-display text-2xl font-semibold text-forest">
                    {s.value}
                  </p>
                  {/* slate-600, not 500: the hero backdrop lifts the effective
                      background luminance and 500 falls under 4.5:1. */}
                  <p className="mt-1 text-[11px] leading-tight text-slate-600">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Right visual card */}
        <Reveal delay={200}>
          <div className="relative">
            <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-brand-300/40 to-brand-100/30 blur-2xl" />
            <div className="relative rounded-[1.75rem] border border-mint-200 bg-white p-6 shadow-soft">
              {/* Ticker header */}
              <div className="flex items-center justify-between border-b border-mint-200 pb-4">
                <div>
                  <p className="text-xs font-medium text-slate-500">
                    Live Market Pulse
                  </p>
                  <p className="font-display text-2xl font-semibold text-forest">
                    NIFTY 50
                  </p>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full bg-brand-50 px-3 py-1 text-xs font-bold text-brand-700">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M3 17l6-6 4 4 8-9" /></svg>
                  +1.24%
                </span>
              </div>

              {/* Chart */}
              <div className="mt-5">
                <svg viewBox="0 0 320 120" className="h-32 w-full">
                  <defs>
                    <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#16b56a" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="#16b56a" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0 90 L40 80 L80 88 L120 60 L160 66 L200 40 L240 50 L280 26 L320 18"
                    fill="none"
                    stroke="#0a9a58"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M0 90 L40 80 L80 88 L120 60 L160 66 L200 40 L240 50 L280 26 L320 18 L320 120 L0 120 Z"
                    fill="url(#g)"
                  />
                  <circle cx="320" cy="18" r="4" fill="#0a9a58" />
                </svg>
              </div>

              {/* Rows */}
              <div className="mt-4 space-y-2.5">
                {[
                  { s: "RELIANCE", p: "₹ 2,914.50", c: "+0.82%", up: true },
                  { s: "HDFC BANK", p: "₹ 1,678.20", c: "+1.15%", up: true },
                  { s: "INFY", p: "₹ 1,542.90", c: "-0.34%", up: false },
                ].map((r) => (
                  <div
                    key={r.s}
                    className="flex items-center justify-between rounded-xl bg-mint-50 px-4 py-3"
                  >
                    <span className="text-sm font-bold text-forest">{r.s}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-slate-600">{r.p}</span>
                      <span
                        className={`text-xs font-bold ${
                          r.up ? "text-brand-700" : "text-rose-700"
                        }`}
                      >
                        {r.c}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-5 -left-5 hidden animate-float rounded-2xl border border-mint-200 bg-white px-5 py-4 shadow-soft sm:block">
              <p className="font-display text-2xl font-bold text-forest">200+</p>
              <p className="text-xs text-slate-500">Trading professionals</p>
            </div>
            <div className="absolute -right-4 top-8 hidden rounded-2xl border border-mint-200 bg-white px-4 py-3 shadow-soft md:block">
              <div className="flex items-center gap-2">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-50 text-brand-600">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="m9 12 2 2 4-4" /><circle cx="12" cy="12" r="9" /></svg>
                </span>
                <div>
                  <p className="text-xs font-bold text-forest">SEBI Reg.</p>
                  <p className="text-[10px] text-slate-500">Member NSE · BSE</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Logo / trust strip                                                  */
/* ------------------------------------------------------------------ */
function LogoStrip() {
  return (
    <section className="border-y border-mint-200 bg-white">
      <div className="container-page flex flex-col items-center gap-6 py-8 sm:flex-row sm:justify-between">
        <p className="text-sm font-medium text-slate-500">
          Member of India&apos;s major exchanges
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {["NSE", "BSE", "ASE", "SEBI Registered"].map((x) => (
            <span
              key={x}
              className="font-display text-lg font-semibold tracking-wide text-slate-500"
            >
              {x}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* About preview                                                       */
/* ------------------------------------------------------------------ */
function AboutPreview() {
  return (
    <section className="container-page grid items-center gap-14 py-24 lg:grid-cols-2">
      <Reveal>
        <div className="relative">
          <div className="blob -left-8 -top-8 h-52 w-52 bg-brand-300/40" />
          <div className="blob -bottom-10 right-0 h-52 w-52 bg-brand-200/50" />

          <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem] shadow-soft ring-1 ring-mint-200">
            <Image
              src="/2.jpg"
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest/30 via-transparent to-transparent" />
          </div>

          {/* Floating stat cards */}
          <div className="absolute -bottom-6 -left-4 rounded-2xl border border-mint-200 bg-white/95 px-5 py-4 shadow-soft backdrop-blur sm:-left-6">
            <p className="font-display text-3xl font-bold text-forest">200+</p>
            <p className="text-xs text-slate-500">Trading professionals</p>
          </div>
          <div className="absolute -right-3 top-6 rounded-2xl border border-mint-200 bg-white/95 px-5 py-4 shadow-soft backdrop-blur sm:-right-5">
            <p className="font-display text-3xl font-bold text-brand-700">2008</p>
            <p className="text-xs text-slate-500">Scaled pro trading</p>
          </div>
        </div>
      </Reveal>

      <div>
        <Reveal>
          <span className="eyebrow">About Genuine</span>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="h-display mt-5 text-3xl leading-tight sm:text-4xl">
            A private limited company built on genuine trading expertise.
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-5 text-base leading-relaxed text-slate-600">
            Based in Ahmedabad, Genuine Stock Brokers is engaged in professional
            trading in the financial markets and holds memberships with the
            National Stock Exchange of India, Bombay Stock Exchange and Ahmedabad
            Stock Exchange.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            We have grown from a team size of 5 in January 2008 to a team in
            excess of 200 today. Our employees are central to our strategy — we
            provide world-class training and power them with the latest and best
            technology and support possible.
          </p>
        </Reveal>
        <Reveal delay={260}>
          <Link
            href="/about"
            className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-700"
          >
            Read our story
            <svg className="transition-transform group-hover:translate-x-1" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Services                                                            */
/* ------------------------------------------------------------------ */
const services = [
  {
    title: "Professional Trading",
    desc: "Intraday buying and selling of financial instruments — positions are always closed before market close, capitalising on short-term price movements.",
    href: "/professional-trading",
    icon: <path d="M3 3v18h18M7 14l3-3 3 3 5-6" />,
  },
  {
    title: "Trading & Demat Accounts",
    desc: "Open your trading and demat account with a simple, transparent procedure and start trading across cash and derivatives segments.",
    href: "/account-opening-procedure",
    icon: <path d="M3 5h18v14H3zM3 10h18M7 15h4" />,
  },
  {
    title: "World-Class Training",
    desc: "We recruit and train young graduates and experienced professionals with a competency-based approach to recruitment and development.",
    href: "/careers",
    icon: <path d="M22 10 12 5 2 10l10 5 10-5zM6 12v5c0 1 3 3 6 3s6-2 6-3v-5" />,
  },
  {
    title: "Technology & Support",
    desc: "Our combination of technology, experience and infrastructure is second to none in the industry — built to give traders the edge.",
    href: "/about",
    icon: <path d="M9 3v2m6-2v2M9 19v2m6-2v2M3 9h2m-2 6h2m14-6h2m-2 6h2M7 7h10v10H7z" />,
  },
];

function Services() {
  return (
    <section className="bg-mint-50 py-24">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="eyebrow">What we offer</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="h-display mt-5 text-3xl leading-tight sm:text-4xl">
              Everything you need to trade professionally
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              From account opening to advanced professional trading, we combine
              expertise, training and technology under one roof.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 90}>
              <Link
                href={s.href}
                className="card-lift group flex h-full flex-col rounded-2xl border border-mint-200 bg-white p-7 shadow-card"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{s.icon}</svg>
                </span>
                <h3 className="mt-5 text-lg font-bold text-forest">{s.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                  {s.desc}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
                  Learn more
                  <svg className="transition-transform group-hover:translate-x-1" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Features / why us                                                   */
/* ------------------------------------------------------------------ */
const features = [
  {
    title: "Multi-city presence",
    desc: "A member of the major exchanges in India with dealing expertise in cash and derivatives markets.",
  },
  {
    title: "Market insight",
    desc: "Our people have a wealth of experience and knowledge about professional trading and market dynamics.",
  },
  {
    title: "A vibrant workplace",
    desc: "We offer a vibrant working environment which rewards top performance and lifelong learning.",
  },
  {
    title: "Best-in-class infrastructure",
    desc: "Our combination of technology, experience and infrastructure is second to none in the industry.",
  },
];

function Features() {
  return (
    <section className="container-page py-24">
      <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <Reveal>
            <span className="eyebrow">Why Genuine</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="h-display mt-5 text-3xl leading-tight sm:text-4xl">
              Trading expertise, market insight, informed decisions.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-5 text-base leading-relaxed text-slate-600">
              If stock markets excite you, Genuine Stock Brokers is your broker
              of first choice. We blend deep experience with a competency-based
              approach to recruitment, development and lifelong learning.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <Link
              href="/careers"
              className="btn-primary mt-8"
            >
              Build a career with us
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </Link>
          </Reveal>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 90}>
              <div className="card-lift h-full rounded-2xl border border-mint-200 bg-white p-6 shadow-card">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-glow">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                </span>
                <h3 className="mt-4 text-base font-bold text-forest">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {f.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Compliance / exchanges                                              */
/* ------------------------------------------------------------------ */
function Compliance() {
  return (
    <section className="bg-mint-50 py-24">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Memberships &amp; registration</span>
          <h2 className="h-display mt-5 text-3xl leading-tight sm:text-4xl">
            Regulated, registered and member of India&apos;s major exchanges
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {exchanges.map((e, i) => (
            <Reveal key={e} delay={i * 90}>
              <div className="card-lift rounded-2xl border border-mint-200 bg-white p-7 text-center shadow-card">
                <span className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-600">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 12 2 2 4-4" /><circle cx="12" cy="12" r="9" /></svg>
                </span>
                <p className="mt-4 text-base font-bold text-forest">{e}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-slate-500">
            <span>SEBI Registration: <strong className="text-forest">{company.sebi}</strong></span>
            <span className="hidden h-4 w-px bg-mint-200 sm:block" />
            <span>CIN: <strong className="text-forest">{company.cin}</strong></span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Attention Investors                                                 */
/* ------------------------------------------------------------------ */
function AttentionInvestors() {
  return (
    <section
      id="attention-investors"
      className="scroll-mt-28 bg-white py-24"
      aria-labelledby="attention-investors-heading"
    >
      <div className="container-page">
        <SectionHeading
          id="attention-investors-heading"
          eyebrow="Exchange advisory"
          title="Attention Investors"
          description="Points every investor dealing through a stock broker should know, as mandated by the exchanges."
          align="center"
        />

        <ol className="mt-14 grid gap-5 md:grid-cols-2">
          {attentionInvestors.map((point, i) => (
            <Reveal
              key={point}
              as="li"
              delay={i * 70}
              className={
                // The long FAQ point reads better across the full width.
                i === 3 ? "md:col-span-2" : ""
              }
            >
              <div className="card-lift flex h-full gap-5 rounded-2xl border border-mint-200 bg-white p-6 shadow-card sm:p-7">
                <span
                  aria-hidden="true"
                  className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 font-display text-lg font-bold text-white shadow-glow"
                >
                  {i + 1}
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">
                    Point {i + 1}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-700">
                    {point}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>

        {/* No stock tips notice */}
        <Reveal delay={120}>
          <div className="mt-10 flex flex-col gap-5 rounded-2xl border border-amber-300 bg-amber-50 p-7 sm:flex-row sm:items-start sm:p-9">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-amber-100 text-amber-700">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 9v4m0 4h.01M10.3 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.7 3.86a2 2 0 0 0-3.42 0z" /></svg>
            </span>
            <div>
              <h3 className="text-lg font-bold text-amber-900">
                We never give stock tips
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-amber-900">
                As a business we don&apos;t give stock tips, and have not
                authorized anyone to trade on behalf of others. If you find anyone
                claiming to be part of {company.legalName} and offering such
                services, please send us an email to{" "}
                <a
                  href={`mailto:${company.email}`}
                  className="font-semibold underline underline-offset-2 hover:text-amber-950"
                >
                  {company.email}
                </a>
                .
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Investor Charter                                                    */
/* ------------------------------------------------------------------ */
function InvestorCharter() {
  return (
    <section
      id="investor-charter"
      className="scroll-mt-28 bg-mint-50 py-24"
      aria-labelledby="investor-charter-heading"
    >
      <div className="container-page">
        <SectionHeading
          id="investor-charter-heading"
          eyebrow="Rights & responsibilities"
          title="Investor Charter"
          description="Read the investor charters published by the exchanges and depositories, and access the documents we are required to publish."
          align="center"
        />

        {/* Exchange / depository quick links */}
        <Reveal delay={120}>
          <div className="mx-auto mt-12 max-w-3xl rounded-[1.75rem] border border-mint-200 bg-white p-8 text-center shadow-card">
            <h3 className="font-display text-xl font-semibold text-forest">
              Investor Charter links
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Official charters and tools published by the exchanges and
              depositories.
            </p>
            <ul className="mt-7 flex flex-wrap items-center justify-center gap-3">
              {charterQuickLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 rounded-full bg-brand-700 px-6 py-3 text-sm font-semibold text-white shadow-glow transition-all hover:-translate-y-0.5 hover:bg-brand-600"
                  >
                    {l.label}
                    <ExternalHint />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* Documents */}
        <div className="mt-12">
          <Reveal>
            <h3 className="text-center font-display text-xl font-semibold text-forest">
              Documents &amp; disclosures
            </h3>
          </Reveal>

          <ol className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {investorDocs.map((doc, i) => (
              <Reveal key={doc.title} as="li" delay={i * 70}>
                <a
                  href={doc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-lift group flex h-full flex-col rounded-2xl border border-mint-200 bg-white p-7 shadow-card"
                >
                  <div className="flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6M9 15h6M9 11h3" /></svg>
                    </span>
                    <span className="rounded-full border border-mint-200 bg-mint-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-600">
                      {doc.type}
                    </span>
                  </div>
                  <h4 className="mt-5 text-base font-bold text-forest">
                    {doc.title}
                  </h4>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                    {doc.desc}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
                    Open
                    <ExternalHint />
                  </span>
                </a>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Investor Awareness                                                  */
/* ------------------------------------------------------------------ */
function InvestorAwareness() {
  return (
    <section
      id="investor-awareness"
      className="scroll-mt-28 py-24"
      aria-labelledby="investor-awareness-heading"
    >
      <div className="container-page grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <div className="relative">
            <div className="blob -left-8 -top-8 h-52 w-52 bg-brand-300/40" />
            <div className="blob -bottom-10 right-0 h-52 w-52 bg-brand-200/50" />
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-soft ring-1 ring-mint-200">
              <Image
                src="/3.jpg"
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/40 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 left-1/2 w-[85%] -translate-x-1/2 rounded-2xl border border-mint-200 bg-white/95 px-5 py-4 text-center shadow-soft backdrop-blur">
              <p className="text-sm font-bold text-forest">
                An educated investor is a protected investor!
              </p>
            </div>
          </div>
        </Reveal>

        <div>
          <SectionHeading
            id="investor-awareness-heading"
            eyebrow="Stay informed"
            title="Investor Awareness"
            description="Resources that help you stay updated, verify information and protect yourself in the securities market."
          />

          <ul className="mt-10 space-y-5">
            {investorAwareness.map((item, i) => (
              <Reveal key={item.href} as="li" delay={i * 80}>
                <div className="card-lift flex gap-4 rounded-2xl border border-mint-200 bg-white p-6 shadow-card">
                  <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand-50 text-brand-600">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M12 16v-4M12 8h.01" /></svg>
                  </span>
                  <div>
                    <p className="text-sm leading-relaxed text-slate-700">
                      {item.text}
                    </p>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 underline underline-offset-4 hover:text-brand-800"
                    >
                      {item.linkLabel}
                      <ExternalHint />
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Investor Complaint Data                                             */
/* ------------------------------------------------------------------ */
function InvestorComplaintData() {
  return (
    <section
      id="investor-complaint-data"
      className="scroll-mt-28 bg-mint-50 py-24"
      aria-labelledby="investor-complaint-heading"
    >
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-mint-200 bg-white p-8 shadow-card sm:p-12">
            <div className="blob -right-16 -top-16 h-64 w-64 bg-brand-200/50" />

            <div className="relative z-10 flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <span className="eyebrow">Transparency</span>
                <h2
                  id="investor-complaint-heading"
                  className="h-display mt-5 text-3xl leading-tight sm:text-4xl"
                >
                  Investor Complaint Data
                </h2>
                <p className="mt-5 text-base leading-relaxed text-slate-700">
                  Investor complaint data for {company.legalName} — Stock Brokers:
                  SEBI Reg. No.{" "}
                  <strong className="text-forest">{company.sebi}</strong>. Data for
                  the month of{" "}
                  <strong className="text-forest">
                    {investorComplaintData.period}
                  </strong>
                  .
                </p>
              </div>

              <a
                href={investorComplaintData.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex shrink-0 items-center gap-2.5 rounded-full bg-brand-700 px-7 py-4 text-sm font-semibold text-white shadow-glow transition-all hover:-translate-y-0.5 hover:bg-brand-600"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" /></svg>
                View &amp; download the PDF
                <span className="sr-only">
                  , investor complaint data for {investorComplaintData.period}{" "}
                  (opens in a new tab)
                </span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Smart ODR Portal                                                    */
/* ------------------------------------------------------------------ */
function SmartOdr() {
  return (
    <section
      id="smart-odr"
      className="scroll-mt-28 py-24"
      aria-labelledby="smart-odr-heading"
    >
      <div className="container-page grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <SectionHeading
            id="smart-odr-heading"
            eyebrow="Dispute resolution"
            title="Smart ODR Portal"
          />
          <Reveal delay={140}>
            <p className="mt-6 text-base leading-relaxed text-slate-700">
              {smartOdr.body}
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={smartOdr.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group btn-primary"
              >
                Go to the ODR Portal
                <ExternalHint />
              </a>
              <a
                href={smartOdr.loginHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group btn-outline"
              >
                Login to SmartODR
                <ExternalHint />
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div className="relative rounded-[1.75rem] border border-mint-200 bg-mint-50 p-8 shadow-card">
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-glow">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3 3 7v6c0 5 3.8 8.4 9 9 5.2-.6 9-4 9-9V7l-9-4z" /><path d="m9 12 2 2 4-4" /></svg>
            </span>
            <h3 className="mt-5 font-display text-xl font-semibold text-forest">
              SEBI Circular
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              No. {smartOdr.circular}
            </p>
            <dl className="mt-6 space-y-4 border-t border-mint-200 pt-6 text-sm">
              <div>
                <dt className="font-semibold text-forest">Who can use it</dt>
                <dd className="mt-1 text-slate-600">
                  Investors and market participants seeking resolution of
                  complaints and disputes.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-forest">Portal link</dt>
                <dd className="mt-1">
                  <a
                    href={smartOdr.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 font-semibold text-brand-700 underline underline-offset-4"
                  >
                    smartodr.in
                    <ExternalHint />
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Caution & awareness                                                 */
/* ------------------------------------------------------------------ */
function CautionAwareness() {
  return (
    <section
      id="caution-awareness"
      className="scroll-mt-28 bg-mint-50 py-24"
      aria-labelledby="caution-heading"
    >
      <div className="container-page">
        <SectionHeading
          id="caution-heading"
          eyebrow="Please be careful"
          title="Caution & Awareness — Clients / Investors"
          description="Clients and investors are cautioned against the following practices, which can lead to financial loss."
          align="center"
        />

        <ol className="mx-auto mt-14 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cautionPoints.map((point, i) => (
            <Reveal key={point} as="li" delay={i * 70}>
              <div className="card-lift flex h-full flex-col rounded-2xl border border-rose-200 bg-white p-7 shadow-card">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-rose-50 text-rose-700">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M15 9 9 15M9 9l6 6" /></svg>
                </span>
                <p className="mt-5 text-sm leading-relaxed text-slate-700">
                  {point}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Risk disclosures on derivatives (always visible on the page)        */
/* ------------------------------------------------------------------ */
function RiskDisclosures() {
  return (
    <section
      id="risk-disclosures"
      className="scroll-mt-28 py-24"
      aria-labelledby="risk-disclosures-heading"
    >
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-forest via-brand-800 to-brand-700 px-7 py-12 text-white shadow-lift sm:px-12 sm:py-14">
            <div className="bg-dots absolute inset-0 opacity-20" />
            <div className="blob -right-10 -top-10 h-72 w-72 bg-brand-400/25" />

            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white backdrop-blur">
                Mandatory disclosure
              </span>
              <h2
                id="risk-disclosures-heading"
                className="mt-5 font-display text-3xl font-semibold leading-tight sm:text-4xl"
              >
                Risk Disclosures on Derivatives
              </h2>

              <ol className="mt-9 grid gap-5 sm:grid-cols-2">
                {riskDisclosures.map((point, i) => (
                  <li
                    key={point}
                    className="flex gap-4 rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur"
                  >
                    <span
                      aria-hidden="true"
                      className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-white/20 text-sm font-bold"
                    >
                      {i + 1}
                    </span>
                    <p className="text-sm leading-relaxed text-white/90">
                      {point}
                    </p>
                  </li>
                ))}
              </ol>

              <a
                href={riskDisclosureSource}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-brand-800 shadow-xl transition-transform hover:-translate-y-0.5"
              >
                Read the SEBI study
                <ExternalHint />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Client Collaterals                                                  */
/* ------------------------------------------------------------------ */
function ClientCollaterals() {
  return (
    <section
      id="client-collaterals"
      className="scroll-mt-28 bg-mint-50 py-24"
      aria-labelledby="client-collaterals-heading"
    >
      <div className="container-page">
        <Reveal>
          <div className="flex flex-col items-start gap-8 rounded-[2rem] border border-mint-200 bg-white p-8 shadow-card sm:p-12 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-start gap-6">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-brand-50 text-brand-600">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2M2 12h20" /></svg>
              </span>
              <div>
                <h2
                  id="client-collaterals-heading"
                  className="h-display text-2xl leading-tight sm:text-3xl"
                >
                  Client Collaterals
                </h2>
                <p className="mt-3 max-w-xl text-base leading-relaxed text-slate-700">
                  Check your collateral details reported to the clearing
                  corporation on the NSE Clearing investor helpline portal.
                </p>
              </div>
            </div>

            <a
              href={clientCollateral.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group btn-primary shrink-0"
            >
              Check your collateral details
              <ExternalHint />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
