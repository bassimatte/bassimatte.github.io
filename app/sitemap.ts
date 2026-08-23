import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{
    url: "https://bassimatte.github.io/",
    lastModified: new Date("2026-08-23"),
    changeFrequency: "monthly",
    priority: 1,
  }];
}
