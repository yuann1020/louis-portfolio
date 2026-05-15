import type { Metadata, Viewport } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--inter-font",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--display-font",
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

// viewport-fit=cover lets env(safe-area-inset-top) work on notched iPhones
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "Louis Lau | Full-Stack, Mobile & AI Developer",
  description:
    "Portfolio of Louis Lau, a Year 2 CS student at University of Malaya building full-stack, mobile, and AI-assisted products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${instrumentSerif.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
