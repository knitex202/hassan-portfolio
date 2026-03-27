import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ExperienceSection from "@/components/experience-section";
import PortfolioSection from "@/components/portfolio-section";
import EmailTemplatesSection from "@/components/email-templates-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import LightboxModal from "@/components/lightbox-modal";
import EmailModal from "@/components/email-modal";

export default function Home() {
  return (
    <div className="site-shell min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <PortfolioSection />
      <EmailTemplatesSection />
      <ContactSection />
      <Footer />
      <LightboxModal />
      <EmailModal />
    </div>
  );
}
