import { motion } from "framer-motion";

const ProgressIndicator = ({ activeSection, totalSections }) => {
  return (
    <div className="fixed right-5 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-2 md:flex">
      {Array.from({ length: totalSections }).map((_, index) => (
        <motion.div
          key={index}
          animate={{
            height: activeSection === index ? 28 : 8,
            backgroundColor:
              activeSection === index ? "#C48A18" : "#D1D5DB",
          }}
          className="w-[3px] rounded-full"
        />
      ))}
    </div>
  );
};

export default ProgressIndicator;