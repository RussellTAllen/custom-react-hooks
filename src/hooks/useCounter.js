import React, { useState, useCallback } from 'react'

const useCounter = (value, step) => {
    const [count, setCount] = useState(value)
    // const [step, setStep] = useState(1)

    const increment = () => {
        setCount(count + step)
    }
    const decrement = () => {
        setCount(count - step)
    }

    return [count, increment, decrement]
}

export default useCounter