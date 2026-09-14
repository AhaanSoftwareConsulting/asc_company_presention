import { motion } from "framer-motion";

const DoorOpening = ({ onComplete }) => {
  // Common transition easing for ultra-smooth dynamic feel
  const transitionConfig = {
    duration: 1.4,
    delay: 0.5,
    ease: [0.76, 0, 0.24, 1],
  };

  return (
    <div className="fixed inset-0 z-[90] pointer-events-none overflow-hidden bg-transparent">
      {/* Center Rotating Cyber Latch Ring (Dissolves as doors part) */}
      <motion.div
        initial={{ opacity: 1, scale: 1, rotate: 0 }}
        animate={{ opacity: 0, scale: 2, rotate: 180 }}
        transition={{ duration: 0.9, delay: 0.2, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
      >
        <div className="h-28 w-28 rounded-full border-2 border-dashed border-[#C48A18] bg-white/80 p-2 shadow-[0_0_30px_rgba(196,138,24,0.3)] backdrop-blur-md flex items-center justify-center">
          <div className="h-full w-full rounded-full border border-[#111111] bg-gradient-to-tr from-[#111111] via-[#222222] to-[#C48A18] flex items-center justify-center shadow-inner">
            <div className="h-6 w-6 rotate-45 border-2 border-[#E6B33C] bg-white/20" />
          </div>
        </div>
      </motion.div>

      {/* Cross Golden Light Flares */}
      <motion.div
        initial={{ opacity: 1, scale: 1 }}
        animate={{ opacity: 0, scale: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="absolute inset-0 z-40 flex items-center justify-center"
      >
        <div className="h-full w-[2px] bg-gradient-to-b from-transparent via-[#E6B33C] to-transparent shadow-[0_0_20px_#E6B33C]" />
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#E6B33C] to-transparent shadow-[0_0_20px_#E6B33C]" />
      </motion.div>

      {/* TOP-LEFT PANEL */}
      <motion.div
        initial={{ x: 0, y: 0 }}
        animate={{ x: "-100%", y: "-100%" }}
        transition={transitionConfig}
        className="pointer-events-auto absolute left-0 top-0 h-1/2 w-1/2 bg-gradient-to-br from-[#FFFFFF] via-[#FAF9F5] to-[#F1EDE2] border-r border-b border-[#C48A18]/40 shadow-2xl"
      >
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-45deg, #000 0, #000 1.5px, transparent 0, transparent 16px)",
          }}
        />
        <div className="absolute right-6 bottom-6 h-32 w-32 rounded-full border border-black/10 border-dashed opacity-30" />
      </motion.div>

      {/* TOP-RIGHT PANEL */}
      <motion.div
        initial={{ x: 0, y: 0 }}
        animate={{ x: "100%", y: "-100%" }}
        transition={transitionConfig}
        className="pointer-events-auto absolute right-0 top-0 h-1/2 w-1/2 bg-gradient-to-bl from-[#FFFFFF] via-[#FAF9F5] to-[#F1EDE2] border-l border-b border-[#C48A18]/40 shadow-2xl"
      >
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #000 0, #000 1.5px, transparent 0, transparent 16px)",
          }}
        />
        <div className="absolute left-6 bottom-6 h-32 w-32 rounded-full border border-black/10 border-dashed opacity-30" />
      </motion.div>

      {/* BOTTOM-LEFT PANEL */}
      <motion.div
        initial={{ x: 0, y: 0 }}
        animate={{ x: "-100%", y: "100%" }}
        transition={transitionConfig}
        className="pointer-events-auto absolute left-0 bottom-0 h-1/2 w-1/2 bg-gradient-to-tr from-[#FFFFFF] via-[#FAF9F5] to-[#F1EDE2] border-r border-t border-[#C48A18]/40 shadow-2xl"
      >
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #000 0, #000 1.5px, transparent 0, transparent 16px)",
          }}
        />
        <div className="absolute right-6 top-6 h-32 w-32 rounded-full border border-black/10 border-dashed opacity-30" />
      </motion.div>

      {/* BOTTOM-RIGHT PANEL */}
      <motion.div
        initial={{ x: 0, y: 0 }}
        animate={{ x: "100%", y: "100%" }}
        transition={transitionConfig}
        onAnimationComplete={onComplete}
        className="pointer-events-auto absolute right-0 bottom-0 h-1/2 w-1/2 bg-gradient-to-tl from-[#FFFFFF] via-[#FAF9F5] to-[#F1EDE2] border-l border-t border-[#C48A18]/40 shadow-2xl"
      >
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-45deg, #000 0, #000 1.5px, transparent 0, transparent 16px)",
          }}
        />
        <div className="absolute left-6 top-6 h-32 w-32 rounded-full border border-black/10 border-dashed opacity-30" />
      </motion.div>
    </div>
  );
};

export default DoorOpening;