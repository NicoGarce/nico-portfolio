"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./social-icons";
import Link from "next/link";
import { projects } from "@/data/projects";
import { ScrollReveal } from "./scroll-reveal";

function screenshotUrl(url: string) {
  return `https://v1.screenshot.11ty.dev/${encodeURIComponent(url)}/opengraph/`;
}

function ProjectPreview({ project, index }: { project: typeof projects[number]; index: number }) {
  const [failed, setFailed] = useState(false);

  if (!project.liveUrl || failed) {
    return (
      <>
        <div
          className="absolute inset-0 opacity-20 transition-opacity duration-500 group-hover:opacity-40"
          style={{
            background: `radial-gradient(circle at 30% 50%, ${project.color}40, transparent 70%)`,
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.span
            className="text-6xl font-bold text-foreground/[0.06]"
            whileHover={{ scale: 1.05 }}
          >
            {String(index + 1).padStart(2, "0")}
          </motion.span>
        </div>
      </>
    );
  }

  return (
    <Image
      src={screenshotUrl(project.liveUrl)}
      alt={`Screenshot of ${project.title}`}
      fill
      className="object-cover object-top transition-all duration-500 group-hover:scale-105"
      onError={() => setFailed(true)}
      sizes="(max-width: 768px) 100vw, 50vw"
    />
  );
}

export function SelectedWork() {
  return (
    <section id="work" className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-accent">
            Selected Work
          </p>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Projects I&apos;ve built
          </h2>
          <p className="mt-4 max-w-lg text-muted-foreground">
            A curated selection of projects showcasing end-to-end product
            development, from concept to deployment.
          </p>
        </ScrollReveal>

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <ScrollReveal key={project.slug} delay={index * 0.1}>
              <Link href={`/work/${project.slug}`} className="group block">
                <article className="relative overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5">
                  <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-surface to-background">
                    <ProjectPreview project={project} index={index} />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                          {project.category} &middot; {project.year}
                        </span>
                        <h3 className="mt-2 text-xl font-bold transition-colors group-hover:text-accent">
                          {project.title}
                        </h3>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {project.tagline}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        {project.liveUrl && (
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border transition-colors hover:bg-background">
                            <ExternalLink className="h-3.5 w-3.5" />
                          </span>
                        )}
                        {project.githubUrl && (
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border transition-colors hover:bg-background">
                            <GithubIcon className="h-3.5 w-3.5" />
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.techStack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-background px-3 py-1 text-xs text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 4 && (
                        <span className="rounded-full bg-background px-3 py-1 text-xs text-muted-foreground">
                          +{project.techStack.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
