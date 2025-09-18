import React, { use, useState } from 'react'
import Country from '../Country/Country';

const Countries = ({ countriesPromise }) => {

    // const [count, setCount] = useState();


    const [visitedCounties, setVisitedCounties] = useState([]);

    const handelVisitedCountry = (country) => {
        // console.log('handel visited country clicked', country);
        const newVisitedCountries = [...visitedCounties, country];
        setVisitedCounties(newVisitedCountries);
    }

    // const handelVisitedCount = (country) => {
    //     setCount(count+1);
    // }

    const country = use(countriesPromise)
    const countries = country.countries;



    return (
        <>
            <h1 className='text-3xl md:text-6xl text-center font-bold text-cyan-800 mt-10 mb-3'>In the Countries Data : {countries.length}</h1>
            <h3 className='text-2xl md:text-4xl text-center font-bold text-cyan-900 '>Total Countries Visited : {visitedCounties.length}</h3>
            <ol className='text-xl text-center text-gray-700'>
                {
                    visitedCounties.map(country => <li>{country.name.common}</li>)
                }
            </ol>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 px-10">
                {
                    countries.map(country => <Country country={country} key={country.cca3}
                        handelVisitedCountry={handelVisitedCountry} />)
                }
            </div>
        </>
    )
}

export default Countries
