import Image from "next/image";

import styles from "@/page.module.css";

const advantages = [
  ["/figma-home/shield-tick.svg", "Enterprise-Level Security", "Unyielding security standards integrated into every solution."],
  ["/figma-home/face-wink.svg", "Exceptional Talent", "Custom enterprise applications crafted with scalable designs and modern technology stacks."],
  ["/figma-home/container.svg", "Effortless Integration", "Access to the top 1% of specialized tech talent."],
  ["/figma-home/headphones.svg", "24/7 Dedicated Support", "Constant monitoring and rapid response teams."],
] as const;

export function AdvantagesSection() {
  return (
    <section className={styles.advantages}>
      <div className={styles.sectionHeading}>
        <p className={styles.eyebrow}>WHY CHOOSE EMS</p>
        <h2>The EMS Advantage</h2>
      </div>
      <div className={styles.advantageGrid}>
        {advantages.map(([icon, title, description]) => (
          <article className={styles.advantageCard} key={title}>
            <Image src={icon} alt="" width={40} height={40} aria-hidden />
            <div><h3>{title}</h3><p>{description}</p></div>
          </article>
        ))}
      </div>
    </section>
  );
}
