import React, { useState, useRef } from 'react'

const useCountRenders = () => {
    const renders = useRef(0)
    const renderCount = renders.current++

    return [renderCount]
    
    // const [renderCount, setRenderCount] = useState(value)

    // const increaseRenders = () => {
    //     setRenderCount(renderCount + 1)
    // }

    // return [renderCount, increaseRenders]
}

export default useCountRenders