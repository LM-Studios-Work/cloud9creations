import type { Metadata } from "next"

import { Footer } from "@/components/footer"
import { GalleryPage } from "@/components/gallery"
import { Navbar } from "@/components/navbar"

export const metadata: Metadata = {
  title: "Gallery | Cloud Nine Creations Balloon Styling",
  description:
    "Browse Cloud Nine Creations balloon decor and celebration styling for birthdays, baby showers, milestone events, and custom setups in Johannesburg.",
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <GalleryPage />
      <Footer />
    </main>
  )
}
