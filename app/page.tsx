import type { Metadata } from "next";

import { AdvantagesSection } from "@/components/home/AdvantagesSection";
import { CallToActionSection } from "@/components/home/CallToActionSection";
import { CompetenciesSection } from "@/components/home/CompetenciesSection";
import { HeroSection } from "@/components/home/HeroSection";
import { MetricsSection } from "@/components/home/MetricsSection";
import { QuestionsSection } from "@/components/home/QuestionsSection";
import styles from "./page.module.css";
import { createPageMetadata, serializeJsonLd, siteConfig } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title:
    "EMS | Enterprise IT Consulting, Development & Support — Jordan, Saudi Arabia & Egypt",
  description: siteConfig.description,
  path: "/",
  keywords: [
    "enterprise IT solutions Jordan",
    "IT consulting Amman",
    "managed IT services Saudi Arabia",
    "enterprise technology partner MENA",
  ],
});

const homepageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${siteConfig.url}/#enterprise-it-services`,
      name: "Enterprise IT Consulting, Development and Support",
      description: siteConfig.description,
      provider: { "@id": `${siteConfig.url}/#organization` },
      serviceType: siteConfig.services,
      areaServed: siteConfig.locations.map(({ country, countryCode }) => ({
        "@type": "Country",
        name: country,
        identifier: countryCode,
      })),
    },
    {
      "@type": "FAQPage",
      "@id": `${siteConfig.url}/#faq-schema`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What SLA guarantees does EMS offer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "EMS offers a 99.9% uptime SLA backed by 24/7 monitoring and rapid incident response.",
          },
        },
        {
          "@type": "Question",
          name: "What engagement models does EMS offer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "EMS offers staff augmentation, dedicated teams, and full project-based delivery, with the flexibility to change models as needs evolve.",
          },
        },
      ],
    },
  ],
};

export default function Home() {
  return (
    <div className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(homepageJsonLd) }}
      />
      <HeroSection />
      <CompetenciesSection />
      <AdvantagesSection />
      <MetricsSection />
      <QuestionsSection />
      <CallToActionSection />
    </div>
  );
}
