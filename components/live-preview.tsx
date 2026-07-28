"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ExternalLink, Maximize2, Loader2, Monitor } from "lucide-react";

interface LivePreviewProps {
  url: string;
  title?: string;
  className?: string;
}

function screenshotUrl(url: string) {
  return `https://v1.screenshot.11ty.dev/${encodeURIComponent(url)}/opengraph/`;
}

export function LivePreview({ url, title, className = "" }: LivePreviewProps) {
  const [state, setState] = useState<"loading" | "loaded" | "blocked" | "error">("loading");

  useEffect(() => {
    const timer = setTimeout(() => {
      setState((s) => (s === "loading" ? "blocked" : s));
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  const handleLoad = () => {
    setState("loaded");
  };

  return (
    <div className={`flex flex-col overflow-hidden rounded-xl border border-border bg-surface ${className}`}>
      <div className="flex items-center gap-3 border-b border-border bg-background px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-red-500/80" />
          <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
          <span className="h-3 w-3 rounded-full bg-green-500/80" />
        </div>
        <div className="flex flex-1 items-center gap-2 rounded-lg bg-surface px-3 py-1.5">
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20" />
              <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
            </svg>
            <span className="font-medium text-foreground">https://</span>
          </div>
          <span className="truncate text-xs text-muted-foreground">
            {url.replace(/^https?:\/\//, "")}
          </span>
        </div>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 text-muted-foreground transition-colors hover:text-foreground"
          aria-label="Open in new tab"
        >
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>

      <div className="relative bg-background">
        {state === "loading" && (
          <div className="flex aspect-[16/9] items-center justify-center">
            <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
          </div>
        )}

        {(state === "loaded" || state === "loading") && (
          <iframe
            src={url}
            title={title || `Preview of ${url}`}
            className={`h-full w-full ${state === "loading" ? "absolute inset-0" : ""}`}
            style={{ minHeight: "500px" }}
            onLoad={handleLoad}
            onError={() => setState("error")}
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            loading="lazy"
          />
        )}

        {state === "blocked" && (
          <div className="flex flex-col items-center justify-center gap-5 px-8 py-12 text-center">
            <div className="relative aspect-[16/9] w-full max-w-3xl overflow-hidden rounded-lg border border-border">
              <Image
                src={screenshotUrl(url)}
                alt={`Screenshot of ${title || url}`}
                fill
                className="object-cover object-top"
                onError={() => {
                  const el = document.getElementById("screenshot-fallback");
                  if (el) el.style.display = "none";
                }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-all hover:opacity-90"
                >
                  <Monitor className="h-4 w-4" />
                  Open live site
                </a>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              This site doesn&apos;t allow embedding. Here&apos;s a preview image instead.
            </p>
          </div>
        )}

        {state === "error" && (
          <div className="flex aspect-[16/9] flex-col items-center justify-center gap-3 px-8 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-500/10">
              <Maximize2 className="h-5 w-5 text-red-500" />
            </div>
            <p className="text-sm text-muted-foreground">
              Couldn&apos;t load a preview.
            </p>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-4 py-2 text-xs font-medium transition-colors hover:bg-background"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Open directly
            </a>
          </div>
        )}
      </div>
    </div>
  );
}