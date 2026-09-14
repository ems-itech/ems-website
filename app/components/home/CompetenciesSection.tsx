import styles from "@/page.module.css";
import { HeadingReveal, StaggerCard, StaggerGroup } from "@/components/ui/motion-primitives";

const competencies = [
  ["IT Consulting", "Strategic IT consulting to help organizations design scalable architectures, optimize operations, and successfully navigate digital transformation."],
  ["Production Support", "24/7 production support, ensuring system stability, proactive monitoring, and rapid incident resolution for mission-critical environments."],
  ["Software Development", "Custom software solutions built with modern technologies, scalable, secure, and high-performance applications tailored to your business needs."],
  ["Software Testing", "Comprehensive QA services, functional, automation, performance, and security testing, to guarantee reliable, high-quality software delivery."],
  ["Cybersecurity", "Advanced cybersecurity solutions including threat detection, compliance support, and continuous security monitoring to protect enterprise systems."],
  ["IT Recruitment", "Connecting organizations with top-tier IT talent, helping build strong and scalable teams across technology domains and industries."],
  ["Data Engineering", "Building efficient data pipelines, optimizing storage, and unlocking valuable business insights from enterprise data."],
  ["System Integration", "Seamless integration of enterprise systems, unified workflows, improved efficiency, and better operational visibility."],
  ["Digital Workspace", "Modernizing digital work environments with secure, flexible, and collaborative solutions that enhance productivity."],
] as const;

export function CompetenciesSection() {
  return (
    <section id="services" className={styles.competencies}>
      <div className={styles.competenciesPanel}>
        <HeadingReveal className={`${styles.sectionHeading} ${styles.sectionHeadingLight}`}>
          <p className={styles.eyebrow}>TECHNICAL MASTERY</p>
          <h2>Key Competencies</h2>
          <p>Tailored services crafted for mission-critical operations. We design solutions that grow with your business.</p>
        </HeadingReveal>
        <StaggerGroup className={styles.competencyGrid} stagger={0.15}>
          {competencies.map(([title, description]) => (
            <StaggerCard className={styles.competencyCard} key={title}>
              <h3>{title}</h3>
              <p>{description}</p>
            </StaggerCard>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
