"use client";
import React, { useState } from 'react';
import './Terms.css';
import Header from "@/components/header"
import Footer from "@/components/footer"

type SectionKeys = 'acceptTerms' | 'changesToTerms' | 'accountResponsibilities' | 'useOfThePlatform' | 'productListingsAndPurchases' | 'paymentAndFees' | 'intellectualProperty' | 'userGeneratedContent' | 'limitationOfLiability' | 'termination' | 'governingLaw' | 'contactMe';

export default function Terms() {
  const [openSections, setOpenSections] = useState({
    acceptTerms: true,
    changesToTerms: false,
    accountResponsibilities: false,
    useOfThePlatform: false,
    productListingsAndPurchases: false,
    paymentAndFees: false,
    intellectualProperty: false,
    userGeneratedContent: false,
    limitationOfLiability: false,
    termination: false,
    governingLaw: false,
    contactMe: false,
  });

  const toggleSection = (section: SectionKeys) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-900 text-white p-6 transition-opacity duration-500 ease-in-out opacity-100 font-inter">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl font-bold mb-6 text-center hover:text-[#4ECCA3] transition-colors duration-300 leading-tight">
            Terms and Conditions
          </h1>
          <div className="effective-date mb-8 p-4 bg-gray-800 rounded-lg">
            <strong>Effective Date:</strong> December 15, 2024
          </div>
          <div className="table-of-contents">
            <h2>Table of Contents</h2>
            <ul>
              <li>
                <a href="#changes-to-terms">1. Changes to Terms</a>
              </li>
              <li>
                <a href="#account-responsibilities">2. Account Responsibilities</a>
              </li>
              <li>
                <a href="#use-of-the-platform">3. Use of the Platform</a>
              </li>
              <li>
                <a href="#product-listings-and-purchases">4. Product Listings and Purchases</a>
              </li>
              <li>
                <a href="#payment-and-fees">5. Payment and Fees</a>
              </li>
              <li>
                <a href="#intellectual-property">6. Intellectual Property</a>
              </li>
              <li>
                <a href="#user-generated-content">7. User Generated Content</a>
              </li>
              <li>
                <a href="#limitation-of-liability">8. Limitation of Liability</a>
              </li>
              <li>
                <a href="#termination">9. Termination</a>
              </li>
              <li>
                <a href="#governing-law">10. Governing Law</a>
              </li>
              <li>
                <a href="#contact-me">11. Contact Me</a>
              </li>
            </ul>
          </div>
          <section className="card" id="changes-to-terms">
            <h2 onClick={() => toggleSection('changesToTerms')}>
              1. Changes to Terms
            </h2>
            {openSections['changesToTerms'] && (
              <p className="mb-6 text-lg leading-relaxed">
                I reserve the right to update or modify these Terms at any time. Any changes will be effective immediately upon posting. Your continued use of PureCommerce after changes are made signifies your acceptance of the revised Terms.
              </p>
            )}
          </section>

          <section className="card" id="account-responsibilities">
            <h2 onClick={() => toggleSection('accountResponsibilities')}>
              2. Account Responsibilities
            </h2>
            {openSections['accountResponsibilities'] && (
              <ul className="list-disc list-inside mb-6 text-lg leading-relaxed">
                <li className="hover:text-[#4ECCA3] transition-colors duration-300">
                  You are responsible for maintaining the confidentiality of your account information.
                </li>
                <li className="hover:text-[#4ECCA3] transition-colors duration-300">
                  You agree to provide accurate and complete information during registration and to update your information promptly.
                </li>
                <li className="hover:text-[#4ECCA3] transition-colors duration-300">
                  You are responsible for all activities that occur under your account.
                </li>
              </ul>
            )}
          </section>

          <section className="card" id="use-of-the-platform">
            <h2 onClick={() => toggleSection('useOfThePlatform')}>
              3. Use of the Platform
            </h2>
            {openSections['useOfThePlatform'] && (
              <ul className="list-disc list-inside mb-6 text-lg leading-relaxed">
                <li className="hover:text-[#4ECCA3] transition-colors duration-300">
                  You agree to use PureCommerce only for lawful purposes.
                </li>
                <li className="hover:text-[#4ECCA3] transition-colors duration-300">
                  You must not:
                  <ul className="list-disc list-inside text-lg leading-relaxed">
                    <li className="hover:text-[#4ECCA3] transition-colors duration-300">
                      Engage in fraudulent activities.
                    </li>
                    <li className="hover:text-[#4ECCA3] transition-colors duration-300">
                      Post or transmit harmful, offensive, or infringing content.
                    </li>
                    <li className="hover:text-[#4ECCA3] transition-colors duration-300">
                      Interfere with the operation of the platform or violate any applicable laws.
                    </li>
                  </ul>
                </li>
              </ul>
            )}
          </section>

          <section className="card" id="product-listings-and-purchases">
            <h2 onClick={() => toggleSection('productListingsAndPurchases')}>
              4. Product Listings and Purchases
            </h2>
            {openSections['productListingsAndPurchases'] && (
              <ul className="list-disc list-inside mb-6 text-lg leading-relaxed">
                <li className="hover:text-[#4ECCA3] transition-colors duration-300">
                  PureCommerce facilitates the buying and selling of products but does not directly sell or take ownership of items listed by sellers.
                </li>
                <li className="hover:text-[#4ECCA3] transition-colors duration-300">
                  I make no guarantees about the accuracy of product descriptions, pricing, or availability.
                </li>
                <li className="hover:text-[#4ECCA3] transition-colors duration-300">
                  All purchases are subject to the Refund and Return Policy.
                </li>
              </ul>
            )}
          </section>

          <section className="card" id="payment-and-fees">
            <h2 onClick={() => toggleSection('paymentAndFees')}>
              5. Payment and Fees
            </h2>
            {openSections['paymentAndFees'] && (
              <ul className="list-disc list-inside mb-6 text-lg leading-relaxed">
                <li className="hover:text-[#4ECCA3] transition-colors duration-300">
                  Payments are processed through secure third-party payment gateways.
                </li>
                <li className="hover:text-[#4ECCA3] transition-colors duration-300">
                  Any applicable fees for services will be clearly communicated before transactions.
                </li>
              </ul>
            )}
          </section>

          <section className="card" id="intellectual-property">
            <h2 onClick={() => toggleSection('intellectualProperty')}>
              6. Intellectual Property
            </h2>
            {openSections['intellectualProperty'] && (
              <ul className="list-disc list-inside mb-6 text-lg leading-relaxed">
                <li className="hover:text-[#4ECCA3] transition-colors duration-300">
                  All content, trademarks, and intellectual property on PureCommerce are owned by me or licensed to me.
                </li>
                <li className="hover:text-[#4ECCA3] transition-colors duration-300">
                  You may not reproduce, distribute, or create derivative works without explicit permission.
                </li>
              </ul>
            )}
          </section>

          <section className="card" id="user-generated-content">
            <h2 onClick={() => toggleSection('userGeneratedContent')}>
              7. User Generated Content
            </h2>
            {openSections['userGeneratedContent'] && (
              <ul className="list-disc list-inside mb-6 text-lg leading-relaxed">
                <li className="hover:text-[#4ECCA3] transition-colors duration-300">
                  You retain ownership of any content you post (e.g., reviews, comments).
                </li>
                <li className="hover:text-[#4ECCA3] transition-colors duration-300">
                  By posting content, you grant PureCommerce a non-exclusive, royalty-free, perpetual, and worldwide license to use, display, and distribute your content.
                </li>
              </ul>
            )}
          </section>

          <section className="card" id="limitation-of-liability">
            <h2 onClick={() => toggleSection('limitationOfLiability')}>
              8. Limitation of Liability
            </h2>
            {openSections['limitationOfLiability'] && (
              <ul className="list-disc list-inside mb-6 text-lg leading-relaxed">
                <li className="hover:text-[#4ECCA3] transition-colors duration-300">
                  PureCommerce is not liable for any indirect, incidental, or consequential damages arising from your use of the platform.
                </li>
                <li className="hover:text-[#4ECCA3] transition-colors duration-300">
                  My total liability, in any case, is limited to the amount you paid for my services.
                </li>
              </ul>
            )}
          </section>

          <section className="card" id="termination">
            <h2 onClick={() => toggleSection('termination')}>
              9. Termination
            </h2>
            {openSections['termination'] && (
              <p className="mb-6 text-lg leading-relaxed">
                I may suspend or terminate your account at my discretion if you violate these Terms or engage in harmful behavior.
              </p>
            )}
          </section>

          <section className="card" id="governing-law">
            <h2 onClick={() => toggleSection('governingLaw')}>
              10. Governing Law
            </h2>
            {openSections['governingLaw'] && (
              <p className="mb-6 text-lg leading-relaxed">
                These Terms are governed by the laws of [Your Country/State], and disputes will be resolved in the courts of [Your Jurisdiction].
              </p>
            )}
          </section>

          <section className="card" id="contact-me">
            <h2 onClick={() => toggleSection('contactMe')}>
              11. Contact Me
            </h2>
            {openSections['contactMe'] && (
              <ul className="list-disc list-inside mb-6 text-lg leading-relaxed">
                <li>Email: support@purecommerce.com</li>
                <li>Phone: +12345678</li>
              </ul>
            )}
          </section>
          <Footer />
        </div>
      </div>
    </>
  );
}
