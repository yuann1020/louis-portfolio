"use client";

import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { label: "Home",     href: "#hero" },
  { label: "Projects", href: "#projects" },
  { label: "Skills",   href: "#skills" },
  { label: "About",    href: "#about" },
  { label: "Contact",  href: "#contact" },
];

const SECTION_IDS = ["hero", "projects", "skills", "about", "contact"];

export function FloatingNav({ email }: { email: string }) {
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target instanceof HTMLElement) {
          setActive(visible.target.id);
        }
      },
      { rootMargin: "-28% 0px -60% 0px", threshold: [0.05, 0.2, 0.5] },
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`floating-nav-wrap${scrolled ? " floating-nav-scrolled" : ""}`}
    >
      <nav
        className="floating-nav"
        aria-label="Primary navigation"
      >
        <a href="#hero" className="nav-logo" aria-label="Louis Lau — home">
          LL
        </a>

        <div className="nav-links" role="list">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              role="listitem"
              className={`nav-pill${active === item.href.slice(1) ? " nav-pill-active" : ""}`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href={`mailto:${email}`}
          className="nav-cta"
          aria-label="Send email to Louis Lau"
        >
          Say hi
        </a>
      </nav>
    </header>
  );
}
