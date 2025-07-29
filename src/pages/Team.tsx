import { Card, CardContent } from '@/components/ui/card';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import onwImg from '@/assets/own-image.jpg';
import cofImg from '@/assets/co-f-img.jpg';
import sydImg from '@/assets/sydImg.jpg';
import dpkImg from '@/assets/depkImg.jpg';
import ujwImg from '@/assets/ujjwalImg.png';
import jytImg from '@/assets/Jayati mam.jpeg';
import amtImg from '@/assets/amitkashyap.jpg';
import harImg from '@/assets/Harshit.jpg';
import rituImg from '@/assets/Rittu.jpeg';
import blnkprf from '@/assets/blkprf.webp';
import sus1 from '@/assets/sus1.jpg';
import prt1 from '@/assets/preeti1.jpeg';
import lpka1 from '@/assets/lipika.jpg';
import prs1 from '@/assets/pars.jpg';
import amr1 from '@/assets/amardeep1.jpg';
import tny1 from '@/assets/tanya.jpg';
import bbt1 from '@/assets/babita.jpg';

import { 
  Linkedin, 
  Mail, 
  Award, 
  Users, 
  TrendingUp,
  Shield,
  Heart,
  Star
} from 'lucide-react';
import { Helmet } from "react-helmet";

const Team = () => {
  
  // Founder Card Data
  const founder = {
    name: 'Ajay Kumar',
    position: 'Founder & CEO',
    experience: '10+ years',
    expertise: 'Insurance Strategy & Leadership',
    image: onwImg,
    bio: 'With deep-rooted experience in insurance strategy and leadership, I’ve worked with leading players like Policybazaar, Coverfox, and other top MNCs. Now, with a team of passionate ex-leaders, I’m on a mission to simplify health insurance and make it accessible for every Indian.',
    achievements: ['Built 3 successful insurance ventures', 'IRDA certified', 'Btech from IP University']
  };

  // Other Leadership
  const leadership = [
    {
      name: 'Manoj Kohli',
      position: 'Co-Founder & CTO',
      experience: '12+ years',
      expertise: 'Insurance Strategy & Leadership',
      image: cofImg,
      bio: 'Led by experts from Coverfox & Redcliffe, redefining health insurance for every Indian',
      achievements: ['Led teams at Redcliffe & Coverfox', 'Co-Founder', 'Graduated from DU']
    },
    {
      name: 'Ujjwal Kashyap',
      position: 'Senior Manager',
      experience: '8+ years',
      expertise: 'Healthcare & Medical Underwriting',
      image: ujwImg,
      bio: 'Ex-Policy bazaar, Limeroad, Coverfox and Niva Bupa - insurance expert with proven industry experience.',
      achievements: ['Former Leader Niva Bupa', 'Medical underwriting expert', 'Sales & Marketing From IMT Ghaziabad']
    },
    {
      name: 'Sayyad',
      position: 'Manager',
      experience: '5+ years',
      expertise: 'Operations & Customer Success',
      image: sydImg,
      bio: 'Ex-Niva Bupa | Empowering youth to build strong careers in insurance.',
      achievements: ['Senior Advisor - Niva Bupa', 'Process optimization expert', 'Mtech from IU Lucknow']
    },
     {
      name: 'Deepak Kumar',
      position: 'IT & Management',
      experience: '4+ years',
      expertise: 'Operations & Customer Success',
      image: dpkImg,
      bio: 'Problem-solver in the digital world. Passionate about innovation, system efficiency, and smart tech.',
      achievements: ['Creative Tech Enthusiast', 'Process optimization expert', 'BCA From Ignou University']
    },
     {
      name: 'Anakshi Paul',
      position: 'Team Leader',
      experience: '6+ years',
      expertise: 'Insurance Strategy & Leadership',
      image: jytImg,
      bio: 'Leading high-performing insurance teams with a focus on client trust and policy excellence.',
      achievements: ['Senior Advisor - Mera Bima', 'Focused, Driven, Reliable', 'B-Com from Jodpur university']
    },
    {
      name: 'Amit Kashyap',
      position: 'Team Leader',
      experience: '6+ years',
      expertise: 'Healthcare & Medical Underwriting',
      image: amtImg,
      bio: 'Ex- Policy bazaar, Insurance Dekho , Coverfox ,Glamyo  - insurance expert with proven industry experience.',
      achievements: ['Former Leader Insurance dekho', 'Passionate Leader', 'Graduation (B.A) and ADCA']
    },
    {
      name: 'Harshit Pandey',
      position: 'Senior Advisor',
      experience: '3+ years',
      expertise: 'Operations & Customer Success',
      image: harImg,
      bio: 'Driving customer trust and loyalty through strategic relationship management.',
      achievements: ['Senior Advisor ', 'Client Success Partner', 'BCA from DU']
    },
    {
      name: 'Ritu Malik',
      position: 'Senior Advisor',
      experience: '3+ years',
      expertise: 'Operations & Customer Success',
      image: rituImg,
      bio: 'Bridging business growth with meaningful customer connections',
      achievements: ['Senior Advisor ', 'Client Success Partner', 'Graduation in B.A']
    }
    
  ];

  

  const departments = [
    {
      name: 'Sales & Advisory',
      count: 45,
      description: 'Certified insurance advisors helping customers find perfect coverage',
      icon: Users,
      color: 'bg-blue-500/10 text-blue-500'
    },
    {
      name: 'Technology',
      count: 35,
      description: 'Engineers building the future of insurance technology',
      icon: TrendingUp,
      color: 'bg-green-500/10 text-green-500'
    },
    {
      name: 'Claims & Support',
      count: 25,
      description: 'Dedicated team ensuring smooth claims and customer support',
      icon: Shield,
      color: 'bg-purple-500/10 text-purple-500'
    },
    {
      name: 'Operations',
      count: 20,
      description: 'Operations specialists ensuring seamless business processes',
      icon: Award,
      color: 'bg-orange-500/10 text-orange-500'
    }
  ];

  const awards = [
    {
      title: 'Best Insurance Broker 2023',
      organization: 'Insurance Industry Awards',
      year: '2023'
    },
    {
      title: 'Customer Service Excellence',
      organization: 'CX Awards India',
      year: '2023'
    },
    {
      title: 'Digital Innovation Award',
      organization: 'BFSI Tech Awards',
      year: '2022'
    },
    {
      title: 'Best Workplace Culture',
      organization: 'Great Place to Work',
      year: '2022'
    }
  ];

  
  const stars = [
    {
      name: 'Babita Choudhary',
      image: bbt1,
      position: 'Insurance Advisor',
      experience: '2+ years',
    },
    {
      name: 'Sushmita Pandey',
      image: sus1,
      position: 'Insurance Advisor',
      experience: '2+ years',
    },
    {
      name: 'Preeti Arya',
      image: prt1,
      position: 'Insurance Advisor',
      experience: '1+ years',
    },
    {
      name: 'Lipika Sharma',
      image: lpka1,
      position: 'Insurance Advisor',
      experience: '1+ years',
    },
    {
      name: 'Amardeep',
      image: amr1,
      position: 'Insurance Advisor',
      experience: '6+ Months',
    },
    {
      name: 'Kushi Kumari',
      image: blnkprf,
      position: 'Insurance Advisor',
      experience: '6+ Months',
    },
    {
      name: 'Paras Arora',
      image: prs1,
      position: 'Insurance Advisor',
      experience: '2+ years',
    },
    {
      name: 'Tanya Bhardwaj',
      image: tny1,
      position: 'Insurance Advisor',
      experience: '2+ years',
    },
    {
      name: 'Babita Choudhary',
      image: bbt1,
      position: 'Insurance Advisor',
      experience: '2+ years',
    },
    {
      name: 'Sushmita Pandey',
      image: sus1,
      position: 'Insurance Advisor',
      experience: '2+ years',
    },
    {
      name: 'Preeti Arya',
      image: prt1,
      position: 'Insurance Advisor',
      experience: '1+ years',
    },
    {
      name: 'Lipika Sharma',
      image: lpka1,
      position: 'Insurance Advisor',
      experience: '1+ years',
    },
    {
      name: 'Amardeep',
      image: amr1,
      position: 'Insurance Advisor',
      experience: '6+ Months',
    },
    {
      name: 'Kushi Kumari',
      image: blnkprf,
      position: 'Insurance Advisor',
      experience: '6+ Months',
    },
    {
      name: 'Paras Arora',
      image: prs1,
      position: 'Insurance Advisor',
      experience: '2+ years',
    },
    {
      name: 'Tanya Bhardwaj',
      image: tny1,
      position: 'Insurance Advisor',
      experience: '2+ years',
    }
  ];


  return (
    <div className="min-h-screen">

       <Helmet>
  <title>Meet Our Team | Behind The Financial Craft</title>
  <meta
    name="description"
    content="Meet the passionate team driving The Financial Craft. From insurance experts to product specialists, our people are dedicated to simplifying financial protection for every Indian."
  />
  <meta
    name="keywords"
    content="financial craft team, Ajay Kumar founder, insurance experts India, team behind insurance platform, finance startup team, insurance advisors"
  />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://www.thefinancialcraft.com/team" />

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
  <meta property="og:title" content="The Financial Craft Team | Know Our Experts" />
  <meta property="og:description" content="Get to know the team behind The Financial Craft. Meet the people making insurance simpler, smarter, and more transparent for India." />
  <meta property="og:url" content="https://www.thefinancialcraft.com/team" />
  <meta property="og:image" content="https://www.thefinancialcraft.com/assets/og-team.jpg" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@thefinancialcraft" />
  <meta name="twitter:title" content="Meet The Financial Craft Team" />
  <meta name="twitter:description" content="Our experts are here to help you make smarter insurance decisions. Meet our mission-driven team of advisors and product leaders." />
  <meta name="twitter:image" content="https://www.thefinancialcraft.com/assets/og-team.jpg" />

  <link rel="alternate" href="https://www.thefinancialcraft.com/" hrefLang="en" />
  <link rel="alternate" href="https://www.thefinancialcraft.com/companies" hrefLang="en" />
  <link rel="alternate" href="https://www.thefinancialcraft.com/services" hrefLang="en" />
  <link rel="alternate" href="https://www.thefinancialcraft.com/about" hrefLang="en" />
  <link rel="alternate" href="https://www.thefinancialcraft.com/team" hrefLang="en" />
  <link rel="alternate" href="https://www.thefinancialcraft.com/careers" hrefLang="en" />

  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="icon" href="/favicon.ico" />
</Helmet>


      {/* Hero Section */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold mb-6">
              <span className="text-foreground">Meet Our </span>
              <span className="text-gradient">Team</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The passionate professionals behind The financial Craft, dedicated to making 
              insurance simple, transparent, and accessible for everyone.
            </p>
          </div>

      {/* Founder Card Section */}
      <div className="max-w-6xl  mx-auto mt-12 mb-10 animate-fade-in">
        <Card className="relative overflow-hidden shadow-strong hover-lift founder-card-gradient">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-br from-primary/30 to-secondary/20 rounded-full blur-2xl opacity-60 z-0" />
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-tr from-secondary/30 to-primary/20 rounded-full blur-2xl opacity-60 z-0" />
          <CardContent className="relative z-10 flex flex-col md:flex-row items-center gap-8 p-10">
            <div className="flex-shrink-0 flex flex-col items-center">
              <div
                style={{ width: '200px', height: '200px', overflow: 'hidden', borderRadius: '1.5rem', boxShadow: '0 4px 24px rgba(54, 63, 112, 0.13)' }}
                className="md:mr-[40px] mr-0"
              >
                <img
                  src={founder.image}
                  alt={founder.name + ' photo'}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '1.5rem' }}
                />
              </div>
              
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-2 text-primary">{founder.name}</h2>
              <p className="text-lg font-medium text-muted-foreground mb-2">{founder.position}</p>
              <div className="mt-4 mb-5 flex flex-col items-center w-full">
                <div className="flex space-x-2 md:justify-start justify-center w-full">
                  <Badge variant="secondary">{founder.experience}</Badge>
                  <Badge variant="secondary">{founder.expertise}</Badge>
                </div>
              </div>
              <p className="mb-4 text-base text-muted-foreground">{founder.bio}</p>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-4">
                {founder.achievements.map((ach, idx) => (
                  <Badge key={idx} variant="outline" className="text-xs">{ach}</Badge>
                ))}
              </div>
              <div className="flex justify-center md:justify-start space-x-3 mt-2">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center cursor-pointer hover:bg-primary/20 transition-colors">
                  <Linkedin className="w-5 h-5 text-primary" />
                </div>
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center cursor-pointer hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>


      {/* Team Stats */}
      <div className="grid md:grid-cols-4 gap-6">
        {[
          { number: '200+', label: 'Team Members', icon: Users },
          { number: '15+', label: 'Average Experience', icon: Award },
          { number: '95%', label: 'Employee Retention', icon: Heart },
          { number: '4.8/5', label: 'Team Satisfaction', icon: Star }
        ].map((stat, index) => (
          <Card key={index} className="text-center ml-5 mr-5 hover-lift shadow-medium animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
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

      {/* Leadership Team */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-foreground">Leadership </span>
              <span className="text-gradient">Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Meet the visionary leaders driving our mission to transform the insurance industry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader, index) => (
              <Card key={index} className="text-center hover-lift shadow-medium animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8">
                  <div className="w-full flex justify-center mb-4">
                    {typeof leader.image === 'string' && (leader.image.endsWith('.png') || leader.image.endsWith('.webp') || leader.image.endsWith('.svg') || leader.image.endsWith('.jpg') || leader.image.endsWith('.jpeg')) ? (
                      <div style={{ width: '120px', height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', borderRadius: '1rem', boxShadow: '0 4px 16px rgba(54, 63, 112, 0.10)' }}>
                        <img
                          src={leader.image}
                          alt={leader.name + ' photo'}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            borderRadius: '1rem',
                          }}
                        />
                      </div>
                    ) : (
                      leader.image
                    )}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{leader.name}</h3>
                  <p className="text-primary font-medium mb-2">{leader.position}</p>
                  <Badge variant="secondary" className="mb-4">{leader.experience}</Badge>
                  
                  <p className="text-sm text-muted-foreground mb-4">{leader.bio}</p>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Key Achievements:</h4>
                    {leader.achievements.map((achievement, idx) => (
                      <div key={idx} className="text-xs text-muted-foreground flex items-start">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-1.5 flex-shrink-0" />
                        {achievement}
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex justify-center space-x-2 mt-6">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center cursor-pointer hover:bg-primary/20 transition-colors">
                      <Linkedin className="w-4 h-4 text-primary" />
                    </div>
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center cursor-pointer hover:bg-primary/20 transition-colors">
                      <Mail className="w-4 h-4 text-primary" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* rising star & performer */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-foreground">Our Performer </span>
              <span className="text-gradient">& Rising Star's</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Recognizing those who lead today and inspire tomorrow — our exceptional performers and rising stars.
            </p>
          </div>

          {/* Horizontal slider for rising stars & performers */}
          <div className="relative overflow-x-auto no-scrollbar">
            {/* Left fade overlay */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-16 z-10" style={{background: 'linear-gradient(to right, #f8fafc 60%, rgba(255,255,255,0))'}} />
            {/* Right fade overlay */}
            <div className="pointer-events-none absolute right-0 top-0 h-full w-16 z-10" style={{background: 'linear-gradient(to left, #f8fafc 70%, rgba(255,255,255,0))'}} />
            {/* Looping slider: duplicate cards for seamless infinite scroll */}
            <div className="flex space-x-8 animate-slide-loop" style={{ minWidth: '5800px' }}>
              {[...stars, ...stars].map((member, idx) => (
                <Card key={idx} className="min-w-[260px] max-w-xs flex-shrink-0  shadow-medium text-center">
                  <CardContent className="p-6 flex flex-col items-center">
                    <div style={{ width: '100px', height: '100px', overflow: 'hidden', borderRadius: '7rem', boxShadow: '0 4px 16px rgba(54, 63, 112, 0.10)', marginBottom: '1rem' }}>
                      <img
                        src={member.image}
                        alt={member.name + ' photo'}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '7rem' }}
                      />
                    </div>
                    <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-1">{member.position}</p>
                    <Badge variant="secondary" className="mb-2">{member.experience}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Add slider animation CSS and hide scrollbar */}
          <style>{`
            @keyframes slideLoop {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-slide-loop {
              animation: slideLoop 40s linear infinite;
            }
            .no-scrollbar::-webkit-scrollbar {
              display: none;
            }
            .no-scrollbar {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
            /* Fades for both light and dark backgrounds */
            .bg-background .fade-left,
            .bg-background .fade-right {
              background: linear-gradient(to right, #fff 70%, rgba(255,255,255,0));
            }
            @media (prefers-color-scheme: dark) {
              .bg-background .fade-left,
              .bg-background .fade-right {
                background: linear-gradient(to right, #181a20 70%, rgba(24,26,32,0));
              }
            }
          `}</style>
        </div>
      </section>


      {/* Departments */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-foreground">Our </span>
              <span className="text-gradient">Departments</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Diverse teams working together to deliver exceptional insurance experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {departments.map((dept, index) => (
              <Card key={index} className="text-center hover-lift shadow-medium animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8">
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-full ${dept.color} flex items-center justify-center`}>
                    <dept.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{dept.name}</h3>
                  <div className="text-3xl font-bold text-primary mb-4">{dept.count}</div>
                  <p className="text-sm text-muted-foreground">{dept.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-foreground">Awards & </span>
              <span className="text-gradient">Recognition</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our team's dedication has been recognized by industry leaders and customers alike.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {awards.map((award, index) => (
              <Card key={index} className="text-center hover-lift shadow-medium animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 mx-auto mb-4 bg-yellow-500/10 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-yellow-500" />
                  </div>
                  <h3 className="font-semibold mb-2">{award.title}</h3>
                  <p className="text-sm text-muted-foreground mb-1">{award.organization}</p>
                  <Badge variant="outline" className="text-xs">{award.year}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-foreground">What Makes Us </span>
                <span className="text-gradient">Special</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Our team is united by a shared passion for making insurance accessible 
                  and understandable for every Indian family. We believe in the power of 
                  technology, transparency, and human touch.
                </p>
                <p>
                  From our certified insurance advisors to our tech innovators, every 
                  team member plays a crucial role in delivering exceptional customer 
                  experiences and driving industry transformation.
                </p>
              </div>
              
              <div className="mt-8 space-y-3">
                {[
                  'Customer-first mindset in everything we do',
                  'Continuous learning and professional development',
                  'Innovation-driven approach to problem-solving',
                  'Collaborative and inclusive work environment',
                  'Commitment to transparency and ethical practices'
                ].map((value, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-sm">{value}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <Card className="shadow-strong hover-lift">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-center">Join Our Mission</h3>
                <div className="space-y-4 text-center">
                  <p className="text-muted-foreground">
                    Ready to be part of a team that's transforming the insurance industry? 
                    We're always looking for passionate individuals to join our mission.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 my-6">
                    <div>
                      <div className="text-2xl font-bold text-primary">200+</div>
                      <div className="text-sm text-muted-foreground">Team Members</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-secondary">6</div>
                      <div className="text-sm text-muted-foreground">Office Locations</div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Badge variant="secondary" className="mr-2">Remote-Friendly</Badge>
                    <Badge variant="secondary" className="mr-2">Learning Culture</Badge>
                    <Badge variant="secondary">Growth Opportunities</Badge>
                  </div>
                </div>
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

export default Team;