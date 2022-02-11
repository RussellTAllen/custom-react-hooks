import React, { useState } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null)

    console.log('url: ' + url)

    const getData = () => {
        return fetch(url)
            .then(res => res.json())
            .then(apiData => setData(apiData))
            .catch(err => console.error(err))
    }

    return [data, getData]
}

export default useFetch