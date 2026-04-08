import HeroSection from "@/components/sections/HeroSection";
import ActivitiesSection from "@/components/sections/ActivitiesSection";
import AboutSection from "@/components/sections/AboutSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import KeyFiguresSection from "@/components/sections/KeyFiguresSection";
import CTASection from "@/components/sections/CTASection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home(): React.ReactElement {
  return (
    <main>
      <HeroSection />
      <ActivitiesSection />
      <AboutSection />
      <WhyChooseUsSection />
      <KeyFiguresSection />
      <CTASection />
      <ContactSection />
    </main>
  );
}
