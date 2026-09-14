import { motion } from "framer-motion";

const CompanyIntro = () => {
  const demoImages = {
    topRight: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
    centerMan: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
    bottomLeft: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    mainBuilding: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    bgSkyscraper: "https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?auto=format&fit=crop&w=1200&q=80",
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const floatAnimation = (duration = 4, delay = 0) => ({
    y: [0, -12, 0],
    transition: {
      duration,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
      delay,
    },
  });

  return (
    <section
      id="company-intro"
      className="relative min-h-screen w-full overflow-hidden bg-[#FAF8F5]"
    >
      {/* Background Skyscraper Watermark */}
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-[0.035]"
        style={{ backgroundImage: `url(${demoImages.bgSkyscraper})` }}
      />

      {/* Full-height Dark Background Shape for Right Side */}
      <div className="pointer-events-none absolute inset-y-0 right-0 z-0 hidden w-full lg:block lg:w-[55%] xl:w-[50%]">
        <div 
          className="h-full w-full bg-[#111111]"
          style={{ clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0 100%)" }}
        />
      </div>

      {/* Animated Graphic Rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute -right-20 -top-20 z-0 h-[500px] w-[500px] rounded-full border border-[#D4AF37]/20 border-dashed"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute bottom-[-100px] right-[25%] z-0 h-[400px] w-[400px] rounded-full border-[2px] border-[#D4AF37]/15"
      />

      {/* Main Content Wrapper */}
      <div className="relative z-10 flex min-h-screen flex-col justify-between py-8">
        {/* Top Header Row */}
        <div className="flex w-full items-center justify-between px-6 md:px-12 xl:px-20">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#C59B27] md:text-sm">
            Ahaan Software Consulting LLP
          </p>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 1 }}
            className="hidden grid-cols-6 gap-1.5 sm:grid"
          >
            {[...Array(24)].map((_, i) => (
              <motion.span
                key={i}
                animate={{ opacity: [0.2, 0.8, 0.2] }}
                transition={{ duration: 2, repeat: Infinity, delay: (i % 6) * 0.2 }}
                className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]"
              />
            ))}
          </motion.div>
        </div>

        {/* Main Grid Section */}
        <div className="my-auto grid w-full items-center gap-8 py-8 lg:grid-cols-12">
          
          {/* Left Content Area */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="px-6 sm:px-12 lg:col-span-6 lg:pl-16 xl:col-span-6 xl:pl-24"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="mb-6 inline-block">
              <span className="rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B8860B] px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-black shadow-lg md:text-sm">
                Global Tech Partner
              </span>
            </motion.div>

            {/* Title Case Heading with Gold Gradient & Black Accent */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl font-extrabold leading-[1.4] tracking-tight text-[#111111] sm:text-4xl md:text-5xl xl:text-6xl"
            >
              <span className="bg-gradient-to-r from-[#D4AF37] via-[#C59B27] to-[#996515] bg-clip-text text-transparent">
                Custom Software
              </span>{" "}
              & Dedicated Tech Teams{" "}
              <span className="block text-[#111111]">
                For Growing SMBs
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-xl text-base font-medium leading-relaxed text-slate-600 md:text-lg"
            >
              We help growing businesses design, build, and scale secure web apps, 
              mobile platforms, e-commerce solutions, and custom business software 
              through a dedicated offshore delivery team.
            </motion.p>
          </motion.div>

          {/* Right Side Graphics Section */}
          <div className="relative flex h-[500px] w-full items-center justify-center lg:col-span-6 lg:h-[650px] xl:col-span-6 xl:h-[720px]">
            
            {/* Mobile dark background fallback */}
            <div className="absolute inset-0 bg-[#111111] lg:hidden" />

            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "70%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute right-[4%] top-[15%] z-20 w-1 bg-gradient-to-b from-[#D4AF37] to-transparent"
            />

            <div className="relative h-full w-full">
              
              {/* Top Circle */}
              <motion.div
                initial={{ opacity: 0, scale: 0.4 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="absolute right-[18%] top-[8%] z-20 h-28 w-28 overflow-hidden rounded-full border-[5px] border-[#D4AF37] shadow-2xl md:h-36 md:w-36 lg:h-40 lg:w-40"
              >
                <motion.img
                  animate={floatAnimation(4, 0)}
                  src={demoImages.topRight}
                  alt="Meeting Room"
                  className="h-full w-full object-cover"
                />
              </motion.div>

              {/* Middle Circle */}
              <motion.div
                initial={{ opacity: 0, scale: 0.4 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="absolute left-[28%] top-[24%] z-20 h-40 w-40 overflow-hidden rounded-full border-[6px] border-white shadow-2xl md:h-52 md:w-52 lg:h-60 lg:w-60"
              >
                <motion.img
                  animate={floatAnimation(5, 0.5)}
                  src={demoImages.centerMan}
                  alt="Business Discussion"
                  className="h-full w-full object-cover"
                />
              </motion.div>

              {/* Bottom Left Circle */}
              <motion.div
                initial={{ opacity: 0, scale: 0.4 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute bottom-[10%] left-[10%] z-30 h-36 w-36 overflow-hidden rounded-full border-[6px] border-[#D4AF37] shadow-2xl md:h-48 md:w-48 lg:h-56 lg:w-56"
              >
                <motion.img
                  animate={floatAnimation(4.5, 1)}
                  src={demoImages.bottomLeft}
                  alt="Team Collaboration"
                  className="h-full w-full object-cover"
                />
              </motion.div>

              {/* Main Circle */}
              <motion.div
                initial={{ opacity: 0, scale: 0.4 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.55 }}
                className="absolute bottom-[5%] right-[4%] z-20 h-56 w-56 overflow-hidden rounded-full border-[8px] border-[#D4AF37] shadow-2xl md:h-72 md:w-72 lg:h-80 lg:w-80 xl:h-96 xl:w-96"
              >
                <motion.img
                  animate={floatAnimation(6, 0.2)}
                  src={demoImages.mainBuilding}
                  alt="Modern Architecture"
                  className="h-full w-full object-cover"
                />
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CompanyIntro;