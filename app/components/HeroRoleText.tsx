"use client";

import { useEffect, useState } from "react";

const ROLES = [
  "Full-Stack Developer",
  "Mobile / AI Developer",
  "Frontend Lead",
  "CS Student @ UM",
];

export function HeroRoleText() {
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIdx((i) => (i + 1) % ROLES.length);
        setVisible(true);
      }, 380);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="hero-role-wrap" aria-live="polite" aria-atomic="true">
      <span
        className={`hero-role-word ${visible ? "hero-role-enter" : "hero-role-exit"}`}
      >
        {ROLES[idx]}
      </span>
    </span>
  );
}
