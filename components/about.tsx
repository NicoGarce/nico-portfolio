"use client";

import { experience, skillCategories } from "@/data/projects";
import { ScrollReveal } from "./scroll-reveal";

export function About() {
  return (
    <section id="about" className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-accent">
            About
          </p>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            A bit about me
          </h2>
        </ScrollReveal>

        <div className="mt-16 grid gap-16 lg:grid-cols-2">
          <div>
            <ScrollReveal delay={0.1}>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  I&apos;m a full-stack developer with a passion for building products
                  that sit at the intersection of engineering and design. With 5+
                  years of experience, I&apos;ve worked across the stack — from
                  crafting pixel-perfect interfaces to designing resilient backend
                  architectures.
                </p>
                <p>
                  Currently, I&apos;m building Pulse, an async-first collaboration tool
                  for distributed teams. Previously, I helped ship developer tools
                  at Vercel and payment infrastructure at Stripe.
                </p>
                <p>
                  When I&apos;m not writing code, you&apos;ll find me contributing to
                  open-source projects, writing about web development, or exploring
                  the latest in AI and creative technology.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="mt-12">
                <h3 className="mb-6 text-sm font-medium uppercase tracking-widest text-muted-foreground">
                  Experience
                </h3>
                <div className="space-y-1">
                  {experience.map((exp) => (
                    <div
                      key={exp.company}
                      className="flex items-center gap-4 rounded-xl p-3 transition-colors hover:bg-surface"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-background text-lg font-bold">
                        {exp.logo}
                      </span>
                      <div className="flex-1">
                        <p className="text-sm font-medium">{exp.role}</p>
                        <p className="text-xs text-muted-foreground">
                          {exp.company}
                        </p>
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {exp.period}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div>
            <ScrollReveal delay={0.15}>
              <h3 className="mb-8 text-sm font-medium uppercase tracking-widest text-muted-foreground">
                Skills & Technologies
              </h3>
              <div className="space-y-8">
                {skillCategories.map((category) => (
                  <div key={category.title}>
                    <h4 className="mb-3 text-sm font-medium text-foreground">
                      {category.title}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-border bg-surface px-4 py-2 text-sm text-muted-foreground transition-all hover:border-accent/30 hover:text-foreground"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
