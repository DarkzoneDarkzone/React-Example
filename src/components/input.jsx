import React from 'react'
import './styles/input.css'
function Input({details}) {
  return (
    <React.Fragment>
        <input type={details.type} id={details.id} required className="input-main"/>
    </React.Fragment>
  )
}

export default Input