"use client";

import { Slot } from "@radix-ui/react-slot";
import { type ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/cn";

export type ButtonVariant = "primary" | "ghost";

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: ButtonVariant;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ asChild, className, variant = "primary", ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium tracking-tight transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          variant === "primary" &&
            "bg-neutral-900 text-neutral-50 shadow-[0_20px_60px_rgba(0,0,0,0.12)] hover:bg-neutral-800 active:translate-y-px",
          variant === "ghost" &&
            "border border-black/5 bg-white/80 text-neutral-900 hover:border-black/10 hover:bg-white",
          className,
        )}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

