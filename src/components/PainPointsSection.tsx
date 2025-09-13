const PainPointsSection = () => {
  const painPoints = [
    "You have breakthrough ideas that could transform industries, but you're stuck managing basic business operations that any assistant could handle",
    "Potential customers are excited about your vision, but you can't deliver at the quality and scale they expect because you're doing everything alone",
    "Investors want to see execution and growth metrics, but you're too busy executing to show the strategic thinking that got them interested",
    "Your innovative product ideas get pushed to 'someday' because immediate operational needs always take priority",
    "You started this company to create something meaningful, not to become a slave to administrative tasks and daily firefighting"
  ];

  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-midnight-blue">
            The Company of One Vision Killer
          </h2>
          
          <div className="space-y-8">
            {painPoints.map((point, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover-lift border-l-4 border-primary"
              >
                <p className="text-lg text-gray-700 leading-relaxed font-inter">
                  • {point}
                </p>
              </div>
            ))}
          </div>
          
          <div className="bg-accent/10 rounded-xl p-8 border border-accent/20">
            <h3 className="font-playfair text-2xl font-semibold text-accent mb-4">
              Vision Stagnation Reality
            </h3>
            <p className="text-lg text-gray-700 mb-4">
              <strong>87%</strong> of solo entrepreneurs report their original vision has been significantly 
              compromised by operational demands. The bigger the vision, the faster it dies under execution weight.
            </p>
            <p className="text-lg font-semibold text-accent italic">
              You're not thinking too big. You're not being unrealistic. You're just one person trying 
              to execute what should be a team effort.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;