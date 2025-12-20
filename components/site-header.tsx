import Link from "next/link"

export function SiteHeader() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="max-w-4xl mx-auto px-6 py-4">
        <Link href="/" className="text-xl font-bold text-gray-900 hover:text-purple-600 transition-colors">
          Blackbox AI Guide
        </Link>
      </div>
    </header>
  )
}
