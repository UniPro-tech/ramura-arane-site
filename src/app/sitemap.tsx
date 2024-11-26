import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://arane.uniproject.jp/",
      priority: 1,
    },
    {
      url: "https://arane.uniproject.jp/about",
      priority: 0.8,
    },
    {
      url: "https://arane.uniproject.jp/license",
      priority: 0.5,
    },
    {
      url: "https://arane.uniproject.jp/download",
      priority: 0.8,
    },
    {
      url: "https://arane.uniproject.jp/contact",
      priority: 0.5,
    },
  ];
}
