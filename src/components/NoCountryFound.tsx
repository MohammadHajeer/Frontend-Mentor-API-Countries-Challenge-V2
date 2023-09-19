import map from "../assets/map.png";
import { motion } from "framer-motion";
import { slide } from "../motion/motion";

const NoCountryFound = () => {
  return (
    <motion.div
      variants={slide("top")}
      initial="hidden"
      animate="visible"
      className="container text-4xl text-[--text-color] font-bold h-96 flex flex-col items-center text-center"
    >
      <motion.img className="object-contain h-full" src={map} alt="" />
      No Country with such name
    </motion.div>
  );
};

export default NoCountryFound;
