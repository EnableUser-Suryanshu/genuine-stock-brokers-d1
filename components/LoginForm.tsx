"use client";

import { useId, useRef, useState } from "react";
import { company } from "@/lib/site";

type Errors = { userid?: string; password?: string };

/**
 * Client login form.
 *
 * There is no authentication endpoint wired up yet, so the form validates
 * locally and then explains where to go — it never pretends to have signed
 * anyone in. Point `PLATFORM_URL` at the trading platform to make it live.
 */
const PLATFORM_URL: string | null = null;

export default function LoginForm() {
  const uid = useId();
  const [errors, setErrors] = useState<Errors>({});
  const [notice, setNotice] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const userRef = useRef<HTMLInputElement>(null);
  const passRef = useRef<HTMLInputElement>(null);

  const userErrId = `${uid}-userid-error`;
  const passErrId = `${uid}-password-error`;

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const userid = String(data.get("userid") || "").trim();
    const password = String(data.get("password") || "");

    const next: Errors = {};
    if (!userid) next.userid = "Enter your user ID.";
    if (!password) next.password = "Enter your password.";
    setErrors(next);
    setNotice(false);

    // Move focus to the first field with a problem so the error is announced.
    if (next.userid) {
      userRef.current?.focus();
      return;
    }
    if (next.password) {
      passRef.current?.focus();
      return;
    }

    if (PLATFORM_URL) {
      window.location.href = PLATFORM_URL;
      return;
    }
    setNotice(true);
  }

  const field =
    "w-full rounded-xl border bg-white px-4 py-3 text-sm text-forest outline-none transition-colors placeholder:text-slate-500 focus:ring-2 focus:ring-brand-100";

  return (
    <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-5">
      {/* User ID */}
      <div>
        <label
          htmlFor={`${uid}-userid`}
          className="mb-1.5 block text-sm font-semibold text-forest"
        >
          User ID
        </label>
        <input
          ref={userRef}
          id={`${uid}-userid`}
          name="userid"
          type="text"
          autoComplete="username"
          placeholder="Enter your user ID"
          aria-invalid={errors.userid ? true : undefined}
          aria-describedby={errors.userid ? userErrId : undefined}
          className={`${field} ${
            errors.userid
              ? "border-rose-600 focus:border-rose-600"
              : "border-slate-500 focus:border-brand-500"
          }`}
        />
        {errors.userid && (
          <p id={userErrId} className="mt-1.5 flex items-center gap-1.5 text-sm font-medium text-rose-700">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M12 8v5M12 16h.01" /></svg>
            {errors.userid}
          </p>
        )}
      </div>

      {/* Password */}
      <div>
        <div className="mb-1.5 flex items-baseline justify-between gap-3">
          <label
            htmlFor={`${uid}-password`}
            className="block text-sm font-semibold text-forest"
          >
            Password
          </label>
          <button
            type="button"
            onClick={() => setShowPassword((v) => !v)}
            aria-pressed={showPassword}
            className="rounded text-xs font-semibold text-brand-700 underline underline-offset-2 hover:text-brand-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
          >
            {showPassword ? "Hide" : "Show"}
            <span className="sr-only"> password</span>
          </button>
        </div>
        <input
          ref={passRef}
          id={`${uid}-password`}
          name="password"
          type={showPassword ? "text" : "password"}
          autoComplete="current-password"
          placeholder="Enter your password"
          aria-invalid={errors.password ? true : undefined}
          aria-describedby={errors.password ? passErrId : undefined}
          className={`${field} ${
            errors.password
              ? "border-rose-600 focus:border-rose-600"
              : "border-slate-500 focus:border-brand-500"
          }`}
        />
        {errors.password && (
          <p id={passErrId} className="mt-1.5 flex items-center gap-1.5 text-sm font-medium text-rose-700">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M12 8v5M12 16h.01" /></svg>
            {errors.password}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-700 px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition-all hover:-translate-y-0.5 hover:bg-brand-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700"
      >
        Log in
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
      </button>

      {/* Status region — always present so it is reliably announced. */}
      <div role="status" aria-live="polite">
        {notice && (
          <div className="flex gap-3 rounded-xl border border-brand-200 bg-brand-50 p-4">
            <svg className="mt-0.5 shrink-0 text-brand-700" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M12 16v-4M12 8h.01" /></svg>
            <p className="text-sm leading-relaxed text-forest">
              Online login is not yet connected on this site. Please use the
              trading terminal link shared by your relationship manager, or
              contact us at{" "}
              <a
                href={`mailto:${company.email}`}
                className="font-semibold text-brand-700 underline underline-offset-2"
              >
                {company.email}
              </a>{" "}
              /{" "}
              <a
                href={`tel:${company.phone}`}
                className="font-semibold text-brand-700 underline underline-offset-2"
              >
                {company.phone}
              </a>
              .
            </p>
          </div>
        )}
      </div>
    </form>
  );
}
