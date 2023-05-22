import React from 'react'
import * as Styled from './input.styled'

const Input = ({ placeholder, label, pickup, type, handleLocation }) => {

  return (
    <Styled.Input>
      <label className="label" htmlFor={pickup}>{label}</label>
      <input 
        className="input" 
        type={type} 
        id={pickup} 
        placeholder={placeholder} 
        onChange={(e) => handleLocation(e.target.value)}
      />
    </Styled.Input>
  )
}

export default Input