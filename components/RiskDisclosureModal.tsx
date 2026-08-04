"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { riskDisclosures, riskDisclosureSource } from "@/lib/site";

const STORAGE_KEY = "gsb-risk-disclosure-seen";

/**
 * SEBI-mandated "Risk Disclosures on Derivatives" notice.
 * Shown once per browser session on the home page, as an accessible dialog:
 * focus is moved in and trapped, Escape closes, and focus returns to the
 * element that was focused before the dialog opened.
 */
export default function RiskDisclosureModal() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const openerRef = useRef<HTMLElement | null>(null);

  /* Open once per session, after paint so it never blocks first render. */
  useEffect(() => {
    let seen = false;
    try {
      seen = window.sessionStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      /* storage unavailable — show it anyway */
    }
    if (seen) return;

    const timer = window.setTimeout(() => {
      openerRef.current = document.activeElement as HTMLElement | null;
      setOpen(true);
    }, 700);
    return () => window.clearTimeout(timer);
  }, []);

  const close = useCallback(() => {
    try {
      window.sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
    setOpen(false);
    openerRef.current?.focus?.();
  }, []);

  /* Focus management, focus trap, Escape and scroll lock. */
  useEffect(() => {
    if (!open) return;

    closeRef.current?.focus();

    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        close();
        return;
      }
      if (e.key !== "Tab") return;

      const panel = panelRef.current;
      if (!panel) return;
      const focusables = panel.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement;

      if (e.shiftKey && (active === first || !panel.contains(active))) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = overflow;
    };
  }, [open, close]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[80] flex items-end justify-center overflow-y-auto bg-forest/70 p-4 backdrop-blur-sm sm:items-center sm:p-6"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="risk-disclosure-title"
        aria-describedby="risk-disclosure-desc"
        className="animate-fade-up relative my-auto w-full max-w-2xl overflow-hidden rounded-[1.75rem] border border-mint-200 bg-white shadow-lift"
      >
        {/* Header */}
        <div className="relative overflow-hidden bg-gradient-to-br from-brand-600 via-brand-700 to-forest px-7 py-8 text-white sm:px-10">
          <div className="bg-dots absolute inset-0 opacity-20" />
          <div className="blob -right-8 -top-10 h-48 w-48 bg-brand-400/30" />

          <button
            ref={closeRef}
            type="button"
            onClick={close}
            className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full border border-white/25 bg-white/10 text-white transition-colors hover:bg-white/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <span className="sr-only">Close risk disclosures</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" /></svg>
          </button>

          <div className="relative z-10 flex items-start gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-white/25 bg-white/15">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 9v4m0 4h.01M10.3 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.7 3.86a2 2 0 0 0-3.42 0z" /></svg>
            </span>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-200">
                Mandatory disclosure
              </p>
              <h2
                id="risk-disclosure-title"
                className="mt-1.5 font-display text-2xl font-semibold leading-tight sm:text-[1.75rem]"
              >
                Risk Disclosures on Derivatives
              </h2>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="px-7 py-7 sm:px-10 sm:py-8">
          <ul id="risk-disclosure-desc" className="space-y-4">
            {riskDisclosures.map((point, i) => (
              <li key={point} className="flex gap-4">
                <span
                  aria-hidden="true"
                  className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-brand-50 text-xs font-bold text-brand-700"
                >
                  {i + 1}
                </span>
                <p className="text-sm leading-relaxed text-slate-700">{point}</p>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={riskDisclosureSource}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex-1"
            >
              Learn more
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17 17 7M7 7h10v10" /></svg>
              <span className="sr-only">(opens in a new tab)</span>
            </a>
            <button type="button" onClick={close} className="btn-outline flex-1">
              I understand
            </button>
          </div>

          <p className="mt-5 text-center text-xs leading-relaxed text-slate-500">
            Source: SEBI study on profit and loss of individual traders dealing in
            the equity F&amp;O segment.
          </p>
        </div>
      </div>
    </div>
  );
}
