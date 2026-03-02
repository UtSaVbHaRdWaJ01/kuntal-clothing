import { useScrollReveal } from "@/hooks/useScrollReveal";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductSection from "@/components/ProductSection";
import ReviewsSection from "@/components/ReviewsSection";
import InstagramSection from "@/components/InstagramSection";
import LocationSection from "@/components/LocationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  useScrollReveal();

  return (
    <>
      <LoadingScreen />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductSection />
        <ReviewsSection />
        <InstagramSection />
        <LocationSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Index;
