import ContactSection from "../components/sections/ContactSection";
import BlogSection from "../components/sections/BlogSection";
import ReviewsSection from "../components/sections/ReviewsSection";
import VisionMissionSection from "../components/sections/VisionMissionSection";
import StatsPartnersSection from "../components/sections/StatsPartnersSection";
import WhatWeDoSection from "../components/sections/WhatWeDoSection";
import FoundersSection from "../components/sections/FoundersSection";
import CTASection from "../components/sections/CTASection";
import Hero from "../components/sections/Hero";

export default function LandingPage() {
  return (
    <main className="flex-grow">
      <Hero />

      <FoundersSection />

      <WhatWeDoSection />

      <VisionMissionSection />

      <StatsPartnersSection />

      <BlogSection />

      <ContactSection />

      <ReviewsSection />

      <CTASection />
    </main>
  );
}
