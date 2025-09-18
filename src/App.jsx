import React, { Suspense } from 'react'
import Countries from './components/Countries/Countries'


const countriesPromise = fetch('https://openapi.programming-hero.com/api/all')
.then((res) => res.json())
// .then((data) => console.log(data))

const App = () => {
  return (
    <>
    <Suspense fallback={<p>Country Loading.....</p>}>
      <Countries countriesPromise={countriesPromise} />
    </Suspense>
    </>
  )
}

export default App
