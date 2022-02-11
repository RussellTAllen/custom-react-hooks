import React, { useEffect } from 'react'
import useFetch from '../hooks/useFetch'

const mealURL = 'https://www.themealdb.com/api/json/v1/1/random.php'

const FetchMeal = () => {
    const [data, loading, error, getData] = useFetch(mealURL)       

    console.log(data)

    return (
        <div className="fetch">
            <button onClick={() => getData(mealURL)}>Get Random Meal</button>
            { error ? <h2>Error accessing the server...</h2> :
                loading ? <h2>Loading...</h2> :
                <>
                    <h5>{ data?.meals[0].strMeal }</h5>
                    <img src={ data?.meals[0].strMealThumb } alt="Meal Image" />
                </>
            }

        </div>
    )
}

export default FetchMeal