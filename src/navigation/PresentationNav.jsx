import { useEffect, useState } from "react";

const PresentationNav = () => {
  const [scrolled, setScrolled] = useState(false);

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
  };

  return (
    <header
      className={`fixed left-0 top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/95 shadow-md backdrop-blur-md"
          : "bg-white"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        <button
          onClick={() => goTo("company-intro")}
          className="text-xl font-bold text-[#111111]"
        >
          AHAAN
          <span className="text-[#C48A18]">.</span>
        </button>

        <nav className="hidden items-center gap-7 lg:flex">
          {[
            ["About", "about"],
            ["Services", "services"],
            ["Technology", "technology"],
            ["Process", "process"],
            ["Team", "team"],
            ["Contact", "contact"],
          ].map(([label, id]) => (
            <button
              key={id}
              onClick={() => goTo(id)}
              className="text-sm font-semibold text-slate-700 transition hover:text-[#C48A18]"
            >
              {label}
            </button>
          ))}
        </nav>

        <button
          onClick={() => goTo("contact")}
          className="hidden rounded-full bg-[#C48A18] px-6 py-3 text-xs font-bold uppercase text-white transition hover:bg-[#A87312] md:block"
        >
          Book A Call
        </button>

      </div>
    </header>
  );
};

export default PresentationNav;