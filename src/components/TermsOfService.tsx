// src/components/TermsOfService.tsx
import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-sm rounded-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Terms of Service</h1>
          <p className="text-sm text-gray-600 mb-8">Last updated: June 27, 2025</p>

          <div className="prose prose-gray max-w-none">
            <p className="mb-6">
              Welcome to TheTrustConstruct ("we", "our", "us"). These Terms of Service ("Terms") govern your use of our website and platform at thetrustconstruct.com (the "Service"). By accessing or using the Service, you agree to be bound by these Terms.
            </p>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Accounts and Registration</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>To use certain features of the Service (posting projects, bidding, etc.) you must register for an account.</li>
                <li>You are responsible for keeping your password and account information secure.</li>
                <li>You may not share or transfer your account.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Our Services</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>We provide a milestone-based contracting and escrow-backed payments platform connecting clients and contractors.</li>
                <li>We do not employ contractors or clients ourselves; we merely facilitate the connection and payment process.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">3. Payment Terms</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Clients fund each milestone in advance into escrow. Funds are released to the contractor only when the client approves work completion.</li>
                <li>From 0.5% platform fee is deducted from each disbursed payment. (See Pricing & Fees page for details.)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">4. User Obligations</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Both clients and contractors must provide accurate, up-to-date information.</li>
                <li>You must comply with all applicable laws and professional regulations in your jurisdiction.</li>
                <li>You are solely responsible for your performance, deliverables, and professional conduct.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Prohibited Conduct</h2>
              <p className="mb-2">You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use our platform for unlawful or fraudulent purposes.</li>
                <li>Circumvent the escrow process or pay outside the platform to avoid fees.</li>
                <li>Harass, threaten, or defame other users.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Dispute Resolution</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>If a milestone dispute arises, you may invoke our built-in dispute resolution process.</li>
                <li>We will act as a neutral facilitator; final decisions rest with the parties or, if agreed, a third-party arbitrator.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">7. Intellectual Property</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>You retain full ownership of any content you upload (proposals, portfolios, deliverables).</li>
                <li>By submitting content, you grant us a non-exclusive license to display and distribute it on the Service.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">8. Disclaimer of Warranties</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>THE SERVICE IS PROVIDED "AS IS," WITHOUT WARRANTIES OF ANY KIND.</li>
                <li>We do not guarantee any specific outcomes, project success, or payment collection beyond holding funds in escrow.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">9. Limitation of Liability</h2>
              <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, OR CONSEQUENTIAL DAMAGES ARISING OUT OF YOUR USE OF THE SERVICE.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">10. Governing Law</h2>
              <p>These Terms are governed by the laws of the State of Delaware, USA, without regard to conflict of laws principles.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">11. Changes to These Terms</h2>
              <p>We may update these Terms from time to time. We will post a notice on our site and update the "Last updated" date. Continued use after changes constitutes acceptance.</p>
            </section>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-gray-600">
                If you have any questions, please contact us at{' '}
                <a href="mailto:support@thetrustconstruct.com" className="text-blue-600 hover:underline">
                  support@thetrustconstruct.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;