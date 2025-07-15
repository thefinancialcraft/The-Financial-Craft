import { useState } from 'react';
import starHealthLogo from '@/assets/star-health-logo.png';
import nivaLogo from '@/assets/NivaLogo.webp';
import careLogo from '@/assets/care_health_insurance_logo.svg';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Check, 
  X, 
  Star, 
  Shield, 
  Clock, 
  Users,
  Filter,
  ArrowUpDown
} from 'lucide-react';

const ComparisonSection = () => {
  const [selectedInsurers, setSelectedInsurers] = useState(['care', 'niva', 'star']);
  const [sortBy, setSortBy] = useState('premium');

  const insurers = [
    {
      id: 'hdfc',
      name: 'HDFC ERGO',
      logo: '🏢',
      rating: 4.5,
      premium: '₹12,500',
      sumInsured: '₹10 Lakh',
      roomRent: '1% of SI',
      cashless: 8500,
      claimRatio: '85%',
      features: {
        preCover: true,
        maternity: true,
        dental: false,
        ayush: true,
        ambulance: true
      },
      badge: 'Most Popular',
      badgeColor: 'bg-primary'
    },
    {
      id: 'icici',
      name: 'ICICI Lombard',
      logo: '🏛️',
      rating: 4.3,
      premium: '₹11,800',
      sumInsured: '₹10 Lakh',
      roomRent: '2% of SI',
      cashless: 7200,
      claimRatio: '82%',
      features: {
        preCover: true,
        maternity: true,
        dental: true,
        ayush: true,
        ambulance: true
      },
      badge: 'Best Value',
      badgeColor: 'bg-secondary'
    },
    {
      id: 'star',
      name: 'Star Health Insurance',
      logo: starHealthLogo,
      rating: 4.2,
      premium: '₹13,200',
      sumInsured: '₹10 Lakh',
      roomRent: 'Single Private Room',
      cashless: `9800+`,
      claimRatio: '89%',
      features: {
        preCover: true,
        maternity: false,
        dental: false,
        ayush: true,
        ambulance: true
      },
      badge: 'High Claims',
      badgeColor: 'bg-accent'
    },
    {
      id: 'bajaj',
      name: 'Bajaj Allianz',
      logo: '🚗',
      rating: 4.1,
      premium: '₹10,900',
      sumInsured: '₹10 Lakh',
      roomRent: '1.5% of SI',
      cashless: 6500,
      claimRatio: '78%',
      features: {
        preCover: true,
        maternity: true,
        dental: false,
        ayush: false,
        ambulance: true
      },
      badge: 'Budget Friendly',
      badgeColor: 'bg-green-500'
    },
    {
      id: 'sbi',
      name: 'SBI General',
      logo: '🏦',
      rating: 4.0,
      premium: '₹11,200',
      sumInsured: '₹10 Lakh',
      roomRent: '1% of SI',
      cashless: 7800,
      claimRatio: '80%',
      features: {
        preCover: true,
        maternity: true,
        dental: true,
        ayush: true,
        ambulance: true
      },
      badge: 'Trusted Bank',
      badgeColor: 'bg-blue-500'
    },
  
    {
      id: 'niva',
      name: 'Niva Bupa Health Insurance',
      logo: nivaLogo,
      rating: 4.4,
      premium: '₹12,900',
      sumInsured: '₹10 Lakh',
      roomRent: 'All Categories',
      cashless: `16900+`,
      claimRatio: '98.1%',
      features: {
        preCover: true,
        maternity: true,
        dental: true,
        ayush: true,
        ambulance: true
      },
      badge: 'Rising Star',
      badgeColor: 'bg-cyan-500'
    },
    {
      id: 'care',
      name: 'Care Health Insurance',
      logo: careLogo,
      rating: 4.1,
      premium: '₹11,600',
      sumInsured: '₹10 Lakh',
      roomRent: 'All Categories',
      cashless: `21000+`,
      claimRatio: '98.2%',
      features: {
        preCover: true,
        maternity: true,
        dental: false,
        ayush: true,
        ambulance: true
      },
      badge: 'Fast Claims',
      badgeColor: 'bg-emerald-500'
    },
    {
      id: 'national',
      name: 'National Insurance',
      logo: '🇮🇳',
      rating: 3.9,
      premium: '₹10,500',
      sumInsured: '₹10 Lakh',
      roomRent: '1% of SI',
      cashless: 5800,
      claimRatio: '76%',
      features: {
        preCover: true,
        maternity: false,
        dental: false,
        ayush: false,
        ambulance: true
      },
      badge: 'PSU Company',
      badgeColor: 'bg-orange-500'
    },
    {
      id: 'reliance',
      name: 'Reliance General',
      logo: '⚡',
      rating: 4.2,
      premium: '₹12,100',
      sumInsured: '₹10 Lakh',
      roomRent: '1.5% of SI',
      cashless: 8100,
      claimRatio: '84%',
      features: {
        preCover: true,
        maternity: true,
        dental: true,
        ayush: true,
        ambulance: true
      },
      badge: 'Digital First',
      badgeColor: 'bg-purple-500'
    }
  ];

  const features = [
    { key: 'preCover', label: 'Pre & Post Hospitalization' },
    { key: 'maternity', label: 'Maternity Coverage' },
    { key: 'dental', label: 'Dental Treatment' },
    { key: 'ayush', label: 'AYUSH Treatment' },
    { key: 'ambulance', label: 'Ambulance Cover' }
  ];

  const toggleInsurer = (insurerId: string) => {
    if (selectedInsurers.includes(insurerId)) {
      if (selectedInsurers.length > 1) {
        setSelectedInsurers(prev => prev.filter(id => id !== insurerId));
      }
    } else {
      if (selectedInsurers.length < 4) {
        setSelectedInsurers(prev => [...prev, insurerId]);
      }
    }
  };

  const displayedInsurers = insurers.filter(insurer => 
    selectedInsurers.includes(insurer.id)
  );

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            <span className="text-foreground">Compare </span>
            <span className="text-gradient">Top Insurers</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Make informed decisions with our comprehensive comparison tool. 
            Compare premiums, benefits, and features side by side.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Select Insurers:</span>
          </div>
          {insurers.map(insurer => (
            <Button
              key={insurer.id}
              variant={selectedInsurers.includes(insurer.id) ? "default" : "outline"}
              size="sm"
              onClick={() => toggleInsurer(insurer.id)}
              className="hover-lift"
            >
              {insurer.name}
            </Button>
          ))}
        </div>

        {/* Comparison Table */}
        <div  className="overflow-x-auto">
          <div className="min-w-full">
            <div className="grid gap-6" style={{ gridTemplateColumns: `repeat(${displayedInsurers.length}, minmax(300px, 1fr))` }}>
              {displayedInsurers.map((insurer, index) => (
                <Card 
                  key={insurer.id} 
                  className={`relative overflow-hidden hover-lift shadow-medium animate-fade-in mb-10` }
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Badge */}
                  <div className={`absolute top-4 right-4 ${insurer.badgeColor} text-white text-xs px-3 py-1 rounded-full`}>
                    {insurer.badge}
                  </div>

                  <CardHeader className="text-center pt-10 pb-4">
                    <div className="text-4xl mb-2">
                      {typeof insurer.logo === 'string' && (insurer.logo.endsWith('.png') || insurer.logo.endsWith('.webp') || insurer.logo.endsWith('.svg') || insurer.logo.endsWith('.jpg') || insurer.logo.endsWith('.jpeg')) ? (
                        <img src={insurer.logo} alt={insurer.name + ' logo'} className="h-10 mx-auto" />
                      ) : (
                        insurer.logo
                      )}
                    </div>
                    <CardTitle className="text-xl">{insurer.name}</CardTitle>
                    <div className="flex items-center justify-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{insurer.rating}</span>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {/* Premium */}
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary">{insurer.premium}</div>
                      <div className="text-sm text-muted-foreground">Annual Premium (26 Yr.)</div>
                    </div>

                    {/* Key Details */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Sum Insured</span>
                        <span className="font-medium">{insurer.sumInsured}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Room Rent</span>
                        <span className="font-medium">{insurer.roomRent}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Cashless Hospitals</span>
                        <span className="font-medium">{insurer.cashless.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Claim Ratio</span>
                        <Badge variant="secondary">{insurer.claimRatio}</Badge>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-3">
                      <h4 className="font-medium text-sm text-muted-foreground uppercase tracking-wide">
                        Features
                      </h4>
                      {features.map(feature => (
                        <div key={feature.key} className="flex items-center justify-between">
                          <span className="text-sm">{feature.label}</span>
                          {insurer.features[feature.key as keyof typeof insurer.features] ? (
                            <Check className="w-4 h-4 text-secondary" />
                          ) : (
                            <X className="w-4 h-4 text-muted-foreground" />
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-3 pt-4">
                      <Button className="w-full gradient-primary hover-lift">
                        Get Quote
                      </Button>
                      <Button variant="outline" className="w-full">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-6 bg-card/80 backdrop-blur-sm rounded-2xl px-8 py-6 shadow-medium">
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-sm text-muted-foreground">100% Secure</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-secondary" />
              <span className="text-sm text-muted-foreground">Instant Quotes</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-accent" />
              <span className="text-sm text-muted-foreground">Expert Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;