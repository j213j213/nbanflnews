import '../styles/globals.css';
import type { Metadata, Viewport } from 'next'; // Import Viewport type

export const metadata: Metadata = {
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
        width: 1200,
        height: 630,
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
  // viewport and themeColor are moved to the export const viewport below
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

// New viewport export
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#3B82F6', // Moved themeColor here
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.cbssports.com" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
