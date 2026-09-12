import { useState } from "react"
import type { CountryType } from "../../country"
import './Country.css'


export interface CountryProps {
    country: CountryType
    handleVisitedCountries:(country: CountryType) => void
}

export default function Country({ country, handleVisitedCountries}: CountryProps) {

    const [visited, setVisited] = useState<Boolean>(false)

    const handleVisited = () =>{
        // setVisited(true)
        // if(visited === true){
        //     setVisited(false)
        // }
        // else{
        //     setVisited(true)
        // }
        setVisited(!visited);
        handleVisitedCountries(country);
    }
    
    return (
        <div className={`country ${visited? 'country-visited' : ''}`}>
            <h3>{country.name.common}</h3>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <p>Population: {country.population.population}</p>
            <p>Capital: {country.capital.capital} </p>
            <button onClick={handleVisited}>
                {visited ? 'Visited' : 'Mark as Visited'}
            </button>
        </div>
    )
}