import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import {
  company,
  contactNumbers,
  complianceOfficers,
  escalationMatrix,
  kmpDetails,
  complaintAuthorities,
  smartOdr,
  scoresSteps,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Genuine Stock Brokers Pvt. Ltd. — registered & corporate office in Ahmedabad, compliance officer details, investor grievance escalation matrix, KMP details, SCORES and Smart ODR.",
};

const details = [
  {
    label: "Registered & Corporate Office",
    value: company.address.full,
    icon: (
      <>
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </>
    ),
  },
  {
    label: "Phone",
    value: company.phone,
    href: `tel:${company.phone}`,
    icon: (
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    ),
  },
  {
    label: "Email",
    value: company.email,
    href: `mailto:${company.email}`,
    icon: (
      <>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-10 5L2 7" />
      </>
    ),
  },
  {
    label: "Investor grievance e-mail (I.G.)",
    value: company.grievanceEmail,
    href: `mailto:${company.grievanceEmail}`,
    icon: (
      <>
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </>
    ),
  },
  {
    label: "Business hours",
    value: company.hours,
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
  },
];

export default function ContactPage() {
  const mapQuery = encodeURIComponent(company.address.full);
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="We'd love to hear from you."
        description="Reach our team for account opening, trading support or any enquiry. Our registered and corporate office is in Ahmedabad, Gujarat."
        crumbs={[{ label: "Contact Us" }]}
      />

      <section className="container-page py-20">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Details */}
          <div>
            <Reveal>
              <span className="eyebrow">Get in touch</span>
              <h2 className="mt-5 font-display text-3xl font-semibold text-forest sm:text-4xl">
                {company.legalName}
              </h2>
            </Reveal>

            <div className="mt-8 space-y-5">
              {details.map((d, i) => (
                <Reveal key={d.label} delay={i * 80}>
                  <div className="flex gap-4 rounded-2xl border border-mint-200 bg-white p-5">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{d.icon}</svg>
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                        {d.label}
                      </p>
                      {d.href ? (
                        <a href={d.href} className="mt-1 block font-medium text-forest hover:text-brand-700">
                          {d.value}
                        </a>
                      ) : (
                        <p className="mt-1 font-medium text-forest">{d.value}</p>
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Direct numbers */}
            <Reveal delay={110}>
              <div className="mt-6 rounded-2xl border border-brand-200 bg-brand-50 p-6">
                <h3 className="text-sm font-bold uppercase tracking-wider text-forest">
                  Speak to our team
                </h3>
                <p className="mt-1.5 text-sm text-slate-600">
                  Direct numbers for {company.legalName}
                </p>
                <ul className="mt-5 space-y-2.5">
                  {contactNumbers.map((c) => (
                    <li key={c.number}>
                      <a
                        href={`tel:${c.number.replace(/[\s-]/g, "")}`}
                        className="group flex items-center gap-4 rounded-xl bg-white px-4 py-3.5 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-lift"
                      >
                        <span
                          aria-hidden="true"
                          className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand-50 text-sm font-bold text-brand-700"
                        >
                          {c.short}
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500">
                            {c.name} · {c.kind}
                          </span>
                          <span className="mt-0.5 block font-display text-lg font-semibold text-forest group-hover:text-brand-700">
                            {c.number}
                          </span>
                        </span>
                        <svg className="shrink-0 text-brand-600" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 rounded-2xl bg-mint-50 p-5 text-sm text-slate-600">
                <span>CIN: <strong className="text-forest">{company.cin}</strong></span>
                <span>SEBI Reg: <strong className="text-forest">{company.sebi}</strong></span>
                <span>Fax: <strong className="text-forest">{company.fax}</strong></span>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={100}>
            <div className="rounded-3xl border border-mint-200 bg-white p-8 shadow-xl shadow-slate-200/40">
              <h3 className="text-xl font-semibold text-forest">
                Send us a message
              </h3>
              <p className="mt-1.5 text-sm text-slate-600">
                Fill in the form and our team will get back to you.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>

        {/* Office image banner */}
        <Reveal delay={100}>
          <div className="relative mt-12 aspect-[21/9] overflow-hidden rounded-3xl shadow-soft ring-1 ring-mint-200">
            <Image
              src="/5.jpg"
              alt=""
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-forest/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-7 sm:p-9">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-200">
                Registered &amp; Corporate Office
              </p>
              <p className="mt-2 max-w-xl font-display text-2xl font-semibold text-white sm:text-3xl">
                Visit us in Ahmedabad, Gujarat
              </p>
              <p className="mt-2 max-w-lg text-sm text-mint-100">
                {company.address.full}
              </p>
            </div>
          </div>
        </Reveal>

        {/* Map */}
        <Reveal delay={120}>
          <div className="mt-8 overflow-hidden rounded-3xl border border-mint-200">
            <iframe
              title="Genuine Stock Brokers office location"
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
              width="100%"
              height="420"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block w-full"
            />
          </div>
        </Reveal>
      </section>

      <KnowYourBroker />
      <FileComplaints />
      <EscalationMatrix />
      <KmpDetails />
      <LodgeElsewhere />
      <SmartOdrPanel />
      <ScoresPanel />
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Shared heading + table shell                                        */
/* ------------------------------------------------------------------ */
function SectionHeading({
  id,
  eyebrow,
  title,
  description,
}: {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <>
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
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600">
            {description}
          </p>
        </Reveal>
      )}
    </>
  );
}

/**
 * Horizontally scrollable table wrapper. It is focusable and labelled so
 * keyboard users can reach and scroll it when it overflows.
 */
function TableScroller({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div
      tabIndex={0}
      role="region"
      aria-label={label}
      className="mt-8 overflow-x-auto rounded-2xl border border-mint-200 bg-white shadow-card focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
    >
      {children}
    </div>
  );
}

const TH =
  "border-b border-brand-800/20 bg-brand-700 px-5 py-4 text-left text-xs font-bold uppercase tracking-wider text-white";
const TD = "border-b border-mint-200 px-5 py-4 align-top text-sm text-slate-700";

/* ------------------------------------------------------------------ */
/* Know / locate your stock broker                                     */
/* ------------------------------------------------------------------ */
function KnowYourBroker() {
  return (
    <section
      id="know-your-stock-broker"
      className="scroll-mt-28 bg-mint-50 py-20"
      aria-labelledby="know-your-broker-heading"
    >
      <div className="container-page">
        <SectionHeading
          id="know-your-broker-heading"
          eyebrow="Compliance"
          title="Know / Locate Your Stock Broker"
          description="Compliance officer details for each exchange we are a member of."
        />

        <TableScroller label="Compliance officer details by exchange">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <caption className="sr-only">
              Name, email address and phone number of the compliance officer for
              each exchange.
            </caption>
            <thead>
              <tr>
                <th scope="col" className={TH}>Exchange Name</th>
                <th scope="col" className={TH}>Name of Compliance Officer</th>
                <th scope="col" className={TH}>Email ID</th>
                <th scope="col" className={TH}>Phone No.</th>
              </tr>
            </thead>
            <tbody>
              {complianceOfficers.map((o) => (
                <tr key={o.exchange} className="even:bg-mint-50/60">
                  <th scope="row" className={`${TD} font-bold text-forest`}>
                    {o.exchange}
                  </th>
                  <td className={TD}>{o.name}</td>
                  <td className={TD}>
                    <a
                      href={`mailto:${o.email}`}
                      className="font-medium text-brand-700 underline underline-offset-2 hover:text-brand-800"
                    >
                      {o.email}
                    </a>
                  </td>
                  <td className={TD}>
                    <a
                      href={`tel:${o.phone.replace(/\s/g, "")}`}
                      className="font-medium text-brand-700 underline underline-offset-2 hover:text-brand-800"
                    >
                      {o.phone}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableScroller>

        {/* Grievance */}
        <Reveal delay={100}>
          <div className="mt-8 flex flex-col gap-5 rounded-2xl border border-brand-200 bg-white p-7 sm:flex-row sm:items-start sm:p-8">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
            </span>
            <div>
              <h3 className="text-lg font-bold text-forest">
                Grievances &amp; disputes
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">
                For any grievance / dispute, please contact {company.legalName} at
                the above address or I. G. e-mail ID:{" "}
                <a
                  href={`mailto:${company.grievanceEmail}`}
                  className="font-semibold text-brand-700 underline underline-offset-2 hover:text-brand-800"
                >
                  {company.grievanceEmail}
                </a>{" "}
                and phone:{" "}
                <a
                  href={`tel:${company.phone}`}
                  className="font-semibold text-brand-700 underline underline-offset-2 hover:text-brand-800"
                >
                  {company.phone}
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
/* How to file investor complaints                                     */
/* ------------------------------------------------------------------ */
const complaintSteps = [
  {
    title: "Raise it with our customer care",
    desc: `Write to us at ${company.email} or call ${company.phone}. Our customer care team responds during working hours, 9:00 am to 6:00 pm.`,
  },
  {
    title: "Escalate within Genuine",
    desc: "If you are not satisfied with the response, escalate through the escalation matrix below — Head of Customer Care, then the Compliance Officer, then the CEO.",
  },
  {
    title: "Write to our Investor Grievance ID",
    desc: `Unresolved grievances can be sent to our dedicated investor grievance e-mail ID ${company.grievanceEmail}.`,
  },
  {
    title: "Approach SEBI or the exchanges",
    desc: "If your complaint is still not addressed to your satisfaction, lodge it on SEBI SCORES, or on the BSE / NSE investor complaint portals listed below.",
  },
  {
    title: "Use the Smart ODR Portal",
    desc: "Disputes that remain unresolved can be taken to the common Online Dispute Resolution Portal at smartodr.in.",
  },
];

function FileComplaints() {
  return (
    <section
      id="file-investor-complaints"
      className="scroll-mt-28 py-20"
      aria-labelledby="file-complaints-heading"
    >
      <div className="container-page">
        <SectionHeading
          id="file-complaints-heading"
          eyebrow="Step-by-step guide"
          title="How to File Investor Complaints"
          description="A step-by-step guide for filing complaints with us and escalating them if they remain unresolved."
        />

        <ol className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {complaintSteps.map((step, i) => (
            <Reveal key={step.title} as="li" delay={i * 70}>
              <div className="card-lift flex h-full flex-col rounded-2xl border border-mint-200 bg-white p-7 shadow-card">
                <span
                  aria-hidden="true"
                  className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 font-display text-lg font-bold text-white shadow-glow"
                >
                  {i + 1}
                </span>
                <h3 className="mt-5 text-base font-bold text-forest">
                  <span className="sr-only">Step {i + 1}: </span>
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {step.desc}
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
/* Escalation matrix                                                   */
/* ------------------------------------------------------------------ */
function EscalationMatrix() {
  return (
    <section
      id="escalation-matrix"
      className="scroll-mt-28 bg-mint-50 py-20"
      aria-labelledby="escalation-matrix-heading"
    >
      <div className="container-page">
        <SectionHeading
          id="escalation-matrix-heading"
          eyebrow="Investor grievance"
          title="Escalation Matrix"
          description="Escalate in order — customer care first, then the head of customer care, the compliance officer and finally the CEO."
        />

        <TableScroller label="Investor grievance escalation matrix">
          <table className="w-full min-w-[820px] border-collapse text-left">
            <caption className="sr-only">
              Contact person, address, contact number, email address and working
              hours for each level of escalation.
            </caption>
            <thead>
              <tr>
                <th scope="col" className={TH}>Contact Person</th>
                <th scope="col" className={TH}>Address</th>
                <th scope="col" className={TH}>Contact No. &amp; Email Id</th>
                <th scope="col" className={TH}>Working Hours</th>
              </tr>
            </thead>
            <tbody>
              {escalationMatrix.map((row) => (
                <tr key={`${row.person}-${row.role}`} className="even:bg-mint-50/60">
                  <th scope="row" className={`${TD} font-bold text-forest`}>
                    {row.person}
                    <span className="mt-1 block text-xs font-medium text-slate-600">
                      {row.role}
                    </span>
                  </th>
                  <td className={TD}>{row.address}</td>
                  <td className={TD}>
                    <a
                      href={`tel:${row.phone.replace(/\s/g, "")}`}
                      className="font-medium text-brand-700 underline underline-offset-2 hover:text-brand-800"
                    >
                      {row.phone}
                    </a>
                    <br />
                    <a
                      href={`mailto:${row.email}`}
                      className="font-medium text-brand-700 underline underline-offset-2 hover:text-brand-800"
                    >
                      {row.email}
                    </a>
                  </td>
                  <td className={`${TD} whitespace-nowrap`}>{row.hours}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableScroller>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* KMP details                                                         */
/* ------------------------------------------------------------------ */
function KmpDetails() {
  return (
    <section
      id="kmp-details"
      className="scroll-mt-28 py-20"
      aria-labelledby="kmp-heading"
    >
      <div className="container-page">
        <SectionHeading
          id="kmp-heading"
          eyebrow="Key Managerial Personnel"
          title="KMP Details"
          description="Names and contact details of all Key Managerial Personnel including the Compliance Officer, after the escalation matrix."
        />

        <TableScroller label="Key Managerial Personnel details">
          <table className="w-full min-w-[720px] border-collapse text-left">
            <caption className="sr-only">
              Name, designation, contact number and email address of each Key
              Managerial Person.
            </caption>
            <thead>
              <tr>
                <th scope="col" className={TH}>Name of the Person</th>
                <th scope="col" className={TH}>Designation</th>
                <th scope="col" className={TH}>Contact Number</th>
                <th scope="col" className={TH}>Email Id</th>
              </tr>
            </thead>
            <tbody>
              {kmpDetails.map((p) => (
                <tr key={p.designation} className="even:bg-mint-50/60">
                  <th scope="row" className={`${TD} font-bold text-forest`}>
                    {p.name}
                  </th>
                  <td className={TD}>{p.designation}</td>
                  <td className={TD}>
                    {p.phone === "N.A" ? (
                      p.phone
                    ) : (
                      <a
                        href={`tel:${p.phone.replace(/\s/g, "")}`}
                        className="font-medium text-brand-700 underline underline-offset-2 hover:text-brand-800"
                      >
                        {p.phone}
                      </a>
                    )}
                  </td>
                  <td className={TD}>
                    {p.email === "N.A" ? (
                      p.email
                    ) : (
                      <a
                        href={`mailto:${p.email}`}
                        className="font-medium text-brand-700 underline underline-offset-2 hover:text-brand-800"
                      >
                        {p.email}
                      </a>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableScroller>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Lodge a complaint elsewhere                                         */
/* ------------------------------------------------------------------ */
function LodgeElsewhere() {
  return (
    <section
      id="lodge-a-complaint"
      className="scroll-mt-28 bg-mint-50 py-20"
      aria-labelledby="lodge-heading"
    >
      <div className="container-page">
        <SectionHeading
          id="lodge-heading"
          eyebrow="Regulators & exchanges"
          title="Still not resolved?"
          description="In absence of a response, or if your complaint is not addressed to your satisfaction, you may lodge a complaint with:"
        />

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {complaintAuthorities.map((a, i) => (
            <Reveal key={a.href} as="li" delay={i * 80}>
              <a
                href={a.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card-lift group flex h-full flex-col rounded-2xl border border-mint-200 bg-white p-7 shadow-card"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3 3 7v6c0 5 3.8 8.4 9 9 5.2-.6 9-4 9-9V7l-9-4z" /></svg>
                </span>
                <h3 className="mt-5 text-lg font-bold text-forest">{a.label}</h3>
                <p className="mt-2 flex-1 break-words text-sm text-slate-600">
                  {a.href.replace(/^https?:\/\//, "")}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
                  Lodge a complaint
                  <svg className="transition-transform group-hover:translate-x-0.5" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17 17 7M7 7h10v10" /></svg>
                  <span className="sr-only">(opens in a new tab)</span>
                </span>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Smart ODR                                                           */
/* ------------------------------------------------------------------ */
function SmartOdrPanel() {
  return (
    <section
      id="smart-odr"
      className="scroll-mt-28 py-20"
      aria-labelledby="contact-smart-odr-heading"
    >
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-600 via-brand-700 to-forest px-7 py-12 text-white shadow-lift sm:px-12">
            <div className="bg-dots absolute inset-0 opacity-20" />
            <div className="blob -right-10 -top-10 h-72 w-72 bg-brand-400/25" />

            <div className="relative z-10 max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] backdrop-blur">
                Online dispute resolution
              </span>
              <h2
                id="contact-smart-odr-heading"
                className="mt-5 font-display text-3xl font-semibold leading-tight sm:text-4xl"
              >
                Smart ODR Portal
              </h2>
              <p className="mt-5 text-base leading-relaxed text-white/90">
                {smartOdr.body}
              </p>
              <p className="mt-4 text-base text-white/90">
                Link for the same is{" "}
                <a
                  href={smartOdr.loginHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-white underline underline-offset-4"
                >
                  {smartOdr.loginHref}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </p>
              <a
                href={smartOdr.loginHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-brand-800 shadow-xl transition-transform hover:-translate-y-0.5"
              >
                Login to SmartODR
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17 17 7M7 7h10v10" /></svg>
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* SCORES                                                              */
/* ------------------------------------------------------------------ */
function ScoresPanel() {
  return (
    <section
      id="scores"
      className="scroll-mt-28 bg-mint-50 py-20"
      aria-labelledby="scores-heading"
    >
      <div className="container-page">
        <SectionHeading
          id="scores-heading"
          eyebrow="SEBI SCORES"
          title="Filing of Complaints on SCORES — Easy & Quick"
        />

        <ol className="mt-10 grid gap-5 md:grid-cols-3">
          {scoresSteps.map((step, i) => (
            <Reveal key={step.title} as="li" delay={i * 90}>
              <div className="card-lift flex h-full flex-col rounded-2xl border border-mint-200 bg-white p-7 shadow-card">
                <span
                  aria-hidden="true"
                  className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 font-display text-lg font-bold text-brand-700"
                >
                  {String.fromCharCode(97 + i)}
                </span>
                <h3 className="mt-5 text-base font-bold text-forest">
                  {step.title}
                </h3>
                {step.items.length > 0 && (
                  <ul className="mt-3 space-y-2">
                    {step.items.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2.5 text-sm leading-relaxed text-slate-600"
                      >
                        <svg className="mt-1 shrink-0 text-brand-600" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={140}>
          <a
            href="https://scores.sebi.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-10"
          >
            Register on the SCORES portal
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17 17 7M7 7h10v10" /></svg>
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
