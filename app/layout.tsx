import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://bassimatte.github.io"),
  title: "Matteo Bassi (bassimat) — Generative Audio & Field Recordings",
  description: "Generative audio instruments, field recordings and open sound experiments by Matteo Bassi (bassimat), creator of Mantice, Glorb and Campana.",
  keywords: ["Matteo Bassi", "bassimat", "generative audio", "sound design", "field recording", "ambient synthesizer", "Mantice", "Glorb", "Campana"],
  authors: [{ name: "Matteo Bassi", url: "https://bassimatte.github.io/" }],
  creator: "Matteo Bassi",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    title: "Matteo Bassi — Generative Audio & Field Recordings",
    description: "Generative instruments, field recordings and open experiments for people who listen closely.",
    siteName: "Matteo Bassi / bassimat",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Matteo Bassi — Generative Audio and Field Recordings" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Matteo Bassi — Generative Audio & Field Recordings",
    description: "Generative instruments, field recordings and open sound experiments.",
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon-sound-v2.png",
    shortcut: "/favicon-sound-v2.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
