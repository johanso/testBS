import React, { useState } from 'react'
import * as Styled from './navbar.styled'
import Logo from '../../svg/Logo.svg'
import Menu from '../../svg/Menu.svg'
import Coin from '../../svg/Coin.svg'
import Flag from '../../svg/Flag.svg'
import {Aside} from '../aside'

const Navbar = () => {
  const [isAsideOpen, setIsAsideOpen] = useState(false);

  const handleToggleAside = () => {
    console.log('click')
    setIsAsideOpen(!isAsideOpen);
  };

  return (
    <>
      <Styled.Navbar>
        <Styled.Left>
          <div className='menu' onClick={handleToggleAside}>
            <img src={Menu} alt="menu icon"  />
          </div>
          <img className='logo' src={Logo} alt="Logo" />
        </Styled.Left>

        <Styled.Right>
          <img className='coin' src={Coin} alt="icon coin"/>
          <img className='flag' src={Flag} alt="icon flag"/>
        </Styled.Right>
      </Styled.Navbar>
      <Aside isOpen={isAsideOpen} onClose={handleToggleAside} />
    </>
  )
}

export default Navbar