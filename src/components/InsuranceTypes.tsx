import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  User, 
  Users, 
  Heart, 
  Stethoscope, 
  Baby, 
  Shield,
  ArrowRight 
} from 'lucide-react';

const InsuranceTypes = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const insuranceTypes = [
    {
      icon: User,
      title: "Individual Health",
      description: "Comprehensive coverage for individuals with cashless benefits",
      features: ["₹5L - ₹1Cr Coverage", "Cashless Treatment", "Pre & Post Hospitalization"],
      color: "primary",
      gradient: "from-primary to-primary-glow"
    },
    {
      icon: Users,
      title: "Family Floater",
      description: "Complete protection for your entire family under one policy",
      features: ["Shared Sum Insured", "Coverage for 6 Members", "Maternity Benefits"],
      color: "secondary",
      gradient: "from-secondary to-green-400"
    },
    {
      icon: Heart,
      title: "Critical Illness",
      description: "Specialized coverage for critical illnesses and surgeries",
      features: ["Lump Sum Payout", "25+ Critical Illnesses", "No Survival Period"],
      color: "destructive",
      gradient: "from-red-500 to-pink-500"
    },
    {
      icon: Stethoscope,
      title: "Senior Citizens",
      description: "Tailored health insurance for elderly family members",
      features: ["Age up to 80 Years", "No Medical Check-up", "Chronic Disease Cover"],
      color: "accent",
      gradient: "from-accent to-orange-400"
    },
    {
      icon: Baby,
      title: "Maternity Cover",
      description: "Complete maternity and newborn care coverage",
      features: ["Pre & Post Natal Care", "Newborn Coverage", "Vaccination Costs"],
      color: "secondary",
      gradient: "from-pink-400 to-purple-500"
    },
    {
      icon: Shield,
      title: "Group Insurance",
      description: "Employer-provided group health insurance benefits",
      features: ["Employee Coverage", "Family Extension", "Portability Benefits"],
      color: "primary",
      gradient: "from-blue-600 to-indigo-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            <span className="text-foreground">Choose Your</span>
            <span className="block text-gradient">Insurance Type</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer comprehensive health insurance solutions for every life stage 
            and family need. Find the perfect coverage that suits your requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insuranceTypes.map((type, index) => {
            const IconComponent = type.icon;
            const isHovered = hoveredCard === index;
            
            return (
              <Card
                key={index}
                className={`relative overflow-hidden cursor-pointer transition-all duration-500 hover-lift group ${
                  isHovered ? 'shadow-strong scale-105' : 'shadow-soft'
                }`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Gradient Background Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${type.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <CardContent className="p-8 relative z-10">
                  <div className="space-y-6">
                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${type.gradient} shadow-medium transition-transform duration-300 ${
                      isHovered ? 'scale-110 rotate-6' : ''
                    }`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {type.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {type.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="space-y-3">
                      {type.features.map((feature, featureIndex) => (
                        <div 
                          key={featureIndex}
                          className="flex items-center space-x-3"
                        >
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${type.gradient}`} />
                          <span className="text-sm text-muted-foreground">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Action */}
                    <div className={`pt-4 transition-all duration-300 ${
                      isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                    }`}>
                      <div className="flex items-center text-primary font-medium group/action cursor-pointer">
                        <span>Get Quote</span>
                        <ArrowRight className="ml-2 w-4 h-4 group-hover/action:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-card/80 backdrop-blur-sm rounded-2xl px-8 py-4 shadow-medium">
            <span className="text-muted-foreground">Not sure which plan suits you?</span>
            <div className="flex items-center text-primary font-medium cursor-pointer group">
              <span>Get Expert Advice</span>
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsuranceTypes;