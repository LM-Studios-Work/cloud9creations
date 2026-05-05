import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { FeaturesBar } from "@/components/features-bar"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Gallery } from "@/components/gallery"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <FeaturesBar />
      <About />
      <Services />
      <Gallery />
      <Footer />
    </main>
  )
}
