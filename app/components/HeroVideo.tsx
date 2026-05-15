"use client";

import { useEffect, useRef } from "react";

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Attempt initial play (important for browsers that block autoPlay race)
    const tryPlay = () => {
      video.play().catch(() => {
        // silently ignore — browser may require gesture
      });
    };

    // Restart on end as belt-and-suspenders backup for the loop attribute
    const onEnded = () => tryPlay();

    // Resume after tab becomes visible again (some browsers pause background tabs)
    const onVisibility = () => {
      if (document.visibilityState === "visible") tryPlay();
    };

    video.addEventListener("ended", onEnded);
    document.addEventListener("visibilitychange", onVisibility);

    tryPlay();

    return () => {
      video.removeEventListener("ended", onEnded);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      className="hero-video"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-hidden="true"
    >
      <source src="/videos/hero-bg.webm" type="video/webm" />
    </video>
  );
}
