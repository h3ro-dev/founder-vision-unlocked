const FrustrationSection = () => {
  const frustrations = [
    "Late nights working ON the business instead of IN your zone of genius because no one else can handle the strategic decisions",
    "Pitch meetings where you're excited about the vision but embarrassed about current execution limitations",
    "Industry opportunities passing by because you don't have the operational capacity to pursue them",
    "Talented people interested in joining your mission, but you can't afford to hire or properly onboard them",
    "Market timing windows closing while you're stuck in operational quicksand instead of strategic execution"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center">
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-midnight-blue mb-6">
              The Loneliness of Unrealized Potential
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              The unique burden of visionary leadership without execution support
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {frustrations.map((frustration, index) => (
              <div 
                key={index}
                className="bg-secondary rounded-xl p-6 hover-lift transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 leading-relaxed font-inter">
                    {frustration}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl p-8 border border-primary/10">
            <h3 className="font-playfair text-2xl font-semibold text-midnight-blue mb-4">
              Vision Reality Gap Assessment
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Look at your original business plan or vision document. Compare it to what you actually 
              spend your time on daily. <strong>That gap is where your company's potential is suffocating.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrustrationSection;