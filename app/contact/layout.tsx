import type { Metadata } from "next";

import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contact Our IT Specialists",
  description:
    "Talk with an EMS practice lead about enterprise IT consulting, software delivery, QA, cybersecurity, recruitment, or 24/7 production support.",
  path: "/contact",
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
