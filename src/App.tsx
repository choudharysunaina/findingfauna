import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/layout/Layout';
import Loader from './components/ui/Loader';
import ScrollToTop from './components/layout/ScrollToTop';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const KunoNationalPark = lazy(() => import('./pages/KunoNationalPark'));
const About = lazy(() => import('./pages/About'));
const Packages = lazy(() => import('./pages/Packages'));
const Contact = lazy(() => import('./pages/Contact'));
const BeyondSafari = lazy(() => import('./pages/BeyondSafari'));
const Blogs = lazy(() => import('./pages/Blogs'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const TermsAndConditions = lazy(() => import('./pages/TermsAndConditions'));
const KunoCheetahSafariPackage = lazy(() => import('./pages/KunoCheetahSafariPackage'));
const BigCatSafariPackage = lazy(() => import('./pages/BigCatSafariPackage'));
const PhotographyPackage = lazy(() => import('./pages/PhotographyPackage'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Layout>
          <Suspense fallback={<Loader />}>
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
          </Suspense>
        </Layout>
      </Router>
    </HelmetProvider>
  );
}

export default App;