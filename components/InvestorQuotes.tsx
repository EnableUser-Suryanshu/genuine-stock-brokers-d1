"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { investorQuotes } from "@/lib/site";

const INTERVAL = 8000;

/**
 * Rotating SEBI / exchange investor advisories.
 * Accessible carousel: auto-rotation pauses on hover, focus and via an
 * explicit play/pause control, and is disabled entirely when the visitor
 * prefers reduced motion. Slides are announced politely while paused.
 */
export default function InvestorQuotes() {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [paused, setPaused] = useState(false);
  const regionRef = useRef<HTMLDivElement>(null);

  const total = investorQuotes.length;
  const go = useCallback(
    (next: number) => setIndex(((next % total) + total) % total),
    [total]
  );

  /* Respect prefers-reduced-motion: never auto-advance. */
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setPlaying(!mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    if (!playing || paused) return;
    const timer = window.setInterval(
      () => setIndex((i) => (i + 1) % total),
      INTERVAL
    );
    return () => window.clearInterval(timer);
  }, [playing, paused, total]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      go(index + 1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      go(index - 1);
    }
  };

  return (
    <section
      className="relative overflow-hidden border-y border-mint-200 bg-mint-50 py-16"
      aria-labelledby="investor-advisories-heading"
    >
      <div className="blob -left-20 top-0 h-64 w-64 bg-brand-200/40" />
      <div className="blob -right-20 bottom-0 h-64 w-64 bg-brand-300/25" />

      <div className="container-page relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Issued in the interest of investors</span>
          <h2
            id="investor-advisories-heading"
            className="h-display mt-5 text-2xl leading-tight sm:text-3xl"
          >
            Investor advisories
          </h2>
        </div>

        <div
          ref={regionRef}
          role="group"
          aria-roledescription="carousel"
          aria-label="Investor advisories"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          onKeyDown={onKeyDown}
          className="relative mx-auto mt-10 max-w-4xl"
        >
          <div className="relative rounded-[1.75rem] border border-mint-200 bg-white px-6 py-10 shadow-card sm:px-16 sm:py-12">
            <svg
              className="mx-auto text-brand-200"
              width="34"
              height="34"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M7.2 6C4.9 7.5 3.5 10 3.5 12.9c0 3 1.9 5.1 4.4 5.1 2.2 0 3.9-1.7 3.9-3.8 0-2.1-1.5-3.6-3.4-3.6-.4 0-.9.1-1 .1.3-1.4 1.7-3 3.2-3.9L7.2 6zm9.6 0c-2.3 1.5-3.7 4-3.7 6.9 0 3 1.9 5.1 4.4 5.1 2.2 0 3.9-1.7 3.9-3.8 0-2.1-1.5-3.6-3.4-3.6-.4 0-.9.1-1 .1.3-1.4 1.7-3 3.2-3.9L16.8 6z" />
            </svg>

            {/*
              Only the active slide is in the DOM flow; the rest are hidden.
              Per the ARIA carousel pattern the live region is silent while
              slides auto-rotate, and announces once rotation is stopped.
            */}
            <div
              aria-live={playing && !paused ? "off" : "polite"}
              aria-atomic="true"
              className="mt-6"
            >
              {investorQuotes.map((quote, i) => (
                <div
                  key={quote}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${i + 1} of ${total}`}
                  hidden={i !== index}
                >
                  <blockquote className="text-center">
                    <p className="text-base leading-relaxed text-slate-700 sm:text-lg">
                      {quote}
                    </p>
                    <footer className="mt-5 text-sm font-semibold text-brand-700">
                      — {" "}
                      <cite className="not-italic">Genuine Stock Brokers</cite>
                    </footer>
                  </blockquote>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="mt-6 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => go(index - 1)}
              className="grid h-11 w-11 place-items-center rounded-full border border-mint-200 bg-white text-forest shadow-card transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-700"
            >
              <span className="sr-only">Previous advisory</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg>
            </button>

            <div className="flex items-center gap-2">
              {investorQuotes.map((quote, i) => (
                <button
                  key={quote}
                  type="button"
                  onClick={() => go(i)}
                  aria-current={i === index ? "true" : undefined}
                  className={`h-2.5 rounded-full transition-all ${
                    i === index
                      ? "w-7 bg-brand-600"
                      : "w-2.5 bg-brand-200 hover:bg-brand-300"
                  }`}
                >
                  <span className="sr-only">
                    Show advisory {i + 1} of {total}
                  </span>
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => go(index + 1)}
              className="grid h-11 w-11 place-items-center rounded-full border border-mint-200 bg-white text-forest shadow-card transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-700"
            >
              <span className="sr-only">Next advisory</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg>
            </button>

            <button
              type="button"
              onClick={() => setPlaying((p) => !p)}
              className="ml-1 grid h-11 w-11 place-items-center rounded-full border border-mint-200 bg-white text-forest shadow-card transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-700"
            >
              <span className="sr-only">
                {playing ? "Pause automatic rotation" : "Start automatic rotation"}
              </span>
              {playing ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 5h4v14H7zm6 0h4v14h-4z" /></svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
