import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

import Footer from '@/components/Footer';
import { 
  Heart, 
  Car, 
  Shield, 
  Plane, 
  Home,
  Briefcase,
  Users,
  CheckCircle,
  ArrowRight,
  Star
} from 'lucide-react';

const Services = () => {
  const insuranceTypes = [
    {
      icon: Heart,
      title: 'Health Insurance',
      description: 'Comprehensive medical coverage for individuals and families',
      features: [
        'Individual & Family Floater Plans',
        'Senior Citizen Specialized Plans',
        'Critical Illness Coverage',
        'Maternity Benefits',
        'Cashless Hospital Network',
        'Pre & Post Hospitalization'
      ],
      popular: true,
      color: 'bg-red-500/10 text-red-500'
    },
    {
      icon: Car,
      title: 'Motor Insurance',
      description: 'Complete protection for your vehicles',
      features: [
        'Third Party Liability',
        'Comprehensive Coverage',
        'Zero Depreciation',
        'Engine Protection',
        'Roadside Assistance',
        'No Claim Bonus Protection'
      ],
      popular: false,
      color: 'bg-blue-500/10 text-blue-500'
    },
    {
      icon: Shield,
      title: 'Term Life Insurance',
      description: 'Financial security for your loved ones',
      features: [
        'High Coverage at Low Premium',
        'Flexible Premium Payment',
        'Rider Benefits Available',
        'Online Medical Tests',
        'Tax Benefits under 80C',
        'Claim Settlement Support'
      ],
      popular: false,
      color: 'bg-green-500/10 text-green-500'
    },
    {
      icon: Plane,
      title: 'Travel Insurance',
      description: 'Safe travels with comprehensive coverage',
      features: [
        'Medical Emergency Coverage',
        'Trip Cancellation Protection',
        'Baggage Loss Coverage',
        'Flight Delay Compensation',
        'Personal Accident Cover',
        'Worldwide Assistance'
      ],
      popular: false,
      color: 'bg-purple-500/10 text-purple-500'
    },
    {
      icon: Home,
      title: 'Home Insurance',
      description: 'Protect your home and belongings',
      features: [
        'Structure & Contents Coverage',
        'Natural Disaster Protection',
        'Theft & Burglary Cover',
        'Personal Liability',
        'Temporary Accommodation',
        'Emergency Services'
      ],
      popular: false,
      color: 'bg-orange-500/10 text-orange-500'
    },
    {
      icon: Briefcase,
      title: 'Commercial Insurance',
      description: 'Business protection solutions',
      features: [
        'Professional Indemnity',
        'Public Liability',
        'Directors & Officers',
        'Cyber Liability',
        'Employment Practices',
        'Product Liability'
      ],
      popular: false,
      color: 'bg-indigo-500/10 text-indigo-500'
    }
  ];

  const additionalServices = [
    {
      title: 'Claims Assistance',
      description: 'Expert support throughout the claims process',
      icon: Users
    },
    {
      title: 'Policy Review',
      description: 'Annual review to ensure optimal coverage',
      icon: CheckCircle
    },
    {
      title: 'Expert Consultation',
      description: 'One-on-one guidance from certified advisors',
      icon: Star
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold mb-6">
              <span className="text-foreground">Our </span>
              <span className="text-gradient">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive insurance solutions tailored to protect what matters most to you. 
              From health to travel, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Insurance Types */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-foreground">Insurance </span>
              <span className="text-gradient">Types</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our comprehensive range of insurance products designed to meet your unique needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insuranceTypes.map((type, index) => (
              <Card 
                key={index} 
                className={`relative hover-lift shadow-medium animate-fade-in ${type.popular ? 'ring-2 ring-primary' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {type.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-white px-4 py-1">Most Popular</Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${type.color} flex items-center justify-center`}>
                    <type.icon className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl">{type.title}</CardTitle>
                  <p className="text-muted-foreground text-sm">{type.description}</p>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <h4 className="font-medium text-sm text-muted-foreground uppercase tracking-wide">
                      Key Features
                    </h4>
                    {type.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 pt-4">
                    <Button className="w-full gradient-primary hover-lift">
                      Get Quote
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-foreground">Additional </span>
              <span className="text-gradient">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Beyond insurance, we provide comprehensive support to ensure your peace of mind.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <Card key={index} className="text-center hover-lift shadow-medium animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8">
                  <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-foreground">Why Choose </span>
                <span className="text-gradient">Our Services?</span>
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'Expert Guidance',
                    description: 'Our certified advisors help you choose the right coverage based on your specific needs and budget.'
                  },
                  {
                    title: 'Competitive Pricing',
                    description: 'We work with 20+ top insurers to ensure you get the best rates and maximum value for your money.'
                  },
                  {
                    title: 'Hassle-Free Process',
                    description: 'From application to claims, we simplify the entire insurance journey for you.'
                  },
                  {
                    title: 'Lifetime Support',
                    description: 'Our relationship doesn\'t end with policy purchase. We provide ongoing support throughout your policy tenure.'
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                      <CheckCircle className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{benefit.title}</h3>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Card className="shadow-strong hover-lift">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-center">Ready to Get Started?</h3>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">5 Minutes</div>
                    <p className="text-muted-foreground">Average time to get a quote</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-secondary mb-2">24/7</div>
                    <p className="text-muted-foreground">Customer support available</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-accent mb-2">₹0</div>
                    <p className="text-muted-foreground">Advisory charges</p>
                  </div>
                </div>
                <Button className="w-full gradient-primary hover-lift mt-6">
                  Get Free Consultation
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
 
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Services;