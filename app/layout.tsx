import "./globals.css";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Header } from "./components/Header";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "./components/Footer";
import { ThemeProvider } from "./components/ThemeSwitch";
import { metaData } from "./lib/config";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  metadataBase: new URL(metaData.baseUrl),
  title: {
    default: metaData.title,
    template: `%s | ${metaData.title}`
  },
  description: metaData.description,
  openGraph: {
    images: metaData.ogImage,
    title: metaData.title,
    description: metaData.description,
    url: metaData.baseUrl,
    siteName: metaData.name,
    locale: "en_US",
    type: "website"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  twitter: {
    title: metaData.name,
    card: "summary_large_image"
  },
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geist.className}`} suppressHydrationWarning>
      <head>
        <link
          rel="alternate"
          type="application/rss+xml"
          href="/rss.xml"
          title="RSS Feed"
        />
        <link
          rel="alternate"
          type="application/atom+xml"
          href="/atom.xml"
          title="Atom Feed"
        />
        <link
          rel="alternate"
          type="application/feed+json"
          href="/feed.json"
          title="JSON Feed"
        />
      </head>
      <body className="antialiased px-12">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div
            className="max-w-2xl w-full m-auto grid grid-rows-[auto_1fr_auto]
              min-h-screen"
          >
            <Header />
            <main>{children}</main>
            <Footer />
            <Analytics />
            <SpeedInsights />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
