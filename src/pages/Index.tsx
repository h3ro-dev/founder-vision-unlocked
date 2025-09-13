import HeroSection from "@/components/HeroSection";
import PainPointsSection from "@/components/PainPointsSection";
import FrustrationSection from "@/components/FrustrationSection";
import SolutionSection from "@/components/SolutionSection";
import SocialProofSection from "@/components/SocialProofSection";
import ConversionForm from "@/components/ConversionForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <PainPointsSection />
      <FrustrationSection />
      <SolutionSection />
      <SocialProofSection />
      <ConversionForm />
      <Footer />
    </div>
  );
};

export default Index;