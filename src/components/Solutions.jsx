import { motion } from "framer-motion";

const solutions = [
  "E-Commerce",
  "Healthcare",
  "Education",
  "Real Estate",
  "Finance",
  "Travel & Hospitality",
  "Business Automation",
  "Digital Transformation",
];

const Solutions = () => {
  return (
    <section
      id="solutions"
      className="min-h-screen bg-[#f8f8f6] px-6 py-24 md:px-16"
    >
      <div className="mx-auto max-w-7xl">

        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#C48A18]">
            Industries
          </p>

          <h2 className="mt-3 text-4xl font-bold text-[#111111] md:text-5xl">
            Solutions Built For Your Business
          </h2>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-4">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07 }}
              className="flex min-h-[170px] items-end rounded-3xl bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div>
                <span className="text-sm font-bold text-[#C48A18]">
                  0{index + 1}
                </span>

                <h3 className="mt-3 text-xl font-bold text-[#111111]">
                  {solution}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Solutions;