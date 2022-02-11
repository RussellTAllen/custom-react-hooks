import React, { useState, useEffect } from 'react'
import useFetch from '../hooks/useFetch'
import FetchMeal from './FetchMeal'
import FetchDrink from './FetchDrink'
import useCountRenders from '../hooks/useCountRenders'

const randomCocktailURL = 'http://www.thecocktaildb.com/api/json/v1/1/random.php'
const randomMealURL = 'https://www.themealdb.com/api/json/v1/1/random.php'

const FetchTest = () => {
    const [url, setURL] = useState(null)
    const [renderCount] = useCountRenders()

    return (
        <section>
            <h3>FetchTest</h3>
            <h5>This component has rendered: {renderCount} times</h5>

            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <FetchMeal />
                <FetchDrink />
            </div>
        </section>
    )
}

export default FetchTest