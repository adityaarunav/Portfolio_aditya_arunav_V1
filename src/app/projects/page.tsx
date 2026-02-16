"use client";

export const runtime = 'edge';

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/section-header";
import { ProjectCard } from "@/components/project-card";

const projects = [
  {
    title: "Onboarding redesign for SaaS subscriptions",
    subtitle: "Conversion · Activation",
    role: "Lead Designer · PM Lead",
    metric: "+20% trial-to-paid",
    description:
      "Re-architected the onboarding experience, introduced progressive disclosure, and rethought pricing selection to reduce friction at the moment of commitment.",
  },
  {
    title: "Unified console for operations teams",
    subtitle: "Internal tools · Efficiency",
    role: "Product Designer · PM",
    metric: "-35% handling time",
    description:
      "Designed a focused console that brought together fragmented workflows, clarified prioritisation, and made operational context visible at a glance.",
  },
  {
    title: "Insights surface for product & leadership",
    subtitle: "Analytics · Alignment",
    role: "Product Discovery · Strategy",
    metric: "+3pp roadmap confidence",
    description:
      "Developed a shared view of product performance and customer signals, combining qualitative and quantitative insight to inform prioritisation.",
  },
  {
    title: "Mobile flows for on-the-go usage",
    subtitle: "Mobile UX · Retention",
    role: "Product Designer",
    metric: "+15% weekly actives",
    description:
      "Simplified key mobile journeys, tightened IA, and clarified primary actions for on-the-go product interactions.",
  },
];

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-20 pt-14 sm:px-8 sm:pb-24 sm:pt-16 lg:px-10 lg:pb-28">
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="space-y-8"
      >
        <SectionHeader
          eyebrow="Projects"
          title="Work that balances craft and outcomes."
          description="Each project pairs interface decisions with product bets — clarifying how design, scope, and strategy come together."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              subtitle={project.subtitle}
              role={project.role}
              metric={project.metric}
              description={project.description}
            />
          ))}
        </div>
      </motion.section>
    </div>
  );
}

