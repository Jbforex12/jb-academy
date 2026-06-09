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

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <div className="min-h-screen bg-white">
        <Navbar />
        <HeroSection />
        <div id="about">
          <WhoWeAre />
        </div>
        <div id="programs">
          <ProgramsSection />
        </div>
        <div id="why">
          <WhyChoose />
        </div>
        <Statistics />
        <FutureVision />
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