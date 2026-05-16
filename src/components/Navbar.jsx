import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const navLinks = [
    { label: "Profession", href: "#profession" },
    { label: "Stack", href: "#stack" },
    { label: "Certifications", href: "#certifications" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`flex justify-between items-center h-20 px-6 lg:px-16 relative sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : ""
      }`}
    >
      <div>
        <img
          src={`${process.env.PUBLIC_URL}/Logo.png`}
          alt="Logo"
          className="w-[120px] h-[120px] lg:h-[150px] lg:w-[150px] -ml-6"
        />
      </div>

      <div className="lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none"
        >
          <FontAwesomeIcon
            icon={isOpen ? faTimes : faBars}
            className="text-3xl"
          />
        </button>
      </div>

      <div className="hidden lg:flex space-x-8 text-lg">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="relative hover:text-secondary after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-secondary after:transition-all after:duration-300 hover:after:w-full"
          >
            {link.label}
          </a>
        ))}
      </div>

      {isOpen && (
        <div
          className="absolute top-20 left-4 right-4 z-50 
         bg-softWhite shadow-xl rounded-xl flex flex-col items-center
          py-4 gap-2 border border-white/10 animate-fade-in"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="w-full text-center text-lg font-medium 
              py-3 px-6 rounded-md text-primary"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
