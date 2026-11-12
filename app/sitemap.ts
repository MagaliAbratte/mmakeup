import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/novias", "/detras-de-las-brochas", "/portfolio", "/reservas"].map((path) => ({
    url: `https://mmakeup.vercel.app${path || "/"}`
  }));
}
