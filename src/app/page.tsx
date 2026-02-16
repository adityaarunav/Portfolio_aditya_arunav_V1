"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/section-header";
import { ProjectCard } from "@/components/project-card";

export default function Home() {
  const { scrollY } = useScroll();
  const heroParallax = useTransform(scrollY, [0, 320], [0, 40]);

  return (
    <div className="mx-auto max-w-6xl px-6 pb-20 pt-14 sm:px-8 sm:pb-24 sm:pt-16 lg:px-10 lg:pb-28">
      <section className="grid gap-12 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-center">
        <div className="space-y-8">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.4 }}
            className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-500"
          >
            Product Design &amp; Product Management
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="font-serif text-[2rem] leading-tight tracking-tight text-neutral-950 sm:text-[2.5rem] lg:text-[3rem]"
          >
            Designing interfaces,
            <br />
            managing outcomes.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16, duration: 0.45 }}
            className="max-w-xl text-sm leading-relaxed text-neutral-600 sm:text-[0.95rem]"
          >
            I bridge the gap between product design and product management
            — aligning vision, UX, and delivery. From zero-to-one to
            incremental optimisation, I help teams clarify the problem,
            design the interface, and land the outcome.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22, duration: 0.45 }}
            className="flex flex-wrap items-center gap-3"
          >
            <Button asChild>
              <Link href="/projects" className="inline-flex items-center gap-2">
                View featured work
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="ghost">
              <Link href="/experience">View experience</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.45 }}
            className="flex flex-wrap gap-2 text-xs text-neutral-600"
          >
            <span className="rounded-full border border-black/5 bg-white/70 px-3 py-1">
              Interface &amp; interaction design
            </span>
            <span className="rounded-full border border-black/5 bg-white/70 px-3 py-1">
              Discovery &amp; problem framing
            </span>
            <span className="rounded-full border border-black/5 bg-white/70 px-3 py-1">
              Outcome-driven roadmaps
            </span>
          </motion.div>
        </div>

        <motion.div
          style={{ y: heroParallax }}
          className="relative mt-4 h-[260px] overflow-hidden rounded-3xl border border-black/5 bg-gradient-to-b from-neutral-100 via-neutral-50 to-neutral-200 px-5 py-4 sm:h-[320px]"
        >
          <div className="flex items-center justify-between text-xs text-neutral-600">
            <span>Selected metrics</span>
            <span>Last 12–18 months</span>
          </div>
          <div className="mt-5 grid gap-4 text-xs text-neutral-800 sm:grid-cols-2">
            <div className="space-y-1 rounded-2xl bg-white/80 p-3 shadow-[0_18px_55px_rgba(15,23,42,0.14)] backdrop-blur">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-neutral-500">
                Conversion
              </p>
              <p className="font-serif text-2xl leading-none text-neutral-950">
                +20%
              </p>
              <p className="text-[0.7rem] text-neutral-600">
                Redesign of onboarding and pricing selection for a SaaS
                platform.
              </p>
            </div>
            <div className="space-y-1 rounded-2xl bg-white/70 p-3 shadow-[0_18px_55px_rgba(15,23,42,0.10)] backdrop-blur">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-neutral-500">
                Activation
              </p>
              <p className="font-serif text-2xl leading-none text-neutral-950">
                +32%
              </p>
              <p className="text-[0.7rem] text-neutral-600">
                Defined end-to-end activation journey with guided product
                tours.
              </p>
            </div>
          </div>
          <div className="mt-5 rounded-2xl border border-dashed border-neutral-300/70 bg-white/70 p-3 text-[0.7rem] text-neutral-600">
            <p className="font-medium text-neutral-900">
              Dual-track contribution
            </p>
            <p>
              I work as both Product Designer and Product Manager — pairing
              discovery, UX, and prioritisation so teams can ship with
              confidence.
            </p>
          </div>
        </motion.div>
      </section>

      <section className="mt-20 space-y-8 sm:mt-24">
        <SectionHeader
          eyebrow="Featured Projects"
          title="Selected work across design & product."
          description="A snapshot of projects where I owned both the interface and the outcome — from shaping the strategy to shipping the experience."
        />

        <div className="grid gap-6 md:grid-cols-2">
          <ProjectCard
            title="Reframing onboarding for a B2B SaaS platform"
            subtitle="Lead Product Designer &amp; PM"
            role="Lead Designer · PM Lead"
            metric="+20% trial-to-paid conversion"
            description="Defined a new onboarding narrative, streamlined account setup, and introduced progressive guidance. Paired qualitative research with funnel analysis to align design choices with revenue impact."
            href="#"
          />
          <ProjectCard
            title="Designing an internal console for operations teams"
            subtitle="Product Discovery &amp; Experience"
            role="Product Designer · PM"
            metric="-35% handling time"
            description="Co-led discovery with ops, mapped journeys, and designed an opinionated console that reduced context switching and clarified ownership across the team."
            href="#"
          />
        </div>
      </section>
    </div>
  );
}
