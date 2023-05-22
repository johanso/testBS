import Styled from 'styled-components'
import { getRem } from '../../helpers'

export const Navbar = Styled.div`
  background-color: var(--color-secondary); 
  display: flex;
  justify-content: space-between;
  height: ${getRem(58)};
  padding: 0 ${getRem(20)};
  width: 100%;
`
export const Left = Styled.div`
  display: flex;
  align-items: center;
  gap: ${getRem(20)};
  .menu {
    cursor: pointer;
  }
`
export const Right = Styled.div`
  display: flex;
  align-items: center;
  gap: ${getRem(20)};
`
