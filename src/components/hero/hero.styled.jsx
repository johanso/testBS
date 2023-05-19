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
    background: url('../src/assets/images/bg-hero.png') no-repeat center center / cover;
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