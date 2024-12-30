"use client";

import Link from "next/link"

export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto flex justify-center space-x-8">
        <Link href="/products" className="text-sm text-gray-400 hover:text-white transition-colors">Products</Link>
        <Link href="/support" className="text-sm text-gray-400 hover:text-white transition-colors">Support</Link>
        <Link href="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">Terms</Link>
        <Link href="/blog" className="text-sm text-gray-400 hover:text-white transition-colors">Blog</Link>
      </div>
    </footer>
  )
}