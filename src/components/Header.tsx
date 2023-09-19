// import { useState } from "react";
import { motion } from "framer-motion";
import { slideToTop } from "../motion/motion";
import { Outlet } from "react-router-dom";

const Header = ({
  setDarkmode,
  darkMode,
}: {
  setDarkmode(bool: boolean): void;
  darkMode: boolean;
}) => {
  return (
    <>
      <header className="shadow-md bg-[--elements-color] overflow-hidden">
        <motion.div
          variants={slideToTop}
          initial="hidden"
          animate="visible"
          className="container flex justify-between items-center py-6 max-sm:flex-col gap-6"
        >
          <h1 className="font-bold text-3xl text-[--text-color]">
            Where in the world ?
          </h1>
          <button
            aria-label="theme icon"
            onClick={() => {
              setDarkmode(!darkMode);
            }}
            className="flex items-center gap-5 font-semibold text-lg text-[--text-color]"
          >
            <i className="fa fa-moon"></i>
            DarkMode
          </button>
        </motion.div>
      </header>

      <div className="py-8 bg-[--bg-color]">{<Outlet />}</div>
    </>
  );
};

export default Header;
