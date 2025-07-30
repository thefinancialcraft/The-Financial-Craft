// src/components/Layout.tsx
import Navbar from "@/components/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import { Helmet } from 'react-helmet-async';

const Layout = () => {
  const location = useLocation();

  return (
    <>
          <Helmet>
  {/* ✅ SEO Title & Updated Description */}
  <title>The Financial Craft | Insurance Made Easy </title>
  <meta
    name="description"
    content="Get free quotes & discounts on Health, Life & Car Insurance. Compare & buy online instantly with The Financial Craft – your trusted insurance partner"
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


      <Navbar />
      {/* Outlet renders child routes */}
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
