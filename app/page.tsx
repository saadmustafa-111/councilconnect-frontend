import Image from "next/image";
import  HeroSection  from "./components/landingpage/HeroSection";
import AudienceSection  from "./components/landingpage/AudienceSection";
import HowItWorksSection from "./components/landingpage/HowItWorksSection";
import ProductVisualSection from "./components/landingpage/ProductVisualSection";
import CTASection from "./components/landingpage/CTASection";
import Footer from "./components/landingpage/Footer";
export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50">
      <HeroSection />
      <AudienceSection />
      <HowItWorksSection />
      <ProductVisualSection />
      <CTASection />
      <Footer />
    </div>
  );
}
