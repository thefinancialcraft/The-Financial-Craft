import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer';
import { Helmet } from "react-helmet";
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  Users, 
  Heart,
  TrendingUp,
  Award,
  Coffee,
  Laptop,
  GraduationCap,
  ArrowRight
} from 'lucide-react';

const Career = () => {
 
  const openings = [
    {
      title: 'Proccess Head',
      department: 'Insuance Sales',
      location: 'Noida',
      type: 'Full-time',
      experience: '3-5 years',
      description: 'Develop and implement standard operating procedures (SOPs), policies, and frameworks for consistent execution.',
      requirements: ['Bachelor’s degree in Engineering, Business Administration, Operations Management, Commerce, or related fields.', 'Strong leadership and team management', 'Strong knowledge of business process workflows']
    },
    {
      title: 'Team Leader',
      department: 'Insurance Sales',
      location: 'Noida',
      type: 'Full-time',
      experience: '4-6 years',
      description: 'A Team Leader must have prior experience in team coordination, performance tracking, and communication, with the ability to guide and motivate a group towards shared targets.',
      requirements: ['Positive attitude and team-first mindset', 'Minimum 1 year of experience in a team handling/supervisory role', 'Minimum: Graduate (Any stream – B.Com, BBA, B.Sc, etc.)']
    },
    {
      title: 'Digital Marketing Manager',
      department: 'Marketing',
      location: 'Noida',
      type: 'Full-time',
      experience: '1-2 years',
      description: 'Lead digital marketing initiatives to grow our customer base.',
      requirements: ['Digital marketing expertise', 'Analytics skills', 'Creative thinking']
    },
    {
      title: 'Sales Executive',
      department: 'Insurance Sales',
      location: 'Noida',
      type: 'Full-time',
      experience: '1-2 years ',
      description: 'Ensure customer satisfaction and retention throughout their journey.',
      requirements: ['Customer service skills', '12th or Higher qualification', 'Problem resolution']
    },
    {
      title: 'Sales Executive (Fresher)',
      department: 'Fresher',
      location: 'Noida',
      type: 'Full-time',
      experience: '0 years ',
      description: 'Ensure customer satisfaction and retention throughout their journey.',
      requirements: ['Customer service skills', '12th or Higher qualification', 'Problem resolution']
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance for you and your family'
    },
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Clear career progression paths and skill development'
    },
    {
      icon: Coffee,
      title: 'Work-Life Balance',
      description: 'Flexible working hours and remote work options'
    },
    {
      icon: Award,
      title: 'Recognition',
      description: 'Performance-based rewards and recognition programs'
    },
    {
      icon: Laptop,
      title: 'Latest Technology',
      description: 'Work with cutting-edge tools and technologies'
    },
    {
      icon: GraduationCap,
      title: 'Learning & Development',
      description: 'Continuous learning opportunities and certifications'
    }
  ];

  const values = [
    'Customer-First Approach',
    'Innovation & Excellence',
    'Transparency & Trust',
    'Teamwork & Collaboration',
    'Continuous Learning',
    'Work-Life Balance'
  ];

  return (
    <div className="min-h-screen">
       <Helmet>
        <title>Join The Financial Craft | Careers in Health Insurance Innovation</title>
        <meta name="description" content="Want to shape the future of insurance in India? Join our team at The Financial Craft and work on cutting-edge comparison tools and customer experience." />
        <meta name="keywords" content="insurance career India, join health insurance startup, careers in insurance comparison" />

        <meta property="og:title" content="Join The Financial Craft | Careers in Health Insurance Innovation" />
        <meta property="og:description" content="Be part of the team that's redefining insurance in India. Apply now to join The Financial Craft!" />
        <meta property="og:url" content="https://www.thefinancialcraft.com/careers" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Join The Financial Craft | Careers in Health Insurance Innovation" />
        <meta name="twitter:description" content="Help us build the future of health insurance guidance in India. Explore open roles." />
        <meta name="twitter:image" content="/src/assets/tfc-logo.png" />

        <link rel="canonical" href="https://www.thefinancialcraft.com/careers" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      {/* Hero Section */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold mb-6">
              <span className="text-foreground">Join Our </span>
              <span className="text-gradient">Team</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Be part of a mission to make insurance accessible, transparent, and 
              customer-friendly. Build your career while making a real difference.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { number: '200+', label: 'Team Members', icon: Users },
              { number: '95%', label: 'Employee Satisfaction', icon: Heart },
              { number: '6', label: 'Office Locations', icon: MapPin },
              { number: '4.8', label: 'Glassdoor Rating', icon: Award }
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

      {/* Open Positions */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-foreground">Open </span>
              <span className="text-gradient">Positions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore exciting career opportunities across different departments.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {openings.map((job, index) => (
              <Card key={index} className="hover-lift shadow-medium animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl">{job.title}</CardTitle>
                    <Badge variant="secondary">{job.department}</Badge>
                  </div>
                  <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {job.location}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {job.type}
                    </div>
                    <div className="flex items-center">
                      <Briefcase className="w-4 h-4 mr-1" />
                      {job.experience}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{job.description}</p>
                  
                  <div>
                    <h4 className="font-medium mb-2">Key Requirements:</h4>
                    <ul className="space-y-1">
                      {job.requirements.map((req, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button className="w-full gradient-primary hover-lift">
                    Apply Now
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Perks */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-foreground">Benefits & </span>
              <span className="text-gradient">Perks</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We believe in taking care of our team members with comprehensive 
              benefits and a supportive work environment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
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
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-foreground">Our </span>
                <span className="text-gradient">Culture</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  At HealthGuard, we've built a culture that values innovation, collaboration, 
                  and personal growth. We believe that happy employees deliver exceptional 
                  customer experiences.
                </p>
                <p>
                  Our team is our greatest asset, and we're committed to creating an 
                  environment where everyone can thrive, learn, and make a meaningful 
                  impact on the insurance industry.
                </p>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Our Values</h3>
                <div className="grid grid-cols-2 gap-2">
                  {values.map((value, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-sm">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <Card className="shadow-strong hover-lift">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-center">Ready to Join Us?</h3>
                <div className="space-y-6">
                  <div className="text-center">
                    <p className="text-muted-foreground mb-4">
                      Don't see a role that fits? We're always looking for talented 
                      individuals to join our team.
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <Button className="w-full gradient-primary hover-lift">
                      Send Your Resume
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                    <Button variant="outline" className="w-full">
                      Learn More About Us
                    </Button>
                  </div>
                  
                  <div className="text-center text-sm text-muted-foreground">
                    <p>Follow us on LinkedIn for the latest updates</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Career;