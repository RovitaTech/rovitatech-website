import { AppGrid } from "@/components/home/app-grid";
import { ContactSection } from "@/components/home/contact-section";
import { FeaturedApps } from "@/components/home/featured-apps";
import { Hero } from "@/components/home/hero";
import { PrivacySection } from "@/components/home/privacy-section";
import { StudioSection } from "@/components/home/studio-section";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <FeaturedApps />
      <AppGrid />
      <PrivacySection />
      <StudioSection />
      <ContactSection />
    </main>
  );
}
