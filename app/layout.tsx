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
    default: "Nico Garce — Developer & Designer",
    template: "%s | Nico Garce",
  },
  description:
    "Full-stack developer crafting high-performance web applications with clean architecture and thoughtful interfaces.",
  keywords: ["developer", "portfolio", "web development", "full-stack", "React", "Next.js", "Nico Garce", "PHP", "Laravel"],
  authors: [{ name: "Nico Garce" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Nico Garce",
    title: "Nico Garce — Developer & Designer",
    description:
      "Full-stack developer crafting high-performance web applications with clean architecture and thoughtful interfaces.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nico Garce — Developer & Designer",
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
