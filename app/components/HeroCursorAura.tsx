"use client";

/**
 * HeroCursorAura — pure CSS cursor interaction for the hero section.
 *
 * Replaces the previous WebGL fluid effects (FluidGlass, LiquidEther) which
 * had recurring shader/model runtime errors.
 *
 * How it works:
 *  - Updates --aura-x / --aura-y CSS custom properties on the hero element
 *    each animation frame (lerped for smooth following).
 *  - A CSS radial-gradient on .hero-aura reads those variables, producing a
 *    soft blue-gray glow that trails the cursor.
 *  - Zero WebGL. Zero shaders. Zero GLB model. Cannot crash at runtime.
 *
 * Disabled on touch devices and prefers-reduced-motion.
 */

import { useEffect } from "react";

export function HeroCursorAura() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (isTouch || reduceMotion) return;

    const hero = document.getElementById("hero");
    if (!hero) return;

    // Normalised [0, 1] target and current positions
    let tx = 0.5;
    let ty = 0.42;
    let cx = tx;
    let cy = ty;
    let raf = 0;

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const tick = () => {
      cx = lerp(cx, tx, 0.08);
      cy = lerp(cy, ty, 0.08);
      // Set CSS variables that the .hero-aura background-gradient reads
      hero.style.setProperty("--aura-x", `${(cx * 100).toFixed(2)}%`);
      hero.style.setProperty("--aura-y", `${(cy * 100).toFixed(2)}%`);
      raf = requestAnimationFrame(tick);
    };

    const onMove = (e: PointerEvent) => {
      const rect = hero.getBoundingClientRect();
      tx = (e.clientX - rect.left) / rect.width;
      ty = (e.clientY - rect.top) / rect.height;
    };

    hero.addEventListener("pointermove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      hero.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
      hero.style.removeProperty("--aura-x");
      hero.style.removeProperty("--aura-y");
    };
  }, []);

  // This component only drives CSS variables on the parent — no DOM element needed.
  return null;
}
