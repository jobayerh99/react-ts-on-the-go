import { use, useState } from "react";
import type { CountryType } from "../../country";
import Country from "../Country/Country";
import "./Countries.css";

export interface CountriesProps {
  countriesPromise: Promise<CountryType[]>;
}

export default function Countries({ countriesPromise }: CountriesProps) {
  const countries = use(countriesPromise);
  // console.log(countries);

  const [visitedCountries, setVisitedCountries] = useState<CountryType[]>([])

  const handleVisitedCountries = (country:CountryType):void => {
    const newVisitedCountries = [...visitedCountries, country]
    setVisitedCountries(newVisitedCountries);
  }

  return (
    <div>
      <h2>Countries: {countries.length}</h2>
      <h4>Visited Countries: {visitedCountries.length}</h4>
      <div className="countries">
        {countries.map((country) => (
          <Country 
          key={country.ccn3.ccn3} 
          country={country}
          handleVisitedCountries = {handleVisitedCountries}
          ></Country>
        ))}
      </div>
    </div>
  );
}
