import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-vision-entrepreneur.jpg";

const HeroSection = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('conversion-form');
    formElement?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Geometric patterns background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 rotate-12"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-white/15 rotate-45"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 border border-white/25 -rotate-12"></div>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 border border-white/20 rotate-30"></div>
      </div>
      
      <div className="container mx-auto px-6 pt-20 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <div className="space-y-8 text-white">
            <h1 className="font-playfair text-5xl lg:text-6xl font-bold leading-tight">
              Your Vision Could Change the World. Your Capacity is Changing Your Mind About It.
            </h1>
            
            <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
              You want to build a company that matters, but you're drowning in the execution bottleneck. 
              Your big ideas are dying in the daily grind.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <p className="text-lg font-inter italic text-white/95">
                "When did building a company become choosing between your vision and your sanity?"
              </p>
            </div>
            
            <Button 
              onClick={scrollToForm}
              size="lg" 
              className="bg-gradient-cta text-white font-semibold px-8 py-4 text-lg hover-lift rounded-xl border-0"
            >
              Architect My Company Vision
            </Button>
          </div>
          
          <div className="relative">
            <img 
              src={heroImage} 
              alt="Visionary entrepreneur with company blueprint and operational constraints"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;