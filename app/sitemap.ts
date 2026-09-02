import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-08-29");
  return [
    { url: "https://bassimatte.github.io/", lastModified, changeFrequency: "monthly", priority: 1 },
    { url: "https://bassimatte.github.io/it/", lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: "https://bassimatte.github.io/support/", lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: "https://bassimatte.github.io/it/support/", lastModified, changeFrequency: "monthly", priority: 0.6 },
  ];
}
