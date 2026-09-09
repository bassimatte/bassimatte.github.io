import type { Metadata } from "next";
import { AliseoPage } from "../aliseo-components";

export const metadata: Metadata = {
  title: "ALISEO — iPad sound workflow for Digitakt II",
  description: "Prepare, transfer, record and protect sounds between iPad and Digitakt II with ALISEO.",
  keywords: ["ALISEO", "Digitakt II", "iPad sample manager", "Digitakt project backup", "Digitakt recording", "sample transfer"],
  alternates: { canonical: "/aliseo/", languages: { en: "/aliseo/", it: "/it/aliseo/", "x-default": "/aliseo/" } },
  openGraph: { type: "website", url: "/aliseo/", title: "ALISEO — iPad sound workflow for Digitakt II", description: "Prepare, transfer, record and protect sounds between iPad and Digitakt II.", images: ["/og.png"] },
};

export default function Page() { return <AliseoPage />; }
