"use client";

import { useEffect } from "react";

export function PortfolioInteractions({ email }: { email: string }) {
  useEffect(() => {
    const root = document.documentElement;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    root.classList.add("motion-ready");

    const revealItems = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );

    let revealObserver: IntersectionObserver | undefined;

    if (reduceMotion) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
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
        {
          rootMargin: "0px 0px -12% 0px",
          threshold: 0.12,
        },
      );

      revealObserver = observer;
      revealItems.forEach((item) => observer.observe(item));
    }

    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("[data-section]"),
    );
    const navLinks = Array.from(
      document.querySelectorAll<HTMLAnchorElement>("[data-nav-link]"),
    );

    const setActiveSection = (sectionId: string) => {
      navLinks.forEach((link) => {
        const href = link.getAttribute("href");
        link.classList.toggle("is-active", href === `#${sectionId}`);
      });
    };

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target instanceof HTMLElement) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        rootMargin: "-28% 0px -58% 0px",
        threshold: [0.05, 0.2, 0.45, 0.7],
      },
    );

    sections.forEach((section) => sectionObserver.observe(section));

    const updateScrollProgress = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
      root.style.setProperty(
        "--scroll-progress",
        String(Math.min(Math.max(progress, 0), 1)),
      );
    };

    updateScrollProgress();
    window.addEventListener("scroll", updateScrollProgress, { passive: true });
    window.addEventListener("resize", updateScrollProgress);

    const copyButtons = Array.from(
      document.querySelectorAll<HTMLButtonElement>("[data-copy-email]"),
    );
    const cleanupCopyHandlers: Array<() => void> = [];

    copyButtons.forEach((button) => {
      const label = button.querySelector<HTMLElement>("[data-copy-label]");
      let resetTimer: number | undefined;

      const setLabel = (text: string, copied: boolean) => {
        if (label) {
          label.textContent = text;
        }
        button.dataset.copied = copied ? "true" : "false";
      };

      const handleCopy = async () => {
        window.clearTimeout(resetTimer);

        try {
          await navigator.clipboard.writeText(email);
          setLabel("Copied", true);
        } catch {
          setLabel("Copy failed", false);
        }

        resetTimer = window.setTimeout(() => {
          setLabel("Copy email", false);
        }, 1800);
      };

      button.addEventListener("click", handleCopy);
      cleanupCopyHandlers.push(() => {
        window.clearTimeout(resetTimer);
        button.removeEventListener("click", handleCopy);
      });
    });

    return () => {
      revealItems.forEach((item) => item.classList.remove("is-visible"));
      sectionObserver.disconnect();
      window.removeEventListener("scroll", updateScrollProgress);
      window.removeEventListener("resize", updateScrollProgress);
      cleanupCopyHandlers.forEach((cleanup) => cleanup());
      revealObserver?.disconnect();
      root.classList.remove("motion-ready");
      root.style.removeProperty("--scroll-progress");
    };
  }, [email]);

  return null;
}
