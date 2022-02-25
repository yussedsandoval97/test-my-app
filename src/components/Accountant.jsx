import React from 'react'

const Accountant = () => {

    const [accountant, setAccountant] = React.useState(0)

    const add = () => {
        setAccountant(accountant+1)
    }

  return (
    <div>
        <h2>Accountant: {accountant}</h2>
        <button onClick={() => add()}>Sum</button>
    </div>
  )
}

export default Accountant