import { motion } from "framer-motion";

const stats = [
  {
    number: "6+",
    label: "Years Experience",
  },
  {
    number: "100+",
    label: "Projects Delivered",
  },
  {
    number: "20+",
    label: "Happy Clients",
  },
  {
    number: "2",
    label: "Global Locations",
  },
];

const AboutCompany = () => {
  return (
    <section id="about" className="min-h-screen bg-white px-6 py-24 md:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#C48A18]">
            Who We Are
          </p>

          <h2 className="mt-3 text-4xl font-bold text-[#111111] md:text-5xl">
            About Ahaan
          </h2>

          <p className="mt-5 leading-8 text-slate-500">
            Ahaan Software Consulting LLP is a technology-driven organization
            focused on creating meaningful digital solutions for businesses of
            all sizes.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-4">
          {stats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-2xl border border-slate-200 bg-[#f8f8f6] p-8 text-center transition duration-300 hover:-translate-y-2 hover:border-[#C48A18] hover:shadow-lg"
            >
              <h3 className="text-4xl font-bold text-[#C48A18]">
                {item.number}
              </h3>

              <p className="mt-2 text-sm text-slate-500">{item.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl bg-[#111111] p-8 text-white">
            <p className="text-sm font-bold uppercase tracking-widest text-[#E6B33C]">
              Our Mission
            </p>

            <p className="mt-4 leading-8 text-slate-300">
              Our mission is to empower businesses with innovative, reliable,
              and scalable technology solutions that turn ideas into impactful
              digital experiences. We combine modern technology, thoughtful
              design, and strong engineering to solve complex challenges,
              improve efficiency, and accelerate growth. By understanding our
              clients’ unique goals and needs, we deliver future-ready solutions
              that create measurable value and build lasting partnerships.
            </p>
          </div>

          <div className="rounded-3xl border border-[#E6B33C]/40 bg-white p-8">
            <p className="text-sm font-bold uppercase tracking-widest text-[#C48A18]">
              Our Vision
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              To become a globally trusted technology partner, recognized for
              innovation, exceptional quality, and meaningful digital solutions.
              We aspire to help businesses embrace emerging technologies,
              overcome complex challenges, and unlock new opportunities for
              growth. Through continuous innovation, collaboration, and a
              commitment to excellence, we aim to create lasting value and build
              long-term partnerships with businesses around the world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
