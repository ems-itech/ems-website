"use client";

import Image from "next/image";
import { ClipReveal, HeroEntrance, SectionSlide } from "@/components/ui/motion-primitives";

export default function Clients() {
    const clients = [
        { name: "HALA", logo: "/hala.png" },
        { name: "Thamanya", logo: "/thamanya.png" },
        { name: "Wareef", logo: "/wareef.jpeg" },
        { name: "Saudi Tourism Authority", logo: "/sta.png" },
        { name: "Orange", logo: "/orange.png" },
        { name: "LigaData", logo: "/dataliga.png" },
        { name: "ChalkTalk", logo: "/chalktalk.png" },
        { name: "NHC", logo: "/nhc.png" },
        { name: "Esense", logo: "/esense.png" },
        { name: "Saudi Central Bank", logo: "/bank.png" },
        { name: "Rekaz", logo: "/rakaz.png" },
        { name: "Wadaie", logo: "/wadaie.png" },

    ];

    return (
        <div className="pt-24 pb-32">
            <div className="container mx-auto px-4">

                {/* Header */}
                <HeroEntrance from="left">
                    <div className="max-w-2xl mb-20">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                            Our Clients                        </h1>
                        <p className="text-xl text-muted-foreground">
                            We are proud to work with organizations across different industries who trust EMS to deliver reliable, scalable, and secure technology solutions.                        </p>
                    </div>
                </HeroEntrance>

                {/* Clients Grid */}
                <SectionSlide className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-20" from="right">
                    {clients.map((client) => (
                        <div key={client.name} className="flex flex-col items-center justify-center gap-6 group">
                            {/* Logo (no hover) */}
                            <div className="relative w-56 h-28">
                                <Image
                                    src={client.logo}
                                    alt={client.name}
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            {/* Name (hover becomes bold) */}
                            <span className="text-sm md:text-base text-muted-foreground text-center transition-all duration-200 group-hover:text-foreground group-hover:font-semibold">
                                {client.name}
                            </span>
                        </div>
                    ))}
                </SectionSlide>

                {/* Bottom Section */}
                <ClipReveal delay={0.12} className="mt-32 p-12 bg-muted/30 border border-border/50 rounded-2xl">
                    <div className="max-w-3xl">
                        <h2 className="text-2xl font-bold mb-4">Proven Impact.</h2>
                        <p className="text-muted-foreground">
                            At EMS, our work focuses on delivering reliable IT services including consulting, software development, production support, testing, and recruitment. We help organizations operate with stability, efficiency, and confidence in their technology systems.
                        </p>
                    </div>
                </ClipReveal>

            </div>
        </div>
    );
}
