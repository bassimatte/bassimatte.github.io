import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://bassimatte.github.io"),
  title: "Matteo Bassi (bassimat) — Generative Instruments & Sound Transformation",
  description: "Generative instruments and experimental sound transformation by Matteo Bassi (bassimat), creator of Mantice, Glorb, Campana and Maresono.",
  keywords: ["Matteo Bassi", "bassimat", "generative instruments", "experimental sound design", "sound transformation", "audio synthesis", "Mantice", "Glorb", "Campana", "Maresono"],
  authors: [{ name: "Matteo Bassi", url: "https://bassimatte.github.io/" }],
  creator: "Matteo Bassi",
  verification: {
    google: "pp3jhptIHkhnjku-p-0sm3J4XAJzQlE7WiNZ2JwKUNA",
  },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    title: "Matteo Bassi — Generative Instruments & Sound Transformation",
    description: "Generative instruments and experimental sound transformation—following the unexpected.",
    siteName: "Matteo Bassi / bassimat",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Matteo Bassi — Generative Instruments and Sound Transformation" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Matteo Bassi — Generative Instruments & Sound Transformation",
    description: "Generative instruments and experimental sound transformation—following the unexpected.",
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon-open-orbit.png",
    shortcut: "/favicon-open-orbit.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script src="/analytics.js" defer />
        <script src="/samples.js" defer />
      </head>
      <body>{children}</body>
    </html>
  );
}
