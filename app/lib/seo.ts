import type { Metadata } from "next";

export const siteConfig = {
  name: "EMS",
  legalName: "Emerging Management Services",
  url: "https://www.ems-itech.com",
  description:
    "EMS delivers IT consulting, software development, QA, cybersecurity, and 24/7 production support for enterprises across Jordan, Saudi Arabia, and Egypt.",
  email: "info@ems-itech.com",
  phone: "+962790077730",
  locations: [
    { city: "Amman", country: "Jordan", countryCode: "JO" },
    { city: "Riyadh", country: "Saudi Arabia", countryCode: "SA" },
    { city: "Cairo", country: "Egypt", countryCode: "EG" },
  ],
  services: [
    "IT Consulting",
    "Software Development",
    "Production Support",
    "Software Testing",
    "Cybersecurity",
    "IT Recruitment",
    "Data Engineering",
    "System Integration",
    "Digital Workspace",
  ],
} as const;

type PageMetadata = {
  title: string;
  description: string;
  path: `/${string}` | "/";
  keywords?: string[];
};

export function createPageMetadata({
  title,
  description,
  path,
  keywords = [],
}: PageMetadata): Metadata {
  return {
    title,
    description,
    keywords,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: path,
      siteName: siteConfig.name,
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export function serializeJsonLd(data: object) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
