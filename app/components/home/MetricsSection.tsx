import styles from "@/page.module.css";
import { HeadingReveal } from "@/components/ui/motion-primitives";
import { MetricCounter } from "./MetricCounter";

const metrics = [
  { target: 99.9, suffix: "%", decimals: 1, label: "Commitment to Uptime" },
  { target: 24, suffix: "/7", decimals: 0, label: "PRODUCTION COVERAGE" },
  { target: 15, suffix: "+", decimals: 0, label: "ENTERPRISE CLIENTS" },
] as const;

export function MetricsSection() {
  return (
    <section className={styles.metrics}>
      <HeadingReveal className={styles.sectionHeading}>
        <h2>Unlock the full potential of your data</h2>
        <p>Everything you need to attract, engage, and retain more users.</p>
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
