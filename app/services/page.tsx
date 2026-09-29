"use client";

import Link from "next/link";
import { Server, Code, Shield, Database, Cpu, Laptop, ShieldCheck, Bug, Users } from "lucide-react";

import { HeroEntrance, StaggerCard, StaggerGroup } from "@/components/ui/motion-primitives";
import { services } from "./service-data";

const serviceIcons = [Server, ShieldCheck, Code, Bug, Shield, Users, Database, Cpu, Laptop] as const;

export default function Services() {
  return (
    <div className="pt-24 pb-32">
      <div className="container mx-auto px-4">
        <HeroEntrance from="left">
          <div className="max-w-2xl mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Our Services</h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive IT solutions delivered with precision, reliability, and enterprise-grade execution.
            </p>
          </div>
        </HeroEntrance>

        <StaggerGroup className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" stagger={0.18}>
          {services.map((service, index) => {
            const Icon = serviceIcons[index];
            return (
              <StaggerCard key={service.slug} className="group overflow-hidden rounded-xl border border-border/60 bg-card transition-colors hover:border-primary/40">
                <Link href={`/services/${service.slug}`} className="block h-full p-8">
                  <Icon className="h-8 w-8 text-primary mb-6" />
                  <h2 className="text-xl font-semibold mb-3">{service.name}</h2>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.intro}</p>
                  <span className="mt-6 inline-block text-sm font-semibold text-[#5a8506]">Explore service ↗</span>
                </Link>
              </StaggerCard>
            );
          })}
        </StaggerGroup>
      </div>
    </div>
  );
}
