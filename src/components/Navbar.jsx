import { href } from "react-router-dom";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { Menu, X } from "lucide-react";

const navItem = [
  { name: "Home", href: "/" },
  { name: "About", href: "#About" },
  { name: "Skills", href: "#Skills" },
  { name: "Projects", href: "#Projects" },
  { name: "Contact", href: "#Contact" },
];

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Update active section based on scroll position
      const sections = navItem.map(item => item.href.replace('#', ''));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      setActiveSection(currentSection || '');
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    if (href.startsWith('#')) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <nav
      className={clsx(
        "fixed w-full z-50 transition-all duration-500 ease-out",
        isScrolled 
          ? "py-3 bg-background/90 backdrop-blur-xl shadow-lg border-b border-border/50" 
          : "py-5 bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a
          className="text-xl font-bold text-primary flex items-center group cursor-pointer"
          href="/"
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Daniel Sheleme
            </span> 
            <span className="ml-2 text-foreground/80">Portfolio</span>
          </span>
          <div className="absolute -inset-2 bg-primary/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 opacity-0 group-hover:opacity-100" />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1 bg-background/50 backdrop-blur-sm rounded-2xl px-4 py-2 border border-border/30">
          {navItem.map((item, index) => (
            <a
              key={index}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
              className={clsx(
                "relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg",
                activeSection === item.href.replace('#', '') || (item.href === '/' && activeSection === '')
                  ? "text-primary bg-primary/10"
                  : "text-foreground/70 hover:text-primary hover:bg-primary/5"
              )}
            >
              {item.name}
              <div className={clsx(
                "absolute bottom-0 left-1/2 w-1 h-1 bg-primary rounded-full -translate-x-1/2 translate-y-1 transition-all duration-300",
                activeSection === item.href.replace('#', '') || (item.href === '/' && activeSection === '')
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-50"
              )} />
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-3 text-foreground z-50 relative rounded-lg bg-background/50 backdrop-blur-sm border border-border/30 transition-all duration-300 hover:bg-primary/5 hover:border-primary/20"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? (
            <X size={20} className="transition-transform duration-300 rotate-90 scale-110" />
          ) : (
            <Menu size={20} className="transition-transform duration-300" />
          )}
        </button>

        {/* Mobile Navigation */}
        <div
          className={clsx(
            "fixed inset-0 bg-background/95 backdrop-blur-2xl z-40 flex flex-col items-center justify-center",
            "transition-all duration-500 ease-in-out md:hidden",
            isMenuOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-4 pointer-events-none"
          )}
        >
          <div className="flex flex-col items-center space-y-2 w-full max-w-sm px-6">
            {navItem.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={clsx(
                  "w-full text-center py-4 px-6 text-lg font-medium rounded-xl transition-all duration-300 border border-transparent",
                  "hover:bg-primary/5 hover:border-primary/20 hover:scale-105 active:scale-95",
                  activeSection === item.href.replace('#', '') || (item.href === '/' && activeSection === '')
                    ? "text-primary bg-primary/10 border-primary/20 scale-105"
                    : "text-foreground/80"
                )}
                style={{ transitionDelay: isMenuOpen ? `${index * 100}ms` : '0ms' }}
              >
                {item.name}
              </a>
            ))}
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-primary/10 rounded-full blur-2xl animate-pulse delay-1000" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
