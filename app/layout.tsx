import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "BridgeLess",
  description: "Move BTC across chains",
  openGraph: {
    title: "BridgeLess",
    description: "Move BTC across chains",
    url: "https://btc-bridge.vercel.app/",
    siteName: "BridgeLess",
    images: [
      {
        url: "https://btc-bridge.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "BridgeLess - Move BTC across chains",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BridgeLess",
    description: "Move BTC across chains",
    images: ["https://btc-bridge.vercel.app/og-image.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark antialiased">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
