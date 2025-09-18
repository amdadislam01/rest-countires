import React, { useState } from 'react'

const Country = ({ country, handelVisitedCountry }) => {
    // console.log(country.name.common);
    // console.log(handelVisitedCountry);
    

    const [visited, setVisited] = useState(false);

    const handelVisited = () => {
        // if (visited) {
        //     setVisited(false);
        // }        
        // else{
        //     setVisited(true);
        // }
        // setVisited(visited ? false : true);
        setVisited(!visited);
        handelVisitedCountry(country);
        // handelVisitedCount();
    }

    return (
        <div className="border border-gray-500 bg-gray-100 rounded-2xl p-5 mb-5">
            <img src={country.flags.flags.png} alt="" className='rounded-xl border border-gray-400 w-full h-52 object-cover' />
            <h2 className='text-2xl font-bold text-center mt-2'> {country.name.common}</h2>
            <p className='text-xl font-semibold text-center'>{country.population.population}</p>
            <button
                onClick={handelVisited}
                className={`py-2 w-full text-xl font-bold mt-3 rounded-md border cursor-pointer transition duration-300
                        ${visited
                        ? "bg-sky-500 text-gray-100 border-slate-500"
                        : "bg-sky-200 text-black border-sky-400"}`}
            >
                {visited ? "Visited" : "Not Visited"}
            </button>

        </div>
    )
}

export default Country
