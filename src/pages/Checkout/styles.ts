import styled from 'styled-components'

export const CheckoutFormContainer = styled.form`
  display: flex;
  justify-content: space-between;

  gap: 2rem;
  margin-top: 2.5rem;
`
export const CheckoutBaseCard = styled.div`
  width: 100%;
  padding: 2.5rem;
  border-radius: 6px;

  background: ${(props) => props.theme['base-card']};
`
