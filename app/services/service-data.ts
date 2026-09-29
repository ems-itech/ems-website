export type ServiceMetric = {
  value: string;
  label: string;
};

export type ServiceFeature = {
  title: string;
  description: string;
  bullets?: readonly string[];
};

export type ServiceFaq = {
  question: string;
  answer: string;
};

export type ServiceData = {
  slug: string;
  name: string;
  headline: string;
  intro: string;
  scopeLabel: string;
  scopeTitle: string;
  scopeDescription: string;
  metrics: readonly ServiceMetric[];
  features: readonly ServiceFeature[];
  commitmentTitle: string;
  commitmentDescription: string;
  commitments: readonly ServiceFeature[];
  onboardingTitle: string;
  onboardingDescription: string;
  steps: readonly ServiceFeature[];
  faqs: readonly ServiceFaq[];
  contactTitle: string;
  contactDescription: string;
};

export const services = [
  {
    slug: "it-consulting",
    name: "IT Consulting",
    headline: "Technology decisions built around business outcomes.",
    intro: "EMS turns complex technology choices into a practical, sequenced roadmap. We align architecture, investment and delivery so every initiative moves the business forward.",
    scopeLabel: "HOW WE ADVISE",
    scopeTitle: "Consulting scope",
    scopeDescription: "Senior technical guidance from current-state discovery through execution governance.",
    metrics: [
      { value: "2–4 wks", label: "DISCOVERY SPRINT" },
      { value: "360°", label: "ESTATE ASSESSMENT" },
      { value: "3 yr", label: "ROADMAP HORIZON" },
      { value: "1 team", label: "STRATEGY TO DELIVERY" },
    ],
    features: [
      { title: "Technology Strategy", description: "A prioritized roadmap that connects platforms, people and investment to measurable business goals." },
      { title: "Architecture Review", description: "Independent assessment of scalability, resilience, security and total cost across your estate." },
      { title: "Cloud & Modernization", description: "Practical migration and modernization plans shaped around risk, value and operating readiness." },
      { title: "Delivery Governance", description: "Decision forums, technical guardrails and transparent reporting that keep transformation moving.", bullets: ["Executive steering and decision forums", "Delivery risk and dependency tracking", "Architecture decisions recorded and governed"] },
      { title: "Vendor Selection", description: "Evidence-led evaluation of platforms and partners, from requirements to commercial recommendation.", bullets: ["Weighted requirements and evaluation scorecards", "Structured demonstrations and technical due diligence", "Commercial and implementation risk assessment"] },
    ],
    commitmentTitle: "Advice you can put into action",
    commitmentDescription: "Every recommendation has an owner, business case and achievable delivery path.",
    commitments: [
      { title: "Current-state baseline", description: "A shared, evidence-backed view of technology, risk and operational constraints." },
      { title: "Prioritized roadmap", description: "Sequenced initiatives with outcomes, dependencies, cost ranges and decision gates." },
      { title: "Executive alignment", description: "Clear choices and trade-offs presented in language stakeholders can act on." },
    ],
    onboardingTitle: "Clarity in four steps",
    onboardingDescription: "A focused engagement designed to create momentum without months of analysis.",
    steps: [
      { title: "Discover", description: "Align on outcomes, stakeholders and the decisions the engagement must unlock." },
      { title: "Assess", description: "Review architecture, operations, delivery data and business constraints." },
      { title: "Design", description: "Shape the target state and compare practical paths to reach it." },
      { title: "Mobilize", description: "Confirm priorities, owners, measures and the first delivery horizon." },
    ],
    faqs: [
      { question: "Can you review an existing transformation plan?", answer: "Yes. We can independently challenge the roadmap, architecture, costs, risks and delivery assumptions before you commit." },
      { question: "Do you work with our current vendors?", answer: "Yes. We work alongside internal teams and incumbent partners while remaining focused on your outcomes." },
      { question: "Is this only for large transformation programs?", answer: "No. Engagements range from a focused architecture decision to multi-year technology strategy and governance." },
      { question: "Can EMS also deliver the roadmap?", answer: "Yes. Our engineering, integration, security and support teams can carry recommendations into delivery." },
    ],
    contactTitle: "Make the next technology decision with confidence.",
    contactDescription: "Bring us the decision, constraint or roadmap that needs a sharper point of view.",
  },
  {
    slug: "production-support",
    name: "Production Support",
    headline: "Zero downtime for the systems you cannot lose.",
    intro: "EMS runs 24/7 monitoring and rapid incident resolution for mission-critical production estates. One accountable team, a 99.9% uptime SLA, and a P1 acknowledged in under eight minutes.",
    scopeLabel: "WHAT WE RUN",
    scopeTitle: "Support scope",
    scopeDescription: "Precision-engineered operations for mission-critical estates. We take the pager, the runbook and the accountability.",
    metrics: [
      { value: "<8 min", label: "P1 ACKNOWLEDGEMENT" },
      { value: "99.9%", label: "UPTIME GUARANTEE" },
      { value: "24/7", label: "MONITORING COVERAGE" },
      { value: "150+", label: "SYSTEMS UNDER SUPPORT" },
    ],
    features: [
      { title: "Monitoring & Alerting", description: "Full-stack observability on your tooling or ours, with thresholds tuned to business hours and peak load." },
      { title: "Incident Response", description: "A named on-call rota, severity-based escalation paths, and a P1 acknowledged in under eight minutes." },
      { title: "Root Cause & Prevention", description: "Every critical event gets a blameless review, corrective actions and tracked prevention work." },
      { title: "Application Support", description: "L2 and L3 ownership of production applications, from batch failures to data fixes.", bullets: ["Runbooks written and version-controlled by EMS", "Release and hotfix support inside your change window", "Ticket triage against your existing ITSM tooling"] },
      { title: "Infrastructure Operations", description: "Platform, database and cloud operations across hybrid and multi-cloud estates.", bullets: ["AWS, Azure, GCP and on-premise under one rota", "Patching, capacity and backup verification", "DR drills rehearsed twice a year"] },
    ],
    commitmentTitle: "Response targets, written into the contract",
    commitmentDescription: "Severity is agreed with your service owner during onboarding, then measured monthly and reported to you.",
    commitments: [
      { title: "P1 — Critical", description: "Revenue or safety impacting outage. War room opened immediately.", bullets: ["8 min ack / 1 hr workaround"] },
      { title: "P2 — High", description: "Degraded service or a failed batch with a business deadline.", bullets: ["30 min ack / 4 hr workaround"] },
      { title: "P3 — Standard", description: "Normal defect with no production outage.", bullets: ["4 hr ack / next business day"] },
    ],
    onboardingTitle: "Live in two to four weeks",
    onboardingDescription: "Most enterprise engagements launch full 24/7 ownership inside a month, without a freeze on your release schedule.",
    steps: [
      { title: "Discovery", description: "Map scope, user routes, tooling, escalation chains and change windows in the first week." },
      { title: "Runbook build", description: "Every recurring incident gets a documented procedure, validated with your service owner." },
      { title: "Shadow rota", description: "EMS engineers run alongside your team for two weeks before taking the pager." },
      { title: "Steady state", description: "Full 24/7 ownership, monthly SLA reporting and a quarterly service review." },
    ],
    faqs: [
      { question: "Do you work inside our existing ITSM tooling?", answer: "Yes. We operate in your ServiceNow, Jira Service Management or equivalent so reporting stays in one place." },
      { question: "Who owns the on-call rota?", answer: "EMS supplies and manages the agreed rota, escalation coverage and handovers." },
      { question: "Can support cover only out-of-hours?", answer: "Yes. Coverage can be 24/7, business hours, out-of-hours or a blended model." },
      { question: "How is performance against the SLA reported?", answer: "You receive monthly service reporting with response, resolution, availability, recurrence and improvement measures." },
    ],
    contactTitle: "Hand us the pager.",
    contactDescription: "Connect with our service team to scope a support rota around your estate, tooling and change windows.",
  },
  {
    slug: "software-development",
    name: "Software Development",
    headline: "Software engineered for change, scale and real users.",
    intro: "EMS designs and builds secure digital products, enterprise platforms and APIs with an experienced team accountable from discovery through production.",
    scopeLabel: "WHAT WE BUILD",
    scopeTitle: "Engineering scope",
    scopeDescription: "Cross-functional product delivery with architecture, quality and operability built in from day one.",
    metrics: [
      { value: "2 wks", label: "DELIVERY CADENCE" },
      { value: "85%+", label: "TEST AUTOMATION" },
      { value: "99.9%", label: "TARGET AVAILABILITY" },
      { value: "1 team", label: "BUILD TO RUN" },
    ],
    features: [
      { title: "Product Discovery", description: "Turn user needs and business goals into a validated, prioritized delivery backlog." },
      { title: "Web & Mobile", description: "Accessible, high-performance experiences built on maintainable modern foundations." },
      { title: "Enterprise Platforms", description: "Secure workflow and operational systems shaped around complex business rules." },
      { title: "API Engineering", description: "Well-governed services and integrations that make data and capabilities reusable.", bullets: ["Versioned contracts and reusable service standards", "Authentication, authorization and rate limiting", "Developer documentation and operational monitoring"] },
      { title: "DevSecOps", description: "Automated delivery, observability and security controls embedded throughout the lifecycle.", bullets: ["Automated build, test and deployment pipelines", "Dependency, code and container security scanning", "Production observability and release runbooks"] },
    ],
    commitmentTitle: "Quality visible in every release",
    commitmentDescription: "Working software, delivery evidence and risks are reviewed with you throughout the engagement.",
    commitments: [
      { title: "Predictable increments", description: "Demonstrable product progress delivered on a regular, agreed cadence." },
      { title: "Engineering standards", description: "Peer review, automated tests, security scanning and documented architecture decisions." },
      { title: "Production readiness", description: "Monitoring, runbooks, performance and support readiness before release." },
    ],
    onboardingTitle: "From idea to delivery rhythm",
    onboardingDescription: "A structured start that gets the right team solving the right problem quickly.",
    steps: [
      { title: "Frame", description: "Agree outcomes, users, constraints and success measures." },
      { title: "Shape", description: "Prototype journeys, architecture and a prioritized release plan." },
      { title: "Build", description: "Deliver tested increments with continuous stakeholder feedback." },
      { title: "Scale", description: "Release safely, measure adoption and evolve the roadmap." },
    ],
    faqs: [
      { question: "Can EMS join an existing engineering team?", answer: "Yes. We provide complete delivery squads or specialists who work within your engineering model." },
      { question: "Who owns the source code?", answer: "You do. Code, documentation and delivery assets are handed over under the agreed contract." },
      { question: "Can you modernize a legacy application?", answer: "Yes. We use incremental patterns to reduce risk while improving architecture, experience and operability." },
      { question: "Do you provide post-launch support?", answer: "Yes. The same engineering context can transition into an agreed managed support model." },
    ],
    contactTitle: "Build the product your users are waiting for.",
    contactDescription: "Share your product goal and we’ll help shape the fastest responsible path to production.",
  },
  {
    slug: "software-testing",
    name: "Software Testing",
    headline: "Release with evidence, not hope.",
    intro: "EMS creates risk-based quality engineering programs that combine automation, performance, security and hands-on validation across the delivery lifecycle.",
    scopeLabel: "HOW WE ASSURE",
    scopeTitle: "Testing scope",
    scopeDescription: "Independent quality engineering focused on the journeys, integrations and risks that matter most.",
    metrics: [
      { value: "85%+", label: "AUTOMATION TARGET" },
      { value: "2x", label: "FASTER REGRESSION" },
      { value: "0", label: "CRITICAL ESCAPES TARGET" },
      { value: "24h", label: "DEFECT TRIAGE" },
    ],
    features: [
      { title: "Test Strategy", description: "A risk-based quality plan aligned to architecture, release cadence and business impact." },
      { title: "Functional Testing", description: "Clear end-to-end coverage for critical workflows, rules, roles and integrations." },
      { title: "Test Automation", description: "Maintainable API, UI and mobile suites integrated into delivery pipelines." },
      { title: "Performance Testing", description: "Load, stress and endurance testing against meaningful business scenarios.", bullets: ["Load, stress and endurance test coverage", "Application and infrastructure bottleneck diagnostics", "Capacity thresholds validated before release"] },
      { title: "Security Validation", description: "Targeted assurance for common vulnerabilities, access controls and sensitive flows.", bullets: ["OWASP-aligned application security checks", "Access, session and sensitive-flow validation", "Remediation verification and focused retesting"] },
    ],
    commitmentTitle: "Release decisions backed by evidence",
    commitmentDescription: "Quality, risk and readiness are visible before every production decision.",
    commitments: [
      { title: "Traceable coverage", description: "Requirements and risks mapped to tests, results and open defects." },
      { title: "Fast feedback", description: "Automated checks placed where they shorten the path from change to confidence." },
      { title: "Clear release view", description: "Concise quality dashboards with impact, severity and recommendation." },
    ],
    onboardingTitle: "A stronger quality signal in four steps",
    onboardingDescription: "We establish coverage quickly and improve it continuously alongside delivery.",
    steps: [
      { title: "Assess", description: "Review risks, flows, environments, data and current coverage." },
      { title: "Prioritize", description: "Define the assurance layers and highest-value automation." },
      { title: "Implement", description: "Build tests, data and pipeline integration around the release plan." },
      { title: "Optimize", description: "Track escapes, cycle time and flaky tests to improve the signal." },
    ],
    faqs: [
      { question: "Can you test a product already in production?", answer: "Yes. We establish safe environments and prioritize high-risk journeys before expanding coverage." },
      { question: "Which automation tools do you use?", answer: "We select tools that fit your stack and team, including Playwright, Cypress, Selenium and API-focused frameworks." },
      { question: "Can you provide an independent release assessment?", answer: "Yes. We can report readiness and residual risk independently from the delivery team." },
      { question: "Do you cover performance and security?", answer: "Yes. Both can be built into the strategy or delivered as focused assurance engagements." },
    ],
    contactTitle: "Put confidence into your next release.",
    contactDescription: "Let’s identify the quality risks slowing delivery or reaching your users.",
  },
  {
    slug: "cybersecurity",
    name: "Cybersecurity",
    headline: "Security that keeps pace with the business.",
    intro: "EMS helps organizations understand exposure, strengthen controls and respond decisively with practical security embedded across technology and operations.",
    scopeLabel: "HOW WE PROTECT",
    scopeTitle: "Security scope",
    scopeDescription: "Layered assurance and operations designed around your threats, obligations and risk tolerance.",
    metrics: [
      { value: "24/7", label: "SECURITY MONITORING" },
      { value: "<15 min", label: "CRITICAL TRIAGE" },
      { value: "100%", label: "CRITICAL ASSET COVERAGE" },
      { value: "90 day", label: "IMPROVEMENT CYCLE" },
    ],
    features: [
      { title: "Security Assessment", description: "A prioritized view of exposure across identities, applications, infrastructure and process." },
      { title: "Threat Detection", description: "Use cases, telemetry and alert tuning focused on credible threats to your estate." },
      { title: "Incident Response", description: "Prepared playbooks and expert coordination to contain, investigate and recover." },
      { title: "Cloud Security", description: "Secure configuration, workload protection and guardrails across cloud environments.", bullets: ["Cloud posture and configuration baselines", "Identity, network and workload protection", "Misconfiguration alerting and response workflows"] },
      { title: "Compliance Support", description: "Evidence, control mapping and remediation aligned to relevant regulatory frameworks.", bullets: ["Framework and regulatory control mapping", "Audit-ready evidence collection and ownership", "Prioritized remediation plans with progress tracking"] },
    ],
    commitmentTitle: "Risk translated into action",
    commitmentDescription: "Findings are prioritized by business impact and paired with clear remediation ownership.",
    commitments: [
      { title: "Critical exposure", description: "Immediate notification and an agreed containment path for urgent findings." },
      { title: "Measurable controls", description: "Coverage, effectiveness and residual risk reported in a consistent scorecard." },
      { title: "Continuous improvement", description: "Threat and control priorities reviewed as your estate changes." },
    ],
    onboardingTitle: "Protection starts with context",
    onboardingDescription: "We establish the assets, threats and responsibilities before tuning controls.",
    steps: [
      { title: "Scope", description: "Confirm critical services, data, obligations and risk appetite." },
      { title: "Baseline", description: "Assess controls, visibility, vulnerabilities and response readiness." },
      { title: "Harden", description: "Address priority gaps and operationalize detection and playbooks." },
      { title: "Operate", description: "Monitor, report, test and improve on an agreed cycle." },
    ],
    faqs: [
      { question: "Can EMS work with our current security tools?", answer: "Yes. We optimize the technology you have before recommending additions." },
      { question: "Do you support compliance audits?", answer: "Yes. We support control mapping, evidence preparation, remediation and audit response." },
      { question: "Can you run incident response retainers?", answer: "Yes. Retainers define availability, escalation, response activities and commercial terms in advance." },
      { question: "Do you provide security testing?", answer: "Yes. We can coordinate vulnerability assessment and targeted application or infrastructure testing." },
    ],
    contactTitle: "Turn security risk into a clear next move.",
    contactDescription: "Tell us what you need to protect, prove or prepare for.",
  },
  {
    slug: "it-recruitment",
    name: "IT Recruitment",
    headline: "Technical talent matched for impact, not keywords.",
    intro: "EMS combines regional networks with hands-on technical screening to place people who fit the role, team and delivery challenge.",
    scopeLabel: "HOW WE HIRE",
    scopeTitle: "Recruitment scope",
    scopeDescription: "Flexible talent acquisition for individual specialists, complete teams and hard-to-fill leadership roles.",
    metrics: [
      { value: "72h", label: "FIRST SHORTLIST" },
      { value: "2 stage", label: "TECHNICAL SCREEN" },
      { value: "90 day", label: "PLACEMENT SUPPORT" },
      { value: "MENA", label: "REGIONAL NETWORK" },
    ],
    features: [
      { title: "Permanent Hiring", description: "End-to-end search for engineers, architects, product and technology leaders." },
      { title: "Contract Talent", description: "Skilled specialists mobilized for projects, peaks and capability gaps." },
      { title: "Dedicated Teams", description: "Cohesive cross-functional teams assembled around your delivery outcomes." },
      { title: "Technical Screening", description: "Role-relevant interviews and practical assessment led by technology practitioners.", bullets: ["Practitioner-led technical interviews", "Role-specific practical assessments", "Consistent scorecards and evidence-based feedback"] },
      { title: "Workforce Planning", description: "Market insight, role design and hiring plans aligned to the capability roadmap.", bullets: ["Capability and skills-gap assessment", "Regional market and compensation insight", "Phased hiring plans aligned to delivery demand"] },
    ],
    commitmentTitle: "A shortlist worth your team’s time",
    commitmentDescription: "Every candidate is assessed for technical fit, motivation and working context before introduction.",
    commitments: [
      { title: "Role calibration", description: "We align on outcomes and must-have evidence, not an inflated skills list." },
      { title: "Transparent pipeline", description: "Clear weekly reporting on search activity, feedback and market constraints." },
      { title: "Placement support", description: "Structured follow-up through onboarding and the first 90 days." },
    ],
    onboardingTitle: "From brief to shortlist",
    onboardingDescription: "A focused process that respects hiring managers and candidates.",
    steps: [
      { title: "Calibrate", description: "Define outcomes, context, evidence and the candidate proposition." },
      { title: "Search", description: "Activate targeted networks and direct outreach across relevant markets." },
      { title: "Assess", description: "Validate technical depth, behaviors, availability and expectations." },
      { title: "Place", description: "Coordinate interviews, offer, onboarding and early follow-up." },
    ],
    faqs: [
      { question: "Which technology roles do you cover?", answer: "We cover software, data, cloud, security, quality, support, product and technology leadership roles." },
      { question: "Can you recruit complete teams?", answer: "Yes. We can assemble balanced squads with the skills and seniority needed for a defined outcome." },
      { question: "How do you validate technical ability?", answer: "Screening is tailored to the role and can include practitioner interviews, portfolio review and practical exercises." },
      { question: "Do you support contract and permanent hiring?", answer: "Yes. We support permanent, contract, staff augmentation and dedicated team models." },
    ],
    contactTitle: "Meet the people your roadmap needs.",
    contactDescription: "Share the role, team shape or capability gap and we’ll calibrate the search with you.",
  },
  {
    slug: "data-engineering",
    name: "Data Engineering",
    headline: "Trusted data, ready when the business needs it.",
    intro: "EMS builds resilient data platforms and pipelines that turn fragmented enterprise data into dependable products for analytics, operations and AI.",
    scopeLabel: "WHAT WE ENABLE",
    scopeTitle: "Data scope",
    scopeDescription: "Modern data foundations with quality, governance, performance and cost designed in.",
    metrics: [
      { value: "99.9%", label: "PIPELINE RELIABILITY" },
      { value: "<1 hr", label: "FRESHNESS TARGET" },
      { value: "100%", label: "LINEAGE COVERAGE" },
      { value: "30%", label: "COST OPTIMIZATION TARGET" },
    ],
    features: [
      { title: "Data Platforms", description: "Cloud and hybrid foundations sized for governance, scale and sustainable operating cost." },
      { title: "Pipeline Engineering", description: "Reliable batch and streaming flows with observable dependencies and recovery paths." },
      { title: "Data Quality", description: "Automated rules, ownership and issue workflows around critical data products." },
      { title: "Analytics Enablement", description: "Curated models that give reporting and analysis a consistent business meaning.", bullets: ["Reusable semantic and dimensional data models", "Analytics-ready datasets with trusted definitions", "Query performance and consumption optimization"] },
      { title: "Governance & Lineage", description: "Practical cataloging, access, classification and traceability across the lifecycle.", bullets: ["Searchable catalog and end-to-end lineage", "Data classification and policy-based access", "Named ownership and stewardship workflows"] },
    ],
    commitmentTitle: "Data products with explicit service levels",
    commitmentDescription: "Freshness, completeness, accuracy and availability are owned and measured.",
    commitments: [
      { title: "Observable pipelines", description: "Failures, delays and quality exceptions surface with accountable ownership." },
      { title: "Trusted definitions", description: "Business terms and transformations are documented and version controlled." },
      { title: "Cost transparency", description: "Usage and platform spend are visible by workload and data product." },
    ],
    onboardingTitle: "From fragmented sources to trusted products",
    onboardingDescription: "Start with one valuable domain, prove the model and scale deliberately.",
    steps: [
      { title: "Discover", description: "Map consumers, sources, pain points and critical data outcomes." },
      { title: "Design", description: "Define architecture, contracts, ownership and service expectations." },
      { title: "Deliver", description: "Build the first governed pipelines and consumption-ready models." },
      { title: "Scale", description: "Automate operations and expand patterns across domains." },
    ],
    faqs: [
      { question: "Can you modernize an existing data warehouse?", answer: "Yes. We assess workloads and migrate incrementally while maintaining reporting continuity." },
      { question: "Do you support real-time data?", answer: "Yes. We design streaming where latency creates business value, and simpler batch patterns where it does not." },
      { question: "Which cloud platforms do you support?", answer: "We work across AWS, Azure and Google Cloud, as well as hybrid and on-premise estates." },
      { question: "Can you improve data quality without replacing the platform?", answer: "Yes. Quality, observability and ownership can be introduced around existing pipelines and stores." },
    ],
    contactTitle: "Make trusted data a daily capability.",
    contactDescription: "Tell us which data outcome, bottleneck or platform decision matters most.",
  },
  {
    slug: "system-integration",
    name: "System Integration",
    headline: "Connected systems. Coherent operations.",
    intro: "EMS connects applications, partners and data with resilient integration patterns that reduce manual work and make change easier to manage.",
    scopeLabel: "WHAT WE CONNECT",
    scopeTitle: "Integration scope",
    scopeDescription: "Secure, observable connections across enterprise platforms, legacy systems and digital channels.",
    metrics: [
      { value: "99.9%", label: "INTERFACE AVAILABILITY" },
      { value: "<5 min", label: "FAILURE DETECTION" },
      { value: "100%", label: "TRANSACTION TRACEABILITY" },
      { value: "API-first", label: "DESIGN STANDARD" },
    ],
    features: [
      { title: "API Strategy", description: "Standards and governance that make capabilities secure, reusable and discoverable." },
      { title: "Enterprise Integration", description: "Reliable orchestration across ERP, CRM, core platforms and custom applications." },
      { title: "Event-driven Systems", description: "Responsive workflows built on decoupled messaging and streaming patterns." },
      { title: "Partner Connectivity", description: "Secure external interfaces with clear contracts, controls and support ownership.", bullets: ["Secure API and file-transfer authentication", "Versioned partner contracts and validation", "Controlled onboarding with sandbox environments"] },
      { title: "Integration Operations", description: "Monitoring, replay, reconciliation and incident procedures for critical flows.", bullets: ["End-to-end interface health monitoring", "Safe retry, replay and exception handling", "Transaction reconciliation and support runbooks"] },
    ],
    commitmentTitle: "Every transaction accounted for",
    commitmentDescription: "Interfaces are designed for failure, recovery and end-to-end operational visibility.",
    commitments: [
      { title: "Contract-first delivery", description: "Clear schemas, ownership and versioning before dependent teams build." },
      { title: "Built-in resilience", description: "Retry, idempotency, reconciliation and safe degradation where needed." },
      { title: "Operational visibility", description: "Traceable transactions and alerts tied to business impact." },
    ],
    onboardingTitle: "Connect without creating new fragility",
    onboardingDescription: "We establish critical flows and integration standards before scaling connections.",
    steps: [
      { title: "Map", description: "Identify systems, owners, transactions, dependencies and failure impact." },
      { title: "Design", description: "Define contracts, patterns, security and operational controls." },
      { title: "Connect", description: "Build and test interfaces against end-to-end business scenarios." },
      { title: "Operate", description: "Monitor transactions, resolve exceptions and govern change." },
    ],
    faqs: [
      { question: "Can you integrate legacy systems?", answer: "Yes. We use APIs, adapters, messaging and staged modernization patterns appropriate to the platform." },
      { question: "Do you work with existing middleware?", answer: "Yes. We can extend and rationalize your current integration platform before recommending change." },
      { question: "How do you prevent duplicate transactions?", answer: "We use idempotency, correlation, reconciliation and domain-specific controls in the design." },
      { question: "Can EMS support integrations after launch?", answer: "Yes. Monitoring and incident ownership can transition into our production support service." },
    ],
    contactTitle: "Connect the workflows your business depends on.",
    contactDescription: "Bring us the systems, transactions or integration bottleneck that needs a reliable design.",
  },
  {
    slug: "digital-workspace",
    name: "Digital Workspace",
    headline: "A secure workplace that works from anywhere.",
    intro: "EMS modernizes collaboration, devices, identity and employee support so people can work productively without compromising control.",
    scopeLabel: "HOW WE ENABLE",
    scopeTitle: "Workspace scope",
    scopeDescription: "A joined-up employee experience across productivity platforms, endpoints, access and support.",
    metrics: [
      { value: "99.9%", label: "SERVICE AVAILABILITY" },
      { value: "<15 min", label: "PRIORITY RESPONSE" },
      { value: "100%", label: "MANAGED ENDPOINTS" },
      { value: "24/7", label: "SUPPORT OPTION" },
    ],
    features: [
      { title: "Workspace Strategy", description: "A practical roadmap for experience, collaboration, endpoint and support modernization." },
      { title: "Microsoft 365", description: "Secure configuration, migration, governance and adoption across the productivity suite." },
      { title: "Endpoint Management", description: "Consistent enrollment, policy, patching and compliance across user devices." },
      { title: "Identity & Access", description: "Simple, controlled access with modern authentication and lifecycle automation.", bullets: ["Single sign-on and multi-factor authentication", "Automated joiner, mover and leaver workflows", "Privileged access controls and regular reviews"] },
      { title: "Employee Support", description: "Responsive service desk and self-service designed around employee journeys.", bullets: ["Multi-channel service desk and escalation", "Knowledge articles and guided self-service", "Experience, resolution and recurring-issue reporting"] },
    ],
    commitmentTitle: "Experience and control, measured together",
    commitmentDescription: "Service performance, security posture and employee sentiment are managed as one workplace outcome.",
    commitments: [
      { title: "Reliable access", description: "Critical collaboration and identity services monitored against agreed targets." },
      { title: "Compliant endpoints", description: "Device health, policy and exceptions visible through a consistent control baseline." },
      { title: "User-centered support", description: "Resolution, experience and recurring friction tracked for improvement." },
    ],
    onboardingTitle: "Modernize without disrupting the workday",
    onboardingDescription: "Piloted change, clear communications and measurable adoption reduce transition risk.",
    steps: [
      { title: "Listen", description: "Understand employee journeys, friction, risk and operating constraints." },
      { title: "Design", description: "Define the target experience, policies, service model and rollout." },
      { title: "Pilot", description: "Validate with representative users and tune support and communication." },
      { title: "Adopt", description: "Scale migration, measure outcomes and continuously improve." },
    ],
    faqs: [
      { question: "Can you migrate us to Microsoft 365?", answer: "Yes. We cover readiness, tenant design, migration, security, governance and adoption." },
      { question: "Do you support hybrid and remote teams?", answer: "Yes. The service is designed around secure access and consistent experience from any approved location." },
      { question: "Can you manage employee devices?", answer: "Yes. We support enrollment, configuration, compliance, application delivery and lifecycle operations." },
      { question: "Can we retain our current service desk?", answer: "Yes. EMS can complement an internal desk, take selected tiers or provide the full service." },
    ],
    contactTitle: "Create a workplace people can rely on.",
    contactDescription: "Tell us where employee experience, security or support is getting in the way.",
  },
] as const satisfies readonly ServiceData[];

export type ServiceSlug = (typeof services)[number]["slug"];

export const serviceSlugs = services.map(({ slug }) => slug);

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
