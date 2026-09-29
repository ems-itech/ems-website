import Image from "next/image";
import Link from "next/link";

import styles from "@/page.module.css";
import { HeadingReveal, SectionSlide } from "@/components/ui/motion-primitives";

const faqs = [
  ["What SLA guarantees does EMS offer?", "We offer a 99.9% uptime SLA backed by 24/7 monitoring and rapid incident response."],
  ["How quickly can EMS onboard our team?", "Most engagements begin within one to two weeks of scope confirmation, starting with a discovery session to align on your systems, priorities, and success criteria before work begins."],
  ["Do you support hybrid and multi-cloud environments?", "Yes. EMS supports hybrid and multi-cloud environments, including AWS, Azure, and Google Cloud, as well as on-premise and private cloud infrastructure, so your team isn't locked into a single provider."],
  ["What engagement models does EMS offer?", "EMS works flexibly to match how you want to operate, staff augmentation to extend your existing team, a dedicated team embedded in your workflow, or full project-based delivery from scope to launch. We can also start with one model and shift as your needs evolve."],
] as const;

export function QuestionsSection() {
  return (
    <section id="faq" className={styles.questions}>
      <HeadingReveal className={styles.sectionHeading}>
        <h2>Common Questions</h2>
        <p>Straight answers to what enterprises usually ask before working with us.</p>
      </HeadingReveal>
      <div className={styles.questionsGrid}>
        <SectionSlide className={styles.faqPanel} from="left">
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
            Consult with an Expert Today
            <Image src="/figma-home/arrow-up-right.svg" alt="" width={20} height={20} aria-hidden />
          </Link>
        </SectionSlide>
      </div>
    </section>
  );
}
