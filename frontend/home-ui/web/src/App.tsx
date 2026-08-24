import React, { useState, useEffect } from "react";
import {
  TopBar,
  Header,
  Hero,
  FeatureCards,
  AboutSection,
  StatisticsSection,
  ModulesSection,
  KeyCapabilitiesSection,
  MultiUlbSection,
  FAQSection,
  LoginCtaSection,
  ContactSection,
  Footer,
} from "./components";

export default function App() {
  const [fontSize, setFontSize] = useState<"sm" | "base" | "lg" | "xl">("base");

  // Apply font size class to root html element
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("font-size-sm", "font-size-lg", "font-size-xl");

    if (fontSize === "sm") root.classList.add("font-size-sm");
    if (fontSize === "lg") root.classList.add("font-size-lg");
    if (fontSize === "xl") root.classList.add("font-size-xl");
  }, [fontSize]);

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F9F9] text-[#17252A] w-full">
      {/* 1. Government Top Bar */}
      <TopBar fontSize={fontSize} setFontSize={setFontSize} />

      {/* 2. Main Header */}
      <Header />

      {/* Main Content Landmark */}
      <main id="main-content" className="flex-1 w-full">
        {/* 3. Hero Section */}
        <Hero />

        {/* 4. Feature Highlights */}
        <FeatureCards />

        {/* 5. About the Finance System */}
        <AboutSection />

        {/* 6. System Coverage Statistics */}
        <StatisticsSection />

        {/* 7. Finance System Modules */}
        <ModulesSection />

        {/* 8. Key Financial Capabilities */}
        <KeyCapabilitiesSection />

        {/* 9. Multi-ULB Architecture */}
        <MultiUlbSection />

        {/* 10. FAQ Accordion Section */}
        <FAQSection />

        {/* 11. Strong Login Call to Action */}
        <LoginCtaSection />

        {/* 12. Contact & Helpdesk Section */}
        <ContactSection />
      </main>

      {/* 13. Government Footer */}
      <Footer />
    </div>
  );
}
