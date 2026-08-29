import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Matteo Bassi (bassimat) — Strumenti generativi e trasformazione sonora",
  description: "Strumenti generativi e trasformazione sonora sperimentale di Matteo Bassi (bassimat), creatore di Mantice, Glorb, Campana e Maresono.",
  keywords: ["Matteo Bassi", "bassimat", "strumenti generativi", "sound design sperimentale", "trasformazione sonora", "sintesi audio", "Mantice", "Glorb", "Campana", "Maresono"],
  alternates: {
    canonical: "/it/",
    languages: { en: "/", it: "/it/", "x-default": "/" },
  },
  openGraph: {
    type: "website",
    url: "/it/",
    title: "Matteo Bassi — Strumenti generativi e trasformazione sonora",
    description: "Strumenti generativi e sperimentazione sonora, seguendo l’inaspettato.",
    siteName: "Matteo Bassi / bassimat",
    locale: "it_IT",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Matteo Bassi — Strumenti generativi e trasformazione sonora" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Matteo Bassi — Strumenti generativi e trasformazione sonora",
    description: "Strumenti generativi e sperimentazione sonora, seguendo l’inaspettato.",
    images: ["/og.png"],
  },
};

export default function ItalianLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
