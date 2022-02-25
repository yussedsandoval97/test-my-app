import React from 'react'

const Form = () => {

    const [fruit, setFruit] = React.useState('')
    const [description, setDescription] = React.useState('')
    const [list, setList] = React.useState([])
    const save = (e) => {
        e.preventDefault()
        console.log("text "+ fruit + " " + description)

        if (!fruit.trim() | !description.trim())
            return
        setList([
            ...list,
            {
                name: fruit,
                description: description
            }
        ])

        e.target.reset()
        setFruit('')
        setDescription('')
    }
  return (
    <div>
        <h2>From</h2>
          <form onSubmit={save}>
              <input
                  type="text"
                  placeholder="Enter a fruit here..."
                  className="form-control mb-2"
                  onChange={(e) => setFruit(e.target.value)} />
              <input
                  type="text"
                  placeholder="Enter a description here."
                  className="form-control mb-2"
                  onChange={(e) => setDescription(e.target.value)} />
              <button className="btn btn-primary btn-block" type="submit">Add</button>
        </form>
        <ul>
            {
                list.map((item, index) => (
                    <li key={index}>
                        {item.name} - {item.description}
                    </li>
                ))
            }
        </ul>

    </div>
  )
}

export default Form