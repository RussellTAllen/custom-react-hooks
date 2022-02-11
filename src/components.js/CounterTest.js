import React, { useState } from 'react'
import useCounter from '../hooks/useCounter'
import useCountRenders from '../hooks/useCountRenders'

const CounterTest = () => {
  const [step, setStep] = useState(1)
  const [count, increment, decrement] = useCounter(0, step)
  const [renderCount] = useCountRenders()
  
  const handleStepChange = (e) => {
    setStep(Number(e.target.value))
  }

  return (
    <section>
        <h2>CounterTest</h2>
        <h3>Count: {count} </h3>
        <h5>Times this component has rendered: {renderCount}</h5>
        
        <button onClick={increment}>Add</button>
        <button onClick={decrement}>Subtract</button>
        <input 
          type="number" 
          name="step" 
          min="1" 
          placeholder="Change Step (default: 1)" 
          onChange={handleStepChange} />
    </section>
  )
}

export default CounterTest