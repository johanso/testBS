import Styled from 'styled-components'
import { getRem } from '../../helpers'

export const Hero = Styled.section`
  padding: ${getRem(20)};
  position: relative;
  margin: auto;
  &::before {
    content: '';
    position: fixed;
    left: 50%;
    width: 100vw;
    height: ${getRem(360)};
    background-image: url('src/assets/images/bg-hero.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 50%;
    transform-origin: bottom;
    transform: translateX(-50%) scale(2.5);
    z-index: -1;
  }
  @media screen and (min-width: 768px) {
    max-width: 768px;
  }
`
export const Title = Styled.h1`
  font: normal normal var(--font-medium) ${getRem(18)}/1.2 var(--font-base);
  color: var(--color-secondary);
  padding: 0 0 ${getRem(8)} 0;
  text-transform: uppercase;
  text-align: center;
`