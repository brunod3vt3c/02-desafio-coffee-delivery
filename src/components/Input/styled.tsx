import styled, { css } from 'styled-components'

interface InputContainerProps {
  hasError: boolean
}

export const InputContent = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 0.3rem;

  > p {
    color: ${(props) => props.theme['base-error']};
  }
`

export const InputContainer = styled.div<InputContainerProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items: center;

  border-radius: 4px;

  height: 2.625rem;
  display: flex;
  transition: 0.4s;
  overflow: hidden;

  border: 1px solid ${(props) => props.theme['base-button']};
  background: ${(props) => props.theme['base-input']};
  &:focus-within {
    border-color: ${(props) => props.theme['yellow-dark']};
  }

  ${({ theme, hasError }) =>
    hasError &&
    css`
      border-color: ${theme['base-error']};
    `}
`

export const InputStyled = styled.input`
  flex: 1;
  border: none;
  border-radius: 6px;

  height: 2.625rem;
  padding: 0 0.75rem;

  font-size: 0.75rem;
  background: ${(props) => props.theme['base-input']};
  color: ${(props) => props.theme['base-text']};
  transition: 0.4s;

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`

export const InputOpcional = styled.p`
  font-size: 0.75rem;
  margin-right: 0.75rem;
  font-style: italic;
  color: ${(props) => props.theme['base-label']};
`
