import Header from "@/components/header"
import Hero from "@/components/hero-section"
import FeaturesSection from "@/components/feature"
import EarlyAccess from "@/components/early-access"
import Wait from "@/components/wait"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section id="home">
          <Hero />
        </section>
        <section id="features">
          <FeaturesSection />
        </section>
        <EarlyAccess />
        <Wait />
      </main>
      <section id="contact">
        <Footer />
      </section>
    </div>
  )
}