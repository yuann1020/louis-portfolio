"use client";

import { useEffect, useRef } from "react";

export function CursorTurbulenceHero() {
  const lensRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: -400, y: -400 });
  const isActive = useRef(false);

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (isTouch || reduceMotion) return;

    const hero = document.getElementById("hero");
    const lens = lensRef.current;
    if (!hero || !lens) return;

    const SPEED = 0.1; // lerp factor — lower = smoother/slower follow

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const tick = () => {
      current.current.x = lerp(current.current.x, target.current.x, SPEED);
      current.current.y = lerp(current.current.y, target.current.y, SPEED);
      lens.style.transform = `translate(${current.current.x}px, ${current.current.y}px) translate(-50%, -50%)`;
      if (isActive.current) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    const onMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      target.current.x = e.clientX - rect.left;
      target.current.y = e.clientY - rect.top;
    };

    const onEnter = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      // Teleport current to cursor position on first enter (no lag on appear)
      current.current.x = e.clientX - rect.left;
      current.current.y = e.clientY - rect.top;
      target.current.x = current.current.x;
      target.current.y = current.current.y;
      lens.style.transform = `translate(${current.current.x}px, ${current.current.y}px) translate(-50%, -50%)`;

      isActive.current = true;
      lens.style.opacity = "1";
      rafRef.current = requestAnimationFrame(tick);
    };

    const onLeave = () => {
      isActive.current = false;
      lens.style.opacity = "0";
      cancelAnimationFrame(rafRef.current);
    };

    hero.addEventListener("mousemove", onMove, { passive: true });
    hero.addEventListener("mouseenter", onEnter);
    hero.addEventListener("mouseleave", onLeave);

    return () => {
      hero.removeEventListener("mousemove", onMove);
      hero.removeEventListener("mouseenter", onEnter);
      hero.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={lensRef}
      className="cursor-lens"
      aria-hidden="true"
    />
  );
}
