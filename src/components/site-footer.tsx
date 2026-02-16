"use client";

import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { ToastRoot } from "@/components/toast-provider";

const CONTACT_EMAIL = "hello@yourname.design";

export function SiteFooter() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);
  const [toastTitle, setToastTitle] = useState<string | undefined>();
  const [toastDescription, setToastDescription] = useState<
    string | undefined
  >();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      setForm({ name: "", email: "", message: "" });
      setToastTitle("Message sent");
      setToastDescription(
        "Thanks for reaching out — I’ll respond shortly.",
      );
      setToastOpen(true);
    } catch {
      setToastTitle("Something went wrong");
      setToastDescription("Feel free to reach out directly via email.");
      setToastOpen(true);
    } finally {
      setSubmitting(false);
    }
  }

  async function handleCopyEmail() {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setToastTitle("Copied!");
      setToastDescription("Email address moved to your clipboard.");
      setToastOpen(true);
    } catch {
      setToastTitle("Copy failed");
      setToastDescription("Please copy the email address manually.");
      setToastOpen(true);
    }
  }

  return (
    <footer className="border-t border-black/5 bg-background/90">
      <div className="mx-auto max-w-6xl px-6 py-12 sm:px-8 lg:px-10">
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div className="space-y-4">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
              Let&apos;s Connect
            </p>
            <h3 className="font-serif text-2xl leading-snug tracking-tight text-neutral-950">
              Ready to shape the next product story.
            </h3>
            <p className="max-w-md text-sm leading-relaxed text-neutral-600">
              Whether you&apos;re exploring a new product, refining an
              existing experience, or validating strategy, I combine
              product design and product management to move from idea to
              impact.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-neutral-700">
              <span className="rounded-full border border-black/5 bg-white/70 px-3 py-1">
                Product Design
              </span>
              <span className="rounded-full border border-black/5 bg-white/70 px-3 py-1">
                Product Management
              </span>
              <span className="rounded-full border border-black/5 bg-white/70 px-3 py-1">
                Strategy &amp; Delivery
              </span>
            </div>
          </div>

          <div>
            <form
              className="space-y-4 rounded-2xl border border-black/5 bg-white/80 p-5 shadow-[0_24px_70px_rgba(15,23,42,0.08)] backdrop-blur"
              onSubmit={handleSubmit}
            >
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label
                    htmlFor="name"
                    className="text-xs font-medium text-neutral-700"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    autoComplete="name"
                    value={form.name}
                    onChange={(e) =>
                      setForm((prev) => ({
                        ...prev,
                        name: e.target.value,
                      }))
                    }
                    className="h-9 w-full rounded-full border border-black/5 bg-white/70 px-3 text-sm text-neutral-900 outline-none ring-0 transition focus:border-neutral-900/30 focus:ring-2 focus:ring-neutral-900/10"
                    required
                  />
                </div>
                <div className="space-y-1.5">
                  <label
                    htmlFor="email"
                    className="text-xs font-medium text-neutral-700"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                    className="h-9 w-full rounded-full border border-black/5 bg-white/70 px-3 text-sm text-neutral-900 outline-none ring-0 transition focus:border-neutral-900/30 focus:ring-2 focus:ring-neutral-900/10"
                    required
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <label
                  htmlFor="message"
                  className="text-xs font-medium text-neutral-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      message: e.target.value,
                    }))
                  }
                  className="w-full resize-none rounded-2xl border border-black/5 bg-white/70 px-3 py-2 text-sm text-neutral-900 outline-none ring-0 transition focus:border-neutral-900/30 focus:ring-2 focus:ring-neutral-900/10"
                  required
                />
              </div>
              <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                <div className="flex gap-2">
                  <Button type="submit" disabled={submitting}>
                    {submitting ? "Sending..." : "Send message"}
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={handleCopyEmail}
                  >
                    Copy email
                  </Button>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="text-xs text-neutral-500 underline-offset-4 hover:text-neutral-800 hover:underline"
                >
                  {CONTACT_EMAIL}
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-black/5 pt-4 text-xs text-neutral-500">
          <span>© {new Date().getFullYear()} Product Design &amp; PM.</span>
          <span>Designed with a design-first mindset.</span>
        </div>
      </div>

      <ToastRoot
        title={toastTitle}
        description={toastDescription}
        open={toastOpen}
        onOpenChange={setToastOpen}
      />
    </footer>
  );
}

