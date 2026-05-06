import type { Metadata } from "next"

import { ContactPage } from "@/components/contact-page"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"

export const metadata: Metadata = {
  title: "Contact Cloud Nine Creations | Balloon Styling Enquiries",
  description:
    "Enquire with Cloud Nine Creations for elegant balloon styling in Johannesburg for parties, baby showers, birthdays, and custom celebrations.",
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <ContactPage />
      <Footer />
    </main>
  )
}
