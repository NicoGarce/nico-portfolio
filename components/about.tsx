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
                  I&apos;m Nico Garce, a web developer and administrator who
                  enjoys building practical web applications and maintaining the
                  systems that keep organizations running. From full websites to
                  internal tools, I like taking projects from an idea all the way
                  to deployment.
                </p>
                <p>
                  My work spans frontend interfaces, backend logic, and database
                  design. I care about clean, usable code and making sure
                  whatever I build is reliable and easy to maintain.
                </p>
                <p>
                  Beyond development, I also manage platform accounts, handle
                  technical administration, and create multimedia content. I
                  enjoy learning new technologies and wearing multiple hats when
                  a project calls for it.
                </p>
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

        <ScrollReveal delay={0.2}>
          <div className="mt-24">
            <h3 className="mb-8 text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Experience
            </h3>
            <div className="overflow-hidden rounded-2xl border border-border bg-surface">
              {experience.map((exp, i) => (
                <div
                  key={exp.company}
                  className={i > 0 ? "border-t border-border" : ""}
                >
                  <div className="grid gap-2 p-6 sm:grid-cols-[1fr_auto] sm:items-center">
                    <div>
                      <p className="text-base font-semibold">{exp.role}</p>
                      <p className="text-sm text-muted-foreground">
                        {exp.company}
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {exp.description}
                      </p>
                    </div>
                    <span className="text-xs text-muted-foreground sm:text-right">
                      {exp.period}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
