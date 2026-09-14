import type { Metadata } from "next";

import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Enterprise Clients",
  description:
    "See organizations across finance, telecommunications, tourism, real estate, media, and technology that trust EMS for reliable enterprise IT delivery.",
  path: "/clients",
});

export default function ClientsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
