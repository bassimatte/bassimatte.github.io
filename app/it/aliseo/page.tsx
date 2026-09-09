import type { Metadata } from "next";
import { AliseoPage } from "../../aliseo-components";

export const metadata: Metadata = {
  title: "ALISEO — flusso di lavoro audio per iPad e Digitakt II",
  description: "Prepara, trasferisci, registra e proteggi suoni tra iPad e Digitakt II con ALISEO.",
  keywords: ["ALISEO", "Digitakt II", "gestione campioni iPad", "backup progetti Digitakt", "registrazione Digitakt", "trasferimento campioni"],
  alternates: { canonical: "/it/aliseo/", languages: { en: "/aliseo/", it: "/it/aliseo/", "x-default": "/aliseo/" } },
  openGraph: { type: "website", url: "/it/aliseo/", title: "ALISEO — flusso di lavoro audio per iPad e Digitakt II", description: "Prepara, trasferisci, registra e proteggi suoni tra iPad e Digitakt II.", images: ["/og.png"] },
};

export default function Page() { return <AliseoPage italian />; }
