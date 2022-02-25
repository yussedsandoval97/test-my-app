import React from 'react'
import { useState } from 'react'

const Event = () => {

    const [text, setText] = useState('Init!')

    const event_click = () => {
        console.log("Click here...")
    }

  return (
    <div>
        <hr/>
        <h2>{text}</h2>
          <button onClick={() => event_click()}>Click me</button>
    </div>
  )
}

export default Event