"use client";

import { useEffect, useState } from "react";

const WORDS = ["Design", "Build", "Ship"];
const DURATION = 2500;

type Status = "loading" | "exiting" | "hidden";

function getInitialStatus(): Status {
  if (typeof window === "undefined") return "loading";
  if (sessionStorage.getItem("ll-portfolio-loaded")) return "hidden";
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    sessionStorage.setItem("ll-portfolio-loaded", "1");
    return "hidden";
  }
  return "loading";
}

export default function LoadingScreen() {
  const [status, setStatus] = useState<Status>(getInitialStatus);
  const [count, setCount] = useState(0);
  const [wordIdx, setWordIdx] = useState(0);

  useEffect(() => {
    if (status !== "loading") return;

    const start = performance.now();
    let raf: number;

    const wordInterval = DURATION / WORDS.length;
    let wordStep = 0;
    let wordTimer: ReturnType<typeof setTimeout>;

    const rotateWord = () => {
      wordStep++;
      if (wordStep < WORDS.length) {
        setWordIdx(wordStep);
        wordTimer = setTimeout(rotateWord, wordInterval);
      }
    };
    wordTimer = setTimeout(rotateWord, wordInterval);

    const tick = (now: number) => {
      const t = Math.min((now - start) / DURATION, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setCount(Math.floor(eased * 100));

      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setCount(100);
        clearTimeout(wordTimer);
        setTimeout(() => {
          setStatus("exiting");
          setTimeout(() => {
            setStatus("hidden");
            sessionStorage.setItem("ll-portfolio-loaded", "1");
          }, 680);
        }, 280);
      }
    };

    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(wordTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (status === "hidden") return null;

  return (
    <div
      className={`loading-overlay${status === "exiting" ? " loading-exit" : ""}`}
      role="status"
      aria-label="Loading portfolio"
    >
      <div className="loading-top" aria-hidden="true">
        Portfolio
      </div>

      <div className="loading-center" aria-hidden="true">
        <div className="loading-word-wrap">
          {WORDS.map((w, i) => (
            <span
              key={w}
              className={`loading-word${i === wordIdx ? " loading-word-active" : ""}`}
            >
              {w}
            </span>
          ))}
        </div>
        <div className="loading-count">{String(count).padStart(3, "0")}</div>
      </div>

      <div className="loading-bar-track" aria-hidden="true">
        <div
          className="loading-bar"
          style={{ transform: `scaleX(${count / 100})` }}
        />
      </div>
    </div>
  );
}
