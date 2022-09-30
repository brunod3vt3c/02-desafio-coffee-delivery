import styled from 'styled-components'
import { CheckoutBaseCard } from '../../styles'

export const CheckoutSelectedCoffeeContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.75rem;
  width: 40rem;

  h3 {
    font-family: 'Baloo 2';
    font-size: 1.125rem;
    font-weight: 700;
  }
`

export const SelectedCoffeContainer = styled(CheckoutBaseCard)`
  display: flex;
  flex-direction: column;

  border-radius: 6px 44px 6px 44px;
`
export const CheckoutConfirmationSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`
