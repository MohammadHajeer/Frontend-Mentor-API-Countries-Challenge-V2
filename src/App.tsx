import { useState } from "react";
import {
  Filter,
  Header,
  SearchInput,
  Countries,
  ChosenCountry,
  NotFoundPage,
} from "./components";
import { CountriesType } from "./types/types";
import { Route, Routes, Outlet } from "react-router-dom";

const App = () => {
  const [darkmode, setDarkmode] = useState<boolean>(
    localStorage.theme ? true : false
  );
  const [searchDetails, setSearchDetails] = useState<CountriesType>({
    region: true,
    name: "Asia",
  });

  if (darkmode) {
    document.body.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    document.body.classList.remove("dark");
    localStorage.theme = "";
  }

  const handleSearchDetails = (details: CountriesType): void => {
    setSearchDetails(details);
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Header darkMode={darkmode} setDarkmode={setDarkmode} />}
        >
          <Route
            index
            element={
              <>
                <div className="container flex justify-between items-center max-md:flex-col gap-6">
                  <SearchInput
                    name={searchDetails.name}
                    setSearchDetails={handleSearchDetails}
                  />
                  <Filter
                    setSearchDetails={handleSearchDetails}
                    region={searchDetails.region}
                    name={searchDetails.name}
                  />
                </div>
                <Countries
                  region={searchDetails.region}
                  name={searchDetails.name}
                />
              </>
            }
          />
          <Route path="countries" element={<Outlet />}>
            <Route
              path=""
              element={
                <>
                  <div className="container flex justify-between items-center max-md:flex-col gap-6">
                    <SearchInput
                      name={searchDetails.name}
                      setSearchDetails={handleSearchDetails}
                    />
                    <Filter
                      setSearchDetails={handleSearchDetails}
                      region={searchDetails.region}
                      name={searchDetails.name}
                    />
                  </div>
                  <Countries
                    region={searchDetails.region}
                    name={searchDetails.name}
                  />
                </>
              }
            />
            <Route path=":countryName" element={<ChosenCountry />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;

// https://restcountries.com/v3.1/name/
// https://restcountries.com/v3.1/all
// https://restcountries.com/v3.1/region/
