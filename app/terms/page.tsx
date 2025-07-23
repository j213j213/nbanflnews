import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Terms of Service - NBA NFL News',
  description: 'Understand the terms and conditions for using NBA NFL News website.',
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6 sm:p-8 lg:p-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">Terms of Service</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Introduction</h2>
          <p className="text-gray-700 leading-relaxed">
            Welcome to NBA NFL News (operated by nbanflnews.com). These Terms of Service ("Terms") govern your use of our website. By accessing or using our website, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Intellectual Property</h2>
          <p className="text-gray-700 leading-relaxed">
            The website and its original content (excluding content aggregated from third-party RSS feeds), features, and functionality are and will remain the exclusive property of NBA NFL News and its licensors. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of NBA NFL News.
          </p>
          <p className="text-gray-700 leading-relaxed mt-2">
            The news articles and content displayed on this website are aggregated from various third-party RSS feeds. All intellectual property rights for such content belong to their respective original publishers. We do not claim ownership of content from third-party sources.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Links to Other Websites</h2>
          <p className="text-gray-700 leading-relaxed">
            Our website may contain links to third-party websites or services that are not owned or controlled by NBA NFL News.
          </p>
          <p className="text-gray-700 leading-relaxed mt-2">
            NBA NFL News has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You further acknowledge and agree that NBA NFL News shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such websites or services.
          </p>
          <p className="text-gray-700 leading-relaxed mt-2">
            We strongly advise you to read the terms and conditions and privacy policies of any third-party websites or services that you visit.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Disclaimer</h2>
          <p className="text-gray-700 leading-relaxed">
            Your use of the website is at your sole risk. The website is provided on an "AS IS" and "AS AVAILABLE" basis. The website is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.
          </p>
          <p className="text-gray-700 leading-relaxed mt-2">
            NBA NFL News does not warrant that a) the website will function uninterrupted, secure or available at any particular time or location; b) any errors or defects will be corrected; c) the website is free of viruses or other harmful components; or d) the results of using the website will meet your requirements.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Governing Law</h2>
          <p className="text-gray-700 leading-relaxed">
            These Terms shall be governed and construed in accordance with the laws of [Your State/Country], without regard to its conflict of law provisions.
          </p>
          <p className="text-gray-700 leading-relaxed mt-2">
            Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our website, and supersede and replace any prior agreements we might have between us regarding the website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Changes to These Terms</h2>
          <p className="text-gray-700 leading-relaxed">
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
          </p>
          <p className="text-gray-700 leading-relaxed mt-2">
            By continuing to access or use our website after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-gray-700 leading-relaxed">
            If you have any questions about these Terms, please contact us at: <a href="mailto:terms@nbanflnews.com" className="text-blue-600 hover:underline">terms@nbanflnews.com</a>
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
