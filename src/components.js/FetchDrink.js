import React, { useEffect } from 'react'
import useFetch from '../hooks/useFetch'

const randomCocktailURL = 'http://www.thecocktaildb.com/api/json/v1/1/random.php'

const FetchDrink = () => {
    const [data, loading, error, getData] = useFetch('/drinks/random')     
    
    console.log(data)

    return (
        <div className="fetch">
            <button onClick={() => getData(randomCocktailURL)}>Get Random Drink</button>
            { error ? <h2>Error accessing the server...</h2> :
                loading ? <h2>Loading...</h2> :
                <>
                    <h5>{ data?.drinks[0].strDrink }</h5>
                    <img src={ data?.drinks[0].strDrinkThumb } alt="Drink Image" />
                </>
            }
        </div>
    )
}

export default FetchDrink