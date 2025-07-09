import { href } from "react-router-dom";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { Menu, X } from "lucide-react";

const navItem = [
  { name: "Home", href: "/" },
  { name: "Aboute", href: "#Aboute" },
  { name: "Skill", href: "#Skill" },
  { name: "Project", href: "#Project" },
  { name: "Contact", href: "#Contact" },

];

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [ismenoOpen, setIsMenoOpen] = useState(false);

  useEffect(() => {
    const handleScrolled = () => {
      setIsScrolled(window.screenY > 10);
    };

    window.addEventListener("scroll", handleScrolled);
    return () => window.removeEventListener("scroll", handleScrolled);
  }, []);
  return (
    <nav
      className={clsx(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <a
          className="text-xl font-bold text-primary flex items-center"
          href="/"
        >
          <span className="relative z-10">
            <spa className="text-glow text-foreground">Daniel Sheleme </spa> Portfolio
          </span>
        </a>

        {/* {Fordesktop} */}

        <div className="hidden md:flex space-x-8">
          {navItem.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* for mobile */}

        <button
          onClick={() => setIsMenoOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50"
          aria-label={ismenoOpen ? "Close Menu" : "Open Menu"}
        >
          {ismenoOpen ? <X size={24} /> : <Menu size={24} />}

        </button>

        <div
          className={clsx(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            ismenoOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col items-center space-y-8 text-xl">
            {navItem.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenoOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
