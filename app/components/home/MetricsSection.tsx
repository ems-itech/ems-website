import styles from "@/page.module.css";

const metrics = [
  ["99.9%", "Commitment to Uptime"],
  ["24/7", "PRODUCTION COVERAGE"],
  ["15+", "ENTERPRISE CLIENTS"],
] as const;

export function MetricsSection() {
  return (
    <section className={styles.metrics}>
      <div className={styles.sectionHeading}>
        <h2>Unlock the full potential of your data</h2>
        <p>Everything you need to attract, engage, and retain more users.</p>
      </div>
      <div className={styles.metricGrid}>
        {metrics.map(([value, label]) => (
          <div className={styles.metric} key={value}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
