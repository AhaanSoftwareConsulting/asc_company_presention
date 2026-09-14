import { motion } from "framer-motion";

const ContactCTA = () => {
  return (
    <section
      id="contact"
      className="flex min-h-screen items-center bg-[#f8f8f6] px-6 py-24 md:px-16"
    >
      <div className="mx-auto w-full max-w-6xl overflow-hidden rounded-[40px] bg-[#111111] px-8 py-20 text-center md:px-20">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#E6B33C]">
            Let's Work Together
          </p>

          <h2 className="mt-5 text-4xl font-bold text-white md:text-6xl">
            Let's Build Something
            <span className="block text-[#E6B33C]">
              Great Together.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-400">
            Have an idea or project in mind? Let's turn your
            vision into a powerful digital experience.
          </p>

          <button className="mt-10 rounded-full bg-[#E6B33C] px-9 py-4 text-sm font-bold uppercase tracking-wide text-[#111111] transition hover:bg-white">
            Book A Discovery Call
          </button>

          <div className="mt-12 flex flex-col items-center justify-center gap-3 text-sm text-slate-400 md:flex-row md:gap-8">
            <span>support@ahaansoftware.com</span>
            <span className="hidden md:block">•</span>
            <span>+1-646-575-9575</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ContactCTA;