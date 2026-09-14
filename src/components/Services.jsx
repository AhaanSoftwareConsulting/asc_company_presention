import { motion } from "framer-motion";

const services = [
  {
    title: "Web Development",
    description: "Building fast, scalable, and responsive web applications tailored to your business needs.",
  },
  {
    title: "Mobile App Development",
    description: "Creating intuitive cross-platform mobile apps for seamless iOS and Android user experiences.",
  },
  {
    title: "UI/UX Design",
    description: "Crafting engaging, user-centered interfaces and intuitive journeys for digital products.",
  },
  {
    title: "E-Commerce Solutions",
    description: "Developing robust, secure online stores designed to maximize conversions and drive sales.",
  },
  {
    title: "AI & Machine Learning",
    description: "Integrating intelligent automation, predictive analytics, and AI models into modern systems.",
  },
  {
    title: "WordPress Development",
    description: "Delivering custom, scalable, and easy-to-manage WordPress sites and plugins.",
  },
  {
    title: "Shopify Development",
    description: "Building high-converting Shopify themes and custom storefronts for brand growth.",
  },
  {
    title: "Cloud & DevOps",
    description: "Optimizing cloud infrastructure, automated CI/CD pipelines, and server reliability.",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="min-h-screen bg-[#f8f8f6] px-6 py-24 md:px-16"
    >
      <div className="mx-auto max-w-7xl">

        <div className="mb-14">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#C48A18]">
            What We Do
          </p>

          <h2 className="mt-3 text-4xl font-bold text-[#111111] md:text-5xl">
            Our Services
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group flex flex-col justify-between rounded-3xl bg-[#111111] p-7 text-white transition duration-300 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(196,138,24,0.22)]"
            >
              <div>
                <span className="text-3xl font-bold text-[#E6B33C]">
                  0{index + 1}
                </span>

                <h3 className="mt-6 text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 h-[2px] w-10 bg-[#C48A18] transition-all duration-300 group-hover:w-full" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;