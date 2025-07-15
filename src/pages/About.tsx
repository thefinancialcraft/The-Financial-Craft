import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Footer from '@/components/Footer';
import { 
  Shield, 
  Users, 
  Award, 
  TrendingUp,
  CheckCircle,
  Target,
  Heart,
  Lightbulb
} from 'lucide-react';

const About = () => {
  const stats = [
    { number: '50,000+', label: 'Happy Customers', icon: Users },
    { number: '₹500Cr+', label: 'Claims Settled', icon: Shield },
    { number: '20+', label: 'Insurance Partners', icon: Award },
    { number: '98%', label: 'Customer Satisfaction', icon: TrendingUp }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Trust & Transparency',
      description: 'We believe in complete transparency in our services and maintain the highest standards of trust.'
    },
    {
      icon: Heart,
      title: 'Customer First',
      description: 'Our customers are at the center of everything we do. Their well-being is our priority.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We continuously innovate to make insurance simple, accessible, and affordable for everyone.'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in every interaction and aim to exceed customer expectations.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold mb-6">
              <span className="text-foreground">About </span>
              <span className="text-gradient">The Financial Craft</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              India's most trusted health insurance advisory platform, helping families 
              find the perfect coverage since 2023.
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center hover-lift shadow-medium animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8">
                  <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-foreground">Our </span>
                <span className="text-gradient">Story</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2023, The Financial Craft started with a simple mission: to make health 
                  insurance accessible, transparent, and affordable for every Indian family. 
                  We recognized that choosing the right health insurance was confusing and 
                  time-consuming for most people.
                </p>
                <p>
                  Our founders, both from the insurance industry, experienced firsthand the 
                  challenges families faced when trying to understand complex policy terms 
                  and compare different plans. They envisioned a platform that would simplify 
                  this process through technology and expert guidance.
                </p>
                <p>
                  Today, we're proud to be India's leading health insurance advisory platform, 
                  having helped over 50,000 families find the right coverage. Our commitment 
                  to transparency, customer service, and innovation continues to drive us forward.
                </p>
              </div>
              <div className="mt-8">
                <Badge variant="secondary" className="mr-2">Since 2015</Badge>
                <Badge variant="secondary" className="mr-2">IRDAI Certified</Badge>
                <Badge variant="secondary">ISO 27001</Badge>
              </div>
            </div>
            
            <Card className="shadow-strong hover-lift">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-center">Why Choose Us?</h3>
                <div className="space-y-4">
                  {[
                    'Expert advisory from certified professionals',
                    'Compare 20+ top insurance companies',
                    'Hassle-free claims assistance',
                    'Lifetime policy support',
                    'No hidden charges or fees',
                    '24/7 customer support'
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-foreground">Our </span>
              <span className="text-gradient">Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do and shape our company culture.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover-lift shadow-medium animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8">
                  <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="shadow-strong hover-lift">
              <CardContent className="p-8">
                <div className="w-12 h-12 mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
                <p className="text-muted-foreground">
                  To democratize health insurance in India by making it simple, transparent, 
                  and accessible to everyone. We aim to bridge the gap between complex insurance 
                  products and customer understanding through technology and expert guidance.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-strong hover-lift">
              <CardContent className="p-8">
                <div className="w-12 h-12 mb-6 bg-secondary/10 rounded-full flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be India's most trusted health insurance platform, where every family 
                  has access to quality healthcare protection. We envision a future where 
                  choosing health insurance is as simple as ordering food online.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
 
};

export default About;