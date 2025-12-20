import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Terms of Service - Blackbox AI Guide",
  description: "Terms of service for using the Blackbox AI Guide website. Please read these terms carefully.",
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SiteHeader />
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>

        <div className="space-y-8 text-gray-700 leading-relaxed">
          <p className="text-sm text-gray-600">Last Updated: January 2025</p>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Agreement to Terms</h2>
            <p>
              By accessing this website, you agree to be bound by these Terms of Service. If you disagree with any part
              of these terms, please do not use our website. This site is part of{" "}
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
            <h2 className="text-2xl font-semibold mb-4">Use of Content</h2>
            <p className="mb-4">
              The content provided on this website is for informational and educational purposes only. You may:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Read and learn from the guides and tutorials</li>
              <li>Share links to our content with proper attribution</li>
              <li>Use the information for personal or commercial projects</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Disclaimer</h2>
            <p>
              The information on this website is provided "as is" without any warranties. While we strive for accuracy,
              we do not guarantee that all information is complete, correct, or up-to-date. Use of this information is
              at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">External Links</h2>
            <p>
              Our website contains links to external sites, including{" "}
              <a
                href="https://boltai.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:text-purple-800 underline font-medium"
              >
                boltai.dev
              </a>{" "}
              and other resources. We are not responsible for the content or privacy practices of these external sites.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Prohibited Activities</h2>
            <p className="mb-4">You agree not to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Use the site for any illegal purposes</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Distribute malware or engage in malicious activities</li>
              <li>Scrape or copy content without permission</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Continued use of the website after changes
              constitutes acceptance of the modified terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact</h2>
            <p>
              For questions about these terms, please visit our{" "}
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
