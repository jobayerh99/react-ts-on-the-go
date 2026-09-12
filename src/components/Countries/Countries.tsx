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

  const [visitedCountries, setVisitedCountries] = useState<CountryType[]>([]);

  const handleVisitedCountries = (country: CountryType): void => {
    // bad way to check array/object
    // if (visitedCountries.includes(country)) {
    // } else {
    //   const newVisitedCountries = [...visitedCountries, country];
    //   setVisitedCountries(newVisitedCountries);
    // }

    // good Way to check array/object
    const exists = visitedCountries.find(
      (c) => c.ccn3.ccn3 === country.ccn3.ccn3,
    );
    if (exists) {
      const remainingCountries = visitedCountries.filter(
        (c) => c.ccn3.ccn3 !== country.ccn3.ccn3,
      );
      setVisitedCountries(remainingCountries);
    } else {
      const newVisitedCountries = [...visitedCountries, country];
      setVisitedCountries(newVisitedCountries);
    }
  };

  return (
    <div>
      <h2>Countries: {countries.length}</h2>
      <h4>Visited Countries: {visitedCountries.length}</h4>
      <div>
        <ul>
          {visitedCountries.map((country) => (
            <li key={country.ccn3.ccn3}>{country.name.common}</li>
          ))}
        </ul>
      </div>
      <div className="countries">
        {countries.map((country) => (
          <Country
            key={country.ccn3.ccn3}
            country={country}
            handleVisitedCountries={handleVisitedCountries}
          ></Country>
        ))}
      </div>
    </div>
  );
}
