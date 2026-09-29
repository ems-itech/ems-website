import type { Metadata } from "next";

import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "About Emerging Management Services",
  description:
    "Learn how EMS grew from IT recruitment in Jordan into an enterprise technology partner delivering software, QA, support, and consulting across MENA.",
  path: "/about",
});

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
