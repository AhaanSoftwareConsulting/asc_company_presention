import { motion } from "framer-motion";
import { ArrowRight, Target, Sparkle, TrendUp, ShieldCheck } from "@phosphor-icons/react";

const FutureGoals = () => {
  const teamImage =
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80";

  const goals = [
    {
      id: "01",
      icon: Target,
      title: "Global Market Expansion",
      description:
        "Expanding our core software consulting and web development reach globally. We aim to establish strategic technical partnerships with high-growth tech startups, mid-sized enterprises, and industry leaders worldwide.",
    },
    {
      id: "02",
      icon: Sparkle,
      title: "AI Integration & Innovation",
      description:
        "Seamlessly integrating generative AI models, smart automated workflows, and predictive analytics directly into modern enterprise software solutions to maximize speed, operational efficiency, and overall reliability.",
    },
    {
      id: "03",
      icon: ShieldCheck,
      title: "Scalable Infrastructure",
      description:
        "Engineering high-performance, resilient, and zero-downtime cloud architectures using modern tech stacks. Ensuring enterprise-grade data security and future-proof scalability for rapidly growing web and mobile systems.",
    },
    {
      id: "04",
      icon: TrendUp,
      title: "Long-term Strategic Partnerships",
      description:
        "Fostering end-to-end client relationships through transparent communication, agile delivery methods, user-centric UX strategies, and continuous product support that yields measurable, long-term ROI.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#FAF8F5] px-6 py-20 md:px-16 lg:px-24">
      
      {/* Background Soft Glow */}
      <div className="pointer-events-none absolute -right-20 top-0 h-96 w-96 rounded-full bg-[#D4AF37]/10 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        
        {/* HEADER SECTION */}
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#C48A18] md:text-sm">
                Our Roadmap
              </p>
            </div>
            <h2 className="mt-2 text-4xl font-black uppercase tracking-tight text-[#111111] md:text-5xl lg:text-6xl">
              Future Goals
            </h2>
          </div>

          {/* Top Right Decorative Geometric Triangles */}
          <div className="hidden items-center gap-2 md:flex">
            <div className="h-0 w-0 border-y-[10px] border-l-[18px] border-y-transparent border-l-[#111111]" />
            <div className="h-0 w-0 border-y-[10px] border-l-[18px] border-y-transparent border-l-[#C48A18]" />
            <div className="h-0 w-0 border-y-[10px] border-l-[18px] border-y-transparent border-l-[#111111]" />
          </div>
        </div>

        {/* PERFECTLY BALANCED TWO COLUMN GRID */}
        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          
          {/* LEFT COLUMN: Goals 01 & 02 */}
          <div className="space-y-12">
            {goals.slice(0, 2).map((goal, index) => (
              <motion.div
                key={goal.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group relative"
              >
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black text-[#C48A18] md:text-4xl">
                    {goal.id}
                  </span>
                  <div className="rounded-full bg-slate-200/50 p-2 text-[#111111] transition-colors group-hover:bg-[#C48A18] group-hover:text-white">
                    <goal.icon size={20} weight="bold" />
                  </div>
                </div>

                <h3 className="mt-2 text-xl font-bold text-[#111111] md:text-2xl">
                  {goal.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 md:text-base">
                  {goal.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* RIGHT COLUMN: Goals 03 & 04 + Team Image */}
          <div className="space-y-12">
            
            {/* Goal 03 & 04 */}
            <div className="space-y-12">
              {goals.slice(2, 4).map((goal, index) => (
                <motion.div
                  key={goal.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (index + 2) * 0.15 }}
                  className="group relative"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-black text-[#C48A18] md:text-4xl">
                      {goal.id}
                    </span>
                    <div className="rounded-full bg-slate-200/50 p-2 text-[#111111] transition-colors group-hover:bg-[#C48A18] group-hover:text-white">
                      <goal.icon size={20} weight="bold" />
                    </div>
                  </div>

                  <h3 className="mt-2 text-xl font-bold text-[#111111] md:text-2xl">
                    {goal.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 md:text-base">
                    {goal.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Bottom Team Image Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-2xl shadow-lg border border-slate-200/60"
            >
              <img
                src={teamImage}
                alt="Our Future Team"
                className="h-56 w-full object-cover transition-transform duration-500 hover:scale-105 md:h-60"
              />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-xl bg-white/95 p-3.5 backdrop-blur-md shadow-md">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#C48A18]">
                    Innovation Ahead
                  </p>
                  <p className="text-xs font-bold text-[#111111] md:text-sm">
                    Building Tomorrow's Tech Today
                  </p>
                </div>
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#111111] text-[#D4AF37]">
                  <ArrowRight size={14} weight="bold" />
                </div>
              </div>
            </motion.div>

          </div>

        </div>

      </div>

      {/* Bottom Accent Lines */}
      <div className="absolute bottom-0 left-0 h-2.5 w-1/4 rounded-r-full bg-[#111111]" />
      <div className="absolute bottom-0 left-1/4 ml-2 h-2.5 w-10 rounded-full bg-[#C48A18]" />
    </section>
  );
};

export default FutureGoals;