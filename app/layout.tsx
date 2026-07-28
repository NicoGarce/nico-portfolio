import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Portfolio — Developer & Designer",
    template: "%s | Portfolio",
  },
  description:
    "Full-stack developer crafting high-performance web applications with clean architecture and thoughtful interfaces.",
  keywords: ["developer", "portfolio", "web development", "full-stack", "React", "Next.js"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Portfolio",
    title: "Portfolio — Developer & Designer",
    description:
      "Full-stack developer crafting high-performance web applications with clean architecture and thoughtful interfaces.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio — Developer & Designer",
    description:
      "Full-stack developer crafting high-performance web applications with clean architecture and thoughtful interfaces.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <div className="grain" aria-hidden="true" />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
