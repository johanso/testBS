import Styled from 'styled-components'
import { getRem } from '../../helpers'

export const FormSearch = Styled.form`
  position: relative;
`
export const ContainerInput = Styled.div`
  position: relative;
  background-color: var(--color-secondary);
  border-radius: ${getRem(8)};
  &.flex {
    display: flex;
  }
`
export const InputGrid = Styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${getRem(16)};
  padding-left: ${getRem(56)};
  &.half { 
    width: 50%;
    &::after {
      content: '';
      background: var(--color-gray5);
      position: absolute;
      right: 0;
      width: 1px;
      height: 50%;
    }
  }
  .image {
    position: absolute;
    left: ${getRem(16)};
  }
  .label {
    font-size: ${getRem(14)};
    font-weight: var(--font-medium);
    color: var(--color-gray8);
    margin-bottom: ${getRem(4)};
  }
  .ant-picker {
    padding: 0;
  }
  input {
    color: var(--color-black);
    font-size: ${getRem(18)} !important;
    font-weight: var(--font-semibold);  
    &::placeholder {
      color: var(--color-black) !important;
      font-weight: var(--font-semibold) !important;  
    }
  }
`
export const InputControl = Styled.div`
  position: relative;
  margin: ${getRem(16)} 0;
`
export const ButtonSearch = Styled.button`
  background: var(--color-primary);
  position: relative;
  margin: ${getRem(32)} auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${getRem(60)};
  width: ${getRem(86)};
  border-radius: ${getRem(8)};
  border: none;
  box-shadow: 0 0 0 ${getRem(6)} var(--color-secondary), 0 ${getRem(4)} ${getRem(2)} ${getRem(6)} var(--color-gray6);
`