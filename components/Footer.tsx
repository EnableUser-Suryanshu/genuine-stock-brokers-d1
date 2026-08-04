import Link from "next/link";
import Image from "next/image";
import { company, nav, investorDocs, contactNumbers } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-mint-200 bg-mint-50">
      <div className="blob -top-24 right-0 h-72 w-72 bg-brand-200/40" />
      <div className="blob bottom-0 left-1/4 h-72 w-72 bg-brand-300/20" />

      <div className="container-page relative z-10 grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        {/* Brand */}
        <div>
          <Link href="/" aria-label="Genuine Stock Brokers — Home" className="inline-flex">
            <Image
              src="/logo.png"
              alt=""
              width={375}
              height={129}
              className="h-16 w-auto"
            />
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-600">
            A leading professional trading firm in India, powering our people
            with world-class training, technology and support.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={company.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="grid h-10 w-10 place-items-center rounded-lg border border-mint-200 bg-white text-slate-500 transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-600"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.2 8h4.6v14H.2V8zm7.2 0h4.4v1.9h.06c.6-1.1 2.08-2.26 4.28-2.26 4.58 0 5.42 3 5.42 6.9V22h-4.6v-6.6c0-1.58-.03-3.6-2.2-3.6-2.2 0-2.54 1.72-2.54 3.5V22H7.4V8z" /></svg>
            </a>
            <a
              href={company.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter / X"
              className="grid h-10 w-10 place-items-center rounded-lg border border-mint-200 bg-white text-slate-500 transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-600"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 1.5h3.6l-7.9 9 9.3 12.3h-7.3l-5.7-7.5-6.5 7.5H.7l8.4-9.7L.2 1.5h7.5l5.2 6.9 5.9-6.9zm-1.3 18.6h2L6.5 3.6H4.4l13.2 16.5z" /></svg>
            </a>
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-forest">
            Navigate
          </h2>
          <ul className="mt-5 space-y-3 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-slate-600 transition-colors hover:text-brand-700"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Investor info */}
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-forest">
            Investors
          </h2>
          <ul className="mt-5 space-y-3 text-sm">
            {investorDocs.slice(0, 4).map((d) => (
              <li key={d.title}>
                <a
                  href={d.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 transition-colors hover:text-brand-700"
                >
                  {d.title}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            ))}
            <li>
              <Link
                href="/#investor-complaint-data"
                className="text-slate-600 transition-colors hover:text-brand-700"
              >
                Investor Complaint Data
              </Link>
            </li>
            <li>
              <Link
                href="/contact-us#escalation-matrix"
                className="text-slate-600 transition-colors hover:text-brand-700"
              >
                Escalation Matrix
              </Link>
            </li>
            <li>
              <Link
                href="/#smart-odr"
                className="text-slate-600 transition-colors hover:text-brand-700"
              >
                Smart ODR Portal
              </Link>
            </li>
            <li>
              <Link
                href="/downloads"
                className="text-slate-600 transition-colors hover:text-brand-700"
              >
                Downloads
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-forest">
            Reach us
          </h2>
          <ul className="mt-5 space-y-4 text-sm text-slate-600">
            <li className="flex gap-3">
              <svg className="mt-0.5 shrink-0 text-brand-600" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
              <span>{company.address.full}</span>
            </li>
            <li className="flex gap-3">
              <svg className="mt-0.5 shrink-0 text-brand-600" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
              <span className="flex flex-col gap-1.5">
                {contactNumbers.map((c) => (
                  <a
                    key={c.number}
                    href={`tel:${c.number.replace(/[\s-]/g, "")}`}
                    className="hover:text-brand-700"
                  >
                    <span className="text-slate-500">({c.short}) {c.name}</span>{" "}
                    {c.number}
                  </a>
                ))}
              </span>
            </li>
            <li className="flex gap-3">
              <svg className="shrink-0 text-brand-600" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 5L2 7" /></svg>
              <a href={`mailto:${company.email}`} className="hover:text-brand-700">{company.email}</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 border-t border-mint-200">
        <div className="container-page flex flex-col gap-3 py-6 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {company.legalName} All rights reserved.
          </p>
          <p className="flex flex-wrap gap-x-4 gap-y-1">
            <span>CIN: {company.cin}</span>
            <span>SEBI Reg: {company.sebi}</span>
          </p>
        </div>
        <div className="container-page pb-6 text-[11px] leading-relaxed text-slate-600">
          We don&apos;t give stock tips, and have not authorized anyone to trade
          on behalf of others. Investments in the securities market are subject
          to market risks; read all the related documents carefully before
          investing.
        </div>
      </div>
    </footer>
  );
}
