import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Contact Us - Blackbox AI Guide",
  description: "Get in touch with us for questions, feedback, or suggestions about Blackbox AI and our guides.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SiteHeader />
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            We'd love to hear from you! Whether you have questions, feedback, or suggestions about our Blackbox AI
            guide, feel free to reach out.
          </p>

          <div className="bg-white p-8 rounded-lg border border-gray-200 space-y-4">
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>

            <div>
              <h3 className="font-semibold text-lg mb-2">General Inquiries</h3>
              <p>For general questions about Blackbox AI or our content, please visit our main website.</p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Parent Website</h3>
              <p>
                This guide is part of{" "}
                <a
                  href="https://boltai.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:text-purple-800 underline font-medium"
                >
                  boltai.dev
                </a>
                . Visit our main site for more AI tools and resources.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Feedback</h3>
              <p>
                We're constantly improving our guides. If you have suggestions for topics to cover or improvements to
                existing content, we'd appreciate your input.
              </p>
            </div>
          </div>
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
