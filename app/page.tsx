import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <SiteHeader />

      {/* Banner */}
      <a
        href="https://boltai.dev/"
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-6 py-4 cursor-pointer hover:opacity-95 transition-opacity"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-white text-lg">
            <span aria-hidden="true">✨</span>
            <span>Create Websites and Mobile Apps for free</span>
          </div>
          <Button
            variant="secondary"
            className="bg-white text-purple-700 hover:bg-gray-100"
            aria-label="Try now for free"
          >
            Try Now →
          </Button>
        </div>
      </a>

      <article className="max-w-4xl mx-auto px-6 py-16 space-y-16">
        <header>
          <h1 className="text-5xl font-bold mb-4">Blackbox AI: The Complete Guide</h1>
          <p className="text-xl text-gray-600">
            Explore the comprehensive guide to Blackbox AI - a dual-purpose platform combining an AI-powered coding
            assistant with autonomous agents
          </p>
        </header>

        {/* Table of Contents */}
        <section aria-labelledby="table-of-contents" className="bg-white p-8 rounded-lg shadow-sm">
          <h2 id="table-of-contents" className="text-3xl font-bold mb-6">
            Table of Contents
          </h2>
          <nav>
            <ul className="space-y-3">
              <li>
                <Link href="/what-is-blackbox-ai" className="text-purple-600 hover:text-purple-800 underline">
                  What is Blackbox AI?
                </Link>
              </li>
              <li>
                <Link href="/key-features" className="text-purple-600 hover:text-purple-800 underline">
                  Key Features
                </Link>
              </li>
              <li>
                <Link href="/benefits" className="text-purple-600 hover:text-purple-800 underline">
                  Benefits
                </Link>
              </li>
              <li>
                <Link href="/vs-competitors" className="text-purple-600 hover:text-purple-800 underline">
                  Blackbox AI vs Competitors
                </Link>
              </li>
              <li>
                <Link href="/use-cases" className="text-purple-600 hover:text-purple-800 underline">
                  Use Cases
                </Link>
              </li>
              <li>
                <Link href="/tutorials" className="text-purple-600 hover:text-purple-800 underline">
                  Tutorials and How-To Guides
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-purple-600 hover:text-purple-800 underline">
                  Pricing and Plans
                </Link>
              </li>
              <li>
                <Link href="/integrations" className="text-purple-600 hover:text-purple-800 underline">
                  Integrations
                </Link>
              </li>
              <li>
                <Link href="/future" className="text-purple-600 hover:text-purple-800 underline">
                  Future of Blackbox AI
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="text-purple-600 hover:text-purple-800 underline">
                  FAQs
                </Link>
              </li>
            </ul>
          </nav>
        </section>

        {/* Introduction */}
        <section aria-labelledby="introduction">
          <h2 id="introduction" className="text-3xl font-bold mb-4">
            Welcome to the Complete Guide
          </h2>
          <p className="leading-relaxed mb-4">
            <strong>Blackbox AI</strong> is revolutionizing software development with its dual-purpose platform that
            combines an AI-powered coding assistant with autonomous agents. Trusted by over 30 million builders
            worldwide, Blackbox AI helps developers code faster, automate repetitive tasks, and scale projects
            seamlessly.
          </p>
          <p className="leading-relaxed mb-4">
            This comprehensive guide covers everything you need to know about Blackbox AI - from its core features and
            benefits to practical use cases, tutorials, and future developments. Whether you're a beginner or an
            experienced developer, this guide will help you leverage the full power of AI-driven development.
          </p>
          <p className="leading-relaxed">
            Navigate through the sections above to explore specific topics, or continue reading to get started with the
            fundamentals.
          </p>
        </section>
      </article>

      <SiteFooter />
    </main>
  )
}
