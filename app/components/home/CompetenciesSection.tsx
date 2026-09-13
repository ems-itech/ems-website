import styles from "@/page.module.css";

const competencies = [
  ["IT Consulting", "At EMS, we provide strategic IT consulting to help organizations design scalable architectures, optimize operations, and successfully navigate digital transformation."],
  ["Software Development", "EMS delivers custom software solutions built with modern technologies, ensuring scalable, secure, and high-performance applications tailored to business needs."],
  ["Production Support", "Our team at EMS provides 24/7 production support, ensuring system stability, proactive monitoring, and rapid incident resolution for mission-critical environments."],
  ["Software Testing", "EMS offers comprehensive QA services, including functional, automation, performance, and security testing to guarantee reliable and high-quality software delivery."],
  ["Cybersecurity", "At EMS, we protect enterprise systems through advanced cybersecurity solutions, including threat detection, compliance support, and continuous security monitoring."],
  ["IT Recruitment", "EMS connects organizations with top-tier IT talent, helping build strong and scalable teams across various technology domains and industries."],
  ["Data Engineering", "Our data engineering services at EMS enable organizations to build efficient data pipelines, optimize storage, and unlock valuable business insights."],
  ["System Integration", "EMS ensures seamless integration of enterprise systems, enabling unified workflows, improved efficiency, and better operational visibility."],
  ["Digital Workspace", "We help organizations modernize their digital work environments with secure, flexible, and collaborative solutions that enhance productivity."],
] as const;

export function CompetenciesSection() {
  return (
    <section id="services" className={styles.competencies}>
      <div className={styles.competenciesPanel}>
        <div className={`${styles.sectionHeading} ${styles.sectionHeadingLight}`}>
          <p className={styles.eyebrow}>TECHNICAL MASTERY</p>
          <h2>Key Competencies</h2>
          <p>Tailored services crafted for mission-critical operations. We design solutions that grow with your business.</p>
        </div>
        <div className={styles.competencyGrid}>
          {competencies.map(([title, description]) => (
            <article className={styles.competencyCard} key={title}>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
