import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Privacy Policy - Blackbox AI Guide",
  description:
    "Privacy policy for Blackbox AI Guide website. Learn how we handle your information and protect your privacy.",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SiteHeader />
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

        <div className="space-y-8 text-gray-700 leading-relaxed">
          <p className="text-sm text-gray-600">Last Updated: January 2025</p>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p>
              This Privacy Policy explains how we collect, use, and protect your information when you visit our Blackbox
              AI guide website. This site is part of{" "}
              <a
                href="https://boltai.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:text-purple-800 underline font-medium"
              >
                boltai.dev
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <p className="mb-4">We collect minimal information to provide you with the best experience:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Basic analytics data (page views, browser type, device information)</li>
              <li>Information you voluntarily provide through contact forms</li>
              <li>Cookies for site functionality and analytics</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <p className="mb-4">We use collected information to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Improve our content and user experience</li>
              <li>Analyze site traffic and usage patterns</li>
              <li>Respond to your inquiries and feedback</li>
              <li>Maintain site security and prevent abuse</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
            <p>
              We may use third-party services for analytics and site functionality. These services have their own
              privacy policies and we encourage you to review them.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
            <p>
              You have the right to access, correct, or delete your personal information. You can also opt out of
              analytics tracking by using browser settings or extensions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact</h2>
            <p>
              For privacy-related questions, please visit our{" "}
              <a href="/contact" className="text-purple-600 hover:text-purple-800 underline font-medium">
                contact page
              </a>
              .
            </p>
          </section>
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
