import { motion } from "framer-motion";
import {
  Quotes,
  TrendUp,
  Cpu,
  Lightbulb,
  ShieldCheck,
} from "@phosphor-icons/react";

import ceoImage from "../assets/vj.png";

const CeoSection = () => {
  const skills = [
    { name: "Strategic Leadership", level: "95%" },
    { name: "Tech Innovation", level: "90%" },
    { name: "Business Growth", level: "85%" },
  ];

  const highlights = [
    { icon: TrendUp, label: "Scalable Tech" },
    { icon: Cpu, label: "Modern Stack" },
    { icon: Lightbulb, label: "Innovation" },
    { icon: ShieldCheck, label: "Security First" },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#FAF8F5] px-6 py-20 md:px-16 lg:px-24">

      {/* Background Golden Glow */}
      <div className="pointer-events-none absolute -left-20 top-1/4 h-96 w-96 rounded-full bg-[#D4AF37]/10 blur-[120px]" />

      <div className="pointer-events-none absolute -right-20 bottom-10 h-96 w-96 rounded-full bg-[#D4AF37]/15 blur-[140px]" />

      {/* Decorative Rotating Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
        className="pointer-events-none absolute right-[10%] top-[10%] z-0 hidden h-[500px] w-[500px] rounded-full border border-dashed border-[#D4AF37]/20 lg:block"
      />

      {/* Desktop Diagonal Background */}
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-0 hidden w-[45%] bg-[#111111]/[0.03] lg:block"
        style={{
          clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0 100%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">

          {/* ================= LEFT CONTENT ================= */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            {/* Section Tag */}
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#C48A18] md:text-sm">
              Leadership & Vision
            </p>

            {/* Heading */}
            <h2 className="mt-2 text-4xl font-extrabold text-[#111111] md:text-5xl lg:text-6xl">
              Meet Our MD
            </h2>

            {/* Quote Header */}
            <div className="mt-8 flex items-start gap-4">
              <div className="shrink-0 rounded-2xl bg-[#111111] p-3 text-[#D4AF37] shadow-lg">
                <Quotes size={32} weight="fill" />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#111111] md:text-3xl">
                  Hi, I am Vishal Jaiswal,
                </h3>

                <p className="text-sm font-semibold text-[#C48A18] md:text-base">
                  The Founder of Ahaan Software Consulting LLP
                </p>
              </div>
            </div>

            {/* Main Description */}
            <p className="mt-6 text-base font-normal leading-relaxed text-slate-700 md:text-lg">
              With over 6+ years of industry experience, I lead our team in
              driving digital transformation and delivering high-value
              software products for businesses worldwide. Our focus is on
              building long-term partnerships, embracing innovation, and
              creating scalable digital solutions that help businesses grow
              with confidence.
            </p>

            {/* Secondary Description */}
            <p className="mt-4 text-sm leading-relaxed text-slate-500 md:text-base">
              We empower SMBs and modern brands through tailored technology
              architectures, modern development practices, robust security,
              and seamless user experiences across web and digital platforms.
            </p>

            {/* Key Focus Badges */}
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-2 rounded-xl border border-slate-100 bg-white/80 p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/30 hover:shadow-md"
                  >
                    <Icon
                      size={20}
                      className="shrink-0 text-[#C48A18]"
                      weight="bold"
                    />

                    <span className="text-xs font-bold text-[#111111]">
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Skills */}
            <div className="mt-10 max-w-lg space-y-5">
              {skills.map((skill, index) => (
                <div key={skill.name} className="space-y-1.5">

                  <div className="flex justify-between text-xs font-bold text-slate-800 md:text-sm">
                    <span>{skill.name}</span>

                    <span className="text-[#C48A18]">
                      {skill.level}
                    </span>
                  </div>

                  <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: skill.level }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1.2,
                        delay: index * 0.2,
                        ease: "easeOut",
                      }}
                      className="h-full rounded-full bg-gradient-to-r from-[#D4AF37] via-[#C48A18] to-[#111111]"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* CEO Sign-off */}
            <div className="mt-10 border-l-4 border-[#C48A18] pl-4">
              <h4 className="text-xl font-extrabold text-[#111111]">
                Vishal Jaiswal
              </h4>

              <p className="text-xs font-bold uppercase tracking-widest text-[#C48A18]">
                Founder & CEO
              </p>
            </div>
          </motion.div>

          {/* ================= RIGHT CEO IMAGE ================= */}
          <div className="relative flex items-center justify-center lg:col-span-5">

            <div className="relative h-[480px] w-full max-w-[420px] md:h-[540px]">

              {/* Background Dot Grid */}
              <div className="absolute -left-8 top-4 z-0 grid grid-cols-6 gap-2.5 opacity-30">
                {[...Array(30)].map((_, index) => (
                  <span
                    key={index}
                    className="h-1.5 w-1.5 rounded-full bg-[#111111]"
                  />
                ))}
              </div>

              {/* Light Gray Geometric Background */}
              <div
                className="absolute inset-0 z-0 bg-gradient-to-tr from-slate-200 to-slate-100 shadow-sm"
                style={{
                  clipPath:
                    "polygon(20% 0, 100% 0, 80% 100%, 0 100%)",
                }}
              />

              {/* Gold Diagonal Accent */}
              <div
                className="absolute inset-0 z-10 bg-gradient-to-b from-[#D4AF37] via-[#C48A18] to-[#996515] opacity-90 shadow-md"
                style={{
                  clipPath:
                    "polygon(70% 0, 88% 0, 30% 100%, 12% 100%)",
                }}
              />

              {/* Black Diagonal Accent */}
              <div
                className="absolute inset-0 z-10 bg-[#111111]"
                style={{
                  clipPath:
                    "polygon(88% 0, 96% 0, 38% 100%, 30% 100%)",
                }}
              />

              {/* ================= CEO IMAGE ================= */}
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.95,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.8,
                }}
                className="relative z-20 h-full w-full overflow-hidden shadow-2xl"
                style={{
                  clipPath:
                    "polygon(15% 0, 100% 0, 85% 100%, 0 100%)",
                }}
              >
                <img
                  src={ceoImage}
                  alt="Vishal Jaiswal - Founder & CEO"
                  className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                />
              </motion.div>

              {/* Gold Border Highlight */}
              <div
                className="pointer-events-none absolute -inset-3 z-30 border-r-4 border-[#D4AF37]"
                style={{
                  clipPath:
                    "polygon(82% 0, 100% 0, 18% 100%, 0% 100%)",
                }}
              />

              {/* Bottom Floating Label */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.4,
                }}
                className="absolute bottom-6 left-6 z-40 rounded-xl border border-white/20 bg-[#111111]/90 px-5 py-3 shadow-xl backdrop-blur-md"
              >
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
                  Founder & CEO
                </p>

                <p className="mt-1 text-sm font-bold text-white">
                  Vishal Jaiswal
                </p>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CeoSection;