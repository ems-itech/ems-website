import Image from "next/image";

import styles from "@/page.module.css";
import { HeadingReveal, StaggerGroup, StaggerPop } from "@/components/ui/motion-primitives";

const advantages = [
  ["/figma-home/shield-tick.svg", "Enterprise-Level Security", "Unyielding security standards integrated into every solution."],
  ["/figma-home/face-wink.svg", "Exceptional Talent", "Access to the top 1% of specialized tech talent across the region."],
  ["/figma-home/container.svg", "Effortless Integration", "Custom enterprise applications crafted with scalable designs and modern technology stacks that fit seamlessly into your existing systems."],
  ["/figma-home/headphones.svg", "24/7 Dedicated Support", "Constant monitoring and rapid response teams, day or night."],
] as const;

export function AdvantagesSection() {
  return (
    <section id="why-ems" className={styles.advantages}>
      <HeadingReveal className={styles.sectionHeading}>
        <p className={styles.eyebrow}>WHY CHOOSE EMS</p>
        <h2>The EMS Advantage</h2>
      </HeadingReveal>
      <StaggerGroup className={styles.advantageGrid} stagger={0.18}>
        {advantages.map(([icon, title, description]) => (
          <StaggerPop className={styles.advantageCard} key={title}>
            <Image src={icon} alt="" width={40} height={40} aria-hidden />
            <div><h3>{title}</h3><p>{description}</p></div>
          </StaggerPop>
        ))}
      </StaggerGroup>
    </section>
  );
}
