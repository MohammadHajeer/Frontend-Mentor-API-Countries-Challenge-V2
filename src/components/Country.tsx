import { flagVariants } from "../motion/motion";
import { motion } from "framer-motion";
import { CountryProps } from "../types/types";
import { useNavigate } from "react-router-dom";

const Country = (props: CountryProps) => {
  const navigate = useNavigate();
  return (
    <motion.div
      variants={flagVariants}
      animate="hidden"
      whileHover="visible"
      whileTap="tab"
      className="shadow-lg rounded-xl overflow-hidden text-[--text-color] cursor-pointer"
      onClick={() => {
        navigate(`/countries/${props.name}`);
      }}
    >
      <img
        className="h-[200px] w-full object-cover object-center max-md:h-[250px]"
        src={props.flags.svg}
        alt={`${props.name} flag`}
      />
      <div className="p-6">
        <h2 className="font-bold text-xl mb-5">{props.name}</h2>
        <div className="flex flex-col gap-2">
          <p className="font-semibold">
            Population:{" "}
            <span className="font-normal">
              {props.population.toLocaleString("en-US")}
            </span>
          </p>
          <p className="font-semibold">
            Region: <span className="font-normal">{props.region}</span>
          </p>
          <p className="font-semibold">
            Capital: <span className="font-normal">{props.capital}</span>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Country;
