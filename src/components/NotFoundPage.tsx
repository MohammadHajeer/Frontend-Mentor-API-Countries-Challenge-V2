import map from "../assets/map.png";
import { motion } from "framer-motion";
import { slide } from "../motion/motion";

const NotFoundPage = () => {
  return (
    <div
      className={`h-screen text-[--text-color] font-bold flex flex-col items-center justify-center relative}]`}
    >
      <img className="absolute bg-cover" src={map} alt="World Map" />
      <motion.div
        variants={slide("down")}
        initial="hidden"
        animate="visible"
        className="text-8xl max-sm:text-6xl"
      >
        <span>4</span>
        <span>0</span>
        <span>4</span>
      </motion.div>
      <motion.span
        variants={slide("top")}
        initial="hidden"
        animate="visible"
        className="text-5xl max-sm:text-4xl"
      >
        Page Not Found
      </motion.span>
    </div>
  );
};

export default NotFoundPage;
