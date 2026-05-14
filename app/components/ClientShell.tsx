"use client";

import dynamic from "next/dynamic";

const LoadingScreen = dynamic(() => import("./LoadingScreen"), { ssr: false });
const ParallaxPlayground = dynamic(() => import("./ParallaxPlayground"), {
  ssr: false,
});

export function ClientLoadingScreen() {
  return <LoadingScreen />;
}

export function ClientParallaxPlayground() {
  return <ParallaxPlayground />;
}
