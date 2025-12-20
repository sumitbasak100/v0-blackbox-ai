import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="mt-20 pt-8 border-t border-gray-200 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 pb-8">
        <div className="flex flex-wrap justify-center gap-6 mb-6">
          <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">
            Contact
          </Link>
          <Link href="/privacy" className="text-gray-600 hover:text-gray-900 transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-gray-600 hover:text-gray-900 transition-colors">
            Terms of Service
          </Link>
        </div>
        <p className="text-center text-gray-600 text-sm">
          © 2025 Blackbox AI Guide. Part of{" "}
          <a
            href="https://boltai.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-600 hover:text-purple-800 underline"
          >
            boltai.dev
          </a>
          .
        </p>
      </div>
    </footer>
  )
}
