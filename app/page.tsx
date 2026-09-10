import { AdvantagesSection } from "@/components/home/AdvantagesSection";
import { CallToActionSection } from "@/components/home/CallToActionSection";
import { CompetenciesSection } from "@/components/home/CompetenciesSection";
import { HeroSection } from "@/components/home/HeroSection";
import { MetricsSection } from "@/components/home/MetricsSection";
import { QuestionsSection } from "@/components/home/QuestionsSection";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <HeroSection />
      <CompetenciesSection />
      <AdvantagesSection />
      <MetricsSection />
      <QuestionsSection />
      <CallToActionSection />
    </div>
  );
}
