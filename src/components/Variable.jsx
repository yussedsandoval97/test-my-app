import React from 'react'

const Variable = () => {
    const greeting = "Hello world!"
    const image = "https://picsum.photos/200"
    const text_image = "Random image"
  return (
    <div>
          <h2>New component: {greeting}</h2>
          <img src={image} alt={text_image}/>
    </div>
  )
}

export default Variable