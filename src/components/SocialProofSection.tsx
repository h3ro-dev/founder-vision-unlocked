const SocialProofSection = () => {
  const testimonials = [
    {
      name: "Maria Santos",
      title: "EdTech Visionary",
      company: "AI-Powered Education Platform", 
      result: "Built the AI-powered education platform I envisioned 3 years ago - now serving 50K+ students while maintaining company of one structure"
    },
    {
      name: "David Chen", 
      title: "Fashion Innovator",
      company: "Sustainable Fashion Company",
      result: "Scaled my sustainable fashion company to $2M revenue with zero operational overhead increase through AI business management"
    },
    {
      name: "Jennifer Kim",
      title: "FinTech Founder", 
      company: "Financial Technology Solutions",
      result: "Launched the fintech solution that banks said was impossible - now partnering with institutions I used to pitch to"
    }
  ];

  const caseStudies = [
    {
      industry: "Climate Tech Company",
      achievement: "Achieved B-Corp certification and $5M impact investment while maintaining lean operational structure"
    },
    {
      industry: "Healthcare Innovation", 
      achievement: "Built FDA-approved medical device company with AI handling regulatory compliance and operational management"
    },
    {
      industry: "Social Impact Company",
      achievement: "Scaled to serve 100K+ beneficiaries across 15 countries with sophisticated AI-powered operations"
    }
  ];

  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center">
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-midnight-blue mb-6">
              Visionary Company Builders Achieving Their Original Vision
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover-lift border border-primary/10"
              >
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-cta rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h3 className="font-semibold text-midnight-blue">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">{testimonial.title}</p>
                    </div>
                  </div>
                  
                  <blockquote className="text-gray-700 italic leading-relaxed">
                    "{testimonial.result}"
                  </blockquote>
                  
                  <div className="text-sm text-primary font-semibold">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="space-y-8">
            <h3 className="font-playfair text-3xl font-bold text-center text-midnight-blue">
              Company Building Transformation Case Studies
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {caseStudies.map((study, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover-lift border-l-4 border-accent"
                >
                  <h4 className="font-playfair text-lg font-semibold text-accent mb-3">
                    {study.industry}
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {study.achievement}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;