import '../styles/globals.css';
import type { Metadata, Viewport } from 'next';
import Footer from '@/components/Footer'; // Import the Footer component

export const metadata: Metadata = {
  // Add metadataBase to provide a base URL for resolving social open graph or twitter images.
  // Replace 'https://nbanflnews.com' with your actual deployed domain.
  metadataBase: new URL('https://nbanflnews.com'), 

  title: "NBA NFL News - Latest Basketball & Football Headlines",
  description: "Stay updated with the latest NBA and NFL news, scores, and analysis. Your go-to source for basketball and football headlines from trusted sports sources.",
  keywords: "NBA news, NFL news, basketball, football, sports headlines, live scores, sports updates",
  authors: [{ name: "NBA NFL News" }],
  creator: "NBA NFL News",
  publisher: "NBA NFL News",
  robots: "index, follow",
  openGraph: {
    title: "NBA NFL News - Latest Sports Headlines",
    description: "Your one-stop source for NBA and NFL news, updates, and analysis",
    type: "website",
    locale: "en_US",
    siteName: "NBA NFL News",
    images: [
      {
        url: "/banner.png",
        width: 1200, // IMPORTANT: Replace with actual banner width
        height: 630, // IMPORTANT: Replace with actual banner height
        alt: "NBA NFL News Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NBA NFL News - Latest Sports Headlines",
    description: "Your one-stop source for NBA and NFL news, updates, and analysis",
    images: ["/banner.png"],
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#3B82F6',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1142344108416493"
          crossOrigin="anonymous"></script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.cbssports.com" />
      </head>
      {/* Added flex and flex-col to body to enable sticky footer */}
      <body className="antialiased flex flex-col min-h-screen"> 
        {/* Children (your page content) will take up available space */}
        <div className="flex-grow"> 
          {children}
        </div>
        {/* Render the Footer component */}
        <Footer /> 
      </body>
    </html>
  );
}

