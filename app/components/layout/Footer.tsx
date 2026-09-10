"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./Footer.module.css";

const offerings = [
  { label: "Managed IT Solutions", href: "/services" },
  { label: "Cloud Solutions", href: "/services" },
  { label: "Cybersecurity Services", href: "/services", isNew: true },
  { label: "Data Analytics & AI Solutions", href: "/services" },
  { label: "Enterprise Resource Planning (ERP)", href: "/services" },
];

const locations = [
  { city: "Amman, Jordan", detail: "Amman, Jordan" },
  { city: "Riyadh, Saudi Arabia", detail: "Riyadh, Saudi Arabia" },
  { city: "Cairo, Egypt", detail: "Cairo, Egypt" },
];

export function Footer() {
  const isContact = usePathname() === "/contact";

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.columns}>
          <div>
            <Link href="/" className={styles.brandLogo} aria-label="EMS home">
              <Image
                src="/ems-main-logo.png"
                alt="EMS — Emerging Management Services"
                width={72}
                height={32}
              />
            </Link>
            <p className={styles.description}>
              Empowering enterprise excellence through precise IT solutions and strategic
              tech integration across the MENA region.
            </p>
          </div>

          <div className={styles.offerings}>
            <h2 className={styles.heading}>Our Offerings</h2>
            <ul className={styles.linkList}>
              {offerings.map((offering) => (
                <li key={offering.label}>
                  <Link href={offering.href} className={styles.link}>
                    {offering.label}
                  </Link>
                  {offering.isNew ? <span className={styles.newBadge}>New Services</span> : null}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className={styles.heading}>Regional Presence</h2>
            <ul className={styles.presenceList}>
              {locations.map((location) => (
                <li className={styles.presenceItem} key={location.city}>
                  <span className={styles.primaryText}>{location.city}</span>
                  <span className={styles.secondaryText}>{location.detail}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className={styles.heading}>Get in Touch</h2>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <span className={styles.primaryText}>Contact Number</span>
                <a className={styles.secondaryText} href="tel:+962790077730">
                  +962790077730
                </a>
              </li>
              <li className={styles.contactItem}>
                <span className={styles.primaryText}>Email Address</span>
                <a className={styles.secondaryText} href="mailto:info@ems-itech.com">
                  info@ems-itech.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className={`${styles.divider} ${isContact ? styles.contactDivider : ""}`} />
        <div className={`${styles.bottom} ${isContact ? styles.contactBottom : ""}`}>
          <p className={styles.copyright}>
            © 2026 Ems-itech. All rights reserved.
          </p>
          {isContact ? (
            <nav className={styles.legalLinks} aria-label="Legal">
              <Link href="/terms">Terms of Service</Link>
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/cookies">Cookie Policy</Link>
            </nav>
          ) : null}
        </div>
      </div>
    </footer>
  );
}
