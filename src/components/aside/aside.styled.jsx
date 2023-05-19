import Styled from 'styled-components'
import { getRem } from '../../helpers'

export const Aside = Styled.aside`
  background-color: var(--color-secondary);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: ${getRem(16)};
  position: fixed;
  top: 0;
  left: -100vw;
  width: 100vw;
  height: 100%;
  transition: left 0.3s ease;
  z-index: 1;
  &.open {
    left: 0;
  }
`
export const AsideHead = Styled.div`
  display: flex;
  justify-content: space-between;
`
export const AsideBody = Styled.div`
  padding: 0 ${getRem(20)};
`
export const AsideItem = Styled.div`
  font: normal normal var(--font-medium) ${getRem(22)}/1.2 var(--font-base);
  margin-bottom: ${getRem(40)};
`
export const AsideFooter = Styled.div`
  margin-bottom: ${getRem(40)};
  padding: 0 ${getRem(20)};
  .textinfo {
    font: normal normal var(--font-medium) ${getRem(18)}/1.2 var(--font-base);
    color: var(--color-gray9);
    margin-bottom: ${getRem(20)};
  }
  .icons-social {
    display: flex;
    gap: ${getRem(46)};
  }
`