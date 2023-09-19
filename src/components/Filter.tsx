import { useState, useEffect } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { filtersVariants, filterVariants } from "../motion/motion";
import { SearchProps, CountriesType } from "../types/types";

const Filter = ({
  setSearchDetails,
  region,
  name,
}: SearchProps & CountriesType) => {
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const [selectedRegion, setSelectedRegion] = useState<string>(name);
  const control = useAnimation();

  useEffect(() => {
    if (!region) {
      setSelectedRegion("");
    }
  }, [region]);

  const handleActiveFilter = (e: React.MouseEvent<HTMLButtonElement>): void => {
    setSelectedRegion(e.currentTarget.innerText);
    setSearchDetails({ region: true, name: e.currentTarget.innerText });
  };

  const handleFiltersVisibilty = () => {
    setShowFilters((prev) => !prev);
    showFilters
      ? control.start({
          y: [0, 100, 0],
          rotate: 0,
        })
      : control.start({
          y: [0, 100, 0],
          rotate: 180,
        });
  };
  return (
    <div className="text-[--text-color] relative">
      <button
        onClick={handleFiltersVisibilty}
        className="w-64 rounded-xl bg-[--elements-color]  shadow-md flex items-center justify-around h-16 overflow-hidden"
      >
        <span>Filter by region</span>
        <motion.i animate={control} className="fa fa-angle-up"></motion.i>
      </button>
      <AnimatePresence>
        {showFilters && (
          <motion.ul
            variants={filtersVariants}
            initial="hidden"
            animate="visible"
            exit={"hidden"}
            className="absolute z-50 bg-[--elements-color] rounded-lg shadow-md w-full -bottom-2 translate-y-full overflow-hidden"
          >
            {regions.map((region) => (
              <motion.li variants={filterVariants} key={region}>
                <button
                  onClick={handleActiveFilter}
                  className={`block py-3 px-5 w-full text-left transition-all relative overflow-hidden`}
                >
                  {region}
                  <span
                    className={`absolute w-5 h-5 rounded-full bottom-0 transition-all z-[-1] translate-y-1/2 -translate-x-1/2 left-0 bg-[--active-color] ${
                      selectedRegion === region
                        ? "w-full h-full origin-left translate-x-0 translate-y-[0] rounded-none"
                        : ""
                    }`}
                  ></span>
                </button>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Filter;

const regions: string[] = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
