import { useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { searchCountryVariants, searchInputAnimation } from "../motion/motion";
import { SearchProps } from "../types/types";

const SearchInput = ({
  setSearchDetails,
  name,
}: SearchProps & { name: string }) => {
  const control = useAnimation();
  const inputRef = useRef<HTMLInputElement>(null!);
  return (
    <motion.div
      variants={searchCountryVariants}
      initial="hidden"
      animate="visible"
      className="bg-[--elements-color] w-96 rounded-xl shadow-md flex items-center text-[--text-color] overflow-hidden"
    >
      <button
        aria-label="search icon"
        className=" px-5 h-16"
        onClick={() => {
          inputRef.current.focus();
          control.start(searchInputAnimation([0, 45, 90]));
        }}
      >
        <motion.i animate={control} className="fa fa-search"></motion.i>
      </button>
      <input
        ref={inputRef}
        value={name}
        className="bg-transparent flex-1 h-16 outline-none focus:placeholder:tracking-widest focus:placeholder:opacity-20 placeholder:transition-all"
        type="text"
        placeholder="Search for a country..."
        onFocus={() => {
          control.start(searchInputAnimation([0, 45, 90]));
        }}
        onChange={(e) => {
          control.start({ scale: [1, 1.2, 1], transition: { duration: 0.2 } });
          setSearchDetails({
            region: false,
            name: e.target.value.toLowerCase(),
          });
        }}
        onBlur={() => {
          control.start(searchInputAnimation([90, 45, 0]));
        }}
      />
    </motion.div>
  );
};

export default SearchInput;
