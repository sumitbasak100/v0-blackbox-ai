import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import "./globals.css"

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })

export const metadata: Metadata = {
  title: "Blackbox AI Free: Blackbox AI - The Complete Guide - AI Coding Assistant",
  description:
    "Blackbox AI is a free dual-purpose platform combining an AI-powered coding assistant with autonomous agents. Trusted by 30 million+ developers worldwide.",
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
  alternates: { canonical: "/" },
  openGraph: {
    title: "Blackbox AI Free: The Complete Guide",
    description:
      "Blackbox AI is a free dual-purpose platform combining an AI-powered coding assistant with autonomous agents.",
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
    title: "Blackbox AI Free: The Complete Guide",
    description:
      "Trusted by 30 million+ developers. Learn about Blackbox AI's features.",
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
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-8NZNWPD64D"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8NZNWPD64D');
          `}
        </Script>
      </body>
    </html>
  )
}
