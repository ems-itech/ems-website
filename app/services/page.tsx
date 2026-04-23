"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { Server, Code, Shield, Cloud, HeadphonesIcon, Database, Cpu, Network, Laptop, ShieldCheck, Bug, Users } from "lucide-react";

export default function Services() {
   const services = [
  {
    icon: Server,
    title: "IT Consulting",
    desc: "At EMS, we provide strategic IT consulting to help organizations design scalable architectures, optimize operations, and successfully navigate digital transformation."
  },
  {
    icon: Code,
    title: "Software Development",
    desc: "EMS delivers custom software solutions built with modern technologies, ensuring scalable, secure, and high-performance applications tailored to business needs."
  },
  {
    icon: ShieldCheck,
    title: "Production Support",
    desc: "Our team at EMS provides 24/7 production support, ensuring system stability, proactive monitoring, and rapid incident resolution for mission-critical environments."
  },
  {
    icon: Bug,
    title: "Software Testing",
    desc: "EMS offers comprehensive QA services, including functional, automation, performance, and security testing to guarantee reliable and high-quality software delivery."
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    desc: "At EMS, we protect enterprise systems through advanced cybersecurity solutions, including threat detection, compliance support, and continuous security monitoring."
  },
  {
    icon: Users,
    title: "IT Recruitment",
    desc: "EMS connects organizations with top-tier IT talent, helping build strong and scalable teams across various technology domains and industries."
  },
  {
    icon: Database,
    title: "Data Engineering",
    desc: "Our data engineering services at EMS enable organizations to build efficient data pipelines, optimize storage, and unlock valuable business insights."
  },
  {
    icon: Cpu,
    title: "System Integration",
    desc: "EMS ensures seamless integration of enterprise systems, enabling unified workflows, improved efficiency, and better operational visibility."
  },
  {
    icon: Laptop,
    title: "Digital Workspace",
    desc: "We help organizations modernize their digital work environments with secure, flexible, and collaborative solutions that enhance productivity."
  }
];

    return (
        <div className="pt-24 pb-32">
            <div className="container mx-auto px-4">
                <FadeIn>
                    <div className="max-w-2xl mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                            Our Services
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            Comprehensive IT solutions delivered with precision, reliability, and enterprise-grade execution.            </p>
                    </div>
                </FadeIn>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, i) => (
                        <FadeIn key={i} delay={0.05 * i} className="group p-8 rounded-xl border border-border/60 bg-card hover:border-primary/40 transition-colors">
                            <service.icon className="h-8 w-8 text-primary mb-6" />
                            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                {service.desc}
                            </p>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </div>
    );
}
