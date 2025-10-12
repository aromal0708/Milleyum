import { getBaseURL } from "@lib/util/env"
import { Metadata } from "next"
import "styles/globals.css"

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
  title: "Milleyum",
  description: "Milleyum offers high-protein, no-added-sugar millet-based beverages with probiotic benefits. Perfect for health-conscious urban professionals.",
  keywords: ["millet", "health drinks", "protein beverages", "no added sugar", "probiotics", "healthy lifestyle"],
  authors: [{ name: "Milleyum" }],
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/Logomark_std_filled_transp.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="light" className="overflow-x-hidden">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/hnw8aos.css" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#772A49" />
      </head>
      <body className="overflow-x-hidden max-w-full">
        <main className="relative overflow-x-hidden max-w-full">{props.children}</main>
      </body>
    </html>
  )
}
