"use client";

import Link from "next/link";
import { FadeIn } from "@/components/ui/fade-in";
import { ArrowRight, CheckCircle2, Server, Shield, Cloud, Code } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col w-full">

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

        {/* 🔥 BACKGROUND */}
        <div className="absolute inset-0 -z-10">

          {/* Image */}
          <div
            className="absolute inset-0 bg-cover bg-center scale-105"
            style={{
              backgroundImage: "url('/ems-back.jpg')"
            }}
          />

          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Soft vignette (depth effect) */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.6))]" />

        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">

            <FadeIn>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]">
                Precision engineering for{" "}
                <span className="text-white/70">
                  enterprise scale.
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="mt-6 text-xl text-white/80 max-w-2xl leading-relaxed">
                EMS is the trusted IT partner for organizations that demand absolute reliability. We build, manage, and scale the infrastructure that powers modern business.
              </p>
            </FadeIn>

            <FadeIn delay={0.2} className="mt-10 flex flex-wrap gap-4">

              <Link
                href="/contact"
className="inline-flex h-12 items-center justify-center rounded-md bg-[hsl(var(--primary))] text-primary-foreground px-8 text-sm font-medium shadow hover:opacity-90 transition"              >
                Discuss your project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>

              <Link
                href="/services"
                className="inline-flex h-12 items-center justify-center rounded-md border border-white text-white px-8 text-sm font-medium hover:bg-white/10 transition"
              >
                Explore services
              </Link>

            </FadeIn>

          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="mb-16">
              <h2 className="text-3xl font-bold tracking-tight">Core Capabilities</h2>
              <p className="mt-4 text-muted-foreground max-w-2xl">
                Comprehensive technological capabilities delivered with uncompromising standards.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Server, title: "Infrastructure", desc: "Resilient systems architecture and deployment for mission-critical operations." },
              { icon: Code, title: "Software Development", desc: "Custom application engineering utilizing modern, scalable frameworks." },
              { icon: Shield, title: "Cybersecurity", desc: "Comprehensive threat modeling, mitigation, and compliance enforcement." },
              { icon: Cloud, title: "Cloud Solutions", desc: "Cloud-native architectures, migrations, and cost-optimization strategies." }
            ].map((service, i) => (
              <FadeIn key={i} delay={0.1 * i} className="group relative rounded-xl border border-border/50 bg-background p-6 hover:border-primary/50 transition-colors">
                <service.icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Stats / Trust */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <h2 className="text-3xl font-bold tracking-tight mb-6">
                Built on discipline.<br/>Driven by results.
              </h2>
              <p className="text-muted-foreground mb-8">
                We do not compromise on quality. Our methodology is rooted in rigorous engineering practices, transparent communication, and an unwavering commitment to operational excellence.
              </p>

              <ul className="space-y-4">
                {[
                  "Zero-downtime deployment strategies",
                  "SOC2 & ISO27001 compliant workflows",
                  "Dedicated senior engineering teams",
                  "24/7 proactive monitoring & support"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-3 shrink-0" />
                    <span className="text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn delay={0.2} className="grid grid-cols-2 gap-4">
              <div className="bg-muted/30 p-8 rounded-xl border text-center">
                <div className="text-4xl font-bold">99.99%</div>
                <div className="text-sm text-muted-foreground">Uptime SLA</div>
              </div>
              <div className="bg-muted/30 p-8 rounded-xl border text-center">
                <div className="text-4xl font-bold">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="bg-muted/30 p-8 rounded-xl border text-center">
                <div className="text-4xl font-bold">250+</div>
                <div className="text-sm text-muted-foreground">Enterprise Projects</div>
              </div>
              <div className="bg-muted/30 p-8 rounded-xl border text-center">
                <div className="text-4xl font-bold">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

    </div>
  );
}