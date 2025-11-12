import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ResponsiveImage from '../ui/ResponsiveImage';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  let dropdownTimeout: ReturnType<typeof setTimeout> | null = null;
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const closeMenu = () => setIsMenuOpen(false);

  // Close mobile menu when route changes
  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Beyond Safari', path: '/beyond-safari' },
    { name: 'Contact', path: '/contact' },
    {
      name: 'Packages',
      path: '/packages',
      children: [
        { name: 'Kuno Cheetah Safari', path: '/package/kuno-cheetah-safari-package' },
        { name: '3 Big Cats Safari', path: '/package/big-cat-safari-package' },
        { name: '4 in 1 Safari Package', path: '/package/photography-package' }
      ]
    },
  ];

  const handleDropdownEnter = () => {
    if (dropdownTimeout) clearTimeout(dropdownTimeout);
    setDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout = setTimeout(() => setDropdownOpen(false), 150);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-0 ${
        scrolled 
          ? 'bg-white shadow-md py-0' 
          : 'bg-transparent py-1'
      }`}
    >
      <div className="container flex items-center justify-between">

        <NavLink to="/" className="text-2xl font-bold text-primary-600 flex items-center space-x-2">
            <img 
              src={`${import.meta.env.BASE_URL}logo.png`}
              alt="Finding Fauna Logo"  
              className="w-12 h-auto" 
              style={{ maxHeight: '48px' }}
            />
          
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.path}
                className="relative"
                onMouseEnter={handleDropdownEnter}
                onMouseLeave={handleDropdownLeave}
              >
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `relative font-medium transition-colors ${
                      isActive ? 'text-primary-600' : 'text-neutral-700 hover:text-primary-600'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
                {/* Dropdown */}
                {dropdownOpen && (
                  <div
                    className="absolute left-0 mt-2 w-60 bg-white shadow-lg rounded-md z-20"
                    onMouseEnter={handleDropdownEnter}
                    onMouseLeave={handleDropdownLeave}
                  >
                    {link.children.map((child) => (
                      <NavLink
                        key={child.path}
                        to={child.path}
                        className="block px-4 py-2 text-neutral-700 hover:bg-primary-50 hover:text-primary-600 rounded-md"
                      >
                        {child.name}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `relative font-medium transition-colors ${
                    isActive ? 'text-primary-600' : 'text-neutral-700 hover:text-primary-600'
                  }`
                }
              >
                {link.name}
              </NavLink>
            )
          )}
        </nav>

        {/* Contact Button (Desktop) */}
        <div className="hidden md:block">
          <NavLink to="/contact" className="btn-primary">
            Get in Touch
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-neutral-700 hover:text-primary-600 transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white"
          >
            <nav className="container py-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `py-2 px-4 rounded-md transition-colors ${
                      isActive
                        ? 'bg-primary-50 text-primary-600'
                        : 'text-neutral-700 hover:bg-neutral-100'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <NavLink
                to="/contact"
                className="btn-primary mt-2 text-center"
              >
                Get in Touch
              </NavLink>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
