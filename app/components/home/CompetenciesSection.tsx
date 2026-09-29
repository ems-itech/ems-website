import Link from "next/link";

import styles from "@/page.module.css";
import { HeadingReveal, StaggerCard, StaggerGroup } from "@/components/ui/motion-primitives";
import { services } from "@/services/service-data";

export function CompetenciesSection() {
  return (
    <section id="services" className={styles.competencies}>
      <div className={styles.competenciesPanel}>
        <HeadingReveal className={`${styles.sectionHeading} ${styles.sectionHeadingLight}`}>
          <p className={styles.eyebrow}>TECHNICAL MASTERY</p>
          <h2>Key Competencies</h2>
          <p>Tailored services crafted for mission-critical operations. We design solutions that grow with your business.</p>
        </HeadingReveal>
        <StaggerGroup className={styles.competencyGrid} stagger={0.15}>
          {services.map((service) => (
            <StaggerCard className={`${styles.competencyCard} transition-transform duration-200 hover:-translate-y-1`} key={service.slug}>
              <Link href={`/services/${service.slug}`} className="flex h-full flex-col text-inherit no-underline">
                <h3>{service.name}</h3>
                <p>{service.intro}</p>
                <span className="mt-auto pt-4 text-sm font-semibold text-[#5a8506]">Explore service ↗</span>
              </Link>
            </StaggerCard>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
