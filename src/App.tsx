import { Suspense } from "react";
import "./App.css";
import type { CountryType } from "./country.ts";
import Countries from "./components/Countries/Countries.tsx";


// step = 1 

const countriesPromise = async () :Promise<CountryType[]> => {
  const res = await fetch("https://openapi.programming-hero.com/api/all");
  const data = await res.json();
  return data.countries;
};

function App() {
  return (
    <>
      <h2>World on the go... with jht</h2>
      <Suspense fallback={ <div>Nadir Loading...</div> }>
        <Countries countriesPromise={countriesPromise()}></Countries>
      </Suspense>

    </>
  );
}

export default App;
