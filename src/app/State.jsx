import React, { useState } from 'react'


const State = () => {
    //const [value,setValue] = useState(0)
    const [value,setValue] = useState("Romicha")

    const add = () => {
        // setValue(value + 1)
        setValue("Hello everyone")
    }
  return (
    <div>
       <p>value added: {value} </p>
        <button onClick={add}>Add value</button>
    </div>
  )
}

export default State