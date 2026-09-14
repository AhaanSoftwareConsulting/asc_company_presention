import { motion } from "framer-motion";

const technologies = [
  {
    name: "React.js",
    icon: "https://ahaanmedia.com/ahaanwebsite/technology/React.webp",
  },
  {
    name: "Node.js",
    icon: "https://ahaanmedia.com/ahaanwebsite/technology/Node.webp",
  },
  {
    name: "MongoDB",
    icon: "https://ahaanmedia.com/ahaanwebsite/technology/Mongodb.webp",
  },
  {
    name: "JavaScript",
    icon: "https://ahaanmedia.com/ahaanwebsite/technology/JS.webp",
  },
  {
    name: "Python",
    icon: "https://ahaanmedia.com/ahaanwebsite/technology/Python.webp",
  },
  {
    name: "WordPress",
    icon: "https://ahaanmedia.com/ahaanwebsite/technology/Wordpress.webp",
  },
  {
    name: "Shopify",
    icon: "https://ahaanmedia.com/ahaanwebsite/technology/Shopify.webp",
  },
  {
    name: "PHP",
    icon: "https://ahaanmedia.com/ahaanwebsite/technology/Php.webp",
  },
  {
    name: "Tailwind CSS",
    icon: "https://ahaanmedia.com/ahaanwebsite/technology/Tailwind.webp",
  },
  {
    name: "AWS",
    icon: "https://ahaanmedia.com/ahaanwebsite/technology/AWS.webp",
  },
  {
    name: "Docker",
    icon: "https://ahaanmedia.com/ahaanwebsite/technology/Docker.webp",
  },
  {
    name: "Next.js",
    icon: "https://ahaanmedia.com/ahaanwebsite/technology/Next.webp",
  },
];

const TechnologyStack = () => {
  return (
    <section id="technology" className="bg-white px-6 py-20 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#C48A18]">
            Technology
          </p>

          <h2 className="mt-3 text-4xl font-bold text-[#111111] md:text-5xl lg:text-6xl">
            Technology Stack
          </h2>
        </div>

        {/* Increased Container Width and Spacing */}
        <div className="mx-auto mt-16 flex max-w-[1300px] flex-wrap justify-center gap-5 md:gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04, duration: 0.4 }}
              whileHover={{ y: -6, scale: 1.03 }}
              className="flex items-center gap-4 rounded-full border border-slate-200 bg-[#f8f8f6] px-8 py-4.5 text-base font-bold text-[#111111] shadow-sm transition duration-300 hover:border-[#C48A18] hover:bg-white hover:text-[#C48A18] hover:shadow-xl md:text-lg"
            >
              {tech.icon && (
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="h-7 w-7 object-contain md:h-8 md:w-8"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              )}
              <span className="tracking-wide">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyStack;