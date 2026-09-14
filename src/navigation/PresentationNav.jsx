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
    setIsMobileMenuOpen(false); // মোবাইল মেনু খুললে অপশনে ক্লিক করলে বন্ধ হয়ে যাবে
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
          className="group text-2xl font-black tracking-tight text-[#111111] transition duration-300 hover:scale-105"
        >
          AHAAN
          <span className="text-[#C48A18] inline-block transition-transform duration-300 group-hover:translate-x-0.5">.</span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map(([label, id]) => (
            <button
              key={id}
              onClick={() => goTo(id)}
              className="relative text-sm font-bold text-slate-700 tracking-wide transition-colors duration-300 hover:text-[#C48A18] group py-1"
            >
              {label}
              {/* Bottom Animated Line on Hover */}
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#C48A18] transition-all duration-300 ease-out group-hover:w-full rounded-full" />
            </button>
          ))}
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex flex-col justify-center items-center w-10 h-10 rounded-lg lg:hidden hover:bg-gray-100 transition focus:outline-none"
          aria-label="Toggle Menu"
        >
          <span className={`block w-6 h-0.5 bg-slate-800 transition-transform duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-1.5" : "-translate-y-1"}`} />
          <span className={`block w-6 h-0.5 bg-slate-800 transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-0" : "opacity-100"}`} />
          <span className={`block w-6 h-0.5 bg-slate-800 transition-transform duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : "translate-y-1"}`} />
        </button>

      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-xl px-6 py-6 transition-all">
          <nav className="flex flex-col gap-4">
            {navItems.map(([label, id]) => (
              <button
                key={id}
                onClick={() => goTo(id)}
                className="text-left text-base font-semibold text-slate-800 hover:text-[#C48A18] transition py-2 border-b border-gray-50"
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