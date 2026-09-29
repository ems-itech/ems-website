import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/seo";
import { services } from "@/services/service-data";

const routes = [
  { path: "/", priority: 1 },
  { path: "/services", priority: 0.9 },
  { path: "/about", priority: 0.7 },
  { path: "/clients", priority: 0.7 },
  { path: "/contact", priority: 0.8 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = routes.map(({ path, priority }) => ({
    url: `${siteConfig.url}${path}`,
    changeFrequency: "monthly",
    priority,
  }));

  const serviceRoutes: MetadataRoute.Sitemap = services.map(({ slug }) => ({
    url: `${siteConfig.url}/services/${slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
