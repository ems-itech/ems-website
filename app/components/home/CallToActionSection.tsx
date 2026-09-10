import Image from "next/image";
import Link from "next/link";

import styles from "@/page.module.css";

export function CallToActionSection() {
  return (
    <section className={styles.cta}>
      <div className={styles.ctaInner}>
        <div>
          <h2>Ready to enhance your IT infrastructure?</h2>
          <p>Engage with our enterprise experts to tackle your technical challenges and discover how EMS can propel your digital success.</p>
        </div>
        <Link href="/contact" className={styles.ctaButton}>
          Consult with an Expert Today
          <Image src="/figma-home/arrow-up-right.svg" alt="" width={20} height={20} aria-hidden />
        </Link>
      </div>
    </section>
  );
}
