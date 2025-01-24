import { FAQ } from "@/components/layout/landing-page/faq";
import { Header } from "@/components/layout/landing-page/header";
import { Hero } from "@/components/layout/landing-page/hero";
import { Pricing } from "@/components/layout/landing-page/pricing";
import { VideoExplanation } from "@/components/layout/landing-page/video-explanation";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <Header />
      <Hero />
      <VideoExplanation />
      <Pricing />
      <FAQ />
    </div>
  )
}
