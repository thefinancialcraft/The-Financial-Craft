import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { 
  Star, 
  Quote, 
  ChevronLeft, 
  ChevronRight,
  Play,
  Shield,
  Clock,
  Users
} from 'lucide-react';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      age: 34,
      city: 'Mumbai',
      rating: 5,
      text: 'Found the perfect family health insurance plan in just 10 minutes! The comparison tool made it so easy to understand different policies. Saved ₹8,000 on my annual premium.',
      avatar: '👩‍💼',
      verified: true,
      policyType: 'Family Floater',
      savings: '₹8,000',
      videoThumbnail: true
    },
    {
      id: 2,
      name: 'Rajesh Kumar',
      age: 45,
      city: 'Delhi',
      rating: 5,
      text: 'Excellent service! They helped me get senior citizen coverage for my parents with pre-existing conditions. The claim process was smooth and hassle-free.',
      avatar: '👨‍💼',
      verified: true,
      policyType: 'Senior Citizen',
      savings: '₹12,000',
      videoThumbnail: false
    },
    {
      id: 3,
      name: 'Anita Patel',
      age: 28,
      city: 'Bangalore',
      rating: 5,
      text: 'The AI recommendation system suggested the perfect plan for my needs. Great customer support and transparent pricing. Highly recommend!',
      avatar: '👩‍💻',
      verified: true,
      policyType: 'Individual',
      savings: '₹5,500',
      videoThumbnail: true
    },
    {
      id: 4,
      name: 'Vikram Singh',
      age: 38,
      city: 'Chennai',
      rating: 5,
      text: 'Switched from my old insurer and got better coverage at 25% lower premium. The migration process was handled completely by their team.',
      avatar: '👨‍⚕️',
      verified: true,
      policyType: 'Critical Illness',
      savings: '₹15,000',
      videoThumbnail: false
    }
  ];

  const trustBadges = [
    { icon: Shield, label: 'IRDAI Registered', value: 'Licensed Broker' },
    { icon: Users, label: 'Happy Customers', value: '50,000+' },
    { icon: Clock, label: 'Quick Settlement', value: '24 Hours' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial(prev => 
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial(prev => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(prev => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            <span className="text-foreground">What Our </span>
            <span className="text-gradient">Customers Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of satisfied customers who found their perfect 
            health insurance through our platform.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Main Testimonial */}
            <div className="space-y-8">
              <Card className="relative overflow-hidden shadow-strong hover-lift">
                <div className="absolute top-6 right-6">
                  <Quote className="w-12 h-12 text-primary/20" />
                </div>
                
                <CardContent className="p-8">
                  <div className="space-y-6">
                    {/* Customer Info */}
                    <div className="flex items-start space-x-4">
                      <div className="relative">
                        <Avatar className="w-16 h-16">
                          <AvatarFallback className="text-2xl">
                            {testimonials[currentTestimonial].avatar}
                          </AvatarFallback>
                        </Avatar>
                        {testimonials[currentTestimonial].verified && (
                          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-secondary rounded-full flex items-center justify-center">
                            <Shield className="w-4 h-4 text-white" />
                          </div>
                        )}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h3 className="font-semibold text-lg">
                            {testimonials[currentTestimonial].name}
                          </h3>
                          <Badge variant="secondary" className="text-xs">
                            Verified
                          </Badge>
                        </div>
                        <p className="text-muted-foreground text-sm">
                          Age {testimonials[currentTestimonial].age} • {testimonials[currentTestimonial].city}
                        </p>
                        <div className="flex items-center space-x-1 mt-2">
                          {Array.from({ length: testimonials[currentTestimonial].rating }, (_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Testimonial Text */}
                    <blockquote className="text-lg leading-relaxed text-foreground">
                      "{testimonials[currentTestimonial].text}"
                    </blockquote>

                    {/* Policy Details */}
                    <div className="flex items-center justify-between bg-gradient-subtle rounded-lg p-4">
                      <div>
                        <div className="text-sm text-muted-foreground">Policy Type</div>
                        <div className="font-medium">{testimonials[currentTestimonial].policyType}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-muted-foreground">Annual Savings</div>
                        <div className="font-bold text-secondary text-lg">{testimonials[currentTestimonial].savings}</div>
                      </div>
                    </div>

                    {/* Video Testimonial Button */}
                    {testimonials[currentTestimonial].videoThumbnail && (
                      <Button 
                        variant="outline" 
                        className="w-full group"
                        onClick={() => setIsPlaying(!isPlaying)}
                      >
                        <Play className={`mr-2 w-4 h-4 transition-transform ${isPlaying ? 'scale-110' : 'group-hover:scale-110'}`} />
                        {isPlaying ? 'Pause Video' : 'Watch Video Testimonial'}
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Navigation */}
              <div className="flex items-center justify-center space-x-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevTestimonial}
                  className="w-12 h-12 rounded-full hover-lift"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>

                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === currentTestimonial 
                          ? 'bg-primary scale-125' 
                          : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                      }`}
                      onClick={() => setCurrentTestimonial(index)}
                    />
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextTestimonial}
                  className="w-12 h-12 rounded-full hover-lift"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Trust Badges & Stats */}
            <div className="space-y-8">
              {/* Trust Badges */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-center">Why Trust Us?</h3>
                {trustBadges.map((badge, index) => {
                  const IconComponent = badge.icon;
                  return (
                    <Card 
                      key={index} 
                      className="shadow-medium hover-lift animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h4 className="font-semibold">{badge.label}</h4>
                            <p className="text-muted-foreground">{badge.value}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Quick Stats */}
              <Card className="gradient-primary text-white shadow-strong">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-6">Platform Statistics</h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <div className="text-3xl font-bold">4.8★</div>
                      <div className="text-sm opacity-90">Average Rating</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold">98%</div>
                      <div className="text-sm opacity-90">Satisfaction Rate</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold">₹2Cr+</div>
                      <div className="text-sm opacity-90">Claims Processed</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold">24hrs</div>
                      <div className="text-sm opacity-90">Claim Settlement</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* All Testimonials Grid */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8">More Success Stories</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card 
                  key={testimonial.id} 
                  className={`shadow-medium hover-lift cursor-pointer transition-all ${
                    index === currentTestimonial ? 'ring-2 ring-primary scale-105' : ''
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                >
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Avatar className="w-12 h-12">
                          <AvatarFallback className="text-lg">
                            {testimonial.avatar}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-medium">{testimonial.name}</h4>
                          <p className="text-sm text-muted-foreground">{testimonial.city}</p>
                        </div>
                      </div>
                      <p className="text-sm line-clamp-3">{testimonial.text}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-1">
                          {Array.from({ length: testimonial.rating }, (_, i) => (
                            <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {testimonial.savings} saved
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;