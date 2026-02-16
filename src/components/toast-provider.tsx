"use client";

import * as ToastPrimitives from "@radix-ui/react-toast";
import { ReactNode } from "react";

export function ToastProvider({ children }: { children: ReactNode }) {
  return (
    <ToastPrimitives.Provider swipeDirection="right">
      {children}
      <ToastViewport />
    </ToastPrimitives.Provider>
  );
}

export function ToastViewport() {
  return (
    <ToastPrimitives.Viewport className="fixed bottom-4 right-4 z-50 flex w-full max-w-sm flex-col gap-2 outline-none" />
  );
}

export function ToastRoot({
  title,
  description,
  open,
  onOpenChange,
}: {
  title?: string;
  description?: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <ToastPrimitives.Root
      open={open}
      onOpenChange={onOpenChange}
      duration={2200}
      className="pointer-events-auto flex w-full items-start gap-3 rounded-2xl border border-black/5 bg-white/95 px-4 py-3 text-sm shadow-[0_24px_70px_rgba(15,23,42,0.16)] backdrop-blur"
    >
      <div className="space-y-1">
        {title && (
          <ToastPrimitives.Title className="text-xs font-semibold tracking-wide text-neutral-900">
            {title}
          </ToastPrimitives.Title>
        )}
        {description && (
          <ToastPrimitives.Description className="text-xs text-neutral-600">
            {description}
          </ToastPrimitives.Description>
        )}
      </div>
    </ToastPrimitives.Root>
  );
}

