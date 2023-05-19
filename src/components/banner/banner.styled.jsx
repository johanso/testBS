import Styled from 'styled-components'
import { getRem } from '../../helpers'

export const Banner = Styled.div`
  border: 1px solid var(--color-gray5);
  max-width: ${getRem(360)};
  padding: ${getRem(16)};
  border-radius: ${getRem(8)};
  margin: 0 1rem;
  @media screen and (min-width: 392px) {
    margin: 0 auto;
  }
  @media screen and (min-width:560px) {
    margin: 0 auto;
    max-width: ${getRem(460)};
  }
`
export const TextBig = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .text {
    font-size: ${getRem(22)};
    font-weight: var(--font-semibold);
    line-height: ${getRem(26)};
    text-align: center;
    text-transform: uppercase;
    span {
      color: var(--color-primary);
    }
  }
  img {
    max-width: ${getRem(160)};
  }
`
export const Blocktext = Styled.div`
  font-size: ${getRem(14)};
  font-weight: var(--font-semibold);
  line-height: ${getRem(18)};
  position: relative;
  text-align: center;
  margin-top: ${getRem(16)};
  width: 100%;
`