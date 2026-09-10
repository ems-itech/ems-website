import Image from "next/image";
import Link from "next/link";

import styles from "@/page.module.css";
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
        <div className={styles.copy}>
          <h1>Innovative IT Solutions for Today&apos;s <span>Businesses</span>.</h1>
          <p>EMS is your reliable IT partner, ensuring your organization runs smoothly. We design and maintain the infrastructure essential for modern enterprises.</p>
          <div className={styles.actions}>
            <Link href="/services" className={styles.secondaryButton}>Discover Our Services</Link>
            <Link href="/contact" className={styles.primaryButton}>
              Consult with an Expert
              <Image src="/figma-home/arrow-right.svg" alt="" width={20} height={20} aria-hidden />
            </Link>
          </div>
        </div>

        <div className={styles.assurances} aria-label="EMS service assurances">
          {assurances.map(({ icon, label, className }) => (
            <div className={`${styles.assurance} ${className}`} key={label}>
              <Image src={icon} alt="" width={20} height={20} aria-hidden />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.clients} aria-labelledby="clients-heading">
        <div className={styles.clientsCard}>
          <h2 id="clients-heading">Expertise Throughout the Software Lifecycle</h2>
          <ClientsCarousel />
        </div>
      </div>
    </section>
  );
}
