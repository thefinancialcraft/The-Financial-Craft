import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, Shield, Clock, Users, ArrowRight, Award } from 'lucide-react';
import starHealthLogo from '@/assets/star-health-logo.png';
import nivaLogo from '@/assets/NivaLogo.webp';
import hdfcLogo from '@/assets/hdfc-ergo-logo.png';
import icicLogo from '@/assets/icic-logo.png';
import bajajLogo from '@/assets/bajaj-logo.png';
import sbiLogo from '@/assets/sbi-logo.jpg';  
import licLogo from '@/assets/LIC-Logo.jpg';  
import careLogo from '@/assets/care_health_insurance_logo.svg';
import Footer from '@/components/Footer';
import { Helmet } from "react-helmet";


const Companies = () => {
  
  const companies = [
    {
      id: 'niva',
      name: 'Niva Bupa Insurance',
      logo: nivaLogo,
      rating: 4.4,
      establishedYear: '2008',
      claimRatio: '98.1%',
      networkHospitals: '16,900+',
      specialization: 'Customer-Centric Health Plans',
      highlights: ['Customer Focus', 'Wellness Programs', 'Digital Innovation'],
      premiumRange: '₹8,200 - ₹48,000',
      category: 'Private',
      badge: 'Rising Star',
      badgeColor: 'bg-cyan-500'
    },
    {
      id: 'care',
      name: 'Care Health Insurance',
      logo: careLogo,
      rating: 4.1,
      establishedYear: '1986',
      claimRatio: '98.2%',
      networkHospitals: '21,000+',
      specialization: 'Comprehensive Care Plans',
      highlights: ['Care Network', 'Health Services', 'Preventive Care'],
      premiumRange: '₹7,200 - ₹46,000',
      category: 'Private',
      badge: 'Care Expert',
      badgeColor: 'bg-teal-500'
    },
    {
      id: 'hdfc',
      name: 'HDFC ERGO',
      logo: hdfcLogo,
      rating: 4.5,
      establishedYear: '2002',
      claimRatio: '85%',
      networkHospitals: '8,500+',
      specialization: 'Comprehensive Health Plans',
      highlights: ['Wide Network', 'Fast Claims', 'Digital First'],
      premiumRange: '₹8,000 - ₹50,000',
      category: 'Private',
      badge: 'Top Rated',
      badgeColor: 'bg-yellow-500'
    },
    {
      id: 'icici',
      name: 'ICICI Lombard',
      logo: icicLogo,
      rating: 4.3,
      establishedYear: '2001',
      claimRatio: '82%',
      networkHospitals: '7,200+',
      specialization: 'Family Health Insurance',
      highlights: ['Innovative Products', 'Wellness Programs', 'Online Services'],
      premiumRange: '₹7,500 - ₹45,000',
      category: 'Private',
      badge: 'Best Value',
      badgeColor: 'bg-blue-500'
    },
    {
      id: 'star',
      name: 'Star Health',
      logo: starHealthLogo,
      rating: 4.2,
      establishedYear: '2006',
      claimRatio: '89%',
      networkHospitals: '9,800+',
      specialization: 'Health Insurance Specialist',
      highlights: ['Health Focused', 'High Claim Ratio', 'Specialized Plans'],
      premiumRange: '₹9,000 - ₹60,000',
      category: 'Private',
      badge: 'Specialist',
      badgeColor: 'bg-purple-500'
    },
    {
      id: 'bajaj',
      name: 'Bajaj Allianz',
      logo: bajajLogo,
      rating: 4.1,
      establishedYear: '2001',
      claimRatio: '78%',
      networkHospitals: '6,500+',
      specialization: 'Multi-Product Insurance',
      highlights: ['Affordable Plans', 'Quick Processing', 'Mobile App'],
      premiumRange: '₹6,000 - ₹40,000',
      category: 'Private',
      badge: 'Budget Friendly',
      badgeColor: 'bg-green-500'
    },
    {
      id: 'sbi',
      name: 'SBI General',
      logo: sbiLogo,
      rating: 4.0,
      establishedYear: '2009',
      claimRatio: '80%',
      networkHospitals: '7,800+',
      specialization: 'Trustworthy Banking Partner',
      highlights: ['Banking Synergy', 'Reliable Service', 'Branch Support'],
      premiumRange: '₹7,000 - ₹42,000',
      category: 'Public',
      badge: 'Trusted Bank',
      badgeColor: 'bg-indigo-500'
    },
    {
      id: 'lic',
      name: 'LIC Health',
      logo: licLogo,
      rating: 4.0,
      establishedYear: '1956',
      claimRatio: '87%',
      networkHospitals: '6,200+',
      specialization: 'Government Backed Insurance',
      highlights: ['Government Backed', 'Traditional Trust', 'Pan India Presence'],
      premiumRange: '₹8,500 - ₹55,000',
      category: 'Public',
      badge: 'Government',
      badgeColor: 'bg-red-500'
    },
    
  ];

  const categories = ['All', 'Private', 'Public'];

  return (
    <div className="min-h-screen">
       
      {/* ✅ SEO Helmet Tags for Companies Page */}
    <Helmet>
  <title>Top Insurance Companies in India | Compare Plans | The Financial Craft</title>
  <meta
    name="description"
    content="Discover India’s top insurance companies including Care Health, Niva Bupa, Star Health, ICICI Lombard & more. Compare features, ratings, claim support, and policies all in one place at The Financial Craft."
  />
  <meta
    name="keywords"
    content="insurance companies India, compare insurance providers, Niva Bupa, Care Health Insurance, Star Health, ICICI Lombard, top insurers India, claim ratio, insurance partners"
  />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://www.thefinancialcraft.com/companies" />

  <meta name="author" content="Ajay Kumar" />
  <meta name="publisher" content="The Financial Craft" />
  <meta name="organization" content="The Financial Craft" />
  <meta name="founder" content="Ajay Kumar" />
  <meta name="foundingDate" content="2021" />
  <meta name="address" content="F-13, 2nd Floor, Sector 6, Noida, Uttar Pradesh, India" />
  <meta name="contact" content="+91-8882558932" />

  <meta property="og:type" content="website" />
  <meta property="og:locale" content="en_IN" />
  <meta property="og:site_name" content="The Financial Craft" />
  <meta property="og:title" content="Top Insurance Companies in India | The Financial Craft" />
  <meta property="og:description" content="Explore top insurers like Care Health, Niva Bupa & Star Health. Compare features, prices & claim support to make smarter insurance choices." />
  <meta property="og:url" content="https://www.thefinancialcraft.com/companies" />
  <meta property="og:image" content="https://www.thefinancialcraft.com/assets/public/favicon-32x32.png" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@thefinancialcraft" />
  <meta name="twitter:title" content="Compare Insurance Companies in India | The Financial Craft" />
  <meta name="twitter:description" content="Compare top insurance companies in India. Trusted ratings, real reviews, and detailed policy info – all in one place." />
  <meta name="twitter:image" content="https://www.thefinancialcraft.com/assets/public/favicon-32x32.png"  />

  <link rel="alternate" href="https://www.thefinancialcraft.com/" hrefLang="en" />
  <link rel="alternate" href="https://www.thefinancialcraft.com/companies" hrefLang="en" />
  <link rel="alternate" href="https://www.thefinancialcraft.com/services" hrefLang="en" />
  <link rel="alternate" href="https://www.thefinancialcraft.com/about" hrefLang="en" />
  <link rel="alternate" href="https://www.thefinancialcraft.com/team" hrefLang="en" />
  <link rel="alternate" href="https://www.thefinancialcraft.com/careers" hrefLang="en" />

  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="icon" href="/public/favicon.ico" />
</Helmet>


      {/* Hero Section */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold mb-6">
              <span className="text-foreground">Insurance </span>
              <span className="text-gradient">Companies</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our network of trusted insurance partners. We work with India's 
              leading insurers to bring you the best coverage options.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { number: '20+', label: 'Insurance Partners', icon: Shield },
              { number: '₹500Cr+', label: 'Claims Processed', icon: Award },
              { number: '10K+', label: 'Network Hospitals', icon: Users },
              { number: '24/7', label: 'Support Available', icon: Clock }
            ].map((stat, index) => (
              <Card key={index} className="text-center hover-lift shadow-medium animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-1">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Companies Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-foreground">Our </span>
              <span className="text-gradient">Partners</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Compare top-rated insurance companies and find the perfect plan for your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {companies.map((company, index) => (
              <Card 
                key={company.id} 
                className="relative hover-lift shadow-medium animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Badge */}
                <div className={`absolute top-4 right-4 ${company.badgeColor} text-white text-xs px-2 py-1 rounded-full`}>
                  {company.badge}
                </div>

                <CardHeader className="text-center pb-4">
                  <div className="text-3xl mb-3">
                    {typeof company.logo === 'string' && (company.logo.endsWith('.png') || company.logo.endsWith('.webp') || company.logo.endsWith('.svg') || company.logo.endsWith('.jpg') || company.logo.endsWith('.jpeg')) ? (
                      <img
                        src={company.logo}
                        alt={company.name + ' logo'}
                        className="mx-auto"
                        style={{
                          maxWidth:
                            company.id === 'hdfc' ? '130px' :
                            company.id === 'icici' ? '148px' :
                            company.id === 'star' ? '108px' :
                            company.id === 'bajaj' ? '135px' :
                            company.id === 'sbi' ? '128px' :
                            company.id === 'lic' ? '90px' :
                            company.id === 'niva' ? '100px' :
                            company.id === 'care' ? '138px' :
                            '32px',
                          objectFit: 'contain',
                           height: '80px',
                          width: 'auto',
                        }}
                      />
                    ) : (
                      company.logo
                    )}
                  </div>
                  <CardTitle className="text-lg">{company.name}</CardTitle>
                  <div className="flex items-center justify-center space-x-1 mb-2">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{company.rating}</span>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    Since {company.establishedYear}
                  </Badge>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="text-sm text-center text-muted-foreground">
                    {company.specialization}
                  </div>

                  {/* Key Metrics */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Claim Ratio</span>
                      <span className="font-medium">{company.claimRatio}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Hospitals</span>
                      <span className="font-medium">{company.networkHospitals}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Premium Range</span>
                      <span className="font-medium text-xs">{company.premiumRange}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-2">
                    <div className="text-xs text-muted-foreground uppercase tracking-wide">Highlights</div>
                    <div className="flex flex-wrap gap-1">
                      {company.highlights.map((highlight, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-2 pt-2">
                    <Button className="w-full gradient-primary hover-lift text-sm">
                      Get Quote
                    </Button>
                    <Button variant="outline" className="w-full text-sm">
                      View Plans
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-foreground">Why We Partner With </span>
              <span className="text-gradient">The Best</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our stringent selection criteria ensure you get access only to reliable, 
              financially stable insurers with excellent track records.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Financial Strength',
                description: 'All our partners maintain strong financial ratings and adequate reserves.',
                icon: Shield
              },
              {
                title: 'Claims Excellence',
                description: 'We only work with insurers who have proven track records in claims settlement.',
                icon: Award
              },
              {
                title: 'Customer Service',
                description: 'Our partners are committed to providing excellent customer service and support.',
                icon: Users
              }
            ].map((benefit, index) => (
              <Card key={index} className="text-center hover-lift shadow-medium animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8">
                  <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                    <benefit.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="gradient-primary hover-lift">
              Compare All Companies
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Companies;