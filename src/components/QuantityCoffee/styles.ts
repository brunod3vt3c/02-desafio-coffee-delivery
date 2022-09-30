import styled from 'styled-components'

export const QuantityinCart = styled.div`
  display: flex;
  width: 7.5rem;
  gap: 0.5rem;

  display: flex;
  align-items: center;
  padding: 0 0.5rem;
  gap: 0.25rem;

  width: 5.688rem;
  height: 2rem;
  background: ${(props) => props.theme['base-button']};
  border-radius: 6px;

  font-size: 1rem;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${(props) => props.theme['base-button']};
    color: ${(props) => props.theme.purple};
    border: none;

    &:disabled {
      opacity: 0.4;
    }
  }
`
