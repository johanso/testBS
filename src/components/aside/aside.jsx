import React from 'react'
import * as Styled from './aside.styled'
import Arrowback from '../../svg/Arrowback.svg'
import Logo from '../../svg/Logo.svg'
import Flag from '../../svg/Flag.svg'
import Facebook from '../../svg/Facebook.svg'
import Google from '../../svg/Google.svg'
import Twitter from '../../svg/Twitter.svg'
import Instagram from '../../svg/Instagram.svg'

const dataItems = ['Requisitos de Alquiler', 'Preguntas frecuentes', 'Localidades', 'Contáctanos']

const Aside = ({ isOpen, onClose }) => {

  const handleRedirect = () => { 
    onClose()
  }

  return (
    <Styled.Aside className={isOpen ? 'open' : ''}>
      <Styled.AsideHead>
        <img src={Arrowback} className="close" alt="back" onClick={onClose} />
        <img src={Logo} alt="icon logo" />
        <img src={Flag} alt="icon back" />
      </Styled.AsideHead>

      <Styled.AsideBody>
        {dataItems.map((item, index) => (
          <Styled.AsideItem key={index} onClick={handleRedirect} >{item}</Styled.AsideItem>
        ))}
      </Styled.AsideBody>

      <Styled.AsideFooter>
        <div className='textinfo'>SIGUENOS EN</div>
        <div className='icons-social'>
          <img src={Facebook} alt="icon facebook" />
          <img src={Twitter} alt="icon twitter" />
          <img src={Google} alt="icon google" />
          <img src={Instagram} alt="icon instagram" />
        </div>
      </Styled.AsideFooter>
    </Styled.Aside>
  )
}

export default Aside