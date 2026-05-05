import type { Metadata } from "next"
import { Cormorant_Garamond, Great_Vibes, Jost } from "next/font/google"

import "./globals.css"
import { cn } from "@/lib/utils"

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600"],
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
})

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  variable: "--font-script",
  weight: ["400"],
})

export const metadata: Metadata = {
  title: "Cloud Nine Creations | Elevated Balloon Styling for Every Celebration",
  description:
    "At Cloud Nine Creations, we design elegant balloon décor that transforms your special moments into unforgettable experiences. Based in Johannesburg, South Africa.",
  keywords: "balloon styling, balloon decor, event styling, kids parties, baby shower, Johannesburg",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "bg-background antialiased",
        jost.variable,
        cormorant.variable,
        greatVibes.variable,
      )}
    >
      <body>{children}</body>
    </html>
  )
}
