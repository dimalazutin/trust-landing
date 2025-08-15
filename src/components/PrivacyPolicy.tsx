// src/components/PrivacyPolicy.tsx
import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-sm rounded-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
          <p className="text-sm text-gray-600 mb-8">Last updated: June 27, 2025</p>

          <div className="prose prose-gray max-w-none">
            <p className="mb-6">
              TheTrustConstruct ("we", "our", "us") respects your privacy. This Privacy Policy explains how we collect, use, and share your personal information when you visit or use our website and services at thetrustconstruct.com.
            </p>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
              
              <h3 className="text-lg font-medium text-gray-800 mb-3">a. Information You Provide Directly</h3>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Registration data:</strong> name, email address, phone number, password.</li>
                <li><strong>Profile data:</strong> business name, licenses, insurance details, portfolio.</li>
                <li><strong>Project data:</strong> descriptions, milestones, budgets, correspondence.</li>
              </ul>

              <h3 className="text-lg font-medium text-gray-800 mb-3">b. Information Collected Automatically</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Usage data:</strong> pages visited, features used, time stamps.</li>
                <li><strong>Device data:</strong> IP address, browser type, operating system.</li>
                <li><strong>Cookies & tracking:</strong> We use cookies and similar technologies for authentication, preferences, analytics, and marketing. You can control cookies via your browser settings.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>To provide & maintain the Service:</strong> authenticate users, process payments, host files.</li>
                <li><strong>To improve & personalize:</strong> analyze usage, troubleshoot issues, recommend features.</li>
                <li><strong>To communicate:</strong> order confirmations, milestone reminders, customer support.</li>
                <li><strong>To market:</strong> newsletters, promotional offers (you can opt out at any time).</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">3. How We Share Your Information</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>With other users:</strong> your public profile data (name, location, ratings) is visible to clients/contractors.</li>
                <li><strong>With service providers:</strong> payment processors, hosting providers, analytics services—under strict confidentiality.</li>
                <li><strong>For legal reasons:</strong> to comply with laws, enforce our Terms of Service, or protect rights.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Data Security</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>We implement reasonable technical and organizational measures to protect your data (encryption, secure servers, access controls).</li>
                <li>However, no method of transmission over the Internet is 100% secure.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Data Retention</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>We retain your personal information as long as your account is active or as needed to provide you services.</li>
                <li>We may also retain data to comply with legal obligations or resolve disputes.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Your Rights</h2>
              <p className="mb-3">Depending on your jurisdiction, you may have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Access, correct, or delete your personal data.</li>
                <li>Object to or restrict processing.</li>
                <li>Receive your data in a portable format.</li>
                <li>Lodge a complaint with a data protection authority.</li>
              </ul>
              <p>
                To exercise any of these rights, contact us at{' '}
                <a href="mailto:privacy@thetrustconstruct.com" className="text-blue-600 hover:underline">
                  privacy@thetrustconstruct.com
                </a>
                .
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">7. Third-Party Links</h2>
              <p>Our Service may contain links to third-party websites. We are not responsible for their privacy practices.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">8. Children's Privacy</h2>
              <p>Our Service is not intended for children under 16. We do not knowingly collect data from minors.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">9. Changes to This Policy</h2>
              <p>We may update this Privacy Policy. We will post changes with a new "Last updated" date.</p>
            </section>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-gray-600">
                For questions or concerns, please email{' '}
                <a href="mailto:thetrustconstruct@gmail.com" className="text-blue-600 hover:underline">
                  thetrustconstruct@gmail.com
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

export default PrivacyPolicy;