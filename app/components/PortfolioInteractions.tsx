"use client";

import { useEffect } from "react";

export function PortfolioInteractions({ email }: { email: string }) {
  useEffect(() => {
    const root = document.documentElement;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    root.classList.add("motion-ready");

    // ── Scroll reveal ──────────────────────────────────────
    const revealItems = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );

    let revealObserver: IntersectionObserver | undefined;

    if (reduceMotion) {
      revealItems.forEach((el) => el.classList.add("is-visible"));
    } else {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              revealObserver?.unobserve(entry.target);
            }
          });
        },
        { rootMargin: "0px 0px -10% 0px", threshold: 0.08 },
      );
      revealObserver = observer;
      revealItems.forEach((el) => observer.observe(el));
    }

    // ── Scroll progress bar ────────────────────────────────
    const updateProgress = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
      root.style.setProperty(
        "--scroll-progress",
        String(Math.min(Math.max(progress, 0), 1)),
      );
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    // ── Copy email button ──────────────────────────────────
    const copyButtons = Array.from(
      document.querySelectorAll<HTMLButtonElement>("[data-copy-email]"),
    );
    const cleanups: Array<() => void> = [];

    copyButtons.forEach((btn) => {
      const label = btn.querySelector<HTMLElement>("[data-copy-label]");
      let timer: number | undefined;

      const setLabel = (text: string) => {
        if (label) label.textContent = text;
      };

      const handle = async () => {
        window.clearTimeout(timer);
        try {
          await navigator.clipboard.writeText(email);
          setLabel("Copied!");
        } catch {
          setLabel("Copy failed");
        }
        timer = window.setTimeout(() => setLabel("Copy email"), 2000);
      };

      btn.addEventListener("click", handle);
      cleanups.push(() => {
        window.clearTimeout(timer);
        btn.removeEventListener("click", handle);
      });
    });

    return () => {
      revealObserver?.disconnect();
      revealItems.forEach((el) => el.classList.remove("is-visible"));
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
      cleanups.forEach((fn) => fn());
      root.classList.remove("motion-ready");
      root.style.removeProperty("--scroll-progress");
    };
  }, [email]);

  return null;
}
