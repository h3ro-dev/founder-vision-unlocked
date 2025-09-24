import { useState } from "react";
import { Button } from "@/components/ui/button";
import { submitLead } from "@/lib/lead";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { useToast } from "@/hooks/use-toast";

const ConversionForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    companyName: "",
    industry: "",
    companyStage: "",
    visionScope: "",
    operationalBurden: [50],
    originalVision: "",
    realityGap: "",
    successVision: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { ok, error } = await submitLead(formData as any);
    toast({
      title: ok ? "Architecture Session Requested!" : "Submission failed",
      description: ok ? "We'll contact you within 24 hours to schedule your company vision consultation." : (error || "Please try again."),
      ...(ok ? {} : { variant: "destructive" as const }),
    });
  };

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="conversion-form" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-midnight-blue mb-6">
              Build Your AI-Powered Company Vision
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Company architecture consultation with someone who understands the gap between 
              your vision and current execution capacity
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-8 bg-gradient-section rounded-2xl p-8 shadow-xl">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-midnight-blue font-semibold">
                  Full Name *
                </Label>
                <Input
                  id="fullName"
                  required
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  className="bg-white border-primary/20 focus:border-primary"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-midnight-blue font-semibold">
                  Company Email *
                </Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="bg-white border-primary/20 focus:border-primary"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="companyName" className="text-midnight-blue font-semibold">
                Company Name *
              </Label>
              <Input
                id="companyName"
                required
                value={formData.companyName}
                onChange={(e) => handleInputChange('companyName', e.target.value)}
                className="bg-white border-primary/20 focus:border-primary"
              />
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label className="text-midnight-blue font-semibold">Industry/Sector</Label>
                <Select onValueChange={(value) => handleInputChange('industry', value)}>
                  <SelectTrigger className="bg-white border-primary/20">
                    <SelectValue placeholder="Select your industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="technology">Technology/Software</SelectItem>
                    <SelectItem value="healthcare">Healthcare/Biotech</SelectItem>
                    <SelectItem value="climate">Climate/Sustainability</SelectItem>
                    <SelectItem value="education">Education/EdTech</SelectItem>
                    <SelectItem value="financial">Financial Services</SelectItem>
                    <SelectItem value="manufacturing">Manufacturing/Hardware</SelectItem>
                    <SelectItem value="social">Social Impact</SelectItem>
                    <SelectItem value="creative">Creative/Media</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label className="text-midnight-blue font-semibold">Company Stage</Label>
                <Select onValueChange={(value) => handleInputChange('companyStage', value)}>
                  <SelectTrigger className="bg-white border-primary/20">
                    <SelectValue placeholder="Select your stage" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="idea">Idea/Concept</SelectItem>
                    <SelectItem value="mvp">MVP/Early stage</SelectItem>
                    <SelectItem value="revenue">Revenue generating</SelectItem>
                    <SelectItem value="growth">Growth stage</SelectItem>
                    <SelectItem value="scaling">Scaling/Expansion</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label className="text-midnight-blue font-semibold">Vision Scope</Label>
              <Select onValueChange={(value) => handleInputChange('visionScope', value)}>
                <SelectTrigger className="bg-white border-primary/20">
                  <SelectValue placeholder="Select your vision scope" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="local">Local market</SelectItem>
                  <SelectItem value="national">National market</SelectItem>
                  <SelectItem value="global">Global market</SelectItem>
                  <SelectItem value="industry">Industry transformation</SelectItem>
                  <SelectItem value="societal">Societal impact</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-4">
              <Label className="text-midnight-blue font-semibold">
                Current Operational Burden: {formData.operationalBurden[0]}%
              </Label>
              <p className="text-sm text-gray-600">
                What percentage of your time is spent on operations vs. vision?
              </p>
              <Slider
                value={formData.operationalBurden}
                onValueChange={(value) => handleInputChange('operationalBurden', value)}
                max={100}
                step={5}
                className="w-full"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="originalVision" className="text-midnight-blue font-semibold">
                Original Vision
              </Label>
              <Textarea
                id="originalVision"
                placeholder="Describe the company you originally set out to build..."
                value={formData.originalVision}
                onChange={(e) => handleInputChange('originalVision', e.target.value)}
                className="bg-white border-primary/20 focus:border-primary min-h-[100px]"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="realityGap" className="text-midnight-blue font-semibold">
                Current Reality Gap
              </Label>
              <Textarea
                id="realityGap"
                placeholder="What's the biggest gap between your vision and current execution?"
                value={formData.realityGap}
                onChange={(e) => handleInputChange('realityGap', e.target.value)}
                className="bg-white border-primary/20 focus:border-primary min-h-[100px]"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="successVision" className="text-midnight-blue font-semibold">
                Success Vision
              </Label>
              <Textarea
                id="successVision"
                placeholder="What would success look like if you could focus purely on vision and strategy?"
                value={formData.successVision}
                onChange={(e) => handleInputChange('successVision', e.target.value)}
                className="bg-white border-primary/20 focus:border-primary min-h-[100px]"
              />
            </div>
            
            <div className="space-y-6">
              <Button 
                type="submit" 
                size="lg"
                className="w-full bg-gradient-cta text-white font-semibold py-4 text-lg hover-lift rounded-xl"
              >
                Architect My Company Vision
              </Button>
              
              <p className="text-sm text-gray-600 text-center">
                Your company vision, strategic plans, and innovative ideas remain completely confidential and secure
              </p>
            </div>
          </form>
          
          <div className="mt-12 text-center space-y-4">
            <div className="bg-primary/10 rounded-xl p-6 border border-primary/20">
              <h3 className="font-playfair text-xl font-semibold text-primary mb-2">
                🎯 Only 4 company architecture sessions available this week
              </h3>
              <p className="text-gray-700">
                Every day in operational mode is a day your vision isn't advancing
              </p>
            </div>
            
            <div className="bg-accent/10 rounded-xl p-6 border border-accent/20">
              <h3 className="font-playfair text-xl font-semibold text-accent mb-2">
                Risk-Free Guarantee
              </h3>
              <p className="text-gray-700">
                Complimentary company architecture session with vision-execution alignment guarantee. 
                If we can't create a clear path from your current reality to your original vision, 
                the session is completely free.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConversionForm;
