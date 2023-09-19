import { useParams, useNavigate } from "react-router-dom";
import { fetchCountries, fetchCountry } from "./fetchData";
import { useEffect, useState } from "react";
import { CountryMoreDetails } from "../types/types";
import { NoCountryFound, ChosenCountrySkeleton } from ".";
import { motion } from "framer-motion";
import { slide } from "../motion/motion";

const ChosenCountry = () => {
  const navigate = useNavigate();
  const { countryName } = useParams();
  const [mismatch, setMismatch] = useState<boolean>(false);

  const [countryDetails, setCountryDetails] =
    useState<CountryMoreDetails | null>(null);
  const [countries, setCountries] = useState<
    { alpha3Code: string; name: string; alpha2Code: string }[]
  >([]);

  console.log(countryDetails);
  useEffect(() => {
    fetchCountry(countryName ? countryName : "").then((r) => {
      setCountryDetails(r[0] ? r[0] : null);
      r[0] ? setMismatch(false) : setMismatch(true);
    });

    fetchCountries(false, "").then((r) => setCountries(r));
  }, [countryName]);

  const getCountryName = (name: string): string => {
    let countryName: string = "";

    countries.forEach((country) => {
      if (country.alpha3Code === name || country.alpha2Code === name) {
        countryName = country.name;
      }
    });

    return countryName;
  };
  return (
    <>
      {countryDetails && (
        <div className="container text-[--text-color] overflow-hidden">
          <button
            onClick={() => {
              navigate(-1);
            }}
            className="bg-[--elements-color] py-3 px-10 rounded-xl flex items-center gap-5 text-xl shadow-xl"
          >
            <i className="fa fa-arrow-left"></i>
            Back
          </button>
          <div className="my-8 flex max-xl:flex-col max-xl:gap-10 items-center justify-between gap-32">
            <motion.div
              variants={slide("right")}
              initial="hidden"
              animate="visible"
              className="p-5 shadow-2xl"
            >
              <img
                className="w-[550px] h-[350px] max-sm:h-[250px] object-cover"
                src={countryDetails.flag}
                alt={`${countryName} flag`}
              />
            </motion.div>
            <motion.div
              variants={slide("left")}
              initial="hidden"
              animate="visible"
              className="flex-1 flex flex-col gap-5"
            >
              <h2 className="text-4xl font-bold max-xl:text-center">
                {countryName}
              </h2>
              <ul className="flex flex-col gap-3 xl:h-[200px] flex-wrap max-xl:items-center">
                <DetailList
                  title={"Native Name"}
                  desc={countryDetails.nativeName}
                />
                <DetailList
                  title={"Population"}
                  desc={countryDetails.population}
                />
                <DetailList title={"Region"} desc={countryDetails.region} />
                <DetailList
                  title={"Sub Region"}
                  desc={countryDetails.subregion}
                />
                <DetailList title={"Capital"} desc={countryDetails.capital} />
                <DetailList
                  title={"Top Level Domain"}
                  desc={countryDetails.topLevelDomain}
                />
                <DetailList
                  title={"Currencies"}
                  desc={countryDetails.currencies?.[0].code}
                />
                <li className="font-semibold flex gap-3">
                  Languages:{" "}
                  <ul className="font-normal flex gap-2">
                    {countryDetails.languages?.map((l) => (
                      <li key={l.name}>{l.name}</li>
                    ))}
                  </ul>
                </li>
              </ul>
              <div className="font-semibold flex max-xl:items-center max-xl:flex-col gap-3">
                <span className=" whitespace-nowrap">Border Countries:</span>
                <ul className="flex gap-2 flex-wrap font-normal max-xl:justify-center">
                  {countryDetails.borders?.map((b) => (
                    <li
                      className="bg-[--elements-color] py-2 px-5 rounded-xl"
                      key={b}
                    >
                      {getCountryName(b)}
                    </li>
                  ))}
                  {!countryDetails.borders?.length && (
                    <li className="bg-[--elements-color] py-2 px-5 rounded-xl">
                      None
                    </li>
                  )}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      )}

      {!countryDetails && mismatch && <NoCountryFound />}
      {!countryDetails && !mismatch && <ChosenCountrySkeleton />}
    </>
  );
};

export default ChosenCountry;

const DetailList = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <li className="font-semibold flex gap-3">
      {title}: <span className="font-normal">{desc}</span>
    </li>
  );
};
