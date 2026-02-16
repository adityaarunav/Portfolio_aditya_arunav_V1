"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="font-serif text-lg tracking-tight">
            Designing Interfaces,
          </span>
          <span className="font-serif text-lg tracking-tight text-neutral-500">
            Managing Outcomes.
          </span>
        </Link>

        <div className="flex items-center gap-6">
          <nav className="hidden items-center gap-6 text-sm font-medium text-neutral-700 sm:flex">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative py-1"
                >
                  <span className="transition-colors hover:text-neutral-950">
                    {item.label}
                  </span>
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-0 -bottom-1 h-px bg-neutral-900"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-black/5 bg-white/80 p-2 text-neutral-800 shadow-sm backdrop-blur sm:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {open && (
        <motion.nav
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          className="border-t border-black/5 bg-background/95 px-6 pb-4 pt-2 sm:hidden"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-2">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center justify-between rounded-full px-3 py-2 text-sm ${
            isActive
              ? "bg-neutral-900 text-neutral-50"
              : "bg-white/80 text-neutral-800"
          }`}
                  onClick={() => setOpen(false)}
                >
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
        </motion.nav>
      )}
    </header>
  );
}

