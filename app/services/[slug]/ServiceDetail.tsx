import Image from "next/image";
import Link from "next/link";

import type { ServiceData } from "../service-data";
import styles from "./page.module.css";

const featureIcons = [
  "/figma-service/scope-monitoring.svg",
  "/figma-service/scope-incident.svg",
  "/figma-service/scope-prevention.svg",
  "/figma-service/scope-application.svg",
  "/figma-service/scope-infrastructure.svg",
] as const;

export function ServiceDetail({ service }: { service: ServiceData }) {
  return (
    <article className={styles.page}>
      <section className={styles.introSection}>
        <div className={styles.container}>
          <div className={styles.hero}>
            <div className={styles.heroImage} aria-hidden="true" />
            <div className={styles.heroTint} aria-hidden="true" />
            <div className={styles.heroContent}>
              <p className={styles.eyebrow}>{service.name}</p>
              <h1>{service.headline}</h1>
              <p className={styles.lead}>{service.intro}</p>
              <div className={styles.actions}>
                <Link href="/contact" className={styles.primaryButton}>
                  Talk to an Expert
                  <Image src="/figma-service/arrow-up-right.svg" alt="" width={20} height={20} aria-hidden />
                </Link>
                <Link href="/services" className={styles.secondaryButton}>View All Services</Link>
              </div>
            </div>
          </div>

          <div className={styles.metricGrid} aria-label={`${service.name} service metrics`}>
            {service.metrics.map((metric) => (
              <div className={styles.metric} key={metric.label}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <SectionHeading label={service.scopeLabel} title={service.scopeTitle} description={service.scopeDescription} />
          <div className={styles.featureGrid}>
            {service.features.map((feature, index) => (
              <div className={styles.featureCard} key={feature.title}>
                <div className={styles.iconBubble}>
                  <Image src={featureIcons[index % featureIcons.length]} alt="" width={24} height={24} aria-hidden />
                </div>
                <div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                  {feature.bullets ? <BulletList items={feature.bullets} /> : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <SectionHeading label="COMMITMENTS" title={service.commitmentTitle} description={service.commitmentDescription} />
          <div className={styles.commitmentPanel}>
            {service.commitments.map((commitment) => (
              <div className={styles.commitment} key={commitment.title}>
                <div>
                  <h3>{commitment.title}</h3>
                  <p>{commitment.description}</p>
                </div>
                {commitment.bullets?.[0] ? <strong>{commitment.bullets[0]}</strong> : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <SectionHeading label="ONBOARDING" title={service.onboardingTitle} description={service.onboardingDescription} />
          <ol className={styles.stepGrid}>
            {service.steps.map((step, index) => (
              <li key={step.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={`${styles.section} ${styles.faqSection}`}>
        <div className={`${styles.container} ${styles.faqGrid}`}>
          <div className={styles.faqPanel}>
            <h2>{service.name} questions</h2>
            <div className={styles.faqList}>
              {service.faqs.map((faq, index) => (
                <details key={faq.question} open={index === 0}>
                  <summary>
                    {faq.question}
                    <Image src="/figma-service/plus.svg" alt="" width={20} height={20} aria-hidden />
                  </summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
          <aside className={styles.contactCard}>
            <div>
              <h2>{service.contactTitle}</h2>
              <p>{service.contactDescription}</p>
            </div>
            <Link href="/contact" className={styles.primaryButton}>
              Talk to an Expert
              <Image src="/figma-service/arrow-up-right.svg" alt="" width={20} height={20} aria-hidden />
            </Link>
          </aside>
        </div>
      </section>
    </article>
  );
}

function SectionHeading({ label, title, description }: { label: string; title: string; description: string }) {
  return (
    <div className={styles.sectionHeading}>
      <p className={styles.eyebrow}>{label}</p>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

function BulletList({ items }: { items: readonly string[] }) {
  return (
    <ul className={styles.bulletList}>
      {items.map((item) => (
        <li key={item}>
          <Image src="/figma-service/check.svg" alt="" width={18} height={18} aria-hidden />
          {item}
        </li>
      ))}
    </ul>
  );
}
