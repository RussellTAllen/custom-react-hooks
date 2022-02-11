import React, { useEffect, useState, useCallback } from 'react'
import useCountRenders from '../hooks/useCountRenders'

const RenderTest = () => {
    // const [renderCount, increaseRenders] = useCountRenders(0)
    const [renderCount] = useCountRenders()
    const [text, setText] = useState('')

    const changeSomething = useCallback(() => {
        setText(prevText => prevText += 'a')
    }, [])

    return (
        <section>
            <h1>
                RenderTest
            </h1>
            <h4>Times this component has rendered: { renderCount }</h4>
            <button onClick={changeSomething}>Change Something</button>
            <h5>{text}</h5>
        </section>
    )
}

export default RenderTest