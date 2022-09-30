import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import { CheckoutAddressForm } from './CheckoutAddressForm'
import { CheckoutPaymentOptions } from './CheckoutPaymentOptions'
import {
  CheckoutContainer,
  CheckoutSectionFom,
  HeaderPayment,
  HeaderRequest,
} from './styles'

export function CheckoutForm() {
  return (
    <CheckoutContainer>
      <h3>Complete seu pedido</h3>

      <CheckoutSectionFom>
        <HeaderRequest>
          <MapPinLine size={22} />
          <div>
            <h4>Endereço de Entrega</h4>
            <span>Informe o endereço onde deseja receber seu pedido</span>
          </div>
        </HeaderRequest>

        <CheckoutAddressForm />
      </CheckoutSectionFom>

      <CheckoutSectionFom>
        <HeaderPayment>
          <CurrencyDollar size={22} />
          <div>
            <h4>Pagamento</h4>
            <span>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </span>
          </div>
        </HeaderPayment>
        <CheckoutPaymentOptions />
      </CheckoutSectionFom>
    </CheckoutContainer>
  )
}
