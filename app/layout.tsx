import type React from "react"
import type { Metadata } from "next"
import { Crimson_Pro, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

// <CHANGE> Using Crimson Pro for elegant Islamic typography
const _crimsonPro = Crimson_Pro({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Daily Hadith — Words of the Prophet ﷺ Delivered to Your WhatsApp",
  description:
    "Reconnect with the Sunnah through daily Hadith delivered straight to your WhatsApp. Authentic narrations from Sahih collections to transform your spiritual journey.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="facebook-domain-verification" content="5skl01myuu5dh8altkvgiuu49b1dba" />
      </head>
      <body className={`font-serif antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
