import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "About Us - Blackbox AI Guide",
  description:
    "Learn about our mission to provide comprehensive guides and resources for Blackbox AI and modern development tools.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SiteHeader />
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-8">About Us</h1>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            Welcome to the Blackbox AI Complete Guide. We are dedicated to providing comprehensive, accurate, and
            up-to-date information about Blackbox AI and its role in modern software development.
          </p>

          <p>
            Our mission is to help developers, students, freelancers, and enterprises understand and leverage the power
            of AI-assisted coding tools. Through detailed guides, tutorials, and best practices, we aim to democratize
            access to advanced development technologies.
          </p>

          <p>
            This resource is part of{" "}
            <a
              href="https://boltai.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 hover:text-purple-800 underline font-medium"
            >
              boltai.dev
            </a>
            , a platform dedicated to showcasing innovative AI tools and technologies that empower developers worldwide.
          </p>

          <p>
            Whether you're just starting your coding journey or you're an experienced developer looking to optimize your
            workflow, we're here to help you succeed with AI-powered development tools.
          </p>
        </div>

        <div className="mt-12">
          <a href="/" className="text-purple-600 hover:text-purple-800 underline font-medium">
            ← Back to Guide
          </a>
        </div>
      </div>
      <SiteFooter />
    </div>
  )
}
