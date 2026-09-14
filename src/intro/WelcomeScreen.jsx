import { motion } from "framer-motion";
import logo from "../assets/asc.webp";
import indiaFlag from "../assets/india.gif";
import usaFlag from "../assets/usa.gif";

const WelcomeScreen = ({ onEnter }) => {
  return (
    <motion.section
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-[#FFFFFF] via-[#FAF8F5] to-[#F3EFE6] text-slate-900 selection:bg-[#C48A18] selection:text-white"
    >
      {/* ================= BACKGROUND GRAPHICS (WHITE, GOLD & BLACK ACCENTS) ================= */}

      {/* Modern Grid Pattern (Black Tint) */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(#000000 0.75px, transparent 0.75px)`,
          backgroundSize: "24px 24px",
        }}
      />

      {/* Soft Center Golden Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E6B33C]/15 blur-[130px]" />

      {/* Top Left Floating Rounded Card - Black & Gold Line */}
      <motion.div
        animate={{ y: [0, -12, 0], rotate: [0, 1.5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-10 top-12 hidden h-48 w-48 rounded-3xl border border-black/10 bg-white/60 p-4 shadow-sm backdrop-blur-md lg:block"
      >
        <div className="h-full w-full rounded-2xl border border-dashed border-[#C48A18]/40" />
      </motion.div>

      {/* Left Diagonal Lines Circle (Dark Graphic) */}
      <motion.div
        animate={{ y: [0, 15, 0], rotate: -360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute -left-16 bottom-1/4 h-64 w-64 rounded-full opacity-20"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #111111 0, #111111 1.5px, transparent 0, transparent 12px)",
        }}
      />

      {/* Top Right Grid Graphic (Black Graphic) */}
      <motion.div
        animate={{ y: [0, 10, 0], opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute right-12 top-10"
      >
        <svg width="140" height="140" viewBox="0 0 100 100">
          <defs>
            <pattern
              id="grid-black"
              width="14"
              height="14"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 14 0 L 0 0 0 14"
                fill="none"
                stroke="#111111"
                strokeWidth="0.8"
              />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid-black)" />
        </svg>
      </motion.div>

      {/* Top Right Pill Bar (Golden Touch) */}
      <motion.div
        animate={{ x: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute right-24 top-36 h-4 w-40 rounded-full bg-gradient-to-r from-[#C48A18]/30 via-[#E6B33C]/20 to-transparent border border-[#C48A18]/25"
      />

      {/* Bottom Right Vertical Lines (Black Accent) */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute right-8 bottom-16 h-56 w-40 opacity-20"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, #111111 0, #111111 1.5px, transparent 0, transparent 10px)",
        }}
      />

      {/* Bottom Right Curved Frame Shape */}
      <div className="pointer-events-none absolute -bottom-20 -right-12 h-80 w-[420px] rounded-tl-[120px] border-t border-l border-black/10 bg-gradient-to-tl from-[#C48A18]/15 via-[#C48A18]/5 to-transparent" />

      {/* Rotating Center Golden Ring Accent */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#C48A18]/20"
      >
        <div className="absolute top-0 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[#111111]" />
        <div className="absolute bottom-0 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[#C48A18]" />
      </motion.div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="relative z-10 flex flex-col items-center px-4 text-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <img
            src={logo}
            alt="Ahaan Software Consulting LLP"
            className="mx-auto h-auto w-[190px] object-contain drop-shadow-sm md:w-[220px]"
          />
        </motion.div>

        {/* Welcome Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.45em] text-[#C48A18] md:text-sm">
            Welcome To
          </p>

          {/* Heading - Strictly Single Line */}
          <h1 className="whitespace-nowrap text-2xl font-black tracking-tight text-[#111111] sm:text-4xl md:text-5xl lg:text-6xl">
            Ahaan Software{" "}
            <span className="text-[#C48A18]">Consulting LLP</span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-xs leading-relaxed text-slate-600 sm:text-sm md:text-base font-normal">
            Ahaan Software Consulting helps growing businesses design, build,
            and improve secure websites, web apps, mobile apps, e-commerce
            platforms, and custom business software through a dedicated
            India-based delivery team.
          </p>
        </motion.div>

        {/* Country Flags Section */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-10 flex items-center gap-6 md:gap-10"
        >
          {/* India */}
          <div className="flex flex-col items-center">
            <div className="flex h-16 w-20 items-center justify-center overflow-hidden rounded-xl  p-2  transition-all duration-300 hover:scale-105 hover:border-[#C48A18] md:h-20 md:w-24">
              <img
                src={indiaFlag}
                alt="India"
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <span className="mt-2 text-[11px] font-bold uppercase tracking-widest text-[#111111] md:text-xs">
              India
            </span>
          </div>

          {/* Divider */}
          <div className="h-10 w-px bg-gradient-to-b from-transparent via-[#C48A18]/60 to-transparent md:h-12" />

          {/* USA */}
          <div className="flex flex-col items-center">
            <div className="flex h-16 w-20 items-center justify-center overflow-hidden rounded-xl  p-2  transition-all duration-300 hover:scale-105 hover:border-[#C48A18] md:h-20 md:w-24">
              <img
                src={usaFlag}
                alt="USA"
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <span className="mt-2 text-[11px] font-bold uppercase tracking-widest text-[#111111] md:text-xs">
              USA
            </span>
          </div>
        </motion.div>

        {/* Premium Black Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          onClick={onEnter}
          className="group relative mt-12 overflow-hidden rounded-full border border-[#C48A18]/50 bg-[#111111] px-10 py-4 text-xs font-bold uppercase tracking-widest text-white shadow-lg transition-all duration-300 hover:bg-[#000000] hover:shadow-[0_10px_30px_rgba(196,138,24,0.3)] active:scale-95 md:px-12 md:py-4.5 md:text-sm"
        >
          <span className="relative z-10 text-white transition-colors duration-300 group-hover:text-[#E6B33C]">
            Enter Company Profile
          </span>
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
        </motion.button>
      </div>

      {/* Animated Bottom Golden Line */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ delay: 0.2, duration: 1.5 }}
        className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-transparent via-[#C48A18] to-transparent"
      />
    </motion.section>
  );
};

export default WelcomeScreen;
