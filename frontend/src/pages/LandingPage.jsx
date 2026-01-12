import ContactSection from "../components/sections/ContactSection";
import BlogSection from "../components/sections/BlogSection";
import ReviewsSection from "../components/sections/ReviewsSection";
import VisionMissionSection from "../components/sections/VisionMissionSection";
import StatsPartnersSection from "../components/sections/StatsPartnersSection";
import WhatWeDoSection from "../components/sections/WhatWeDoSection";
import FoundersSection from "../components/sections/FoundersSection";
import CTASection from "../components/sections/CTASection";
import Header from "../components/layout/Header";
import Hero from "../components/sections/Hero";
import Footer from "../components/layout/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Main Content */}
      <main className="flex-grow">
        <Hero />

        <FoundersSection />

        <WhatWeDoSection />

        {/* Vision & Mission */}
        <VisionMissionSection />

        {/* Stats + Partners */}
        <StatsPartnersSection />

        <BlogSection />
        <ContactSection />

        <ReviewsSection />

        {/* CTA */}
        <CTASection />

      </main>
 <Footer />
    </div>
  );
}
