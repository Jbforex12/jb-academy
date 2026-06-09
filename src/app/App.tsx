import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { LoadingScreen } from "./components/LoadingScreen";
import { ScrollToTop } from "./components/ScrollToTop";
import { HeroSection } from "./components/HeroSection";
import { WhoWeAre } from "./components/WhoWeAre";
import { ProgramsSection } from "./components/ProgramsSection";
import { WhyChoose } from "./components/WhyChoose";
import { Statistics } from "./components/Statistics";
import { FutureVision } from "./components/FutureVision";
import { Testimonials } from "./components/Testimonials";
import { CTASection } from "./components/CTASection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { SectionTransition } from "./components/SectionTransition";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <div className="min-h-screen bg-white">
        <Navbar />
        <HeroSection />
        <SectionTransition variant="hero-light" from="#1e293b" to="#ffffff" />
        <div id="about">
          <WhoWeAre />
        </div>
        <div id="programs">
          <ProgramsSection />
        </div>
        <SectionTransition from="#f9fafb" to="#000000" />
        <div id="why">
          <WhyChoose />
        </div>
        <SectionTransition from="#000000" to="#ffffff" />
        <Statistics />
        <FutureVision />
        <SectionTransition from="#f9fafb" to="#000000" />
        <div id="testimonials">
          <Testimonials />
        </div>
        <CTASection />
        <ContactSection />
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}

export default App;