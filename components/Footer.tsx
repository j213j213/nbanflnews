import React from 'react';
import Link from 'next/link';

/**
 * Footer component for the NBA NFL News website.
 * Contains copyright information and links to legal pages.
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-6 px-4 sm:px-6 lg:px-8 mt-auto">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4"> {/* Changed justify-between to justify-center */}
        {/* Copyright Information */}
        <p className="text-sm text-gray-400 text-center"> {/* Removed sm:text-left to keep it centered */}
          &copy; {currentYear} NBA NFL News. All rights reserved.
        </p>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          <Link href="/privacy" className="text-gray-300 hover:text-white text-sm font-medium transition-colors duration-200">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-gray-300 hover:text-white text-sm font-medium transition-colors duration-200">
            Terms of Service
          </Link>
          {/* Add more links here if needed, e.g., About Us, Contact */}
        </nav>
      </div>
    </footer>
  );
}
