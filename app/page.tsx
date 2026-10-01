import { AppGrid } from "@/components/home/app-grid";
import { ContactSection } from "@/components/home/contact-section";
import { FeaturedApps } from "@/components/home/featured-apps";
import { Hero } from "@/components/home/hero";
import { PrivacySection } from "@/components/home/privacy-section";
import { ServicesSection } from "@/components/home/services-section";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <FeaturedApps />
      <AppGrid />
      <PrivacySection />
      <ServicesSection />
      <ContactSection />
    </main>
  );
}
