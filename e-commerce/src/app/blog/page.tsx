"use client";

import { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Search, Facebook, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");

  const blogPosts = [
    {
      id: 1,
      title: "Understanding E-Commerce Trends",
      image: "/placeholder.svg",
      category: "Trends",
      author: "Jane Doe",
      date: "January 5, 2024",
      excerpt:
        "Explore the latest trends in e-commerce that are shaping the future of online shopping.",
      link: "/blog/ecommerce-trends",
    },
    {
      id: 2,
      title: "How to Optimize Your Online Store",
      image: "/placeholder.svg",
      category: "Guides",
      author: "John Smith",
      date: "January 10, 2024",
      excerpt:
        "Learn effective strategies to enhance the performance of your online store.",
      link: "/blog/optimize-store",
    },
    {
      id: 3,
      title: "The Importance of User Experience",
      image: "/placeholder.svg",
      category: "Product Usage",
      author: "Emily Clark",
      date: "January 15, 2024",
      excerpt:
        "Discover why user experience is crucial for e-commerce success.",
      link: "/blog/user-experience",
    },
    {
      id: 4,
      title: "Top Payment Gateways for E-Commerce",
      image: "/placeholder.svg",
      category: "Trends",
      author: "Jane Doe",
      date: "January 20, 2024",
      excerpt:
        "A comparison of the best payment gateways available for online businesses.",
      link: "/blog/payment-gateways",
    },
    {
      id: 5,
      title: "SEO Tips for E-Commerce Websites",
      image: "/placeholder.svg",
      category: "Guides",
      author: "John Smith",
      date: "January 25, 2024",
      excerpt:
        "Boost your online visibility with these essential SEO tips.",
      link: "/blog/seo-tips",
    },
    {
      id: 6,
      title: "Building Customer Loyalty",
      image: "/placeholder.svg",
      category: "Product Usage",
      author: "Emily Clark",
      date: "January 30, 2024",
      excerpt:
        "Strategies to foster loyalty among your customers.",
      link: "/blog/customer-loyalty",
    },
    {
      id: 7,
      title: "Social Media Marketing for E-Commerce",
      image: "/placeholder.svg",
      category: "Trends",
      author: "Jane Doe",
      date: "February 5, 2024",
      excerpt:
        "Harness the power of social media to drive sales.",
      link: "/blog/social-media-marketing",
    },
    {
      id: 8,
      title: "Email Marketing Strategies",
      image: "/placeholder.svg",
      category: "Guides",
      author: "John Smith",
      date: "February 10, 2024",
      excerpt:
        "Effective email marketing techniques to engage your audience.",
      link: "/blog/email-marketing",
    },
    {
      id: 9,
      title: "The Future of E-Commerce",
      image: "/placeholder.svg",
      category: "Product Usage",
      author: "Emily Clark",
      date: "February 15, 2024",
      excerpt:
        "Insights into what the future holds for e-commerce.",
      link: "/blog/future-ecommerce",
    },
    {
      id: 10,
      title: "Creating a Mobile-Friendly Store",
      image: "/placeholder.svg",
      category: "Trends",
      author: "Jane Doe",
      date: "February 20, 2024",
      excerpt:
        "Why a mobile-friendly design is essential for your online store.",
      link: "/blog/mobile-friendly-store",
    },
    {
      id: 11,
      title: "Product Photography Tips",
      image: "/placeholder.svg",
      category: "Guides",
      author: "John Smith",
      date: "February 25, 2024",
      excerpt:
        "Learn how to take stunning product photos to attract customers.",
      link: "/blog/product-photography",
    },
    {
      id: 12,
      title: "Managing Inventory Effectively",
      image: "/placeholder.svg",
      category: "Product Usage",
      author: "Emily Clark",
      date: "March 1, 2024",
      excerpt:
        "Best practices for inventory management in e-commerce.",
      link: "/blog/inventory-management",
    },
    {
      id: 13,
      title: "Understanding E-Commerce Analytics",
      image: "/placeholder.svg",
      category: "Trends",
      author: "Jane Doe",
      date: "March 5, 2024",
      excerpt:
        "Utilize analytics to improve your e-commerce strategy.",
      link: "/blog/ecommerce-analytics",
    },
    {
      id: 14,
      title: "Dropshipping: Pros and Cons",
      image: "/placeholder.svg",
      category: "Guides",
      author: "John Smith",
      date: "March 10, 2024",
      excerpt:
        "Explore the advantages and disadvantages of dropshipping.",
      link: "/blog/dropshipping",
    },
    {
      id: 15,
      title: "Crafting Compelling Product Descriptions",
      image: "/placeholder.svg",
      category: "Product Usage",
      author: "Emily Clark",
      date: "March 15, 2024",
      excerpt:
        "Write product descriptions that convert visitors into buyers.",
      link: "/blog/product-descriptions",
    },
    {
      id: 16,
      title: "The Role of Customer Reviews",
      image: "/placeholder.svg",
      category: "Trends",
      author: "Jane Doe",
      date: "March 20, 2024",
      excerpt:
        "How customer reviews can impact your business.",
      link: "/blog/customer-reviews",
    },
  ];

  const filteredPosts = blogPosts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-black text-white min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Welcome to Our Blog
        </h1>
        <p className="text-gray-400 text-lg">
          Explore trends, guides, and tips to boost your e-commerce success.
        </p>
        <div className="relative max-w-md mx-auto mt-8">
          <input
            type="text"
            placeholder="Search articles..."
            className="w-full p-3 rounded-lg bg-zinc-900 text-white placeholder-gray-500 focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute top-3 right-3 text-gray-500" />
        </div>
      </section>

      {/* Blog Posts */}
      <section className="px-4 pb-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <div
                key={post.id}
                className="bg-zinc-900 rounded-lg overflow-hidden shadow-md"
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2 text-[#4ECCA3] text-sm font-semibold">
                    <span>{post.category}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                  <p className="text-gray-400 mb-4">{post.excerpt}</p>
                  <Link
                    href={post.link}
                    className="text-[#4ECCA3] hover:underline"
                  >
                    Read More
                  </Link>
                </div>
                {/* Author and Socials */}
                <div className="flex items-center justify-between p-4 border-t border-zinc-800">
                  <div className="text-sm">
                    <span className="text-gray-400">By</span>{" "}
                    <span className="font-semibold">{post.author}</span>
                  </div>
                  <div className="flex gap-3 text-gray-400">
                    <Facebook className="hover:text-white cursor-pointer" />
                    <Twitter className="hover:text-white cursor-pointer" />
                    <Linkedin className="hover:text-white cursor-pointer" />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center">
              <p className="text-gray-400">No articles found.</p>
            </div>
          )}
        </div>
      </section>

      {/* Categories Section */}
      <section className="px-4 pb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Categories</h2>
          <div className="flex gap-4 flex-wrap">
            {["Trends", "Guides", "Product Usage", "Tips", "News"].map(
              (category, index) => (
                <Link
                  key={index}
                  href={`#`}
                  className="bg-zinc-800 px-4 py-2 rounded-full text-sm hover:bg-zinc-700"
                >
                  {category}
                </Link>
              )
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
