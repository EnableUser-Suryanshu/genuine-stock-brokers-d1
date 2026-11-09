"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { sebiAwareness } from "@/lib/site";
import {
  RISK_DISCLOSURE_CLOSED_EVENT,
  RISK_DISCLOSURE_STORAGE_KEY,
} from "@/components/RiskDisclosureModal";

const STORAGE_KEY = "gsb-sebi-awareness-seen";

type Lang = keyof typeof sebiAwareness;

/**
 * SEBI "Samajh se Investing Simple" investor-awareness notice, with an
 * English / Hindi toggle. Shown once per browser session on the home page,
 * after the Risk Disclosures dialog has been closed so the two never stack.
 * Accessible dialog: focus moves in and is trapped, Escape closes, and focus
 * returns to where it was before the dialog opened.
 */
export default function SebiAwarenessModal() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<Lang>("en");
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const openerRef = useRef<HTMLElement | null>(null);

  const t = sebiAwareness[lang];

  /* Open once per session, after the risk disclosure dialog is dismissed. */
  useEffect(() => {
    const read = (key: string) => {
      try {
        return window.sessionStorage.getItem(key) === "1";
      } catch {
        return false;
      }
    };
    if (read(STORAGE_KEY)) return;

    let timer: number | undefined;
    const show = (delay: number) => {
      timer = window.setTimeout(() => {
        openerRef.current = document.activeElement as HTMLElement | null;
        setOpen(true);
      }, delay);
    };

    if (read(RISK_DISCLOSURE_STORAGE_KEY)) {
      show(700);
      return () => window.clearTimeout(timer);
    }

    const onRiskClosed = () => show(350);
    window.addEventListener(RISK_DISCLOSURE_CLOSED_EVENT, onRiskClosed, { once: true });
    return () => {
      window.removeEventListener(RISK_DISCLOSURE_CLOSED_EVENT, onRiskClosed);
      window.clearTimeout(timer);
    };
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
      className="fixed inset-0 z-[80] flex items-end justify-center overflow-y-auto bg-black/60 p-4 backdrop-blur-sm sm:items-center sm:p-6"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="sebi-awareness-title"
        aria-describedby="sebi-awareness-desc"
        lang={lang}
        className="animate-fade-up relative my-auto w-full max-w-lg overflow-hidden rounded-[1.25rem] bg-white shadow-lift"
      >
        {/* Header */}
        <div className="relative overflow-hidden bg-gradient-to-br from-[#9b0c24] via-[#b80f2b] to-[#d02a44] px-7 pb-7 pt-6 text-white sm:px-8">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -right-16 h-56 w-72 rounded-full bg-white/10"
          />

          <button
            ref={closeRef}
            type="button"
            onClick={close}
            className="absolute right-3 top-3 z-10 grid h-10 w-10 place-items-center rounded-full text-white transition-colors hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <span className="sr-only">{t.closeLabel}</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" /></svg>
          </button>

          <p className="relative z-10 text-sm text-white/90" lang="en">
            <span className="font-extrabold underline decoration-2 underline-offset-2">SEBI</span>{" "}
            presents
          </p>
          <h2
            id="sebi-awareness-title"
            className="relative z-10 mt-2 pr-8 text-3xl font-extrabold leading-tight sm:text-[2.1rem]"
          >
            {t.title}
          </h2>
        </div>

        {/* Body */}
        <div className="px-7 py-6 sm:px-8">
          <div className="flex flex-col-reverse gap-4 sm:flex-row sm:items-start sm:justify-between">
            <ul id="sebi-awareness-desc" className="list-disc space-y-2.5 pl-5 text-sm text-slate-700 marker:text-slate-500">
              {t.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>

            <div
              role="group"
              aria-label="Language / भाषा"
              className="flex shrink-0 self-end rounded-xl bg-slate-100 p-1 sm:self-start"
            >
              {(
                [
                  ["en", "English"],
                  ["hi", "हिंदी"],
                ] as const
              ).map(([code, label]) => (
                <button
                  key={code}
                  type="button"
                  lang={code}
                  aria-pressed={lang === code}
                  onClick={() => setLang(code)}
                  className={`rounded-lg px-3 py-1.5 text-sm font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b80f2b] ${
                    lang === code
                      ? "border-2 border-[#b80f2b] bg-white text-slate-900"
                      : "border-2 border-transparent text-slate-700 hover:text-slate-900"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={close}
            className="mt-8 w-full rounded-xl bg-[#c8102e] px-6 py-4 text-base font-bold text-white transition-colors hover:bg-[#a50d26] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c8102e]"
          >
            {t.cta}
          </button>

          <p className="mt-4 flex items-center justify-center gap-2 text-center text-xs text-slate-600">
            <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5l-8-3z" fill="#fde2e6" stroke="#c8102e" strokeWidth="1.5" /><path d="m8.5 12 2.5 2.5 4.5-5" fill="none" stroke="#c8102e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            {t.footer}
          </p>
        </div>
      </div>
    </div>
  );
}
