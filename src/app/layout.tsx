import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "CodeCraft AI",
    template: "%s | CodeCraft AI",
  },

  description:
    "CodeCraft AI is an AI-powered coding assistant that helps developers explain, debug, and generate code instantly using Google Gemini AI.",

  applicationName: "CodeCraft AI",

  keywords: [
    "AI coding assistant",
    "Code explanation",
    "Code debugging",
    "AI code generator",
    "Next.js AI app",
    "Gemini AI",
    "Developer tools",
    "Programming assistant",
    "CodeCraft AI",
    "React",
    "TypeScript",
  ],

  authors: [
    {
      name: "Priyam Mondal",
    },
  ],

  creator: "Priyam Mondal",

  metadataBase: new URL("https://code-craft-ai-cyan.vercel.app/"),

  alternates: {
    canonical: "https://code-craft-ai-cyan.vercel.app/",
  },

  category: "technology",

  themeColor: "#030712",

  openGraph: {
    title: "CodeCraft AI",

    description:
      "AI-powered coding assistant for explaining, debugging, and generating code.",

    url: "https://code-craft-ai-cyan.vercel.app/",

    siteName: "CodeCraft AI",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CodeCraft AI - AI Powered Coding Assistant",
      },
    ],

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "CodeCraft AI",

    description:
      "AI-powered coding assistant for developers built with Next.js and Google Gemini AI.",

    images: ["/og-image.png"],

    creator: "@priyam_jsx",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,

    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}