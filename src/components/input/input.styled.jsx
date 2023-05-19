import Styled from 'styled-components'
import { getRem } from '../../helpers'

export const Input = Styled.div`
  .label {
    font-size: ${getRem(14)};
    font-weight: var(--font-medium);
    color: var(--color-gray8);
    margin-bottom: ${getRem(4)};
  }
  .input {
    color: var(--color-black);
    border: none;
    background-color: transparent;
    font-size: ${getRem(18)};
    font-weight: var(--font-semibold);  
    width: 100%;
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: var(--color-black);
    }
  }
`