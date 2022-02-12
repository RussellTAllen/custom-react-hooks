import React, { useState } from 'react'
import { useSearchFilter } from '../hooks/useSearchFilter'
import { drinks } from '../mockData/drinks'

const SearchFilterTest = () => {
    const [input, setInput] = useState('')
    const [matches] = useSearchFilter(input, drinks)

    return (
        <section>
        <h1>SearchFilterTest</h1>  

        <form>
            <input 
                type="search" 
                list="drink-names" 
                autoComplete="off"
                placeholder="Drink name" 
                onChange={(e) => setInput(e.target.value)} />
            <datalist 
                id="drink-names"
                value={input}>
                { drinks.map(drink => (
                    <option key={drink} value={drink} />
                ))}
            </datalist>
        </form>
            <ul>
            { matches &&
            matches?.map((match, idx) => {
                return <li key={idx}>{match}</li>
            })}

            </ul>

        </section>
    )
}

export default SearchFilterTest