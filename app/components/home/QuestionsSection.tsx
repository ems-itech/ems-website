import Image from "next/image";
import Link from "next/link";

import styles from "@/page.module.css";
import { HeadingReveal, SectionSlide } from "@/components/ui/motion-primitives";

const faqs = [
  ["What SLA guarantees does EMS offer?", "We offer a 99.9% uptime SLA backed by 24/7 monitoring and rapid incident response."],
  ["How quickly can EMS onboard our team?", "Our onboarding plan is tailored to your scope, systems, and operational priorities."],
  ["Do you support hybrid and multi-cloud environments?", "Yes. EMS supports secure hybrid and multi-cloud environments across modern platforms."],
  ["What industries do you specialize in?", "We support enterprise and public-sector organizations across the MENA region."],
  ["How is IT recruitment handled?", "We source and assess specialized talent against your technical and business requirements."],
] as const;

export function QuestionsSection() {
  return (
    <section id="faq" className={styles.questions}>
      <HeadingReveal className={styles.sectionHeading}>
        <h2>Common Questions</h2>
        <p>Everything you need to attract, engage, and retain more users.</p>
      </HeadingReveal>
      <div className={styles.questionsGrid}>
        <SectionSlide className={styles.faqPanel} from="left">
          <h3>Frequently Asked Questions</h3>
          <div className={styles.faqList}>
            {faqs.map(([question, answer], index) => (
              <details className={styles.faqItem} open={index === 0} key={question}>
                <summary>
                  <span>{question}</span>
                  <Image src="/figma-home/plus.svg" alt="" width={24} height={24} aria-hidden />
                </summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </SectionSlide>
        <SectionSlide className={styles.expertCard} from="right" delay={0.12}>
          <div>
            <h3>Ready to elevate your IT infrastructure?</h3>
            <p>Connect with our enterprise experts to discuss your technical challenges and discover how EMS can drive your digital success.</p>
          </div>
          <Link href="/contact" className={styles.primaryButton}>
            Talk to an Expert Today
            <Image src="/figma-home/arrow-up-right.svg" alt="" width={20} height={20} aria-hidden />
          </Link>
        </SectionSlide>
      </div>
    </section>
  );
}
