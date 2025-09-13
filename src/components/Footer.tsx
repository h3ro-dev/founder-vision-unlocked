const Footer = () => {
  const resources = [
    "Vision Frameworks",
    "Strategic Planning Templates", 
    "Company Architecture Guides",
    "Innovation Methodologies"
  ];

  return (
    <footer className="bg-midnight-blue text-white py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-8 mb-12">
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h3 className="font-playfair text-2xl font-bold mb-4">
                  Powered by Utlyze
                </h3>
                <p className="text-white/80 leading-relaxed">
                  Sophisticated company architecture and visionary leadership development 
                  for entrepreneurs building meaningful impact.
                </p>
              </div>
              
              <div className="bg-white/10 rounded-lg p-4 border border-white/20">
                <p className="text-sm text-white/90">
                  <strong>Join 300+ company builders</strong> turning vision into reality 
                  with AI-powered business architecture
                </p>
              </div>
            </div>
            
            <div>
              <h4 className="font-playfair text-lg font-semibold mb-4">Company Resources</h4>
              <ul className="space-y-3">
                {resources.map((resource, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-white/80 hover:text-white transition-colors hover-lift"
                    >
                      {resource}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-playfair text-lg font-semibold mb-4">Visionary Development</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-white/80 hover:text-white transition-colors hover-lift">
                    Strategic Insights
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-white transition-colors hover-lift">
                    Company Education
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-white transition-colors hover-lift">
                    Vision Tracking
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-white transition-colors hover-lift">
                    Leadership Masterclasses
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-8">
            <div className="grid md:grid-cols-3 gap-6 text-center md:text-left">
              <div>
                <p className="text-white/80">
                  Weekly company building strategies and visionary leadership development
                </p>
              </div>
              <div>
                <p className="text-white/80">
                  Masterclasses in AI-enhanced company building
                </p>
              </div>
              <div>
                <p className="text-white/80">
                  Strategic milestone tracking and impact measurement
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8 pt-8 border-t border-white/20">
            <p className="text-white/60 text-sm">
              © 2024 Company of One. All rights reserved. | Powered by Utlyze
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;