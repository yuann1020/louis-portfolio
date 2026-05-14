"use client";

import { useEffect, useRef } from "react";

const FLOATS = [
  {
    cls: "parallax-float-1",
    label: "NestJS + Prisma",
    lines: [80, 55, 40],
    speed: -22,
  },
  {
    cls: "parallax-float-2",
    label: "Supabase + RLS",
    lines: [70, 45, 60],
    speed: -15,
  },
  {
    cls: "parallax-float-3",
    label: "OpenAI Whisper",
    lines: [60, 80, 35],
    speed: -30,
  },
  {
    cls: "parallax-float-4",
    label: "React Native",
    lines: [75, 50, 65],
    speed: -12,
  },
  {
    cls: "parallax-float-5",
    label: "FastAPI + Gemini",
    lines: [65, 55, 70],
    speed: -20,
  },
];

export default function ParallaxPlayground() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let cleanup: (() => void) | undefined;

    const init = async () => {
      const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      gsap.registerPlugin(ScrollTrigger);

      if (!sectionRef.current) return;

      const ctx = gsap.context(() => {
        // Background headline slow parallax
        gsap.to(".parallax-headline", {
          yPercent: -18,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.6,
          },
        });

        // Each float card at its own speed
        FLOATS.forEach((f) => {
          gsap.to(`.${f.cls}`, {
            y: f.speed,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          });
        });
      }, sectionRef);

      cleanup = () => ctx.revert();
    };

    init();

    return () => cleanup?.();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="parallax-section"
      aria-label="Technology showcase"
    >
      {/* depth-0: background headline text */}
      <div className="parallax-bg-text" aria-hidden="true">
        <span className="parallax-headline">
          Full-Stack&nbsp;&nbsp;Mobile&nbsp;&nbsp;AI
        </span>
      </div>

      {/* depth-2: floating tech cards */}
      <div className="parallax-items" aria-hidden="true">
        {FLOATS.map((f) => (
          <div key={f.cls} className={`parallax-float ${f.cls}`}>
            <div className="pf-label">{f.label}</div>
            {f.lines.map((w, i) => (
              <div
                key={i}
                className={`pf-line${i === 0 ? " pf-line-accent" : ""}`}
                style={{ width: `${w}%` }}
              />
            ))}
          </div>
        ))}
      </div>

      {/* depth-4: center text */}
      <div className="parallax-center-content">
        <p className="parallax-center-label">Development Ecosystem</p>
        <h2 className="parallax-center-title">Built across stacks.</h2>
        <div className="parallax-tech-chips">
          {[
            "Next.js",
            "NestJS",
            "Expo RN",
            "FastAPI",
            "Supabase",
            "Firebase",
            "PostgreSQL",
            "OpenAI",
            "Gemini",
          ].map((t) => (
            <span key={t} className="parallax-chip">
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
