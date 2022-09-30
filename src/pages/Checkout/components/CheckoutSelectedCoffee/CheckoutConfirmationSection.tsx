import { useContext } from 'react'
import { Button } from '../../../../components/Button'
import { CartContextProps } from '../../../../context/CoffeeCartContextProvider'
import { formatMoney } from '../../../../utils/formatMoney'
import { CheckoutConfirmationSectionContainer } from './styles'

const deliveryFee = 3.5

export function CheckoutConfirmationSection() {
  const { cartOrdersTotal, cartQuantity } = useContext(CartContextProps)
  const cartTotal = deliveryFee + cartOrdersTotal
  const formattedOrdersTotal = formatMoney(cartOrdersTotal)
  const formattedCartTotal = formatMoney(cartTotal)
  const formattedDeliveryFee = formatMoney(deliveryFee)

  return (
    <CheckoutConfirmationSectionContainer>
      <div>
        <span>Total de itens</span>
        <span>€ {formattedOrdersTotal}</span>
      </div>

      <div>
        <span>Entrega</span>
        <span>€ {formattedDeliveryFee}</span>
      </div>

      <div>
        <h2>Total</h2>
        <h2>€ {formattedCartTotal}</h2>
      </div>

      <Button
        type="submit"
        text="CONFIRMAR PEDIDO"
        disabled={cartQuantity <= 0}
      />
    </CheckoutConfirmationSectionContainer>
  )
}
