import { PortfolioInteractions } from "./components/PortfolioInteractions";

const email = "louislausieyuan2005@gmail.com";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const skillGroups = [
  {
    title: "Frontend & Mobile",
    skills: [
      "Next.js 14",
      "React",
      "Expo React Native",
      "TypeScript",
      "Tailwind CSS",
      "Responsive UI",
    ],
  },
  {
    title: "Backend & APIs",
    skills: [
      "NestJS",
      "FastAPI",
      "REST APIs",
      "JWT Authentication",
      "Stripe Webhooks",
      "Supabase Edge Functions",
      "Nodemailer",
    ],
  },
  {
    title: "Data, Auth & Storage",
    skills: [
      "Prisma ORM",
      "PostgreSQL/Supabase",
      "Supabase Auth",
      "Row Level Security",
      "Firebase Auth",
      "Firestore",
      "Firebase Storage",
    ],
  },
  {
    title: "AI, Maps & State",
    skills: [
      "OpenAI Whisper",
      "Gemini",
      "Google Maps APIs",
      "Google Places API",
      "Google Geocoding API",
      "React Query",
      "Zustand",
      "Recharts",
    ],
  },
];

const projects = [
  {
    name: "Repok Pickleball Court Booking System",
    role: "Solo Full-Stack Developer",
    context: "Full-stack venue booking and management platform",
    description:
      "A full-stack pickleball venue booking and management platform with separate customer and admin workflows.",
    stack: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "NestJS",
      "Prisma ORM",
      "PostgreSQL/Supabase",
      "JWT",
      "Stripe Webhooks",
      "Recharts",
    ],
    details: [
      "Built customer and admin workflows for court browsing, time-slot booking, booking management, payment review, and admin operations.",
      "Implemented smart court, date, and consecutive slot selection with real-time availability checking that prevents unavailable slots from being selected.",
      "Created an unpaid booking hold countdown where pending bookings expire automatically and reserved court slots are released back to the public.",
      "Built a wallet-based payment system with Stripe Checkout top-ups, wallet balance booking payment, manual QR payment proof upload, and admin payment verification.",
      "Added court management, slot generation, slot blocking/unblocking, announcements, and admin payment approval/rejection operations.",
      "Implemented Recharts revenue/booking analytics, NestJS REST APIs, Prisma ORM PostgreSQL/Supabase models, JWT authentication, Stripe webhook handling, and Nodemailer confirmation emails.",
    ],
  },
  {
    name: "MochiMemo",
    role: "Solo Mobile / AI Developer",
    context: "AI voice-first mobile spending tracker",
    description:
      "An AI voice-first mobile spending tracker that helps students and young professionals log expenses using voice or typed text faster.",
    stack: [
      "Expo React Native",
      "TypeScript",
      "Supabase Auth/Postgres/RLS",
      "Supabase Edge Functions",
      "OpenAI Whisper",
      "React Query",
      "Zustand",
    ],
    details: [
      "Built voice expense logging and typed expense logging for faster daily expense capture.",
      "Used OpenAI Whisper transcription through Supabase Edge Functions with AI extraction for amount, merchant, category, and date.",
      "Designed a review-before-save flow where users can confirm and edit AI-extracted expense details before saving.",
      "Implemented Supabase Auth, PostgreSQL storage, and Row Level Security so each user can only access their own expense records and profile data.",
      "Built login/register, home dashboard, add expense, review expense, history, expense detail, insights, budget alert, and profile management screens.",
      "Added monthly budget tracking, category breakdown, daily grouped expense history, budget alerts, AI spending insights, and React Query/Zustand state management.",
    ],
  },
  {
    name: "F&B Genie",
    role: "Frontend Lead + Backend Contributor",
    context: "UMHackathon 2026 Team Project",
    description:
      "An AI F&B feasibility investigator with case creation, chat workspace, upload, report, and Google Maps UI flows.",
    stack: [
      "Next.js",
      "TypeScript",
      "Firebase Auth/Firestore/Storage",
      "FastAPI",
      "Google Maps/Places/Geocoding APIs",
      "Gemini",
      "Tailwind CSS",
    ],
    details: [
      "Led frontend development for the AI F&B feasibility investigator, including case creation, chat workspace, upload feature, report section, and Google Maps UI flows.",
      "Connected the frontend with FastAPI routes and contributed backend routes for the investigation workflow.",
      "Integrated Firebase Auth, Firestore, Firebase Storage, Google Places API, and Google Geocoding API.",
      "Built Gemini-powered investigation workflow touchpoints across chat, reports, and case data flows.",
      "Contributed database design and management, API-key and Google Client configuration, and deployed app workflows.",
    ],
  },
];

const services = [
  "Full-stack web application development",
  "Mobile and AI-assisted prototype development",
  "Dashboard and admin panel development",
  "Portfolio project UI improvement",
];

const contactLinks = [
  {
    label: "Email",
    value: email,
    href: `mailto:${email}`,
  },
  {
    label: "GitHub",
    value: "github.com/yuann1020",
    href: "https://github.com/yuann1020",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/louis-lau-b64577401",
    href: "https://www.linkedin.com/in/louis-lau-b64577401/",
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "light",
}: {
  eyebrow: string;
  title: string;
  description: string;
  tone?: "light" | "dark";
}) {
  const titleClass =
    tone === "dark"
      ? "mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-4xl"
      : "mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.04em] text-neutral-950 sm:text-4xl";
  const descriptionClass =
    tone === "dark"
      ? "mt-4 max-w-2xl text-base leading-7 text-neutral-300"
      : "mt-4 max-w-2xl text-base leading-7 text-neutral-600";

  return (
    <div className="max-w-3xl" data-reveal>
      <p className="mono-label">{eyebrow}</p>
      <h2 className={titleClass}>{title}</h2>
      <p className={descriptionClass}>{description}</p>
    </div>
  );
}

function DetailList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 grid gap-3 text-sm leading-6 text-neutral-300">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="mt-[0.55rem] size-1.5 shrink-0 rounded-full bg-neutral-500" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <PortfolioInteractions email={email} />
      <div className="scroll-progress" aria-hidden="true" />

      <header className="sticky top-0 z-50 border-b border-[var(--hairline)] bg-white/85 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-3 sm:px-6 lg:min-h-16 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <a
            href="#top"
            className="group flex w-fit items-center gap-3 text-sm font-semibold tracking-[-0.02em] text-neutral-950"
            aria-label="Louis Lau portfolio home"
          >
            <span className="flex size-9 items-center justify-center rounded-md border border-neutral-950 bg-neutral-950 text-xs font-semibold text-white transition-colors duration-300 group-hover:bg-white group-hover:text-neutral-950">
              LL
            </span>
            <span>Louis Lau</span>
          </a>

          <div className="flex flex-wrap items-center gap-1 text-sm text-neutral-600">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                data-nav-link
                className="nav-link"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <section
        id="top"
        data-section="top"
        className="relative isolate overflow-hidden border-b border-[var(--hairline)]"
      >
        <div className="hero-mesh" aria-hidden="true" />
        <div className="mx-auto grid max-w-6xl gap-12 px-4 pb-20 pt-16 sm:px-6 sm:pb-24 sm:pt-24 lg:grid-cols-[1.18fr_0.82fr] lg:items-end lg:px-8 lg:pb-32 lg:pt-32">
          <div>
            <p className="mono-label hero-animate hero-delay-1">
              Malaysia based developer
            </p>
            <h1 className="hero-animate hero-delay-2 mt-7 max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-neutral-950 sm:text-6xl lg:text-7xl">
              Louis Lau builds practical full-stack, mobile, and AI products.
            </h1>
            <p className="hero-animate hero-delay-3 mt-8 max-w-2xl text-lg leading-8 text-neutral-600">
              Year 2 Computer Science student at University of Malaya with a
              foundation background from University of Technology Malaysia. I
              focus on clean UI, backend systems, database design, and reliable
              product execution.
            </p>
            <div className="hero-animate hero-delay-4 mt-10 flex flex-col gap-3 sm:flex-row">
              <a href="#projects" className="button-primary">
                View Projects
              </a>
              <a href={`mailto:${email}`} className="button-secondary">
                Contact Me
              </a>
            </div>
          </div>

          <aside className="card-surface hero-animate hero-delay-5 p-6 sm:p-8">
            <dl className="grid gap-5 text-sm">
              <div>
                <dt className="mono-label">Role</dt>
                <dd className="mt-2 font-medium text-neutral-950">
                  Year 2 Computer Science Student / Full-Stack Developer
                </dd>
              </div>
              <div>
                <dt className="mono-label">University</dt>
                <dd className="mt-2 font-medium text-neutral-950">
                  University of Malaya
                </dd>
              </div>
              <div>
                <dt className="mono-label">Foundation</dt>
                <dd className="mt-2 font-medium text-neutral-950">
                  University of Technology Malaysia
                </dd>
              </div>
              <div>
                <dt className="mono-label">Location</dt>
                <dd className="mt-2 font-medium text-neutral-950">Malaysia</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <section id="about" data-section="about" className="section-band">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="About"
            title="Computer science foundation with product execution."
            description="A recruiter-friendly profile for teams looking for a developer who can move from interface to backend structure."
          />
          <div className="card-surface p-6 sm:p-8" data-reveal>
            <p className="text-lg leading-8 text-neutral-700">
              I am a Year 2 Computer Science student at University of Malaya
              with a foundation background from University of Technology
              Malaysia. I focus on full-stack development, clean UI, backend
              systems, database design, and practical product-building. I enjoy
              turning ideas into working applications with a strong user
              experience and reliable technical structure.
            </p>
          </div>
        </div>
      </section>

      <section
        id="skills"
        data-section="skills"
        className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24"
      >
        <SectionHeading
          eyebrow="Skills"
          title="A stack shaped by full-stack, mobile, AI, and product workflows."
          description="Grouped from the technologies used across Repok, MochiMemo, and F&B Genie."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {skillGroups.map((group, index) => (
            <article
              key={group.title}
              className={`card-surface interactive-card p-6 reveal-delay-${index + 1}`}
              data-reveal
            >
              <h3 className="text-xl font-semibold tracking-[-0.03em] text-neutral-950">
                {group.title}
              </h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="skill-chip">
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="projects"
        data-section="projects"
        className="border-y border-neutral-800 bg-[var(--ink)] text-white"
      >
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="Selected work"
            title="Resume-aligned projects with deeper details on demand."
            description="Main cards stay concise. Expand each project to inspect the resume-level implementation details."
            tone="dark"
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {projects.map((project, index) => (
              <article
                key={project.name}
                className={`project-card reveal-delay-${index + 1}`}
                data-reveal
              >
                <div className="flex items-start justify-between gap-4">
                  <p className="font-mono text-xs text-neutral-500">
                    0{index + 1}
                  </p>
                  <p className="rounded-full border border-white/10 px-3 py-1 text-xs text-neutral-300">
                    {project.role}
                  </p>
                </div>
                <p className="mt-8 font-mono text-xs uppercase tracking-[0.18em] text-neutral-500">
                  {project.context}
                </p>
                <h3 className="mt-3 text-2xl font-semibold leading-tight tracking-[-0.04em] text-white">
                  {project.name}
                </h3>
                <p className="mt-5 text-sm leading-7 text-neutral-300">
                  {project.description}
                </p>
                <div className="mt-7 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="dark-chip">
                      {tech}
                    </span>
                  ))}
                </div>

                <details className="project-details mt-7">
                  <summary className="project-summary">
                    <span>View details</span>
                  </summary>
                  <DetailList items={project.details} />
                </details>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="services"
        data-section="services"
        className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24"
      >
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading
            eyebrow="Collaboration"
            title="Professional support for practical digital products."
            description="Useful for teams, student builders, and early-stage ideas that need working interfaces and reliable technical structure."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {services.map((service, index) => (
              <article
                key={service}
                className={`card-surface interactive-card p-6 reveal-delay-${index + 1}`}
                data-reveal
              >
                <p className="text-base font-medium leading-7 text-neutral-950">
                  {service}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" data-section="contact" className="section-band">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="Contact"
            title="Open to internships, collaborations, and project conversations."
            description="Reach out directly through email, GitHub, or LinkedIn. No contact form is included until a backend is available."
          />
          <div className="card-surface p-6 sm:p-8" data-reveal>
            <div className="grid gap-4">
              {contactLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="contact-link"
                >
                  <span className="mono-label">{link.label}</span>
                  <span className="mt-2 block break-words text-base font-medium text-neutral-950">
                    {link.value}
                  </span>
                </a>
              ))}
              <button
                type="button"
                className="copy-button"
                data-copy-email={email}
                aria-label="Copy email address"
              >
                <span data-copy-label>Copy email</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[var(--hairline)] bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 text-sm text-neutral-500 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>Louis Lau - Full-Stack Developer based in Malaysia.</p>
          <div className="flex gap-4">
            <a className="footer-link" href="#top">
              Top
            </a>
            <a className="footer-link" href="#projects">
              Projects
            </a>
            <a className="footer-link" href={`mailto:${email}`}>
              Email
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
