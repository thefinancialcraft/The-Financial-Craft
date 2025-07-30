import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Heart, 
  Shield, 
  Car, 
  PlaneTakeoff, 
  HandCoins, 
  House,
  ArrowRight 
} from 'lucide-react';
import healthImage from '@/assets/Insurance-Type/1.avif';
import lifeImage from '@/assets/Insurance-Type/2.jpg';
import motorImage from '@/assets/Insurance-Type/3.png';
import travelImage from '@/assets/Insurance-Type/4.jpg';
import termImage from '@/assets/Insurance-Type/5.jpg';
import homeImage from '@/assets/Insurance-Type/6.jpg';

const InsuranceTypes = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const insuranceTypes = [
    {
      icon: Heart,
      title: "Health Insurance",
      description: "Comprehensive health coverage for individuals and families.",
      features: ["Cashless Hospitalization", "Pre & Post Hospitalization", "₹5L - ₹1Cr Coverage"],
      color: "primary",
      gradient: "from-primary to-primary-glow",
      image: healthImage
    },
    {
      icon: Shield,
      title: "Life Insurance",
      description: "Secure your family's future with life insurance plans.",
      features: ["Tax Benefits", "Flexible Premiums", "High Sum Assured"],
      color: "secondary",
      gradient: "from-secondary to-green-400",
      image: lifeImage
    },
    {
      icon: Car,
      title: "Motor Insurance",
      description: "Protect your vehicle against accidents and damages.",
      features: ["Third-Party Liability", "Own Damage Cover", "Cashless Repairs"],
      color: "destructive",
      gradient: "from-red-500 to-pink-500",
      image: motorImage
    },
    {
      icon: PlaneTakeoff,
      title: "Travel Insurance",
      description: "Stay protected during your domestic and international trips.",
      features: ["Trip Cancellation Cover", "Medical Emergencies", "Lost Baggage Assistance"],
      color: "accent",
      gradient: "from-accent to-orange-400",
      image: travelImage
    },
    {
      icon: HandCoins,
      title: "Term Insurance",
      description: "Affordable life cover for a specific term period.",
      features: ["High Coverage at Low Premiums", "Tax Benefits", "Critical Illness Rider"],
      color: "secondary",
      gradient: "from-pink-400 to-purple-500",
      image: termImage
    },
    {
      icon: House,
      title: "Home Insurance",
      description: "Comprehensive protection for your home and belongings.",
      features: ["Natural Disaster Cover", "Theft Protection", "Affordable Premiums"],
      color: "primary",
      gradient: "from-blue-600 to-indigo-600",
      image: homeImage
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            <span className="text-foreground">Types of <span className=" text-gradient">Insurance Plans</span> </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
           Smarter insurance starts here. From health and life to travel and vehicles, explore all plans in one place. Quick comparisons, zero confusion — get covered in just a few clicks.
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

                                    {/* Icon */}
                    <div className={`absolute z-10 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${type.gradient} shadow-medium opacity-100 m-3 transition-transform duration-100 ${
                      isHovered ? ' rotate-6' : ''
                    }`}>
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>

                {/* Image */}
                <div className="w-full h-40 overflow-hidden">
                  <img
                    src={type.image}
                    alt={`${type.title} Image`}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
                  />
                </div>

                <CardContent className="relative z-10 mt-8">
                  <div className="space-y-6">


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