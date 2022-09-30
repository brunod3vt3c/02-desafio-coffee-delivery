import styled from 'styled-components'

export const ButtonContainer = styled.button`
  padding: 0.75rem 2.8rem;
  line-height: 1.3rem;

  font-weight: 700;

  background: ${({ theme }) => theme.yellow};
  color: ${({ theme }) => theme.white};

  border-radius: 6px;
  border: none;
  margin-top: 0.7rem;
  text-transform: uppercase;
  transition: 0.4s;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
  &:not(:disabled):hover {
    background: ${({ theme }) => theme['yellow-dark']};
  }
`
