import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://ramura.uniproject.jp/arane/",
      priority: 1,
    },
    {
      url: "https://ramura.uniproject.jp/arane/about",
      priority: 0.8,
    },
    {
      url: "https://ramura.uniproject.jp/arane/download",
      priority: 0.8,
    },
  ];
}
