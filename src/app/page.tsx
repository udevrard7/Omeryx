import HeroSection from "@/components/sections/HeroSection";
import ActivitiesSection from "@/components/sections/ActivitiesSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import StatsSection from "@/components/sections/StatsSection";
import CTABannerSection from "@/components/sections/CTABannerSection";
import QuickContactSection from "@/components/sections/QuickContactSection";

export default function Home(): React.ReactElement {
  return (
    <main>
      <HeroSection />
      <ActivitiesSection />
      <WhyUsSection />
      <StatsSection />
      <CTABannerSection />
      <QuickContactSection />
    </main>
  );
}
