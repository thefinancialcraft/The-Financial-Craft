import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Heart, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Shield,
  Clock,
  Users,
  ArrowRight
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Health Insurance', href: '#' },
    { name: 'Compare Plans', href: '#' },
    { name: 'Claim Assistance', href: '#' },
    { name: 'Premium Calculator', href: '#' },
    { name: 'Renewal', href: '#' }
  ];

  const insuranceTypes = [
    { name: 'Individual Plans', href: '#' },
    { name: 'Family Floater', href: '#' },
    { name: 'Senior Citizen', href: '#' },
    { name: 'Critical Illness', href: '#' },
    { name: 'Group Insurance', href: '#' }
  ];

  const support = [
    { name: 'Help Center', href: '#' },
    { name: 'Contact Us', href: '#' },
    { name: 'Claims Support', href: '#' },
    { name: 'Policy Services', href: '#' },
    { name: 'FAQ', href: '#' }
  ];

  const company = [
    { name: 'About Us', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Partners', href: '#' },
    { name: 'Blog', href: '#' }
  ];

  const insurerLogos = [
    { name: 'HDFC ERGO', logo: '' },
    { name: 'ICICI Lombard', logo: '' },
    { name: 'Star Health', logo: '' },
    { name: 'Bajaj Allianz', logo: '' },
    { name: 'Niva Bupa', logo: '' },
    { name: 'Care Health', logo: '' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-foreground text-background">
      {/* Newsletter Section */}
      <div className="border-b border-background/10">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4">Stay Updated with Health Insurance Tips</h3>
            <p className="text-background/80 mb-8 text-lg">
              Get expert advice, policy updates, and exclusive offers delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Enter your email address" 
                className="bg-background text-foreground border-0 flex-1"
              />
              <Button className="bg-primary hover:bg-primary-glow text-white group">
                Subscribe
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="border-b border-background/10">
        <div className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold">IRDAI Registered</h4>
                <p className="text-background/80 text-sm">Licensed Insurance Broker</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h4 className="font-semibold">50,000+ Customers</h4>
                <p className="text-background/80 text-sm">Trusted by families across India</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                <Clock className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h4 className="font-semibold">24 Hour Support</h4>
                <p className="text-background/80 text-sm">Round the clock assistance</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-2">
              
              <span className="text-2xl font-bold">The Financial Craft</span>
            </div>
            <p className="text-background/80 leading-relaxed max-w-sm">
              India's most trusted health insurance marketplace. Compare, buy, and manage 
              your health insurance with complete transparency and expert guidance.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span>+91 8882558932</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <span>help@thefinancialcraft.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Noida Sector 6 </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-background/80 hover:text-primary transition-colors hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Insurance Types */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Insurance Types</h4>
            <ul className="space-y-3">
              {insuranceTypes.map((type, index) => (
                <li key={index}>
                  <a 
                    href={type.href} 
                    className="text-background/80 hover:text-secondary transition-colors hover:translate-x-1 inline-block"
                  >
                    {type.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Support</h4>
            <ul className="space-y-3">
              {support.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href} 
                    className="text-background/80 hover:text-accent transition-colors hover:translate-x-1 inline-block"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href} 
                    className="text-background/80 hover:text-primary transition-colors hover:translate-x-1 inline-block"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Partner Insurers */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-6 py-8">
          <h4 className="text-center text-lg font-semibold mb-6">Our Insurance Partners</h4>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {insurerLogos.map((insurer, index) => (
              <div 
                key={index} 
                className="flex items-center space-x-2 text-background/60 hover:text-background transition-colors cursor-pointer"
              >
                <span className="text-2xl">{insurer.logo}</span>
                <span className="text-sm font-medium">{insurer.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-4 text-background/80">
              <span>© {currentYear} The Financial Craft. All rights reserved.</span>
              <span>•</span>
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <span>•</span>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-background/80 text-sm">Follow Us:</span>
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-background/10 hover:bg-primary rounded-xl flex items-center justify-center transition-all hover:scale-110 hover:rotate-12"
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;