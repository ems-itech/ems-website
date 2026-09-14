import Image from "next/image";
import Link from "next/link";

import styles from "./Footer.module.css";
import { SectionSlide } from "@/components/ui/motion-primitives";

const locations = [
  { city: "Amman", detail: "Jordan" },
  { city: "Riyadh", detail: "Saudi Arabia" },
  { city: "Cairo", detail: "Egypt" },
];

const companyLinks = [
  { href: "/about", label: "About EMS" },
  { href: "/services", label: "Services" },
  { href: "/clients", label: "Clients" },
  { href: "/contact", label: "Contact" },
] as const;

export function Footer() {
  return (
    <footer className={styles.footer}>
      <SectionSlide className={styles.inner} from="bottom">
        <div className={styles.columns}>
          <div>
            <Link href="/" className={styles.brandLogo} aria-label="EMS home">
              <Image
                src="/ems-main-logo.png"
                alt="EMS — Emerging Management Services"
                width={92}
                height={40}
              />
            </Link>
            <p className={styles.description}>
              Empowering enterprise excellence through precise IT solutions and strategic
              tech integration across the MENA region.
            </p>
          </div>

          <div>
            <h2 className={styles.heading}>Company</h2>
            <ul className={styles.companyList}>
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link className={styles.secondaryText} href={link.href}>
                    {link.label}
                  </Link>
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

        <hr className={styles.divider} />
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © 2026 EMS. All rights reserved.
          </p>
        </div>
      </SectionSlide>
    </footer>
  );
}
