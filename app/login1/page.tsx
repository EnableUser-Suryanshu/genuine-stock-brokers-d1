import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import LoginForm from "@/components/LoginForm";
import { company, memberships } from "@/lib/site";

export const metadata: Metadata = {
  title: "Login",
  description:
    "User login for Genuine Stock Brokers. Seamlessly log in to access your account and manage your trading effortlessly.",
};

const assurances = [
  {
    title: "Secure by design",
    desc: "Never share your login ID, password or OTP with anyone — including our staff.",
    icon: (
      <>
        <rect x="4" y="10" width="16" height="11" rx="2" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3" />
      </>
    ),
  },
  {
    title: "Registered & regulated",
    desc: `SEBI Registration ${company.sebi} — member of NSE, BSE and ASE.`,
    icon: (
      <>
        <path d="M12 3 3 7v6c0 5 3.8 8.4 9 9 5.2-.6 9-4 9-9V7l-9-4z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
  },
  {
    title: "Help when you need it",
    desc: `Our support team is available 9:00 am to 6:00 pm on ${company.phone}.`,
    icon: (
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    ),
  },
];

export default function LoginPage() {
  return (
    <section className="relative overflow-hidden bg-mesh pt-[104px]">
      <div className="bg-dots absolute inset-0 opacity-40" />
      <div className="blob -right-24 -top-20 h-96 w-96 bg-brand-300/25" />
      <div className="blob -bottom-24 left-0 h-96 w-96 bg-brand-200/35" />

      <div className="container-page relative z-10 py-14 sm:py-16">
        <div className="grid overflow-hidden rounded-[2rem] border border-mint-200 bg-white shadow-lift lg:grid-cols-[1.05fr_0.95fr]">
          {/* ---------------------------------------------------------- */}
          {/* Brand panel                                                */}
          {/* ---------------------------------------------------------- */}
          {/* Deliberately dark end of the green scale: the translucent chips
              and mint body copy on top need a low-luminance backdrop to stay
              above 4.5:1. brand-700 was too light for the small text. */}
          <div className="relative isolate overflow-hidden bg-gradient-to-br from-brand-800 via-brand-900 to-forest px-8 py-12 text-white sm:px-12 sm:py-14">
            {/* Decorative photographic backdrop */}
            <div
              aria-hidden="true"
              className="absolute inset-0 -z-10 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-[0.12] mix-blend-luminosity"
            />
            <div className="bg-dots absolute inset-0 -z-10 opacity-20" />
            <div className="blob -right-16 -top-16 -z-10 h-72 w-72 bg-brand-400/25" />

            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] backdrop-blur">
              Client portal
            </span>

            <h1 className="mt-6 font-display text-3xl font-semibold leading-[1.1] sm:text-4xl">
              User access made easy.
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-mint-100">
              Seamlessly log in to access your personalised experience and
              manage your account effortlessly.
            </p>

            <ul className="mt-10 space-y-6">
              {assurances.map((a) => (
                <li key={a.title} className="flex gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/20 bg-white/10">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{a.icon}</svg>
                  </span>
                  <div>
                    <h2 className="text-sm font-bold">{a.title}</h2>
                    <p className="mt-1 text-sm leading-relaxed text-mint-100">
                      {a.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            {/* Membership codes */}
            <dl className="mt-10 grid grid-cols-2 gap-4 border-t border-white/15 pt-8">
              {memberships.map((m) => (
                <div
                  key={m.exchange}
                  className="rounded-xl border border-white/15 bg-white/5 px-4 py-3.5 backdrop-blur"
                >
                  {/* mint-100 rather than brand-200: the lighter mint clears
                      4.5:1 across the whole gradient, brand-200 does not. */}
                  <dt className="text-xs font-semibold uppercase tracking-wider text-mint-100">
                    {m.exchange}
                  </dt>
                  <dd className="mt-1 font-display text-lg font-semibold">
                    Code {m.code}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* ---------------------------------------------------------- */}
          {/* Form panel                                                 */}
          {/* ---------------------------------------------------------- */}
          <div className="px-8 py-12 sm:px-12 sm:py-14">
            <Link
              href="/"
              aria-label={`${company.name} — Home`}
              className="inline-flex rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600"
            >
              <Image
                src="/logo.png"
                alt=""
                width={375}
                height={129}
                className="h-12 w-auto"
              />
            </Link>

            <h2 className="h-display mt-9 text-2xl sm:text-[1.75rem]">
              Log in to your account
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Enter the credentials issued to you to access your trading and
              demat account.
            </p>

            <LoginForm />

            <div className="mt-8 border-t border-mint-200 pt-6">
              <p className="text-sm text-slate-600">
                Don&apos;t have an account yet?{" "}
                <Link
                  href="/account-opening-procedure"
                  className="font-semibold text-brand-700 underline underline-offset-2 hover:text-brand-800"
                >
                  Open one today
                </Link>
              </p>
              <p className="mt-2.5 text-sm text-slate-600">
                Trouble signing in? Write to{" "}
                <a
                  href={`mailto:${company.email}`}
                  className="font-semibold text-brand-700 underline underline-offset-2 hover:text-brand-800"
                >
                  {company.email}
                </a>{" "}
                or call{" "}
                <a
                  href={`tel:${company.phone}`}
                  className="font-semibold text-brand-700 underline underline-offset-2 hover:text-brand-800"
                >
                  {company.phone}
                </a>
                .
              </p>
            </div>

            {/* Security caution — mirrors the SEBI caution notice elsewhere */}
            <div className="mt-8 flex gap-3 rounded-xl border border-amber-300 bg-amber-50 p-4">
              <svg className="mt-0.5 shrink-0 text-amber-700" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 9v4m0 4h.01M10.3 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.7 3.86a2 2 0 0 0-3.42 0z" /></svg>
              <p className="text-sm leading-relaxed text-amber-900">
                Never share your trading credentials — login ID, password or
                OTP — with anyone. We will never ask you for them.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
