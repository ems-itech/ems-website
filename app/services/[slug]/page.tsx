import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { createPageMetadata } from "@/lib/seo";
import { ServiceDetail } from "./ServiceDetail";
import { getService, services } from "../service-data";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) return {};

  return createPageMetadata({
    title: service.name,
    description: service.intro,
    path: `/services/${service.slug}`,
    keywords: [`${service.name} Jordan`, `${service.name} Saudi Arabia`, `${service.name} MENA`],
  });
}

export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) notFound();

  return <ServiceDetail service={service} />;
}
