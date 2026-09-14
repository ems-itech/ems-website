import styles from "@/page.module.css";
import { HeadingReveal, StaggerGroup, StaggerPop } from "@/components/ui/motion-primitives";

const metrics = [
  ["99.9%", "Commitment to Uptime"],
  ["24/7", "PRODUCTION COVERAGE"],
  ["15+", "ENTERPRISE CLIENTS"],
] as const;

export function MetricsSection() {
  return (
    <section className={styles.metrics}>
      <HeadingReveal className={styles.sectionHeading}>
        <h2>Unlock the full potential of your data</h2>
        <p>Everything you need to attract, engage, and retain more users.</p>
      </HeadingReveal>
      <StaggerGroup className={styles.metricGrid} stagger={0.22}>
        {metrics.map(([value, label]) => (
          <StaggerPop className={styles.metric} key={value}>
            <strong>{value}</strong>
            <span>{label}</span>
          </StaggerPop>
        ))}
      </StaggerGroup>
    </section>
  );
}
