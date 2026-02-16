import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  role: string;
  metric: string;
  description: string;
  href?: string;
}

export function ProjectCard({
  title,
  subtitle,
  role,
  metric,
  description,
  href,
}: ProjectCardProps) {
  const Wrapper = href ? Link : "div";

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <Wrapper
        href={href as string}
        className="group block h-full rounded-3xl border border-black/5 bg-white/80 p-5 shadow-[0_26px_80px_rgba(15,23,42,0.06)] transition-transform hover:-translate-y-1 hover:shadow-[0_40px_120px_rgba(15,23,42,0.12)]"
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-neutral-100 sm:w-1/3">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#e5e5e5,transparent_55%),radial-gradient(circle_at_bottom_right,#d4d4d4,transparent_55%)] transition-transform duration-500 group-hover:scale-105" />
          </div>
          <div className="flex flex-1 flex-col gap-3">
            <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-600">
              <span className="rounded-full border border-black/5 bg-white/80 px-2.5 py-1">
                {role}
              </span>
              <span className="rounded-full border border-black/5 bg-white/80 px-2.5 py-1">
                {metric}
              </span>
            </div>
            <div>
              <h3 className="font-serif text-lg leading-snug tracking-tight text-neutral-950">
                {title}
              </h3>
              <p className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-neutral-500">
                {subtitle}
              </p>
            </div>
            <p className="text-sm leading-relaxed text-neutral-600">
              {description}
            </p>
            {href && (
              <div className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-neutral-900">
                View case study
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
            )}
          </div>
        </div>
      </Wrapper>
    </motion.div>
  );
}

