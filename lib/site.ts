// Centralized site content & configuration for Genuine Stock Brokers.
// Content sourced from genuinestockbrokers.com — preserved as-is.

export const company = {
  name: "Genuine Stock Brokers",
  legalName: "Genuine Stock Brokers Pvt. Ltd.",
  tagline: "Exceptional trading expertise and support",
  cin: "U67120GJ1996PTC119507",
  sebi: "INZ000243831",
  phone: "+91-79-40308992",
  fax: "+91-79-40308992",
  email: "genuine1996@gmail.com",
  // Investor grievance e-mail ID
  grievanceEmail: "ig.genuine@gmail.com",
  hours: "9:00 AM – 5:00 PM",
  address: {
    line1: "B-601, Gopal Palace, Near Shiromani Tower",
    line2: "Nehru Nagar, Ambawadi, Ahmedabad",
    city: "Ahmedabad",
    state: "Gujarat",
    pin: "380015",
    full: "B-601, Gopal Palace, Near Shiromani Tower, Nehru Nagar, Ahmedabad - 380015, Gujarat",
  },
  social: {
    twitter: "https://x.com/",
    linkedin:
      "https://www.linkedin.com/company/genuine-stock-brokers-pvt-ltd/about/",
  },
  loginUrl: "/login1",
};

// Direct contact numbers for Genuine Stock Brokers Private Limited.
// (M) = mobile, (O) = office landline.
export const contactNumbers = [
  { name: "Mr. Rakesh", kind: "Mobile", short: "M", number: "9558089881" },
  { name: "Mr. Dhiren", kind: "Mobile", short: "M", number: "8128899210" },
  { name: "Office", kind: "Landline", short: "O", number: "079-40308992" },
];

export type NavItem = { label: string; href: string };

export const nav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Professional Trading", href: "/professional-trading" },
  { label: "Downloads", href: "/downloads" },
  { label: "Careers", href: "/careers" },
  { label: "Useful Links", href: "/useful-links" },
  { label: "Account Opening", href: "/account-opening-procedure" },
  { label: "Contact Us", href: "/contact-us" },
];

export const stats = [
  { value: "200+", label: "Professionals" },
  { value: "5", label: "Offices across India" },
  { value: "30+", label: "Years of trust" },
  { value: "3", label: "Exchange memberships" },
];

// Exchange memberships with member codes (as published in the site footer).
export const memberships = [
  { exchange: "BSE Member", code: "3184", sebi: "INZ000243831" },
  { exchange: "NSE Member", code: "10477", sebi: "INZ000243831" },
];

export const exchanges = [
  "National Stock Exchange of India (NSE)",
  "Bombay Stock Exchange (BSE)",
  "Ahmedabad Stock Exchange (ASE)",
];

// KYC documents from /downloads
export const kycDocuments = [
  {
    title: "Client Registration Form",
    href: "https://assets.zyrosite.com/mxBME7QjQ6So46Po/kyc-genuine-account-opening-form-m5KLPGgejqfyKvyj.pdf",
  },
  {
    title: "Prudent Risk & Internal Control Policy",
    href: "https://assets.zyrosite.com/mxBME7QjQ6So46Po/internal-control-review-of-business-compliance-dJo5l2ZRr5FWl1Bx.pdf",
  },
  {
    title: "Anti Money Laundering Policy",
    href: "https://assets.zyrosite.com/mxBME7QjQ6So46Po/anti-money-laundering-policy-mxBMzNOB17t01gGP.pdf",
  },
  {
    title: "Saral Account Opening Form",
    href: "https://assets.zyrosite.com/mxBME7QjQ6So46Po/saral-account-opening-form-YNqPDe7269SRn2nB.pdf",
  },
  {
    title: "Policy for Inactive Client",
    href: "https://assets.zyrosite.com/mxBME7QjQ6So46Po/policy-for-inactive-account-dJo5lDLXPbsRbBwJ.pdf",
  },
];

// Policies from /downloads
export const policyDocuments = [
  "Cyber Security and Resilience Policy 2023",
  "SOP for Handling Cyber Incidents",
  "Password Policy",
  "User Management & Access Control Policy",
  "Backup & Restoration Policy",
  "Information Security & Network Security Policy",
  "Application Software Policy",
  "Change Management & Patch Management Policy",
  "Business Continuity & Disaster Recovery Plan",
  "Audit Trail Policy",
  "Policy to Handle Technical Glitch",
  "Procedures for Reporting Unusual Activities",
  "Denial of Service DOS-DDOS Attack Policy",
  "Remote Access Policy",
  "Capacity Management Plan",
  "Internet Access and Usage of Social Media Policy",
  "Storage Media Disposal Policy",
  "Incident Response Plan",
  "Day Begin & Day End Process",
  "BYOD Policy",
  "Data Protection, Retention & Disposal Policy",
  "Policy on Data Breach",
];

export const vernacularLinks = [
  {
    title: "BSE Registration Documents (Vernacular)",
    href: "https://www.bseindia.com/static/investors/client_regislanguages.aspx?expandable=3",
  },
  {
    title: "NSE Registration Documents (Vernacular)",
    href: "https://www.nseindia.com/trade/members-client-registration-documents",
  },
];

// Useful links (regulatory / investor resources) from /useful-links and homepage
export const usefulLinks = [
  {
    title: "Report Unsolicited Messages",
    desc: "NSE portal to report unsolicited investment messages.",
    href: "https://www.nseindia.com/regulations/unsolicited-messages-report",
  },
  {
    title: "Link Aadhaar with PAN",
    desc: "Income Tax e-filing portal for PAN–Aadhaar linkage.",
    href: "https://eportal.incometax.gov.in/iec/foservices/#/pre-login/bl-link-aadhaar",
  },
  {
    title: "Investor Education (BSE IPF)",
    desc: "BSE Investor Protection Fund education resources.",
    href: "https://www.bseipf.com/investors_education.html",
  },
  {
    title: "SmartODR",
    desc: "Online Dispute Resolution portal for the securities market.",
    href: "https://smartodr.in/",
  },
  {
    title: "Client Collateral (NSE Clearing)",
    desc: "View client collateral details at NSE Clearing.",
    href: "https://investorhelpline.nseclearing.in/ClientCollateral/welcomeCLUser",
  },
  {
    title: "SolvoSky Technology",
    desc: "Our technology and development partner.",
    href: "https://www.solvosky.com/",
  },
];

/* ------------------------------------------------------------------ */
/* Investor Charter                                                     */
/* ------------------------------------------------------------------ */

// Exchange / depository investor-charter quick links
export const charterQuickLinks = [
  { label: "NSE", href: "https://www.nseindia.com/invest/investor-charter" },
  {
    label: "BSE",
    href: "https://www.bseindia.com/static/investors/investor_charter.aspx",
  },
  { label: "NSDL", href: "https://nsdl.co.in/publications/investor_charter.php" },
  {
    label: "Margin Calculator",
    href: "https://www.nseindia.com/market-data/margin-calculator",
  },
];

// Regulatory / investor documents referenced on the homepage & footer
export const investorDocs = [
  {
    title: "Investor Charter — Stock Broker",
    desc: "Rights, responsibilities and services investors can expect from us.",
    href: "https://assets.zyrosite.com/mxBME7QjQ6So46Po/investor-charter-stock-broker-ALp7027jy3tbXx25.pdf",
    type: "PDF",
  },
  {
    title: "Bank Account List",
    desc: "Designated bank accounts of Genuine Stock Brokers Pvt. Ltd.",
    href: "https://assets.zyrosite.com/mxBME7QjQ6So46Po/genuine-bank-account-mnlqZ48kOeIeL0ND.pdf",
    type: "PDF",
  },
  {
    title: "Segregation & Monitoring of Collateral",
    desc: "Segregation and monitoring of collateral at client level.",
    href: "https://assets.zyrosite.com/mxBME7QjQ6So46Po/segregation-and-monitoring-of-collateral-at-client-level-AMqlVWP7XDCJGZPn.pdf",
    type: "PDF",
  },
  {
    title: "Advisory to Investors",
    desc: "Important advisory issued in the interest of investors.",
    href: "https://assets.zyrosite.com/mxBME7QjQ6So46Po/advisory-to-investors-A3QOo9Q5zWty6wVb.pdf",
    type: "PDF",
  },
  {
    title: "Complete Your KYC-KRA Today",
    desc: "Step-by-step guidance on completing your KYC with a KRA.",
    href: "https://assets.zyrosite.com/mxBME7QjQ6So46Po/complete-kyc-kra-mxBMEb9plofoweJZ.jpg",
    type: "Image",
  },
  {
    title: "Unlock the Wealth of Knowledge with Saarthi App",
    desc: "SEBI's investor education mobile app for the securities market.",
    href: "https://investor.sebi.gov.in/",
    type: "Link",
  },
];

/* ------------------------------------------------------------------ */
/* Attention Investors (exchange-mandated points)                       */
/* ------------------------------------------------------------------ */
export const attentionInvestors = [
  "Stock Brokers can accept securities as margin from clients only by way of pledge in the depository system w.e.f. September 1, 2020.",
  "Update your mobile number & email Id with your stock broker/depository participant and receive OTP directly from depository on your email id and/or mobile number to create pledge.",
  "Pay 20% upfront margin of the transaction value to trade in cash market segment.",
  "Investors may please refer to the Exchange's Frequently Asked Questions (FAQs) issued vide circular reference NSE/INSP/45191 dated July 31, 2020 and NSE/INSP/45534 and BSE vide notice no. 20200731-7 dated July 31, 2020 and 20200831-45 dated August 31, 2020 dated August 31, 2020 and other guidelines issued from time to time in this regard.",
  "Check your Securities /MF/ Bonds in the consolidated account statement issued by NSDL/CDSL every month.",
];

/* ------------------------------------------------------------------ */
/* Rotating investor notices (SEBI / exchange advisories)               */
/* ------------------------------------------------------------------ */
export const investorQuotes = [
  "No need to issue cheques by investors while subscribing to IPO. Just write the bank account number and sign in the application form to authorise your bank to make payment in case of allotment. No worries for refund as the money remains in investor's account………. Issued in the interest of Investors.",
  "KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary.",
  "Prevent unauthorised transactions in your account → Update your mobile numbers/email-Ids with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day………. Issued in the interest of Investors.",
];

/* ------------------------------------------------------------------ */
/* Risk disclosures on derivatives (SEBI mandated)                      */
/* ------------------------------------------------------------------ */
export const riskDisclosures = [
  "9 out of 10 individual traders in equity Futures and Options Segment, incurred net losses.",
  "On an average, loss makers registered net trading loss close to ₹ 50,000.",
  "Over and above the net trading losses incurred, loss makers expended an additional 28% of net trading losses as transaction costs.",
  "Those making net trading profits, incurred between 15% to 50% of such profits as transaction cost.",
];

export const riskDisclosureSource =
  "https://www.sebi.gov.in/reports-and-statistics/research-applications/jan-2023/study-analysis-of-profit-and-loss-of-individual-traders-dealing-in-equity-fando-segment_67525.html";

/* ------------------------------------------------------------------ */
/* Investor awareness                                                   */
/* ------------------------------------------------------------------ */
export const investorAwareness = [
  {
    text: "Investor beware about unsolicited messages:",
    href: "https://www.nseindia.com/regulations/unsolicited-messages-report",
    linkLabel: "Report unsolicited messages on the NSE portal",
  },
  {
    text: "Have you linked your Aadhaar to your Trading & demat yet? To link your Aadhaar, please visit:",
    href: "https://eportal.incometax.gov.in/iec/foservices/#/pre-login/bl-link-aadhaar",
    linkLabel: "Link Aadhaar on the Income Tax e-filing portal",
  },
  {
    text: "As you are aware, under the rapidly evolving dynamics of financial markets, it is crucial for investors to remain updated and well-informed about various aspects of investing in securities market. In this connection, please find a link to the BSE Investor Protection Fund website where you will find some useful educative material in the form of text and videos, so as to become an informed investor:",
    href: "https://www.bseipf.com/investors_education.html",
    linkLabel: "BSE Investor Protection Fund — investor education",
  },
];

/* ------------------------------------------------------------------ */
/* Investor complaint data                                              */
/* ------------------------------------------------------------------ */
export const investorComplaintData = {
  period: "December 2024",
  href: "https://assets.zyrosite.com/mxBME7QjQ6So46Po/investor-complaint-data-genuine-stock_broker-december-2024-mePbOwLZ4KtXBqMR.pdf",
};

/* ------------------------------------------------------------------ */
/* Smart ODR                                                            */
/* ------------------------------------------------------------------ */
export const smartOdr = {
  circular: "SEBI/HO/OIAE/OIAE_IAD-1/P/CIR/2023/131 dated July 31, 2023",
  body: "Vide SEBI Circular No. SEBI/HO/OIAE/OIAE_IAD-1/P/CIR/2023/131 dated July 31, 2023 provides guidelines for setting up a common Online Dispute Resolution Portal (ODR Portal) to facilitate efficient resolution of complaints and disputes between investors and market participants. All market participants and MIIs are advised to display a link to the ODR Portal on the home page of their websites and mobile apps.",
  href: "https://smartodr.in/",
  loginHref: "https://smartodr.in/login",
};

/* ------------------------------------------------------------------ */
/* Caution & awareness for clients / investors                          */
/* ------------------------------------------------------------------ */
export const cautionPoints = [
  "Sharing of trading credentials – login id & passwords including OTP's.",
  "Trading in leveraged products like options without proper understanding, which could lead to losses.",
  "Writing / selling options or trading in option strategies based on tips, without basic knowledge & understanding of the product and its risks.",
  "Dealing in unsolicited tips through Whatsapp, Telegram, YouTube, Facebook, SMS, calls, etc.",
  "Trading in “Options” based on recommendations from unauthorised / unregistered investment advisors and influencers.",
];

/* ------------------------------------------------------------------ */
/* Client collaterals                                                   */
/* ------------------------------------------------------------------ */
export const clientCollateral = {
  href: "https://investorhelpline.nseclearing.in/ClientCollateral/welcomeCLUser",
};

/* ------------------------------------------------------------------ */
/* Know / locate your stock broker — compliance officer per exchange     */
/* ------------------------------------------------------------------ */
export const complianceOfficers = [
  {
    exchange: "NSE / BSE",
    name: "Nikhil Agarwal",
    email: "genuine1996@gmail.com",
    phone: "+91-79-40308992",
  },
];

/* ------------------------------------------------------------------ */
/* Escalation matrix                                                    */
/* ------------------------------------------------------------------ */
const OFFICE_ADDRESS =
  "B-601, Gopal Palace, Near Shiromani Tower, Nehru Nagar, Ahmedabad-380015.";

export const escalationMatrix = [
  {
    person: "Mr Aashish Datt",
    role: "Customer care",
    address: OFFICE_ADDRESS,
    phone: "7096978465",
    email: "genuine1996@gmail.com",
    hours: "9:00 am to 6:00 pm",
  },
  {
    person: "Mr Rakesh Kothari",
    role: "Head of Customer care",
    address: OFFICE_ADDRESS,
    phone: "9558089881",
    email: "rakeshkd1978@gmail.com",
    hours: "9:00 am to 6:00 pm",
  },
  {
    person: "Mr Nikhil Agrawal",
    role: "Compliance Officer",
    address: OFFICE_ADDRESS,
    phone: "079 40308992",
    email: "genuine1996@gmail.com",
    hours: "9:00 am to 6:00 pm",
  },
  {
    person: "Mr Nikhil Agrawal",
    role: "CEO",
    address: OFFICE_ADDRESS,
    phone: "079 40308992",
    email: "genuine1996@gmail.com",
    hours: "9:00 am to 6:00 pm",
  },
];

/* ------------------------------------------------------------------ */
/* Key Managerial Personnel                                             */
/* ------------------------------------------------------------------ */
export const kmpDetails = [
  {
    name: "Mr. Nikhil Agrawal",
    designation: "CEO",
    phone: "079-40308992",
    email: "genuine1996@gmail.com",
  },
  {
    name: "Mr. Nikhil Agrawal",
    designation: "Compliance Officer",
    phone: "079-40308992",
    email: "genuine1996@gmail.com",
  },
  {
    name: "Ms. Mamta Agrawal",
    designation: "Designated Director",
    phone: "079-40308992",
    email: "genuine1996@gmail.com",
  },
  {
    name: "N.A",
    designation: "Company Secretary",
    phone: "N.A",
    email: "N.A",
  },
  {
    name: "N.A",
    designation: "Wholetime Director",
    phone: "N.A",
    email: "N.A",
  },
];

/* ------------------------------------------------------------------ */
/* Where else a complaint can be lodged                                 */
/* ------------------------------------------------------------------ */
export const complaintAuthorities = [
  { label: "SEBI SCORES", href: "https://scores.sebi.gov.in" },
  {
    label: "BSE",
    href: "https://bsecrs.bseindia.com/ecomplaint/frmInvestorHome.aspx",
  },
  { label: "NSE", href: "https://investorhelpline.nseindia.com/NICEPLUS/" },
];

/* ------------------------------------------------------------------ */
/* Filing of complaints on SCORES                                       */
/* ------------------------------------------------------------------ */
export const scoresSteps = [
  {
    title: "Register on SCORES portal",
    items: [],
  },
  {
    title: "Mandatory details for filing complaints on SCORES",
    items: ["Name, PAN, Address, Mobile Number, Email-ID"],
  },
  {
    title: "Benefits",
    items: ["Effective communication", "Speedy redressal of the grievances"],
  },
];
