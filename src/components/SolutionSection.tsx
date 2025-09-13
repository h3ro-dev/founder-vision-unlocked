const SolutionSection = () => {
  const aiCapabilities = [
    {
      title: "Strategic Planning AI",
      description: "Turn your vision into executable business architecture with milestone planning and resource optimization"
    },
    {
      title: "Operations AI", 
      description: "Handle all the operational complexity so you can focus on strategic vision and market opportunities"
    },
    {
      title: "Growth AI",
      description: "Scale your company's impact without scaling operational complexity or overhead burden"
    },
    {
      title: "Innovation AI",
      description: "Free up mental space and time for the creative and strategic thinking that drives breakthrough results"
    },
    {
      title: "Leadership AI",
      description: "Manage business functions and team coordination so you can focus on vision, culture, and market leadership"
    }
  ];

  return (
    <section className="py-20 bg-gradient-hero text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center">
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold mb-6">
              Build Companies That Work for You, Not Against You
            </h2>
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Company AI infrastructure with sophisticated business architecture
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiCapabilities.map((capability, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover-lift border border-white/20"
              >
                <h3 className="font-playfair text-xl font-semibold mb-4 text-white">
                  {capability.title}
                </h3>
                <p className="text-white/90 leading-relaxed font-inter">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h3 className="font-playfair text-2xl font-semibold mb-4">
              Company Transformation Promise
            </h3>
            <p className="text-xl text-white/95 leading-relaxed italic">
              Stop compromising your vision for operational demands. Build the company you originally 
              envisioned with AI handling the complexity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;