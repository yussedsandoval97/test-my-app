import React from 'react'

const List = () => {

    const initialState = [
        { id: 1, text: 'Task 1' },
        { id: 2, text: 'Task 2' },
        { id: 3, text: 'Task 3' },
    ]

    const [list, setList] = React.useState(initialState)

  return (
    <div>
        <hr/>
        <h2>Lists</h2>
        {
            list.map(item => (
                <h4 key={item.id}>{item.text}</h4>
            ))
        }
    </div>
  )
}

export default List