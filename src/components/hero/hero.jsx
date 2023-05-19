import React from 'react'
import * as Styled from './hero.styled'

const Hero = ({children, title}) => {
  return (
    <Styled.Hero>
      <Styled.Title>{title}</Styled.Title>
      {children}
    </Styled.Hero>
  )
}

export default Hero