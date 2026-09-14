import { motion } from "framer-motion";
import {
  MagnifyingGlass,
  Strategy,
  PenNib,
  Code,
  CheckCircle,
  RocketLaunch,
} from "@phosphor-icons/react";

const processSteps = [
  {
    number: "01",
    title: "Discovery Phase",
    description:
      "Understanding business objectives, conducting target audience research, analyzing competitors, and defining project scope.",
    icon: MagnifyingGlass,
    color: "#E6B33C",
    accentBg: "bg-[#E6B33C]",
    offset: "lg:translate-y-28",
  },
  {
    number: "02",
    title: "Strategic Planning",
    description:
      "Creating a clear strategic roadmap, designing scalable system architecture, and selecting the optimal tech stack.",
    icon: Strategy,
    color: "#D49924",
    accentBg: "bg-[#D49924]",
    offset: "lg:translate-y-14",
  },
  {
    number: "03",
    title: "UI/UX Design",
    description:
      "Crafting intuitive wireframes, interactive prototypes, and modern pixel-perfect user interfaces backed by design systems.",
    icon: PenNib,
    color: "#C48A18",
    accentBg: "bg-[#C48A18]",
    offset: "lg:translate-y-0",
  },
  {
    number: "04",
    title: "Development",
    description:
      "Building robust frontend and backend solutions with clean, maintainable code and seamless API integrations.",
    icon: Code,
    color: "#9E6D0E",
    accentBg: "bg-[#9E6D0E]",
    offset: "lg:translate-y-0",
  },
  {
    number: "05",
    title: "Quality Assurance",
    description:
      "Executing end-to-end testing, security audits, cross-browser compatibility checks, and performance optimization.",
    icon: CheckCircle,
    color: "#282828",
    accentBg: "bg-[#282828]",
    offset: "lg:translate-y-14",
  },
  {
    number: "06",
    title: "Launch & Growth",
    description:
      "Deploying your product safely to production environments with real-time performance monitoring and ongoing technical support.",
    icon: RocketLaunch,
    color: "#111111",
    accentBg: "bg-[#111111]",
    offset: "lg:translate-y-28",
  },
];

const OurProcess = () => {
  return (
    <section
      id="process"
      className="px-4 py-16 md:px-8 md:py-24 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-[#C48A18]">
            How We Work
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#111111] md:text-5xl">
            Our Development Process
          </h2>
          <p className="mt-2 text-sm md:text-base text-slate-500 max-w-xl mx-auto">
            Transforming digital interactions into measurable business growth
            through structured steps
          </p>
        </div>

        {/* Process Steps Wrapper */}
        <div className="relative mt-12 pb-16">
          {/* Dashed Arc Line - Directly Connecting Dot Centers across the stepped curve */}
          <div className="absolute inset-x-0 top-0 bottom-0 hidden w-full pointer-events-none lg:block z-0">
            <svg
              className="w-full h-full"
              viewBox="0 0 1200 500"
              preserveAspectRatio="none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M 100 452 C 280 390, 420 220, 500 220 L 700 220 C 780 220, 920 390, 1100 452"
                stroke="#C48A18"
                strokeWidth="2.5"
                strokeDasharray="6 6"
                className="opacity-40"
              />
            </svg>
          </div>

          {/* Cards Grid */}
          <div className="relative z-10 grid gap-12 sm:grid-cols-2 lg:grid-cols-6 lg:gap-3">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className={`flex flex-col items-center group ${step.offset}`}
                >
                  {/* White Card */}
                  <div className="relative flex w-full flex-1 flex-col items-center justify-between rounded-2xl bg-white p-5 pt-4 text-center shadow-md border border-slate-100 transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-xl">
                    <div className="flex flex-col items-center w-full">
                      {/* Top Pill Line */}
                      <div
                        className={`h-1.5 w-10 rounded-full ${step.accentBg} mb-4`}
                      />

                      {/* Card Title */}
                      <h3 className="text-sm font-bold text-[#111111] tracking-tight">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="mt-2.5 text-[11px] leading-relaxed text-slate-500 font-normal">
                        {step.description}
                      </p>
                    </div>

                    {/* Hexagon Icon Badge */}
                    <div className="relative -mb-11 mt-6 flex h-14 w-14 items-center justify-center">
                      <svg
                        viewBox="0 0 100 100"
                        className="absolute inset-0 h-full w-full drop-shadow-md"
                      >
                        <polygon
                          points="50 3, 93 25, 93 75, 50 97, 7 75, 7 25"
                          fill={step.color}
                        />
                      </svg>
                      <IconComponent
                        size={22}
                        weight="bold"
                        className="relative z-10 text-white"
                      />
                    </div>
                  </div>

                  {/* Vertical Line Connecting Hexagon to Dot */}
                  <div className="h-10 w-0.5 bg-transparent" />

                  {/* Dot directly centered on SVG Line */}
                  <div
                    className={`relative z-20 h-4 w-4 rounded-full border-2 border-white ${step.accentBg} shadow-sm transition-transform duration-300 group-hover:scale-125`}
                  />

                  {/* Step Number */}
                  <div className="mt-2 text-xs font-extrabold text-[#111111]">
                    {step.number}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;