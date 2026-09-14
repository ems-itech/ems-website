import Image from "next/image";
import Link from "next/link";

import styles from "@/page.module.css";
import { HeroEntrance, SectionSlide } from "@/components/ui/motion-primitives";
import { ClientsCarousel } from "./ClientsCarousel";

const assurances = [
  { icon: "/figma-home/clock.svg", label: "Always-On Monitoring", className: styles.monitoring },
  { icon: "/figma-home/lightning.svg", label: "Commitment to 99.9% Uptime", className: styles.uptime },
  { icon: "/figma-home/hero-shield.svg", label: "Top-Tier Security for Enterprises", className: styles.security },
] as const;

export function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        <HeroEntrance className={styles.copy} from="left">
          <h1>Innovative IT Solutions for Today&apos;s <span>Businesses</span>.</h1>
          <p>EMS is your reliable IT partner, ensuring your organization runs smoothly. We design and maintain the infrastructure essential for modern enterprises.</p>
          <div className={styles.actions}>
            <Link href="#services" className={styles.secondaryButton}>Discover Our Services</Link>
            <Link href="/contact" className={styles.primaryButton}>
              Consult with an Expert
              <Image src="/figma-home/arrow-right.svg" alt="" width={20} height={20} aria-hidden />
            </Link>
          </div>
        </HeroEntrance>

        <div className={styles.assurances} aria-label="EMS service assurances">
          {assurances.map(({ icon, label, className }, index) => (
            <HeroEntrance className={`${styles.assuranceEntrance} ${className}`} delay={0.18 + index * 0.1} from="right" key={label}>
              <div className={styles.assurance}>
                <Image src={icon} alt="" width={20} height={20} aria-hidden />
                <span>{label}</span>
              </div>
            </HeroEntrance>
          ))}
        </div>
      </div>

      <div className={styles.clients} aria-labelledby="clients-heading">
        <SectionSlide className={styles.clientsCard} from="bottom">
          <h2 id="clients-heading">Expertise Throughout the Software Lifecycle</h2>
          <ClientsCarousel />
        </SectionSlide>
      </div>
    </section>
  );
}
