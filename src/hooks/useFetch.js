import React, { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const getData = () => {
        setError(false)
        setLoading(true)
        
        return fetch(url)
            .then(res => res.json())
            .then(apiData => setData(apiData))
            .catch(err => setError(err))
            .finally(() => setLoading(false))
    }

    useEffect(() => {
        getData()
    }, [url])

    console.log(error)
    console.log(data)

    return [data, loading, error, getData]
}

export default useFetch