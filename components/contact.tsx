"use client";

import { useState } from "react";
import { Send, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./social-icons";
import { socialLinks } from "@/data/projects";
import { ScrollReveal } from "./scroll-reveal";
import { cn } from "@/lib/utils";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!form.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        const data = await res.json().catch(() => null);
        setSubmitError(
          data?.error ?? "Something went wrong. Please try again."
        );
      }
    } catch {
      setSubmitError("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
    }
  };

  return (
    <section id="contact" className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-accent">
            Contact
          </p>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Let&apos;s work together
          </h2>
          <p className="mt-4 max-w-lg text-muted-foreground">
            Have a project in mind or just want to chat? I&apos;d love to hear from
            you.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid gap-16 lg:grid-cols-2">
          <ScrollReveal delay={0.1}>
            {submitted ? (
              <div className="flex h-full min-h-[400px] flex-col items-center justify-center rounded-2xl border border-border bg-surface text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                  <Send className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-xl font-bold">Message sent!</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Thanks for reaching out. I&apos;ll get back to you soon.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-5 rounded-2xl border border-border bg-surface p-8"
                noValidate
              >
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-sm font-medium"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className={cn(
                      "w-full rounded-xl border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent",
                      errors.name ? "border-red-500" : "border-border"
                    )}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-500">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm font-medium"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className={cn(
                      "w-full rounded-xl border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent",
                      errors.email ? "border-red-500" : "border-border"
                    )}
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-medium"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    className={cn(
                      "w-full resize-none rounded-xl border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent",
                      errors.message ? "border-red-500" : "border-border"
                    )}
                    placeholder="Tell me about your project..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.message}
                    </p>
                  )}
                </div>

                {submitError && (
                  <p className="text-xs text-red-500">{submitError}</p>
                )}

                <button
                  type="submit"
                  disabled={sending}
                  className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-foreground text-sm font-medium text-background transition-all hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:px-8"
                >
                  <Send className="h-4 w-4" />
                  {sending ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="flex h-full flex-col justify-center">
              <div className="space-y-6">
                <div>
                  <h3 className="mb-2 text-lg font-bold">Get in touch</h3>
                  <a
                    href={`mailto:${socialLinks.email}`}
                    className="text-muted-foreground transition-colors hover:text-accent"
                  >
                    {socialLinks.email}
                  </a>
                </div>

                <div className="flex gap-4">
                  <a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-border text-muted-foreground transition-all hover:border-accent/30 hover:text-foreground"
                  >
                    <GithubIcon className="h-5 w-5" />
                  </a>
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-border text-muted-foreground transition-all hover:border-accent/30 hover:text-foreground"
                  >
                    <LinkedinIcon className="h-5 w-5" />
                  </a>
                  <a
                    href={`mailto:${socialLinks.email}`}
                    aria-label="Email"
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-border text-muted-foreground transition-all hover:border-accent/30 hover:text-foreground"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>

              <div className="mt-12 rounded-2xl border border-border bg-surface p-6">
                <p className="text-sm text-muted-foreground">
                  Currently based in Metro Manila, Philippines. Open to remote
                  collaboration worldwide. Usually respond within 24 hours.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
