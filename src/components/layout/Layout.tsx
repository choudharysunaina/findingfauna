import { ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from './Navbar';
import Footer from './Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { trackPageView } from '../../utils/analytics';
import {
  generateOrganizationSchema,
  generateWebSiteSchema,
  generateLocalBusinessSchema,
} from '../../utils/seoUtils';

interface LayoutProps {
  children: ReactNode;
}

// Identity of the site and the business, identical on every page. Built once
// at module scope so it is not re-serialised on each render, and emitted here
// rather than statically in index.html so that src/config/site.ts stays the
// single source of truth for the business's name, address and phone.
const SITE_WIDE_SCHEMA = [
  generateOrganizationSchema(),
  generateWebSiteSchema(),
  generateLocalBusinessSchema(),
];

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();

  // Fire a GA4 page_view on every client-side route change (BrowserRouter
  // navigation does not trigger this automatically).
  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        {SITE_WIDE_SCHEMA.map((schema, index) => (
          <script type="application/ld+json" key={index}>
            {JSON.stringify(schema)}
          </script>
        ))}
      </Helmet>
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          transition={{ duration: 0.3 }}
          className="flex-grow pt-14"
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default Layout;