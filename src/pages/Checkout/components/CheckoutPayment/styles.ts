import styled, { css } from 'styled-components'

export const CheckoutPaymentContainer = styled.div`
  input {
    visibility: hidden;
    appearance: none;
  }
  input:checked + label div {
    ${(props) => css`
      background: ${props.theme['purple-light']};
      border-color: ${(props) => props.theme.purple};
      &:hover {
        background: ${props.theme['purple-light']};
      }
    `}
  }
`

export const CheckoutPaymentContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  padding: 0 1rem;
  gap: 0.75rem;

  font-size: 0.75rem;
  text-transform: uppercase;
  border-radius: 6px;
  height: 3rem;

  background: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};
  border: 1px solid ${(props) => props.theme['base-button']};

  transition: 0.4s;

  svg {
    color: ${(props) => props.theme.purple};
  }
  &:hover {
    background: ${(props) => props.theme['base-hover']};
  }
  user-select: none;
`
