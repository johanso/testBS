import React from 'react'
import * as Styled from './banner.styled'
import ImgCar from '../../assets/images/banner-car.png'

const Banner = () => {
  return (
    <Styled.Banner>
      <Styled.TextBig>
        <img src={ImgCar} alt="banner" />
        <div className="text">
          Seguro de <br />viaje <span>GRATIS!</span>
        </div>
      </Styled.TextBig>
      <Styled.Blocktext>
      Con cobertura médica frente al <br />Coronavirus de USD $100.000
      </Styled.Blocktext>
    </Styled.Banner>
  )
}

export default Banner