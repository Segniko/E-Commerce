"use client";

import Link from "next/link";
import Button from "@/components/ui/button";
import { useRouter } from 'next/router';

export default function Header() {

  return (
    <nav className="fixed w-full z-50 bg-black/50 backdrop-blur-lg border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold">PureCommerce</Link>
          <div className="flex space-x-8">
            <Link href="/products" className="text-sm text-gray-400 hover:text-white transition-colors">Products</Link>
            <Link href="/support" className="text-sm text-gray-400 hover:text-white transition-colors">Support</Link>
            <Link href="/aboutus" className="text-sm text-gray-400 hover:text-white transition-colors">About Us</Link>
            <Button 
                className="text-sm text-gray-400 hover:text-white transition-colors" 
                onClick={() => console.log("Toggle Theme Clicked")}
            >
                Dark Mode
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}