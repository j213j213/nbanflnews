import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy - NBA NFL News',
  description: 'Learn about the privacy practices of NBA NFL News website.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6 sm:p-8 lg:p-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">Privacy Policy</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Introduction</h2>
          <p className="text-gray-700 leading-relaxed">
            Welcome to NBA NFL News (operated by nbanflnews.com). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website. Please read this policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Information We Collect</h2>
          <p className="text-gray-700 leading-relaxed mb-2">
            We collect information about you in a few different ways:
          </p>
          <ul className="list-disc pl-5 text-gray-700 leading-relaxed">
            <li className="mb-2">
              **Non-Personal Data:** We may collect non-personal information such as your browser type, operating system, and IP address. This information is used for analytical purposes to improve our website's performance and user experience.
            </li>
            <li className="mb-2">
              **RSS Feed Consumption:** Our website aggregates news from public RSS feeds. We do not collect personal data through the consumption of these feeds.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">How We Use Your Information</h2>
          <p className="text-gray-700 leading-relaxed">
            We use the information we collect for purposes such as:
          </p>
          <ul className="list-disc pl-5 text-gray-700 leading-relaxed">
            <li className="mb-2">To provide and maintain our website functionality.</li>
            <li className="mb-2">To improve our website and tailor your experience.</li>
            <li className="mb-2">To analyze usage and trends to enhance our services.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Disclosure of Your Information</h2>
          <p className="text-gray-700 leading-relaxed">
            We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. We may share non-personal aggregate information with third parties for marketing, advertising, or other uses. We may disclose your information if required to do so by law or in response to valid requests by public authorities.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Third-Party Services</h2>
          <p className="text-gray-700 leading-relaxed">
            Our website aggregates news from public RSS feeds provided by third-party sports news organizations. We do not control their content or privacy practices.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Security of Your Information</h2>
          <p className="text-gray-700 leading-relaxed">
            We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Changes to This Privacy Policy</h2>
          <p className="text-gray-700 leading-relaxed">
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-gray-700 leading-relaxed">
            If you have questions or comments about this Privacy Policy, please contact us at: <a href="mailto:privacy@nbanflnews.com" className="text-blue-600 hover:underline">privacy@nbanflnews.com</a>
          </p>
        </section>

        <div className="text-center mt-8">
          <Link href="/" className="text-blue-600 hover:underline font-medium">
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
