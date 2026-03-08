import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { CurrentExhibition } from "@/components/current-exhibition"
import { ExhibitionArchive } from "@/components/exhibition-archive"
import { VisitInfo } from "@/components/visit-info"
import { OpenCall } from "@/components/open-call"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <CurrentExhibition />
      <ExhibitionArchive />
      <VisitInfo />
      <OpenCall />
      {/* <ContactForm /> */}
      <Footer />
    </main>
  )
}
