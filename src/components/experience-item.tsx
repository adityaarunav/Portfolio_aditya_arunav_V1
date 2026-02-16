interface ExperienceItemProps {
  company: string;
  location?: string;
  period: string;
  roleDesign: string;
  rolePM: string;
  bulletsDesign: string[];
  bulletsPM: string[];
}

export function ExperienceItem({
  company,
  location,
  period,
  roleDesign,
  rolePM,
  bulletsDesign,
  bulletsPM,
}: ExperienceItemProps) {
  return (
    <div className="grid gap-4 border-b border-black/5 pb-6 last:border-b-0 last:pb-0 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] md:gap-8">
      <div className="space-y-1 text-sm text-neutral-700">
        <p className="font-medium text-neutral-950">{company}</p>
        {location && (
          <p className="text-xs text-neutral-500">{location}</p>
        )}
        <p className="text-xs text-neutral-500">{period}</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
            Design
          </p>
          <p className="text-sm font-medium text-neutral-900">
            {roleDesign}
          </p>
          <ul className="mt-1 space-y-1.5 text-sm leading-relaxed text-neutral-600">
            {bulletsDesign.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-1 h-[3px] w-[3px] flex-shrink-0 rounded-full bg-neutral-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
            Product Management
          </p>
          <p className="text-sm font-medium text-neutral-900">
            {rolePM}
          </p>
          <ul className="mt-1 space-y-1.5 text-sm leading-relaxed text-neutral-600">
            {bulletsPM.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-1 h-[3px] w-[3px] flex-shrink-0 rounded-full bg-neutral-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

