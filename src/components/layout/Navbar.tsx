import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { trackEvent } from "../../utils/analytics";
import { guides } from "../../data/guides";

// Turn a nav label into a stable GA4 label slug, e.g. "Kuno National Park" -> "nav_kuno_national_park".
const navLabel = (name: string) =>
  `nav_${name.toLowerCase().replace(/\s+/g, "_")}`;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // Which dropdown is open, keyed by nav path. Was a single boolean, which
  // meant every dropdown opened at once as soon as a second one was added.
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Kuno National Park", path: "/kuno-national-park" },
    {
      // Hub is the booking guide, the highest-intent page of the cluster.
      name: "Plan Your Trip",
      path: "/kuno-safari-booking",
      children: guides.map((guide) => ({ name: guide.label, path: guide.path })),
    },
    { name: "Beyond Safari", path: "/beyond-safari" },
    { name: "Blog", path: "/blogs" },
    {
      name: "Packages",
      path: "/packages",
      children: [
        {
          name: "Kuno Cheetah Safari",
          path: "/package/kuno-cheetah-safari-package",
        },
        { name: "3 Big Cats Safari", path: "/package/big-cat-safari-package" },
        { name: "4 in 1 Safari Package", path: "/package/photography-package" },
      ],
    },
    { name: "About Us", path: "/about" },
  ];

  const handleDropdownEnter = (path: string) => {
    if (dropdownTimeout) clearTimeout(dropdownTimeout);
    setOpenDropdown(path);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout = setTimeout(() => setOpenDropdown(null), 150);
  };

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-0 ${
        scrolled
          ? "bg-white py-0 border-b border-neutral-200 shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
          : "bg-transparent py-1 border-b border-transparent"
      }`}
    >
      <div className="container flex items-center justify-between">
        <NavLink
          to="/"
          onClick={() =>
            trackEvent({ category: "nav", action: "click", label: "nav_logo" })
          }
          className="text-2xl font-bold text-primary-600 flex items-center space-x-2"
        >
          <img
            src={`${import.meta.env.BASE_URL}icons/logo.png`}
            alt="Finding Fauna — Kuno Cheetah Safari"
            width={1048}
            height={487}
            className="h-12 w-auto"
          />
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.path}
                className="relative"
                onMouseEnter={() => handleDropdownEnter(link.path)}
                onMouseLeave={handleDropdownLeave}
              >
                <NavLink
                  to={link.path}
                  onClick={() =>
                    trackEvent({
                      category: "nav",
                      action: "click",
                      label: navLabel(link.name),
                    })
                  }
                  className={({ isActive }) =>
                    `relative font-medium transition-colors ${
                      isActive
                        ? "text-primary-600"
                        : "text-neutral-700 hover:text-primary-600"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
                {/* Dropdown */}
                {openDropdown === link.path && (
                  <div
                    className="absolute left-0 mt-2 w-60 bg-white shadow-lg rounded-md z-20"
                    onMouseEnter={() => handleDropdownEnter(link.path)}
                    onMouseLeave={handleDropdownLeave}
                  >
                    {link.children.map((child) => (
                      <NavLink
                        key={child.path}
                        to={child.path}
                        onClick={() =>
                          trackEvent({
                            category: "nav",
                            action: "click",
                            label: `nav_dropdown_${navLabel(child.name).slice(4)}`,
                          })
                        }
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
                onClick={() =>
                  trackEvent({
                    category: "nav",
                    action: "click",
                    label: navLabel(link.name),
                  })
                }
                className={({ isActive }) =>
                  `relative font-medium transition-colors ${
                    isActive
                      ? "text-primary-600"
                      : "text-neutral-700 hover:text-primary-600"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ),
          )}
        </nav>

        {/* Contact Button (Desktop) */}
        <div className="hidden md:block">
          <NavLink
            to="/contact"
            onClick={() =>
              trackEvent({
                category: "nav",
                action: "click",
                label: "get_in_touch",
              })
            }
            className="btn-primary text-sm px-4 py-2"
          >
            Contact Us
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-neutral-700 hover:text-primary-600 transition-colors"
          onClick={() => {
            trackEvent({
              category: "nav",
              action: "click",
              label: isMenuOpen ? "mobile_menu_close" : "mobile_menu_open",
            });
            toggleMenu();
          }}
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
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white"
          >
            <nav className="container py-4 flex flex-col space-y-2">
              {navLinks.map((link) => (
                <div key={link.path}>
                  <NavLink
                    to={link.path}
                    onClick={() =>
                      trackEvent({
                        category: "nav",
                        action: "click",
                        label: `mobile_${navLabel(link.name).slice(4)}`,
                      })
                    }
                    className={({ isActive }) =>
                      `block py-2 px-4 rounded-md transition-colors ${
                        isActive
                          ? "bg-primary-50 text-primary-600"
                          : "text-neutral-700 hover:bg-neutral-100"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                  {/* Sub-pages were previously desktop-hover-only, so on mobile
                      the package and guide pages had no nav entry at all. */}
                  {link.children && (
                    <div className="ml-4 border-l border-neutral-200 pl-2">
                      {link.children.map((child) => (
                        <NavLink
                          key={child.path}
                          to={child.path}
                          onClick={() =>
                            trackEvent({
                              category: "nav",
                              action: "click",
                              label: `mobile_dropdown_${navLabel(child.name).slice(4)}`,
                            })
                          }
                          className={({ isActive }) =>
                            `block py-2 px-4 text-sm rounded-md transition-colors ${
                              isActive
                                ? "text-primary-600"
                                : "text-neutral-600 hover:bg-neutral-100"
                            }`
                          }
                        >
                          {child.name}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <NavLink
                to="/contact"
                onClick={() =>
                  trackEvent({
                    category: "nav",
                    action: "click",
                    label: "mobile_get_in_touch",
                  })
                }
                className="btn-primary mt-2 text-center"
              >
                Contact Us
              </NavLink>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
