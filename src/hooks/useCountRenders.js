import { useRef } from 'react'

const useCountRenders = () => {
    const renders = useRef(1)
    const renderCount = renders.current++

    return [renderCount]
}

export default useCountRenders