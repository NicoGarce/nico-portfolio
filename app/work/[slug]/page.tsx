import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/social-icons";
import { LivePreview } from "@/components/live-preview";
import { projects } from "@/data/projects";
import { Footer } from "@/components/footer";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.tagline,
      type: "article",
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-4xl items-center px-6">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Work
          </Link>
        </nav>
      </header>

      <main className="px-6 py-16">
        <article className="mx-auto max-w-4xl">
          <div className="mb-12">
            <span className="text-sm font-medium text-accent">
              {project.category} &middot; {project.year}
            </span>
            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {project.title}
            </h1>
            <p className="mt-4 text-xl text-muted-foreground">
              {project.tagline}
            </p>
          </div>

          <div className="relative mb-16 overflow-hidden rounded-2xl border border-border bg-surface">
            {project.liveUrl ? (
              <LivePreview url={project.liveUrl} title={project.title} />
            ) : (
              <div className="aspect-[16/9]">
                <div
                  className="absolute inset-0"
                  style={{
                    background: `radial-gradient(circle at 30% 50%, ${project.color}30, transparent 70%)`,
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-8xl font-bold text-foreground/[0.06]">
                    {project.title}
                  </span>
                </div>
              </div>
            )}
          </div>

          <div className="mb-16 flex flex-wrap gap-3">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border bg-surface px-4 py-2 text-sm text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mb-16 flex flex-wrap gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center gap-2 rounded-xl bg-foreground px-6 text-sm font-medium text-background transition-all hover:opacity-90"
              >
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center gap-2 rounded-xl border border-border px-6 text-sm font-medium transition-all hover:bg-surface"
              >
                <GithubIcon className="h-4 w-4" />
                View Code
              </a>
            )}
          </div>

          <div className="space-y-16">
            <section>
              <h2 className="mb-4 text-2xl font-bold">The Problem</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {project.problem}
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-bold">The Solution</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {project.solution}
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-bold">The Impact</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {project.impact}
              </p>
            </section>
          </div>

          <div className="mt-20">
            <h2 className="mb-8 text-2xl font-bold">Gallery</h2>
            <div className="grid gap-4">
              {project.gallery.length > 0 ? (
                project.gallery.map((image, i) => (
                  <div
                    key={i}
                    className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-border bg-surface"
                  >
                    <div
                      className="absolute inset-0"
                      style={{
                        background: `linear-gradient(135deg, ${project.color}15, transparent 60%)`,
                      }}
                    />
                  </div>
                ))
              ) : (
                <p className="text-sm text-muted-foreground">
                  No additional screenshots available.
                </p>
              )}
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}
