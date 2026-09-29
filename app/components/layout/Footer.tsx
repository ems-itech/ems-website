import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

import styles from "./Footer.module.css";
import mobileStyles from "./Footer.mobile.module.css";
import { SectionSlide } from "@/components/ui/motion-primitives";

const locations = [
  { city: "Amman", detail: "Jordan" },
  { city: "Riyadh", detail: "Saudi Arabia" },
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <SectionSlide className={styles.inner} from="bottom">
        <div className={`${styles.columns} ${mobileStyles.desktopOnly}`}>
          <div>
            <FooterLogo />
            <FooterDescription />
          </div>

          <div>
            <h2 className={styles.heading}>Regional Presence</h2>
            <LocationList />
          </div>

          <div>
            <h2 className={styles.heading}>Get in Touch</h2>
            <ContactList />
          </div>
        </div>

        <div className={mobileStyles.mobileContent}>
          <Link href="/" className={mobileStyles.mobileLogo} aria-label="EMS home">
            <Image
              src="/ems-main-logo.png"
              alt="EMS — Emerging Management Services"
              width={92}
              height={40}
            />
          </Link>
          <p className={mobileStyles.mobileDescription}>
            Empowering enterprise excellence through precise IT solutions and strategic
            tech integration across the MENA region.
          </p>

          <details className={mobileStyles.accordion}>
            <summary>
              Regional Presence
              <ChevronDown className={mobileStyles.chevron} size={24} strokeWidth={3} aria-hidden="true" />
            </summary>
            <ul className={mobileStyles.accordionList}>
              {locations.map((location) => (
                <li className={mobileStyles.accordionItem} key={location.city}>
                  <span className={mobileStyles.primaryText}>{location.city}</span>
                  <span className={mobileStyles.secondaryText}>{location.detail}</span>
                </li>
              ))}
            </ul>
          </details>

          <details className={mobileStyles.accordion}>
            <summary>
              Get in Touch
              <ChevronDown className={mobileStyles.chevron} size={24} strokeWidth={3} aria-hidden="true" />
            </summary>
            <ul className={mobileStyles.accordionList}>
              <li className={mobileStyles.accordionItem}>
                <span className={mobileStyles.primaryText}>Contact Number</span>
                <a className={mobileStyles.secondaryText} href="tel:+962790077730">
                  +962790077730
                </a>
              </li>
              <li className={mobileStyles.accordionItem}>
                <span className={mobileStyles.primaryText}>Email Address</span>
                <a className={mobileStyles.secondaryText} href="mailto:info@ems-itech.com">
                  info@ems-itech.com
                </a>
              </li>
            </ul>
          </details>
        </div>

        <hr className={`${styles.divider} ${mobileStyles.desktopOnly}`} />
        <div className={styles.bottom}>
          <p className={styles.copyright}><span className={mobileStyles.desktopCopyright}>© 2026 EMS. All rights reserved.</span><span className={mobileStyles.mobileCopyright}>© 2026 Ems-itech. All rights reserved.</span></p>
        </div>
      </SectionSlide>
    </footer>
  );
}

function FooterLogo() {
  return (
    <Link href="/" className={styles.brandLogo} aria-label="EMS home">
      <Image
        src="/ems-main-logo.png"
        alt="EMS — Emerging Management Services"
        width={92}
        height={40}
      />
    </Link>
  );
}

function FooterDescription() {
  return (
    <p className={styles.description}>
      Empowering enterprise excellence through precise IT solutions and strategic
      tech integration across the MENA region.
    </p>
  );
}

function LocationList() {
  return (
    <ul className={styles.presenceList}>
      {locations.map((location) => (
        <li className={styles.presenceItem} key={location.city}>
          <span className={styles.primaryText}>{location.city}</span>
          <span className={styles.secondaryText}>{location.detail}</span>
        </li>
      ))}
    </ul>
  );
}

function ContactList() {
  return (
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
  );
}
