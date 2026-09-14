"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import styles from "./page.module.css";
import { HeroEntrance, SectionSlide } from "@/components/ui/motion-primitives";

type SubmitStatus = "success" | "error" | null;

const contactDetails = [
  {
    icon: "/figma-contact/email.svg",
    label: "Email address",
    content: <a href="mailto:info@ems-itech.com">info@ems-itech.com</a>,
  },
  {
    icon: "/figma-contact/phone.svg",
    label: "Phone number",
    content: <a href="tel:+962790077730">+962 79 007 7730</a>,
  },
  {
    icon: "/figma-contact/office.svg",
    label: "OFFICE",
    content: <span>Emerging Management Services<br />Amman, Jordan</span>,
  },
];

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<SubmitStatus>(null);

  useEffect(() => {
    if (status !== "success") return;
    const timer = window.setTimeout(() => setStatus(null), 3000);
    return () => window.clearTimeout(timer);
  }, [status]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      phone: formData.get("phone"),
      service: formData.get("service"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        setStatus("error");
        return;
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <HeroEntrance from="left">
          <header className={styles.intro}>
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
              <Link href="/">Home</Link><span>/</span><span aria-current="page">Contact</span>
            </nav>
            <h1>Talk to an expert</h1>
            <p>Tell us what you are trying to keep running, ship or hire for. The first call is with the practice lead who would own the work — not a sales team.</p>
          </header>
        </HeroEntrance>

        <div className={styles.contentGrid}>
          <SectionSlide className={styles.formMotion} from="left">
            <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.fields}>
              <div className={styles.fieldRow}>
                <label className={styles.field}>Full name<input name="name" required placeholder="Your name" autoComplete="name" /></label>
                <label className={styles.field}>Work email<input name="email" type="email" required placeholder="you@company.com" autoComplete="email" /></label>
              </div>
              <div className={styles.fieldRow}>
                <label className={styles.field}>Company<input name="company" placeholder="Company name" autoComplete="organization" /></label>
                <label className={styles.field}>Phone (optional)<input name="phone" type="tel" placeholder="+962 ..." autoComplete="tel" /></label>
              </div>
              <label className={styles.field}>Needed Service
                <select name="service" defaultValue="Production Support">
                  <option>Production Support</option>
                  <option>IT Consulting</option>
                  <option>Software Development</option>
                  <option>Software Testing</option>
                  <option>Cybersecurity</option>
                  <option>IT Recruitment</option>
                </select>
              </label>
              <label className={styles.field}>What do you need?
                <textarea name="message" required placeholder="A short description of the systems, scope or roles involved.." />
              </label>
            </div>

            <div className={styles.formFooter}>
              <div className={styles.status} aria-live="polite">
                {status === "success" && <p className={styles.success}>Message sent successfully.</p>}
                {status === "error" && <p className={styles.error}>Something went wrong. Please try again.</p>}
              </div>
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send enquiry"}
                <Image src="/figma-contact/arrow-right.svg" alt="" width={20} height={20} aria-hidden />
              </button>
            </div>
            </form>
          </SectionSlide>

          <aside className={styles.sidebar}>
            <SectionSlide className={styles.sidebarMotion} from="right" delay={0.1}>
              <div className={styles.incidentCard}>
                <p className={styles.incidentLabel}>PRODUCTION INCIDENT?</p>
                <a className={styles.incidentPhone} href="tel:+962790077730">+962 79 007 7730</a>
                <p>The 24/7 escalation line for clients under a Production Support SLA.</p>
              </div>

              <div className={styles.detailsCard}>
                {contactDetails.map((detail) => (
                  <div className={styles.detail} key={detail.label}>
                    <span className={styles.iconBox}><Image src={detail.icon} alt="" width={20} height={20} aria-hidden /></span>
                    <span className={styles.detailText}><small>{detail.label}</small><strong>{detail.content}</strong></span>
                  </div>
                ))}
              </div>
            </SectionSlide>
          </aside>
        </div>
      </div>
    </div>
  );
}
