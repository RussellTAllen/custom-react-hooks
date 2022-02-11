import React, { useEffect } from 'react'
import useFetch from '../hooks/useFetch'

const mealURL = 'https://www.themealdb.com/api/json/v1/1/random.php'

const FetchMeal = () => {
    const [data, getData] = useFetch(mealURL)       

    useEffect(() => getData(), [])

    console.log(data)

    return (
        <div className="fetch">
            <button onClick={() => getData(mealURL)}>Get Random Meal</button>
            <h5>{ data?.meals[0].strMeal }</h5>
            <img src={ data?.meals[0].strMealThumb } alt="Meal Image" />
        </div>
    )
}

export default FetchMeal