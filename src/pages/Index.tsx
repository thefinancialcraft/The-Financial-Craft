import { Helmet } from 'react-helmet-async';
import { useEffect, useState } from 'react';
import HeroSection from '@/components/HeroSection';
import InsuranceTypes from '@/components/InsuranceTypes';
import ComparisonSection from '@/components/ComparisonSection';
import QuoteForm from '@/components/QuoteForm';
import TestimonialsSection from '@/components/TestimonialsSection';
import TaxBenefitsSection from '@/components/TaxBenefitsSection';
import Footer from '@/components/Footer';
import { Analytics } from "@vercel/analytics/react";

const Index = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [form, setForm] = useState({ name: '', city: '', mobile: '', plan: '' });
  const [submitted, setSubmitted] = useState(false);

 useEffect(() => {
  if (navigator.userAgent === 'ReactSnap') return; // SSR/bot case me skip
  const timer = setTimeout(() => setShowPopup(true), 10000);
  return () => clearTimeout(timer);
}, []);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setShowPopup(false), 1500);
  };

  return (
    <div className="min-h-screen">
      {/* ✅ SEO Helmet Tags */}
      <Helmet>
  {/* ✅ SEO Title & Updated Description */}
  <title>The Financial Craft | Compare Health, Life, Term & Car Insurance Plans in India </title>
  <meta
    name="description"
    content="Compare Health, Life, and Motor Insurance Plans — Get Free Quotes from Top Insurers. Buy Policies Online Instantly with Expert Assistance from The Financial Craft. Your Trusted Partner for Term Insurance, Health Coverage, Car Insurance, Tax-Saving Plans, Investment Solutions & More."
  />
  <meta
    name="keywords"
    content="insurance comparison India, health insurance plans, term insurance India, car insurance, best insurance companies, Care Health, Niva Bupa, Star Health, ICICI Lombard, Tata AIG, tax-saving insurance, investment insurance plans, low premium insurance, compare insurance online"
  />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://www.thefinancialcraft.com/" />

  {/* ✅ Business Identity */}
  <meta name="author" content="Ajay Kumar" />
  <meta name="publisher" content="The Financial Craft" />
  <meta name="organization" content="The Financial Craft" />
  <meta name="founder" content="Ajay Kumar" />
  <meta name="foundingDate" content="2021" />
  <meta name="address" content="F-13, 2nd Floor, Sector 6, Noida, Uttar Pradesh, India" />
  <meta name="contact" content="+91-8882558932" />
  <meta name="mail" content="ajay.kumar@thefinancialcraft.com" />
  <meta name="mail" content="info@thefinancialcraft.com" />

  {/* ✅ Open Graph (Facebook, LinkedIn, WhatsApp) */}
  <meta property="og:type" content="website" />
  <meta property="og:locale" content="en_IN" />
  <meta property="og:site_name" content="The Financial Craft" />
  <meta
    property="og:title"
    content="Compare Insurance Plans from Top Indian Companies | The Financial Craft"
  />
  <meta
    property="og:description"
    content="Compare Health, Life, Motor & Term Insurance Plans Online. Get Expert Help, Free Quotes & Instant Policy from India's Top Insurers like Care, Niva Bupa, ICICI & More."
  />
  <meta property="og:url" content="https://www.thefinancialcraft.com/" />
  <meta property="og:image" content="https://www.thefinancialcraft.com/assets/public/favicon-32x32.png" />

  {/* ✅ Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@thefinancialcraft" />
  <meta
    name="twitter:title"
    content="Compare Insurance Plans Online | The Financial Craft"
  />
  <meta
    name="twitter:description"
    content="Get instant quotes and buy insurance policies online from India's top companies. Trusted help with term, health, motor, and investment insurance."
  />
  <meta name="twitter:image" content="https://www.thefinancialcraft.com/assets/public/favicon-32x32.png"  />

  {/* ✅ Alternate Links for Crawling */}
  <link rel="alternate" href="https://www.thefinancialcraft.com/" hrefLang="en" />
  <link rel="alternate" href="https://www.thefinancialcraft.com/companies" hrefLang="en" />
  <link rel="alternate" href="https://www.thefinancialcraft.com/services" hrefLang="en" />
  <link rel="alternate" href="https://www.thefinancialcraft.com/about" hrefLang="en" />
  <link rel="alternate" href="https://www.thefinancialcraft.com/team" hrefLang="en" />
  <link rel="alternate" href="https://www.thefinancialcraft.com/career" hrefLang="en" />

  {/* ✅ Mobile & Favicon */}
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
   <link rel="icon" href="/public/favicon.ico" />
</Helmet>


      {/* Welcome Popup */}
      {showPopup && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-2xl shadow-strong max-w-[95vw] w-full sm:w-[400px] p-8 relative animate-fade-in">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-primary text-xl font-bold"
            >
              &times;
            </button>
            <div className="flex flex-col items-center">
              <h2 className="text-2xl font-bold text-primary mb-2 text-center">
                Welcome to The Financial Craft!
              </h2>
              <p className="text-center text-base text-muted-foreground mb-3">
                Find a better plan and get <span className="text-green-600 font-semibold">10% discount</span> on any
                plan of your choice.<br />Enter your details to secure your family today!
              </p>
              {submitted ? (
                <div className="text-green-600 font-semibold text-center py-6">
                  Thank you! Our team will contact you soon.
                </div>
              ) : (
                <form className="w-full space-y-3" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={form.city}
                    onChange={handleChange}
                    required
                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <input
                    type="tel"
                    name="mobile"
                    placeholder="Mobile No."
                    value={form.mobile}
                    onChange={handleChange}
                    required
                    pattern="[0-9]{10}"
                    maxLength={10}
                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <select
                    name="plan"
                    value={form.plan}
                    onChange={handleChange}
                    required
                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="" disabled>Select Plan Type</option>
                    <option value="health">Health Insurance</option>
                    <option value="motor">Motor Insurance</option>
                    <option value="life">Life Insurance</option>
                    <option value="term">Term Plan</option>
                    <option value="other">Other</option>
                  </select>
                  <button
                    type="submit"
                    className="w-full bg-primary text-white rounded-lg py-2 font-semibold hover:bg-primary/90 transition"
                  >
                    Get My Discount
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Main Sections */}
      <HeroSection />
      <InsuranceTypes />
      <ComparisonSection />
      <QuoteForm />
      <TestimonialsSection />
      <TaxBenefitsSection />
      <Analytics />
      <Footer />
    </div>
  );
};

export default Index;
