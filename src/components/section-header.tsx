import { ReactNode } from "react";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <div
      className={`space-y-3 ${
        isCenter ? "text-center" : "text-left"
      }`}
    >
      {eyebrow && (
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
          {eyebrow}
        </p>
      )}
      <h2 className="font-serif text-2xl leading-snug tracking-tight text-neutral-950 sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-xl text-sm leading-relaxed text-neutral-600">
          {description}
        </p>
      )}
    </div>
  );
}

