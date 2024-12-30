"use client";

import Header from "@/components/header"
import Footer from "@/components/footer"
import  Input from "@/components/ui/input"
import Textarea from "@/components/ui/textarea"
import Button from "@/components/ui/button"
import React, { useState } from 'react';

export default function Support() {
  const [message, setMessage] = useState('');
  const handleClick = () => {
    // Handle button click
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <main className="pt-32 pb-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Support</h1>
          <div className="bg-zinc-900/50 rounded-lg p-8 border border-zinc-800">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                <Input id="name" className="bg-zinc-800 border-zinc-700" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                <Input id="email" type="email" className="bg-zinc-800 border-zinc-700" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                <Textarea 
                  value={message} 
                  onChange={(e) => setMessage(e.target.value)} 
                  id="message" 
                  rows={4} 
                  className="bg-zinc-800 border-zinc-700" 
                />
              </div>
              <Button type="submit" className="bg-[#4ECCA3] hover:bg-[#45b892] text-black w-full" onClick={handleClick}>
                Send Message
              </Button>
            </form>
          </div>
          
          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-2">How do I install a template?</h3>
                <p className="text-gray-400">Our templates come with detailed installation instructions. Generally, you'll need to upload the files to your web server and follow the setup guide provided.</p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Can I customize the templates?</h3>
                <p className="text-gray-400">Yes, all our templates are fully customizable. You can modify colors, layouts, and add your own content easily.</p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Do you offer refunds?</h3>
                <p className="text-gray-400">We offer a 30-day money-back guarantee if you're not satisfied with your purchase.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}