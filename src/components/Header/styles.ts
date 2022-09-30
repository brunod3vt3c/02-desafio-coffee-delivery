import styled, { css } from 'styled-components'

interface ButtonProps {
  variant: 'purple' | 'yellow'
}

export const HeaderContainer = styled.header`
  width: 100%;
  height: 6.5rem;
  background: ${(props) => props.theme.white};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  position: sticky;

  top: 0;
  left: 0;
  z-index: 5;

  > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`
export const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const ButtoCart = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 0.875rem;

  min-width: 2.3rem;
  height: 2.3rem;

  border: none;
  border-radius: 6px;
  padding: 0 0.5rem;
  position: relative;

  transition: 0.6s;

  strong { 
    margin-left: 0.25rem;
  }

  span {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;

    top: -7px;
    right: -7px;

    font-size: 0.7rem;
    text-align: center;

    width: 1.25rem;
    height: 1.25rem;

    border-radius: 50%;

    background: ${(props) => props.theme['yellow-dark']};
    color: ${(props) => props.theme.white};
  }

  ${({ variant }) => css`
    background: ${(props) => props.theme[`${variant}-light`]};
    color: ${(props) => props.theme[`${variant}-dark`]};
  `}
`
