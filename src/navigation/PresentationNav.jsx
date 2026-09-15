import logo from "../assets/asc.webp";
import { useEffect, useState } from "react";

const PresentationNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    ["About", "about"],
    ["Services", "services"],
    ["Technology", "technology"],
    ["Process", "process"],
    ["Team", "team"],
    ["Contact", "contact"],
  ];

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/80 shadow-lg backdrop-blur-lg border-b border-gray-100"
          : "bg-white"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8">

        {/* Brand Logo */}
        <button
          onClick={() => goTo("company-intro")}
          className="group flex items-center transition duration-300 hover:scale-105"
          aria-label="Ahaan Software Consulting"
        >
          <img
            src={logo}
            alt="Ahaan Software Consulting"
            className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map(([label, id]) => (
            <button
              key={id}
              onClick={() => goTo(id)}
              className="group relative py-1 text-sm font-bold tracking-wide text-slate-700 transition-colors duration-300 hover:text-[#C48A18]"
            >
              {label}

              <span className="absolute bottom-0 left-0 h-[2px] w-0 rounded-full bg-[#C48A18] transition-all duration-300 ease-out group-hover:w-full" />
            </button>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex h-10 w-10 flex-col items-center justify-center rounded-lg transition hover:bg-gray-100 focus:outline-none lg:hidden"
          aria-label="Toggle Menu"
        >
          <span
            className={`block h-0.5 w-6 bg-slate-800 transition-transform duration-300 ${
              isMobileMenuOpen
                ? "translate-y-1.5 rotate-45"
                : "-translate-y-1"
            }`}
          />

          <span
            className={`block h-0.5 w-6 bg-slate-800 transition-opacity duration-300 ${
              isMobileMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          />

          <span
            className={`block h-0.5 w-6 bg-slate-800 transition-transform duration-300 ${
              isMobileMenuOpen
                ? "-translate-y-1.5 -rotate-45"
                : "translate-y-1"
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="border-b border-gray-100 bg-white/95 px-6 py-6 shadow-xl backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col gap-4">
            {navItems.map(([label, id]) => (
              <button
                key={id}
                onClick={() => goTo(id)}
                className="border-b border-gray-50 py-2 text-left text-base font-semibold text-slate-800 transition hover:text-[#C48A18]"
              >
                {label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default PresentationNav;