import Image from "next/image";
import { FloatingNav } from "./components/FloatingNav";
import { HeroRoleText } from "./components/HeroRoleText";
import { FooterMarquee } from "./components/FooterMarquee";
import { PortfolioInteractions } from "./components/PortfolioInteractions";
import { HeroVideo } from "./components/HeroVideo";
import {
  ClientLoadingScreen,
  ClientParallaxPlayground,
} from "./components/ClientShell";
import { HeroCursorAura } from "./components/HeroCursorAura";

// ─── Data ────────────────────────────────────────────────────────────────────
const email = "louislausieyuan2005@gmail.com";

const projects = [
  {
    id: "repok",
    index: "01",
    name: "Repok Pickleball Court Booking System",
    role: "Solo Full-Stack Developer",
    context: "Full-stack venue booking & management platform",
    description:
      "A full-stack pickleball venue booking and management platform with separate customer and admin workflows for court browsing, time-slot booking, payment review, and admin operations.",
    stack: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "NestJS",
      "Prisma ORM",
      "PostgreSQL",
      "Supabase",
      "JWT",
      "Stripe Webhooks",
      "Recharts",
    ],
    details: [
      "Built customer and admin workflows: court browsing, time-slot booking, booking management, payment review, and admin operations.",
      "Implemented smart court, date, and consecutive slot selection with real-time availability checking — prevents selecting unavailable or blocked slots.",
      "Created a configurable booking hold system where unpaid pending bookings expire automatically and reserved court slots release back to the public.",
      "Built wallet-based payment: Stripe Checkout top-ups, wallet balance booking payment, manual QR proof upload, and admin payment approval/rejection.",
      "Added court management, slot generation, slot blocking/unblocking, announcements, and Recharts revenue/booking analytics.",
      "Implemented NestJS REST APIs, Prisma ORM PostgreSQL models, JWT authentication, Stripe webhook handling, and Nodemailer confirmation emails.",
    ],
    screenshot: "/projects/repok.png",
    screenshotAlt:
      "Repok pickleball court booking system — admin dashboard showing court bookings, status chips, and revenue chart",
    visualType: "dashboard" as const,
    githubUrl: "https://github.com/yuann1020/Repok_PickleballCourtBookingSystem",
    liveUrl: "https://repok-rpc.vercel.app/",
  },
  {
    id: "mochi",
    index: "02",
    name: "MochiMemo",
    role: "Solo Mobile / AI Developer",
    context: "AI voice-first mobile spending tracker",
    description:
      "An AI voice-first mobile spending tracker that lets students and young professionals log expenses by voice or typed text — faster than any form.",
    stack: [
      "Expo React Native",
      "TypeScript",
      "Supabase Auth",
      "PostgreSQL",
      "Row Level Security",
      "Edge Functions",
      "OpenAI Whisper",
      "React Query",
      "Zustand",
    ],
    details: [
      "Built voice expense logging and typed expense logging for faster daily expense capture on mobile.",
      "Used OpenAI Whisper transcription through Supabase Edge Functions with AI extraction for amount, merchant, category, and date.",
      "Designed a review-before-save flow where users confirm and edit AI-extracted expense details before saving.",
      "Implemented Supabase Auth, PostgreSQL storage, and Row Level Security — each user only accesses their own expense records and profile data.",
      "Built full screen set: login/register, home dashboard, add expense, review expense, history, expense detail, insights, budget alert, and profile management.",
      "Added monthly budget tracking, category breakdown, daily grouped expense history, budget alerts, AI spending insights, React Query, and Zustand state management.",
    ],
    screenshot: "/projects/mochimemo.png",
    screenshotAlt:
      "MochiMemo AI spending tracker — mobile app interface showing expense history and voice logging",
    visualType: "mobile" as const,
    githubUrl: "https://github.com/yuann1020/MochiMemo",
  },
  {
    id: "fnb",
    index: "03",
    name: "F&B Genie",
    role: "Frontend Lead + Backend Contributor",
    context: "UMHackathon 2026 team project",
    description:
      "An AI F&B feasibility investigator with case creation, chat workspace, upload, report, and Google Maps UI flows. Built for UMHackathon 2026.",
    stack: [
      "Next.js",
      "TypeScript",
      "Firebase Auth",
      "Firestore",
      "Firebase Storage",
      "FastAPI",
      "Google Maps APIs",
      "Gemini",
      "Tailwind CSS",
    ],
    details: [
      "Led frontend development for case creation, chat workspace, upload feature, report section, and Google Maps UI flows.",
      "Connected frontend flows with FastAPI routes and contributed backend routes for the investigation workflow.",
      "Integrated Firebase Auth, Firestore, Firebase Storage, Google Places API, and Google Geocoding API.",
      "Built Gemini-powered investigation workflow touchpoints across chat, reports, and case data flows.",
      "Contributed database design and management, API-key and Google Client configuration, and deployed app workflows.",
    ],
    screenshot: "/projects/fnb-genie.png",
    screenshotAlt:
      "F&B Genie AI feasibility investigator — workspace showing chat, map, and report interface",
    visualType: "workspace" as const,
    githubUrl: "https://github.com/brendan1107/UMH2026",
  },
];

const skillGroups = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Expo React Native"],
  },
  {
    title: "Backend",
    skills: ["NestJS", "FastAPI", "REST APIs", "JWT", "Stripe Webhooks", "Nodemailer"],
  },
  {
    title: "Database / Cloud",
    skills: [
      "PostgreSQL",
      "Supabase",
      "Prisma ORM",
      "Firebase Auth",
      "Firestore",
      "Firebase Storage",
      "RLS",
      "Edge Functions",
    ],
  },
  {
    title: "AI / Product",
    skills: [
      "OpenAI Whisper",
      "Gemini",
      "AI Extraction",
      "Google Maps API",
      "Google Places API",
      "Recharts",
    ],
  },
  {
    title: "Tools",
    skills: ["GitHub", "VS Code", "Postman", "Docker", "React Query", "Zustand"],
  },
];

const stats = [
  { number: "3",      label: "Featured Projects" },
  { number: "2",      label: "Solo Products" },
  { number: "1",      label: "Hackathon Build" },
  { number: "FS+M+AI", label: "Full-Stack · Mobile · AI" },
];

const contactLinks = [
  {
    label: "Email",
    value: email,
    href: `mailto:${email}`,
    external: false,
  },
  {
    label: "GitHub",
    value: "github.com/yuann1020",
    href: "https://github.com/yuann1020",
    external: true,
  },
  {
    label: "LinkedIn",
    value: "louis-lau-b64577401",
    href: "https://www.linkedin.com/in/louis-lau-b64577401/",
    external: true,
  },
];

// ─── CSS Placeholder Visuals (shown if screenshot fails to load) ──────────────
function RepokVisualFallback() {
  const rows = [
    { court: "Court A", time: "09:00", status: "Paid",    amt: "RM 40", badge: "vis-badge-paid" },
    { court: "Court B", time: "10:30", status: "Pending", amt: "RM 40", badge: "vis-badge-pending" },
    { court: "Court C", time: "12:00", status: "Hold",    amt: "RM 40", badge: "vis-badge-hold" },
    { court: "Court A", time: "14:00", status: "Paid",    amt: "RM 80", badge: "vis-badge-paid" },
  ];
  const bars = [52, 78, 44, 92, 65, 83, 58];

  return (
    <div className="vis-repok">
      <div className="vis-window-bar">
        <div className="vis-dot" /><div className="vis-dot" /><div className="vis-dot" />
        <span className="vis-window-label">Admin · Court Bookings</span>
      </div>
      <div className="vis-table">
        <div className="vis-row vis-row-head">
          <span>Court</span><span>Time</span><span>Status</span><span>Amt</span>
        </div>
        {rows.map((r) => (
          <div key={r.time} className="vis-row">
            <span>{r.court}</span>
            <span>{r.time}</span>
            <span><span className={`vis-badge ${r.badge}`}>{r.status}</span></span>
            <span>{r.amt}</span>
          </div>
        ))}
      </div>
      <div className="vis-chart-wrap">
        {bars.map((h, i) => (
          <div key={i} className="vis-bar" style={{ height: `${h}%` }} />
        ))}
      </div>
    </div>
  );
}

function MochiVisualFallback() {
  const items = [
    { dot: "vis-exp-dot-food",  w1: 65, w2: 40, amt: "RM 28.50" },
    { dot: "vis-exp-dot-shop",  w1: 55, w2: 50, amt: "RM 15.00" },
    { dot: "vis-exp-dot-trans", w1: 70, w2: 35, amt: "RM 3.60"  },
    { dot: "vis-exp-dot-food",  w1: 60, w2: 45, amt: "RM 12.90" },
  ];
  return (
    <div className="vis-mochi">
      <div className="vis-phone">
        <div className="vis-phone-notch" />
        <div className="vis-phone-balance">
          <div className="vis-phone-balance-label">Monthly Spent</div>
          <div className="vis-phone-balance-amt">RM 428.50</div>
        </div>
        {items.map((item, i) => (
          <div key={i} className="vis-expense-item">
            <div className={`vis-exp-dot ${item.dot}`} />
            <div className="vis-exp-lines">
              <div className="vis-exp-line" style={{ width: `${item.w1}%` }} />
              <div className="vis-exp-line" style={{ width: `${item.w2}%` }} />
            </div>
            <div className="vis-exp-amt">{item.amt}</div>
          </div>
        ))}
        <div className="vis-phone-tabs">
          <div className="vis-tab-dot vis-tab-dot-active" />
          <div className="vis-tab-dot" /><div className="vis-tab-dot" /><div className="vis-tab-dot" />
        </div>
      </div>
    </div>
  );
}

function FnbVisualFallback() {
  const metrics = [{ bar: 72, label: 50 }, { bar: 58, label: 35 }, { bar: 85, label: 60 }];
  return (
    <div className="vis-fnb">
      <div className="vis-map">
        <div className="vis-map-dots" />
        <div className="vis-marker vis-marker-1" />
        <div className="vis-marker vis-marker-2" />
        <div className="vis-marker vis-marker-3" />
      </div>
      <div className="vis-report">
        <div className="vis-report-label">F&B Analysis</div>
        <div className="vis-report-badge">AI Report</div>
        {metrics.map((m, i) => (
          <div key={i} className="vis-metric-row">
            <div className="vis-metric-bar-track">
              <div className="vis-metric-bar" style={{ width: `${m.bar}%` }} />
            </div>
            <div className="vis-metric-label" style={{ width: `${m.label}%` }} />
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Inline icons (no dependencies) ─────────────────────────────────────────
function IconGitHub() {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
    </svg>
  );
}

function IconExternal() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
      <polyline points="15,3 21,3 21,9"/>
      <line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  );
}

// ─── Project Card ─────────────────────────────────────────────────────────────
function ProjectCard({
  project,
  fallback,
  cardClass,
  revealDelay,
  imgSizes,
}: {
  project: (typeof projects)[number];
  fallback: React.ReactNode;
  cardClass: string;
  revealDelay: string;
  imgSizes: string;
}) {
  return (
    <article
      className={`bento-card ${cardClass} ${revealDelay}`}
      data-reveal
      data-visual-type={project.visualType}
    >
      {/* Visual area — screenshot + CSS fallback + overlays */}
      <div className="bento-visual">
        {/* CSS fallback (below screenshot, always rendered) */}
        <div className="bento-css-fallback" aria-hidden="true">
          {fallback}
        </div>

        {/* Screenshot — covers fallback when loaded */}
        <Image
          src={project.screenshot}
          alt={project.screenshotAlt}
          fill
          sizes={imgSizes}
          className="bento-screenshot"
          quality={90}
        />

        {/* Cinematic dark gradient over screenshot */}
        <div className="bento-screenshot-overlay" aria-hidden="true" />

        {/* Accent hover tint */}
        <div className="bento-visual-overlay" aria-hidden="true" />
      </div>

      {/* Card content */}
      <div className="bento-content">
        <div className="bento-meta">
          <span className="bento-index">{project.index}</span>
          <span className="bento-role-badge">{project.role}</span>
        </div>

        <p className="bento-ctx">{project.context}</p>
        <h3 className="bento-title">{project.name}</h3>
        <p className="bento-desc">{project.description}</p>

        <div className="bento-stack">
          {project.stack.map((tech) => (
            <span key={tech} className="dark-chip">{tech}</span>
          ))}
        </div>

        {/* Project links — GitHub always present, Live Demo only if available */}
        <div className="proj-links">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="proj-link"
            aria-label={`${project.name} GitHub repository`}
          >
            <IconGitHub />
            GitHub
          </a>
          {"liveUrl" in project && project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="proj-link proj-link--live"
              aria-label={`${project.name} live demo`}
            >
              <IconExternal />
              Live Demo
            </a>
          )}
        </div>

        <details className="proj-details">
          <summary className="proj-summary">
            <span>View implementation details</span>
            <span className="proj-toggle" aria-hidden="true">+</span>
          </summary>
          <ul className="proj-detail-list">
            {project.details.map((item) => (
              <li key={item} className="proj-detail-item">
                <span className="proj-detail-dot" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </details>
      </div>
    </article>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <ClientLoadingScreen />
      <PortfolioInteractions email={email} />
      <div className="scroll-progress-bar" aria-hidden="true" />
      <FloatingNav email={email} />

      <main>
        {/* ─── 1. Hero ───────────────────────────────────────────────── */}
        <section id="hero" data-section="hero" className="hero-section">

          {/* Layer -1: CSS fallback background (shown if video fails) */}
          <div className="hero-bg" aria-hidden="true">
            <div className="hero-bg-gradient" />
            <div className="hero-bg-glow hero-bg-glow-1" />
            <div className="hero-bg-glow hero-bg-glow-2" />
          </div>

          {/* Layer 0: Video background — client component ensures reliable looping */}
          <HeroVideo />

          {/* Layer 1: Dark overlay — contrast + bottom fade to next section */}
          <div className="hero-video-overlay" aria-hidden="true" />

          {/* Layer 2: Subtle grid texture on top of overlay */}
          <div className="hero-grid-overlay" aria-hidden="true" />

          {/* Layer 3: Soft dark panel behind text — ensures readability on any video frame */}
          <div className="hero-text-panel" aria-hidden="true" />

          {/* Layer 4: CSS cursor aura — zero WebGL, guaranteed no runtime crash */}
          <div className="hero-aura" aria-hidden="true" />
          <HeroCursorAura />

          {/* Layer 5: Main content */}
          <div className="hero-content">
            <p className="hero-eyebrow">Portfolio&nbsp;&nbsp;&#x2019;26</p>

            <h1 className="hero-name">Louis Lau</h1>

            {/* Stable flex row — role slot has fixed width, prefix/suffix never shift */}
            <div className="hero-role-line">
              <span className="hero-role-prefix">A</span>
              <HeroRoleText />
              <span className="hero-role-suffix">building practical digital products.</span>
            </div>

            <p className="hero-desc">
              I build full-stack, mobile, and AI-assisted products with clean
              interfaces, reliable backend systems, and practical user workflows.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="btn-primary">View Projects</a>
              <a href={`mailto:${email}`} className="btn-ghost">Reach Out</a>
            </div>
          </div>

          {/* Layer 5: Scroll indicator */}
          <div className="scroll-indicator" aria-hidden="true">
            <span className="scroll-indicator-label">Scroll</span>
            <div className="scroll-indicator-line" />
          </div>
        </section>

        {/* ─── 2. Projects ───────────────────────────────────────────── */}
        <section id="projects" data-section="projects" className="projects-section">
          <div className="section-wrap">
            <header className="section-header" data-reveal>
              <p className="section-eyebrow">Selected Work</p>
              <h2 className="section-title">
                Resume-aligned projects, deeper on demand.
              </h2>
              <p className="section-subtitle">
                Three real products built from scratch — full-stack, mobile,
                and hackathon. Expand each card for implementation details.
              </p>
            </header>

            <div className="bento-grid">
              <ProjectCard
                project={projects[0]}
                fallback={<RepokVisualFallback />}
                cardClass="bento-card-repok"
                revealDelay="reveal-delay-1"
                imgSizes="(max-width: 1023px) 100vw, (max-width: 1280px) 62vw, 800px"
              />
              <ProjectCard
                project={projects[1]}
                fallback={<MochiVisualFallback />}
                cardClass="bento-card-mochi"
                revealDelay="reveal-delay-2"
                imgSizes="(max-width: 1023px) 100vw, (max-width: 1280px) 38vw, 480px"
              />
              <ProjectCard
                project={projects[2]}
                fallback={<FnbVisualFallback />}
                cardClass="bento-card-fnb"
                revealDelay="reveal-delay-3"
                imgSizes="(max-width: 1023px) 100vw, (max-width: 1280px) 62vw, 800px"
              />
            </div>
          </div>
        </section>

        {/* ─── 3. Skills ─────────────────────────────────────────────── */}
        <section id="skills" data-section="skills">
          <div className="section-wrap">
            <header className="section-header" data-reveal>
              <p className="section-eyebrow">Skills</p>
              <h2 className="section-title">
                A stack shaped by real product work.
              </h2>
              <p className="section-subtitle">
                Every technology below was used in Repok, MochiMemo, or F&B
                Genie — grouped by domain.
              </p>
            </header>

            <div className="skills-grid">
              {skillGroups.map((group, i) => (
                <article
                  key={group.title}
                  className={`skill-card reveal-delay-${(i % 4) + 1}`}
                  data-reveal
                >
                  <h3 className="skill-card-title">{group.title}</h3>
                  <div className="skill-tags">
                    {group.skills.map((skill) => (
                      <span key={skill} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 4. About ──────────────────────────────────────────────── */}
        <section id="about" data-section="about" className="about-section">
          <div className="section-wrap">
            <div className="about-grid">
              <header data-reveal>
                <p className="section-eyebrow">About</p>
                <h2 className="section-title">
                  Computer science foundation with product execution.
                </h2>
                <p className="about-bio" style={{ marginTop: "1.5rem" }}>
                  I am Louis Lau, a Year 2 Computer Science student at
                  University of Malaya with a foundation background from
                  University of Technology Malaysia. I focus on full-stack
                  development, mobile AI applications, backend systems, database
                  design, and practical product-building. I enjoy turning ideas
                  into working applications with strong user experience and
                  reliable technical structure.
                </p>
              </header>

              <div className="about-cards" data-reveal>
                {[
                  { label: "University",  value: "University of Malaya" },
                  { label: "Year",        value: "Year 2 · Computer Science" },
                  { label: "Foundation",  value: "UTM · University of Technology Malaysia" },
                  { label: "Focus",       value: "Full-Stack · Mobile · AI · Backend" },
                  { label: "Location",    value: "Malaysia" },
                  { label: "Status",      value: "Open to internships & collaborations" },
                ].map((card) => (
                  <div key={card.label} className="about-card">
                    <div className="about-card-label">{card.label}</div>
                    <div className="about-card-value">{card.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── 5. Parallax Playground ────────────────────────────────── */}
        <ClientParallaxPlayground />

        {/* ─── 6. Stats ──────────────────────────────────────────────── */}
        <section aria-label="Portfolio statistics" className="stats-section">
          <div className="stats-grid">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`stat-item reveal-delay-${i + 1}`}
                data-reveal
              >
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── 7. Contact ────────────────────────────────────────────── */}
        <section id="contact" data-section="contact" className="contact-section">
          <div className="section-wrap">
            <div className="contact-grid">
              <header data-reveal>
                <p className="section-eyebrow">Contact</p>
                <h2 className="section-title">
                  Open to internships and collaborations.
                </h2>
                <p className="section-subtitle" style={{ marginTop: "1rem" }}>
                  Reach out directly through email, GitHub, or LinkedIn.
                </p>
                <div className="contact-availability" style={{ marginTop: "2rem" }}>
                  <span className="contact-availability-dot" />
                  Available for internships, collaborations, and project opportunities
                </div>
              </header>

              <div data-reveal>
                <div className="contact-links">
                  {contactLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="contact-link"
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                    >
                      <span className="contact-link-label">{link.label}</span>
                      <span className="contact-link-value">{link.value}</span>
                    </a>
                  ))}

                  <button
                    type="button"
                    className="copy-btn"
                    data-copy-email={email}
                    aria-label="Copy email address"
                  >
                    <span data-copy-label>Copy email</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Footer ────────────────────────────────────────────────── */}
        <footer className="site-footer">
          <FooterMarquee />
          <div className="footer-bottom">
            <p className="footer-copy">
              Louis Lau — Full-Stack Developer · Malaysia · 2026
            </p>
            <nav className="footer-links" aria-label="Footer navigation">
              <a href="#hero" className="footer-link">Top</a>
              <a href="#projects" className="footer-link">Projects</a>
              <a
                href="https://github.com/yuann1020"
                className="footer-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/louis-lau-b64577401/"
                className="footer-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </nav>
          </div>
        </footer>
      </main>
    </>
  );
}
