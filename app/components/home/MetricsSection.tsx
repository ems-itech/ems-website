import styles from "@/page.module.css";
import { HeadingReveal } from "@/components/ui/motion-primitives";
import { MetricCounter } from "./MetricCounter";

const metrics = [
  { target: 99.9, suffix: "%", decimals: 1, label: "Uptime Delivered" },
  { target: 24, suffix: "/7", decimals: 0, label: "Production Coverage" },
  { target: 15, suffix: "+", decimals: 0, label: "Enterprise Clients Served" },
] as const;

export function MetricsSection() {
  return (
    <section className={styles.metrics}>
      <HeadingReveal className={styles.sectionHeading}>
        <h2>Proven Reliability, Backed by Numbers</h2>
        <p>The metrics enterprises across the region trust EMS to deliver.</p>
      </HeadingReveal>
      <div className={styles.metricGrid}>
        {metrics.map(({ target, suffix, decimals, label }, index) => (
          <div className={styles.metric} key={label}>
            <MetricCounter
              target={target}
              suffix={suffix}
              decimals={decimals}
              delay={index * 0.22}
            />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
