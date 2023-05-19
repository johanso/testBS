import Styled from 'styled-components'
import { getRem } from '../../helpers'

export const Switch = Styled.div`
  font-size: ${getRem(14)};
  display: flex;
  align-items: center;
  gap: ${getRem(16)};
  color: var(--color-secondary);
  label {
    display: block;
    width: ${getRem(36)};
    height: ${getRem(18)};
    background: transparent;
    border-radius: 30px;
    transition: all 200ms linear;
    border: 1px solid var(--color-secondary);
    &::before {
      position: relative;
      content: "";
      width: ${getRem(12)};
      height: ${getRem(12)};
      background:var(--color-secondary);
      display: block;
      border-radius: 50%;
      top: ${getRem(2)};
      left: ${getRem(4)};
      transition: all 300ms linear;
    }
  }
  input {
    display: none;
  }
  input:checked + label {
    background: var(--color-secondary);
    &::before {
      background: var(--color-primary);
    }
  }
  input:checked + label:before {
    left: ${getRem(18)};
  }
`