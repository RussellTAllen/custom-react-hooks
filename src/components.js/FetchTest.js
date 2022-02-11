import React, { useState, useEffect } from 'react'
import useFetch from '../hooks/useFetch'
import FetchMeal from './FetchMeal'
import FetchDrink from './FetchDrink'

const randomCocktailURL = 'www.thecocktaildb.com/api/json/v1/1/random.php'
const randomMealURL = 'https://www.themealdb.com/api/json/v1/1/random.php'
const testingURL = '/testing'

const FetchTest = () => {
    const [url, setURL] = useState(null)

    return (
        <section>
            <h3>FetchTest</h3>

            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <FetchMeal />
                <FetchDrink />
            </div>



        </section>
    )
}

export default FetchTest