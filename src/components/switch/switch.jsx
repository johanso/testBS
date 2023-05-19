import React from 'react'
import * as Styled from './switch.styled'

const Switch = ({ placeholder }) => {
  return (
    <Styled.Switch>
      <input type="checkbox" id="toggle-btn" />
      <label htmlFor="toggle-btn"></label>
      { placeholder }
    </Styled.Switch>
  )
}

export default Switch