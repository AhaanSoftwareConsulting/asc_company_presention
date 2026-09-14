import { motion } from "framer-motion";

const ExecutiveSummary = () => {
  // Unsplash Business & Handshake Images
  const primaryImage =
    "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80";
  const secondaryImage =
    "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80";

  const points = [
    {
      title: "Business idea overview",
      description:
        "We empower businesses with cutting-edge digital solutions, scalable architectures, and modern web applications tailored to transform your vision into market-leading products.",
    },
    {
      title: "Target market",
      description:
        "Our focus spans across tech startups, growing SMBs, and enterprise brands globally looking for reliable engineering partners to drive digital growth and transformation.",
    },
    {
      title: "Competitive advantage",
      description:
        "Driven by a strong leadership vision, agile development practices, robust security standards, and a customer-first approach that guarantees measurable long-term ROI.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white px-6 py-20 md:px-16 lg:px-24">
      <div className="mx-auto max-w-7xl">
        {/* Title Section */}
        <div className="text-center md:text-left">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#C48A18] md:text-sm">
            Company Overview
          </p>
          <h2 className="mt-2 text-4xl font-extrabold Capitalize tracking-tight text-[#111111] md:text-5xl lg:text-6xl">
            Executive Summary
          </h2>
        </div>

        {/* Content & Images Grid */}
        <div className="mt-12 grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* LEFT: Bullet Points */}
          <div className="space-y-8 lg:col-span-7">
            {points.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex items-start gap-4 md:gap-6"
              >
                {/* Custom Glowing Gold Bullet Point */}
                <div className="mt-1.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#111111] shadow-md shadow-[#C48A18]/20">
                  <div className="h-2.5 w-2.5 rounded-full bg-[#C48A18]" />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#111111] md:text-2xl">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 md:text-base">
                    {point.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* RIGHT: Overlapping Dual Image Layout */}
          <div className="relative mt-8 flex justify-center lg:col-span-5 lg:mt-0 lg:justify-end">
            <div className="relative w-full max-w-[420px]">
              
              {/* Gold Background Accent Box */}
              <div className="absolute -bottom-6 -right-6 h-4/5 w-4/5 rounded-2xl bg-gradient-to-br from-[#D4AF37] to-[#C48A18] opacity-20" />

              {/* Main Front Image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative z-20 h-[380px] w-[82%] overflow-hidden rounded-2xl border-4 border-white shadow-2xl md:h-[440px]"
              >
                <img
                  src={primaryImage}
                  alt="Corporate Executive"
                  className="h-full w-full object-cover"
                />
              </motion.div>

              {/* Secondary Overlapping Image (Bottom Right) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, x: 20 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="absolute -bottom-8 right-0 z-30 h-[220px] w-[60%] overflow-hidden rounded-2xl border-4 border-white shadow-2xl md:h-[260px]"
              >
                <img
                  src={secondaryImage}
                  alt="Business Handshake"
                  className="h-full w-full object-cover"
                />
              </motion.div>

              {/* Dark Accent Box */}
              <div className="absolute -left-4 -top-4 z-0 h-32 w-32 rounded-xl bg-[#111111] opacity-90" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExecutiveSummary;