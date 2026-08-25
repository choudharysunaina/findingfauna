import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/layout/Layout';
import ScrollToTop from './components/layout/ScrollToTop';

import Home from './pages/Home';
import KunoNationalPark from './pages/KunoNationalPark';
import About from './pages/About';
import Packages from './pages/Packages';
import Contact from './pages/Contact';
import BeyondSafari from './pages/BeyondSafari';
import Blogs from './pages/Blogs';
import BlogPost from './pages/BlogPost';
import BlogCategory from './pages/BlogCategory';
import TermsAndConditions from './pages/TermsAndConditions';
import PackageDetailPage from './pages/PackageDetailPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import NotFound from './pages/NotFound';

// Planning guides — one page per high-intent search. Registered in
// src/data/guides.ts (cross-linking) and scripts/generate-sitemap.mjs (indexing).
import KunoSafariBooking from './pages/guides/KunoSafariBooking';
import KunoSafariPrice from './pages/guides/KunoSafariPrice';
import KunoSafariZones from './pages/guides/KunoSafariZones';
import BestTimeToVisitKuno from './pages/guides/BestTimeToVisitKuno';
import HowToReachKuno from './pages/guides/HowToReachKuno';
import WhereToStayNearKuno from './pages/guides/WhereToStayNearKuno';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/kuno-national-park" element={<KunoNationalPark />} />
            <Route path="/kuno-safari-booking" element={<KunoSafariBooking />} />
            <Route path="/kuno-safari-price" element={<KunoSafariPrice />} />
            <Route path="/kuno-safari-zones" element={<KunoSafariZones />} />
            <Route path="/best-time-to-visit-kuno" element={<BestTimeToVisitKuno />} />
            <Route path="/how-to-reach-kuno" element={<HowToReachKuno />} />
            <Route path="/where-to-stay-near-kuno" element={<WhereToStayNearKuno />} />
            <Route path="/about" element={<About />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/beyond-safari" element={<BeyondSafari />} />
            <Route path="/blogs" element={<Blogs />} />
            {/* Category archives must be declared before /blog/:slug so that
                "category" is not matched as a post slug. */}
            <Route path="/blog/category/:categorySlug" element={<BlogCategory />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/package/:packageId" element={<PackageDetailPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Router>
    </HelmetProvider>
  );
}

export default App;