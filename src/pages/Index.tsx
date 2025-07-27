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
        <title>The Financial Craft – Compare Your Best Plan Here</title>
        <meta name="description" content="Compare and choose the best health and life insurance plans in India at The Financial Craft. Get personalized quotes, expert advice, and the right coverage for you and your family." />
        <meta name="keywords" content="compare insurance, health insurance, life insurance, best plans, insurance quotes, affordable insurance, India insurance portal, The Financial Craft, term plans, health policy, policy comparison" />

        {/* Open Graph */}
        <meta property="og:title" content="The Financial Craft – Compare Your Best Plan Here" />
        <meta property="og:description" content="Compare top insurance companies, premiums, and benefits. Find the best plan for you and your family with expert guidance at The Financial Craft." />
        <meta property="og:image" content="/favicon.jpeg" />
        <meta property="og:url" content="https://www.thefinancialcraft.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="The Financial Craft" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@thefinancialcraft" />
        <meta name="twitter:title" content="The Financial Craft – Compare Your Best Plan Here" />
        <meta name="twitter:description" content="Compare top health and term insurance plans online. Find the right plan with ease and expert support at The Financial Craft." />
        <meta name="twitter:image" content="/src/assets/tfc-logo.png" />
        <meta name="twitter:creator" content="@thefinancialcraft" />
        <meta name="twitter:domain" content="thefinancialcraft.com" />

        <link rel="canonical" href="https://www.thefinancialcraft.com/" />
        <meta name="robots" content="index, follow" />
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
