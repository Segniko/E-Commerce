"use client";

import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import { Star } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { useNavigate } from 'react-router-dom';
import { useTheme } from './ThemeContext';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Welcome to <span className="text-[#4ECCA3]">PureCommerce</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl mb-8">
            Everything you need for a successful online store, all in one place.
          </p>
          <Button
            className="bg-[#4ECCA3] hover:bg-[#45b892] text-black px-6 py-3 rounded-md"
            onClick={() => console.log('Get Started Clicked')}
          >
            Get Started 
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            { title: "Sleek items", icon: "✓" },
            { title: "Quality", icon: "✓" },
            { title: "Easy to use", icon: "✓" },
            { title: "Responsive", icon: "✓" },
          ].map((feature, index) => (
            <div key={index} className="p-6 bg-zinc-900 rounded-lg shadow-lg">
              <div className="text-[#4ECCA3] text-4xl mb-4">{feature.icon}</div>
              <h3 className="font-semibold text-xl mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">PureCommerce simplifies your website development process.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 px-4 bg-zinc-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Our Newsletter & Get 15% Off
          </h2>
          <p className="text-gray-400 mb-8">
            Be the first to know about new items, products, and exclusive offers.
          </p>
          <div className="flex gap-2 max-w-md mx-auto">
            <Input
              id="email-input"
              type="email"
              placeholder="Enter your email"
              className="bg-zinc-900 border-zinc-800"
            />
            <Button
              className="bg-[#4ECCA3] hover:bg-[#45b892] text-black px-4"
              onClick={() => console.log('Newsletter Sign-Up')}
            >
              Sign Up
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Hear From Our Happy Users
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Jane",
                company: "Webhub",
                image: "/placeholder.svg",
                text: "The templates are sleek and user-friendly. My online presence is transformed!",
              },
              {
                name: "Mark",
                company: "Authorize",
                image: "/placeholder.svg",
                text: "Professional, responsive, and easy to set up. Highly recommend for any business!",
              },
              {
                name: "Rachel",
                company: "Umbra",
                image: "/placeholder.svg",
                text: "The attention to detail in these templates is unmatched. PureCommerce delivers quality.",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-zinc-900/50 p-6 rounded-lg border border-zinc-800">
                <div className="flex items-center gap-2 mb-4 text-[#4ECCA3]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-gray-400 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-[#4ECCA3] text-black text-center">
        <h2 className="text-black text-3xl md:text-4xl font-bold mb-4">
          Welcome to Our E-commerce Store!
        </h2>
        <p className="mb-8 text-lg">
          Discover a wide range of products tailored just for you. Enjoy exclusive deals, fast shipping, and a seamless shopping experience.
          Shop now and find what you love!
        </p>
        <Link href="/products" className="bg-black hover:bg-gray-800 text-[#4ECCA3] px-6 py-3 rounded-md">
          Shop Now
        </Link>
      </section>
      <Footer />
    </div>
  );
}
