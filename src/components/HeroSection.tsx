import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Shield, Users, ArrowRight, Play, TrendingUp, Award, CheckCircle } from 'lucide-react';
import bannerImage from '@/assets/hr_image.png'; // Adjust the path as necessary

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const FloatingElement = ({ children, delay = 0, className = "" }: {
    children: React.ReactNode;
    delay?: number;
    className?: string;
  }) => (
    <div 
      className={`animate-float ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );

  return (
    <section className="relative  flex items-center justify-center overflow-hidden gradient-subtle">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingElement delay={0} className="absolute top-20 left-10">
          <div className="w-16 h-16 rounded-full bg-primary/10 animate-pulse-slow" />
        </FloatingElement>
        <FloatingElement delay={1} className="absolute bottom-10 right-20">
          <div className="w-12 h-12 rounded-full bg-secondary/10 animate-bounce-gentle" />
        </FloatingElement>
        <FloatingElement delay={2} className="absolute bottom-32 left-20">
          <div className="w-20 h-20 rounded-full bg-primary/10 animate-pulse-slow" />
        </FloatingElement>
        
        {/* Heartbeat Lines */}
        <div className="absolute top-10 left-60 opacity-20">
          <svg width="200" height="60" viewBox="0 0 100 60" className="text-primary">
            <path 
              d="M10,30 L40,30 L50,10 L60,50 L70,20 L80,40 L90,30 L190,30" 
              stroke="currentColor" 
              strokeWidth="2" 
              fill="none"
              className="animate-pulse"
            />
          </svg>
        </div>
      </div>

      <div style={{ marginTop: '50px', marginBottom:"150px" }} className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`space-y-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-card/80 backdrop-blur-sm rounded-full px-6 py-2 shadow-soft">
                <Heart className="w-5 h-5 text-primary animate-pulse" />
                <span className="text-sm font-medium text-muted-foreground">
                  Trusted by 50,000+ Families
                </span>
              </div>
              
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                <span className="block text-foreground">Find the</span>
                <span className="block text-gradient">Best Health</span>
                <span className="block text-foreground">Insurance</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Compare plans from top insurers and save up to 30% on premiums. 
                Get instant quotes tailored for Indian families.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="gradient-primary hover-lift shadow-medium group text-lg px-8 py-6"
              >
                Compare Plans Instantly
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Top Insurers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">50K+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">₹5L+</div>
                <div className="text-sm text-muted-foreground">Claims Settled</div>
              </div>
            </div>
          </div>

          {/* Right Content - Interactive Features */}
          <div className={`relative ${isVisible ? 'animate-fade-in-scale' : 'opacity-0'}`}>
            <div className="relative space-y-6">
              {/* Feature Cards */}

    {/* Central Interactive Element */}
              <FloatingElement className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl  shadow-strong hover-lift">
                <div className="text-center ">
   <img
    src={bannerImage} // or "/images/banner.png" if using public folder
    alt="Insurance claim support illustration"
    className="w-full h-60 object-contain rounded-xl"
    />
                </div>
              </FloatingElement>

              <div className="grid grid-cols-2 gap-4">

                
                <FloatingElement className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 shadow-medium hover-lift">
                  <div className="text-center space-y-3">
                    <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                      <Shield className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-lg font-medium">₹50L+ Coverage</div>
                    <div style={{marginBottom:'-10px'}} className="text-sm text-muted-foreground">Maximum Protection</div>
                  </div>
                </FloatingElement>

                <FloatingElement delay={0.2} className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 shadow-medium hover-lift">
                  <div className="text-center space-y-3">
                    <div className="w-12 h-12 mx-auto bg-secondary/10 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-secondary" />
                    </div>
                    <div className="text-lg font-medium">30% Savings</div>
                    <div className="text-sm text-muted-foreground">Best Prices</div>
                  </div>
                </FloatingElement>

                <FloatingElement delay={0.4} className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 shadow-medium hover-lift">
                  <div className="text-center space-y-3">
                    <div className="w-12 h-12 mx-auto bg-accent/10 rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-accent" />
                    </div>
                    <div className="text-lg font-medium">20+ Insurers</div>
                    <div className="text-sm text-muted-foreground">Top Companies</div>
                  </div>
                </FloatingElement>

                <FloatingElement delay={0.6} className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 shadow-medium hover-lift">
                  <div className="text-center space-y-3">
                    <div className="w-12 h-12 mx-auto bg-green-500/10 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-green-500" />
                    </div>
                    <div className="text-lg font-medium">Instant Approval</div>
                    <div className="text-sm text-muted-foreground">Quick Process</div>
                  </div>
                </FloatingElement>
              </div>

          
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div  className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;