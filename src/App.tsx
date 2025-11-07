import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/layout/Layout';
import Loader from './components/ui/Loader';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Packages = lazy(() => import('./pages/Packages'));
const Contact = lazy(() => import('./pages/Contact'));
const BeyondSafari = lazy(() => import('./pages/BeyondSafari'));
const TermsAndConditions = lazy(() => import('./pages/TermsAndConditions'));
const KunoCheetahSafariPackage = lazy(() => import('./pages/KunoCheetahSafariPackage'));
const BigCatSafariPackage = lazy(() => import('./pages/BigCatSafariPackage'));
const PhotographyPackage = lazy(() => import('./pages/PhotographyPackage'));
const ImageTest = lazy(() => import('./components/ui/ImageTest'));
const SimpleImageTest = lazy(() => import('./components/ui/SimpleImageTest'));
const SingleImageTest = lazy(() => import('./components/ui/SingleImageTest'));
const BasicTest = lazy(() => import('./components/ui/BasicTest'));
const Test = lazy(() => import('./pages/test'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Layout>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/packages" element={<Packages />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/beyond-safari" element={<BeyondSafari />} />  
              <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
              <Route path="/package/kuno-cheetah-safari-package" element={<KunoCheetahSafariPackage />} />
              <Route path="/package/big-cat-safari-package" element={<BigCatSafariPackage />} />
              <Route path="/package/photography-package" element={<PhotographyPackage />} />
              <Route path="/image-test" element={<ImageTest />} />
              <Route path="/simple-image-test" element={<SimpleImageTest />} />
              <Route path="/single-image-test" element={<SingleImageTest />} />
              <Route path="/basic-test" element={<BasicTest />} />
              <Route path='/test' element={<Test />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            </Routes>
          </Suspense>
        </Layout>
      </Router>
    </HelmetProvider>
  );
}

export default App;