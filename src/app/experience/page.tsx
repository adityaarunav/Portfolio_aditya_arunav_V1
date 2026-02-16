"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/section-header";
import { ExperienceItem } from "@/components/experience-item";

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-20 pt-14 sm:px-8 sm:pb-24 sm:pt-16 lg:px-10 lg:pb-28">
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="space-y-10"
      >
        <SectionHeader
          eyebrow="Experience"
          title="A blended track of Design and Product."
          description="From early-stage discovery to scaling products, I’ve worked across both design and product roles — often as the bridge between the two."
        />

        <div className="space-y-8">
          <ExperienceItem
            company="Company One"
            location="Remote / Global"
            period="2022 — Present"
            roleDesign="Senior Product Designer"
            rolePM="Product Manager (dual role)"
            bulletsDesign={[
              "Led the redesign of core SaaS workflows, unifying fragmented surfaces into a coherent experience.",
              "Ran discovery interviews and concept testing to derisk major UX and information architecture changes.",
            ]}
            bulletsPM={[
              "Owned product outcomes around activation, retention, and expansion, co-defining quarterly objectives.",
              "Partnered with engineering leads to shape scope, clarify trade-offs, and align delivery with strategy.",
            ]}
          />

          <ExperienceItem
            company="Company Two"
            location="Hybrid"
            period="2019 — 2022"
            roleDesign="Product Designer"
            rolePM="Product Owner"
            bulletsDesign={[
              "Designed multi-platform experiences across web and mobile for both customer and internal users.",
              "Introduced design systems foundations, improving consistency and accelerating delivery.",
            ]}
            bulletsPM={[
              "Maintained a transparent backlog, collaborating with stakeholders to prioritise work around outcomes.",
              "Facilitated rituals that kept discovery and delivery aligned, from planning to release reviews.",
            ]}
          />

          <ExperienceItem
            company="Earlier roles"
            period="2015 — 2019"
            roleDesign="UX / UI Designer"
            rolePM="Associate PM"
            bulletsDesign={[
              "Worked across marketing sites, transactional flows, and internal tooling interfaces.",
            ]}
            bulletsPM={[
              "Supported senior PMs with data analysis, story writing, and release coordination.",
            ]}
          />
        </div>
      </motion.section>
    </div>
  );
}

