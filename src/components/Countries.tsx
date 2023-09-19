import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { slide } from "../motion/motion";
import { CountrySkeleton, Country, NoCountryFound } from ".";
import { fetchCountries } from "./fetchData";
import { CountriesType, CountryProps } from "../types/types";

const Countries = (props: CountriesType) => {
  const [countries, setCountries] = useState([]);
  const [mismatch, setMismatch] = useState<boolean>(false);

  useEffect(() => {
    setCountries([]);
    fetchCountries(props.region, props.name).then((data) => {
      const countries = data.filter((country: CountryProps) => {
        return country.name !== "Israel"; // removing the apartheid so call "state"
      });
      setCountries(countries);
      countries.length > 0 ? setMismatch(false) : setMismatch(true);
    });
  }, [props]);

  return (
    <>
      <motion.div
        variants={slide("top")}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.5 }}
        className="container my-8 grid-system relative"
      >
        {!countries.length &&
          !mismatch &&
          [1, 2, 3, 4, 5, 6, 7, 8].map((e) => <CountrySkeleton key={e} />)}
        {countries.length > 0 &&
          !mismatch &&
          countries.map((country: CountryProps) => (
            <Country
              key={country.name}
              name={country.name}
              population={country.population}
              region={country.region}
              capital={country.capital}
              flags={{ svg: country.flags.svg }}
            />
          ))}
      </motion.div>
      {mismatch && <NoCountryFound />}
    </>
  );
};

export default Countries;
