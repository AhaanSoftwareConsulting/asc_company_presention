import { motion } from "framer-motion";

const reasons = [
  {
    title: "Experienced Development Team",
    description:
      "Our skilled engineers and designers bring years of industry expertise to deliver high-performance, robust web applications.",
  },
  {
    title: "Modern Technology Stack",
    description:
      "We build with bleeding-edge technologies like React, Next.js, and Tailwind CSS to guarantee speed, efficiency, and reliability.",
  },
  {
    title: "Client-Centric Approach",
    description:
      "Your business vision is our priority. We align our workflows closely with your goals to ensure transparent communication.",
  },
  {
    title: "Scalable & Secure Solutions",
    description:
      "Architected to grow seamlessly with your business, adhering to top-tier enterprise security standards and best practices.",
  },
  {
    title: "Quality-Focused Development",
    description:
      "Rigorous testing and code reviews at every stage to ensure pixel-perfect design, zero glitches, and smooth performance.",
  },
  {
    title: "Long-Term Technical Support",
    description:
      "Our partnership doesn't end at launch. We provide ongoing maintenance, updates, and dedicated technical assistance.",
  },
];

const WhyAhaan = () => {
  return (
    <section
      id="why-ahaan"
      className="bg-[#111111] px-6 py-24 text-white md:px-16 lg:px-24"
    >
      <div className="mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#C48A18] md:text-sm">
            Our Difference
          </p>

          <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
            Why Choose <span className="text-[#C48A18]">Ahaan?</span>
          </h2>
        </div>

        {/* Grid Cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-300 hover:border-[#C48A18]/60 hover:bg-white/[0.05] hover:shadow-xl hover:shadow-[#C48A18]/5"
            >
              {/* Checkmark Icon */}
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C48A18] font-bold text-[#111111] transition-transform duration-300 group-hover:scale-110">
                ✓
              </div>

              {/* Title */}
              <h3 className="mt-6 text-xl font-bold text-white transition-colors duration-300 group-hover:text-[#C48A18]">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyAhaan;