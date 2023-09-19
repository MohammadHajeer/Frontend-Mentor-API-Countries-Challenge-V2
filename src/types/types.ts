export type CountriesType = {
    region: boolean;
    name: string;
};

export type SearchProps = {
    setSearchDetails: (details: CountriesType) => void;
};

export type CountryProps = {
    name: string;
    population: number;
    region: string;
    capital: string;
    flags: {svg: string};
};

export type CountryMoreDetails = {
    flag: string;
    nativeName: string;
    population: string;
    region: string;
    subregion: string;
    capital: string;
    topLevelDomain: string;
    currencies: { code: string }[];
    languages: { name: string }[];
    borders: string[]
};