import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Calculator, 
  TrendingDown, 
  FileText, 
  Gift,
  CheckCircle,
  IndianRupee,
  Receipt,
  PiggyBank
} from 'lucide-react';

const TaxBenefitsSection = () => {
  const benefits = [
    {
      section: '80D',
      title: 'Premium Deduction',
      amount: '₹25,000',
      description: 'Annual premium paid for health insurance',
      icon: Calculator,
      color: 'bg-primary/10 text-primary'
    },
    {
      section: '80D',
      title: 'Senior Citizen Benefit',
      amount: '₹50,000',
      description: 'Additional deduction for senior citizens',
      icon: Gift,
      color: 'bg-secondary/10 text-secondary'
    },
    {
      section: '80DDB',
      title: 'Critical Illness',
      amount: '₹1,00,000',
      description: 'Treatment of specified critical illnesses',
      icon: FileText,
      color: 'bg-accent/10 text-accent'
    },
    {
      section: '80E',
      title: 'Preventive Health',
      amount: '₹5,000',
      description: 'Preventive health check-ups',
      icon: PiggyBank,
      color: 'bg-green-500/10 text-green-500'
    }
  ];

  const scenarios = [
    {
      title: 'Young Professional',
      age: '25-30 years',
      premium: '₹12,000',
      taxSaved: '₹3,600',
      effectiveCost: '₹8,400',
      bracket: '30%'
    },
    {
      title: 'Family Coverage',
      age: '35-45 years',
      premium: '₹25,000',
      taxSaved: '₹7,500',
      effectiveCost: '₹17,500',
      bracket: '30%'
    },
    {
      title: 'Senior Citizen',
      age: '60+ years',
      premium: '₹50,000',
      taxSaved: '₹15,000',
      effectiveCost: '₹35,000',
      bracket: '30%'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            <span className="text-foreground">Tax </span>
            <span className="text-gradient">Benefits</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Maximize your savings with health insurance tax benefits. 
            Save up to ₹15,000 annually on taxes while protecting your health.
          </p>
        </div>

        {/* Tax Benefits Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="hover-lift shadow-medium animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader className="text-center pb-4">
                <div className={`w-12 h-12 mx-auto rounded-full ${benefit.color} flex items-center justify-center mb-4`}>
                  <benefit.icon className="w-6 h-6" />
                </div>
                <Badge variant="secondary" className="mb-2">Section {benefit.section}</Badge>
                <CardTitle className="text-lg">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">{benefit.amount}</div>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tax Calculation Examples */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="text-foreground">Real </span>
            <span className="text-gradient">Savings Examples</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {scenarios.map((scenario, index) => (
              <Card key={index} className="hover-lift shadow-medium animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{scenario.title}</CardTitle>
                  <p className="text-muted-foreground">{scenario.age}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Annual Premium</span>
                    <span className="font-medium">{scenario.premium}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Tax Bracket</span>
                    <Badge variant="outline">{scenario.bracket}</Badge>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-muted-foreground">Tax Saved</span>
                      <span className="font-medium text-secondary">{scenario.taxSaved}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Effective Cost</span>
                      <span className="text-xl font-bold text-primary">{scenario.effectiveCost}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Important Notes */}
        <Card className="bg-gradient-subtle shadow-strong">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-4 flex items-center">
                  <Receipt className="w-5 h-5 mr-2 text-primary" />
                  Key Benefits
                </h4>
                <div className="space-y-3">
                  {[
                    'Deduction under Section 80D of Income Tax Act',
                    'Higher limits for senior citizens',
                    'Additional benefits for preventive health check-ups',
                    'Covers premium paid for self, spouse, and parents',
                    'No waiting period for tax benefits'
                  ].map((point, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold mb-4 flex items-center">
                  <TrendingDown className="w-5 h-5 mr-2 text-accent" />
                  Important Notes
                </h4>
                <div className="space-y-3">
                  {[
                    'Tax benefits are subject to applicable tax laws',
                    'Consult tax advisor for specific situations',
                    'Benefits available for mediclaim and health insurance',
                    'Separate limits for self and parents',
                    'Preventive health check-up has sub-limit of ₹5,000'
                  ].map((note, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <IndianRupee className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{note}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default TaxBenefitsSection;