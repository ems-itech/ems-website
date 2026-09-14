import type { Metadata } from "next";

import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Enterprise IT Services",
  description:
    "Explore EMS enterprise IT services: consulting, software development, 24/7 production support, QA, cybersecurity, recruitment, data engineering, system integration, and digital workspace solutions.",
  path: "/services",
  keywords: [
    "enterprise IT services",
    "software development Jordan",
    "production support Saudi Arabia",
    "software testing MENA",
  ],
});

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
