"use client";

import { ArrowRight, DollarSign, Users, Zap, CheckCircle, Info, HelpCircle } from 'lucide-react';
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function AffiliateProgramPage() {
  const handleApplyNowClick = () => {
    console.log('Button clicked!');
    // Add your logic here
  };

  return (
    <div className="min-h-screen bg-black text-gray-100">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-900 to-purple-900">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Join Our Affiliate Program
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
            Earn generous commissions by promoting our products to your audience.
          </p>
          <Button size="lg" className="bg-blue-500 text-white hover:bg-blue-600" onClick={handleApplyNowClick}>
            Apply Now <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-400">
            Why Join Our Affiliate Program?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: DollarSign,
                title: "High Commissions",
                description: "Earn up to 30% commission on every sale you refer."
              },
              {
                icon: Zap,
                title: "Instant Payouts",
                description: "Get paid instantly when a sale is made through your unique link."
              },
              {
                icon: Users,
                title: "Dedicated Support",
                description: "Our affiliate team is here to help you succeed every step of the way."
              }
            ].map((benefit, index) => (
              <Card key={index} className="text-center bg-gray-900 border-gray-800">
                <Card.Header>
                  {benefit.icon && <benefit.icon className="w-12 h-12 mx-auto text-blue-400 mb-4" />}
                  <Card.Title className="text-gray-100">{benefit.title}</Card.Title>
                </Card.Header>
                <Card.Content>
                  <p className="text-gray-400">{benefit.description}</p>
                </Card.Content>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-400">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: CheckCircle,
                title: "Sign Up",
                description: "Apply to become an affiliate and get approved instantly."
              },
              {
                icon: Info,
                title: "Promote",
                description: "Share your unique referral link on social media, blogs, or anywhere online."
              },
              {
                icon: DollarSign,
                title: "Earn",
                description: "Earn commissions for every sale made through your referral link."
              }
            ].map((step, index) => (
              <Card key={index} className="text-center bg-gray-800 border-gray-700">
                <Card.Header>
                  {step.icon && <step.icon className="w-12 h-12 mx-auto text-blue-400 mb-4" />}
                  <Card.Title className="text-gray-100">{step.title}</Card.Title>
                </Card.Header>
                <Card.Content>
                  <p className="text-gray-400">{step.description}</p>
                </Card.Content>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-400">
            What Our Affiliates Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Jane Doe",
                feedback: "This program has been a game changer! I started earning commissions in my first week.",
                role: "Content Creator"
              },
              {
                name: "John Smith",
                feedback: "The support team is fantastic, and the payouts are super fast! Highly recommend.",
                role: "Blogger"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-gray-900 border-gray-800">
                <Card.Content>
                  <p className="text-gray-300 italic mb-4">"{testimonial.feedback}"</p>
                  <p className="text-gray-400 font-bold">- {testimonial.name}, {testimonial.role}</p>
                </Card.Content>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-400">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                question: "How do I join the affiliate program?",
                answer: "Simply click the 'Apply Now' button and complete the registration process."
              },
              {
                question: "When do I get paid?",
                answer: "Payments are processed instantly after a successful sale."
              },
              {
                question: "Is there a limit to how much I can earn?",
                answer: "No, the sky's the limit! The more you promote, the more you earn."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-100 mb-2 flex items-center">
                  <HelpCircle className="w-5 h-5 mr-2 text-blue-400" />
                  {faq.question}
                </h3>
                <p className="text-gray-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-blue-950">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-100">
            Ready to Start Earning?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Join our affiliate program today and start earning generous commissions!
          </p>
          <Button size="lg" className="bg-blue-500 text-white hover:bg-blue-600" onClick={handleApplyNowClick}>
            Apply Now <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
