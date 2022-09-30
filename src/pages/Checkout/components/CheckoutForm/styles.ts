import styled from 'styled-components'
import { CheckoutBaseCard } from '../../styles'

export const CheckoutContainer = styled.div`
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

export const CheckoutSectionFom = styled(CheckoutBaseCard)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 4.4rem;
  gap: 0.5rem;

  div {
    h4 {
      font-size: 1rem;
      font-weight: 400;
      color: ${(props) => props.theme['base-subtitle']};
      line-height: 1.3rem;
    }

    span {
      font-size: 0.875rem;
      font-weight: 400;
      color: ${(props) => props.theme['base-text']};
      line-height: 1.138rem;
    }
  }
`

export const HeaderRequest = styled(HeaderContainer)`
  svg {
    color: ${(props) => props.theme['yellow-dark']};
  }
`

export const HeaderPayment = styled(HeaderContainer)`
  svg {
    color: ${(props) => props.theme.purple};
  }
`

export const CheckoutAddressFormContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 12.5rem 17.25rem 3.75rem;
  column-gap: 0.75rem;
  row-gap: 1rem;
  grid-auto-flow: dense;

  .cep {
    grid-column: span 3;
    max-width: 12.5rem;
  }

  .name {
    grid-column: span 3;
  }

  .street {
    grid-column: span 3;
  }

  .complement {
    grid-column: span 2;
  }
`

export const CheckoutPaymentOptionsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;

  > p {
    grid-column: span 3;
    color: ${(props) => props.theme['base-error']};
  }
`
