"use client";

import { FadeIn } from "@/components/ui/fade-in";

export default function About() {
    return (
        <div className="pt-24 pb-32">
            <div className="container mx-auto px-4">
                <FadeIn>
                    <div className="max-w-3xl mb-20">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                            About Emerging Management Services (EMS)
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            EMS was founded on a singular principle: complex technology requires disciplined execution. We act as the technical backbone for organizations that cannot afford failure.
                        </p>
                    </div>
                </FadeIn>

                <div className="grid md:grid-cols-3 gap-12 mt-16">
                    <FadeIn delay={0.1}>
                        <div className="border-l-2 border-primary pl-6">
                            <h2 className="text-xl font-bold mb-4">Our Story</h2>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                EMS was established in 2018 with the goal of providing specialized IT recruitment services for IT companies across the MENA region. Within two years, in 2020, we expanded our scope to include Software Quality Assurance services, covering Functional, Automation, Performance, and Security Testing. In 2021, we further grew our capabilities to include QA Training and Project Management.
                                <br />
                                Today, we are continuing to expand our services beyond these areas, evolving into broader IT solutions to meet the growing and changing needs of our clients and the technology landscape.              </p>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <div className="border-l-2 border-border pl-6">
                            <h2 className="text-xl font-bold mb-4">Who we are</h2>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                Founded by Suma Abdullah, who has been immersed in the IT domain for over 20 years, EMS is powered by a diverse team of passionate technology professionals with extensive experience delivering solutions across the MENA region, the Arab Gulf, and the Americas.
                                <br />
                                Our team brings deep expertise in software engineering and IT services, enabling us to support organizations at every stage of their digital transformation journey. Through a strong focus on quality, reliability, and long-term partnerships, we help clients build scalable and efficient technology solutions that drive real business value.                            </p>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.3}>
                        <div className="border-l-2 border-border pl-6">
                            <h2 className="text-xl font-bold mb-4">Our Values</h2>
                            <ul className="text-muted-foreground text-sm leading-relaxed space-y-2">
                                <li>
                                    • <strong>Client Success:</strong> We are deeply committed to ensuring our clients’ success through a hands-on, practice-driven approach.
                                </li>
                                <li>
                                    • <strong>Tailored Solutions:</strong> We provide the right resources and expertise to best match each client’s unique requirements.
                                </li>
                                <li>
                                    • <strong>Exceeding Expectations:</strong> Our goal is to consistently go beyond expectations and deliver meaningful value in every engagement.
                                </li>
                            </ul>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </div>
    );
}
