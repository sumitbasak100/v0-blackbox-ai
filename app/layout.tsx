import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Blackbox AI Free: The Complete Guide - AI Coding Assistant & Autonomous Agents",
  description:
    "Blackbox AI is a free dual-purpose platform combining an AI-powered coding assistant with autonomous agents. Trusted by 30 million+ developers worldwide. Learn about features, benefits, use cases, and the future of AI-driven development.",
  keywords: [
    "Blackbox AI",
    "Blackbox AI Free",
    "AI coding assistant",
    "autonomous agents",
    "code autocomplete",
    "debugging AI",
    "AI development tools",
    "software development",
    "enterprise AI",
    "coding automation",
    "developer tools",
    "2025",
  ],
  authors: [{ name: "Blackbox AI Guide" }],
  creator: "Blackbox AI",
  publisher: "Blackbox AI",
  metadataBase: new URL("https://blackbox.ink"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Blackbox AI Free: The Complete Guide - AI Coding Assistant & Autonomous Agents",
    description:
      "Blackbox AI is a free dual-purpose platform combining an AI-powered coding assistant with autonomous agents. Trusted by 30 million+ developers worldwide for faster, smarter development.",
    url: "https://blackbox.ink",
    siteName: "Blackbox AI",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/image.png",
        width: 1200,
        height: 630,
        alt: "Blackbox AI - AI Coding Assistant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blackbox AI Free: The Complete Guide - AI Coding Assistant & Autonomous Agents",
    description:
      "Trusted by 30 million+ developers. Learn about Blackbox AI's features, benefits, and the future of AI-driven development.",
    images: ["/images/image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
