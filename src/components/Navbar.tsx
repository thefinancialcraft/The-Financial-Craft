import { useState, useEffect } from 'react';
import tfcLogo from '@/assets/tfc-logo.png';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Shield, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/home' },
    { name: 'Companies', path: '/companies' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Team', path: '/team' },
    { name: 'Careers', path: '/career' },
  ];


  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-background/80  backdrop-blur-md border-b sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center h-16 relative md:static">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 md:absolute md:left-6 md:top-1/2 md:-translate-y-1/2">
            <img src={tfcLogo} alt="The Financial Craft Logo" className="h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-7 md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-base  font-medium transition-colors hover:text-primary md:hover:text-base ${
                  isActive(item.path) ? 'text-primary ' : 'text-muted-foreground opacity-90 font-normal'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4 min-w-[210px] justify-end flex-shrink-0 md:absolute md:right-6 md:top-1/2 md:-translate-y-1/2">
            <Button variant="outline" size="sm" className="group relative overflow-hidden">
              <span className="flex items-center w-[18px] group-hover:w-[132px] transition-all duration-200 overflow-hidden">
                <Phone className="w-4 h-4 transition-all duration-200 animate-phone-icon group-hover:animate-none group-hover:scale-100" />
      {/* Phone icon animation keyframes */}
      <style>{`
        @keyframes phoneIcon {
          0%, 100% { transform: scale(1) rotate(-5deg); }
          10% { transform: scale(1.05) rotate(5deg); }
          20% { transform: scale(1.1) rotate(-5deg); }
          30% { transform: scale(1.1) rotate(5deg); }
          40% { transform: scale(1.05) rotate(-5deg); }
          50% { transform: scale(1.05) rotate(5deg); }
          60% { transform: scale(1) rotate(-5deg); }
          100% { transform: scale(1) rotate(-5deg); }
        }
        .animate-phone-icon {
          animation: phoneIcon 1.2s infinite;
        }
      `}</style>
                <span
                  className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap"
                  style={{ pointerEvents: 'none', display: 'inline-block' }}
                >
                  +91 8882558932
                </span>
              </span>
            </Button>
            <Button
  size="sm"
  className="pl-5 pr-5 gradient-primary hidden min-[1115px]:inline-block"
>
  Get Quote
</Button>

            {/* PoSP */}
             <Button  size="sm" className="group relative overflow-hidden pl-5 pr-5 bg-gradient-to-br group-hover:opacity-10 transition-opacity duration-500 from-pink-400 to-purple-500">
              <span className="flex items-center  w-[32px] group-hover:w-[80px] transition-all duration-200 overflow-hidden">
              <p>PoSP</p>
                <span
                  className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap"
                  style={{ pointerEvents: 'none', display: 'inline-block' }}
                >
                  Agent
                </span>
              </span>
            </Button>
            
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden absolute right-0 top-1/2 -translate-y-1/2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="focus:bg-transparent active:bg-transparent hover:bg-transparent"
              style={{ background: 'transparent', color: 'inherit'   }}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t animate-fade-in absolute left-0 top-full w-full z-50 bg-background shadow-lg p-6">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive(item.path) ? 'text-primary' : 'text-muted-foreground'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" size="sm">
                  <Phone className="w-4 h-4 mr-2" />
                  +91 888 255 8932
                </Button>
                <Button size="sm" className="gradient-primary">
                  Get Quote
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;