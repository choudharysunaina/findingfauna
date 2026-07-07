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
import TermsAndConditions from './pages/TermsAndConditions';
import KunoCheetahSafariPackage from './pages/KunoCheetahSafariPackage';
import BigCatSafariPackage from './pages/BigCatSafariPackage';
import PhotographyPackage from './pages/PhotographyPackage';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/kuno-national-park" element={<KunoNationalPark />} />
            <Route path="/about" element={<About />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/beyond-safari" element={<BeyondSafari />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/package/kuno-cheetah-safari-package" element={<KunoCheetahSafariPackage />} />
            <Route path="/package/big-cat-safari-package" element={<BigCatSafariPackage />} />
            <Route path="/package/photography-package" element={<PhotographyPackage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
        </Layout>
      </Router>
    </HelmetProvider>
  );
}

export default App;