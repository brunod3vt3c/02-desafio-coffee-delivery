import { Trash } from 'phosphor-react'
import { useContext } from 'react'
import { QuantityCoffee } from '../../../../components/QuantityCoffee'
import {
  CartContextProps,
  OrdersCartProps,
} from '../../../../context/CoffeeCartContextProvider'
import { formatMoney } from '../../../../utils/formatMoney'

import {
  ActionsContainer,
  CheckoutCoffeeCardContainer,
  RemoverButton,
} from './styles'

interface CheckoutCoffeeCardProps {
  coffee: OrdersCartProps
}

export function CheckoutCoffeeCard({ coffee }: CheckoutCoffeeCardProps) {
  const { completeCurrentOrder, removeCoffeeFromCart } =
    useContext(CartContextProps)

  function handleIncrementquantity() {
    completeCurrentOrder(coffee.id, 'increase')
  }

  function handleDecrementquantity() {
    completeCurrentOrder(coffee.id, 'decrease')
  }

  function handleRomeveCoffee() {
    removeCoffeeFromCart(coffee.id)
  }

  const coffeeTotal = coffee.price * coffee.quantyCoffe
  const fotmatCoffeeTotal = formatMoney(coffeeTotal)

  return (
    <CheckoutCoffeeCardContainer>
      <div>
        <img src={coffee.photo} alt="" />
        <div>
          <h3>{coffee.name}</h3>
          <ActionsContainer>
            <QuantityCoffee
              quantyCoffe={coffee.quantyCoffe}
              onIncrease={handleIncrementquantity}
              onDecrease={handleDecrementquantity}
            />
            <RemoverButton type="button" onClick={handleRomeveCoffee}>
              <Trash size={16} />
              Remover
            </RemoverButton>
          </ActionsContainer>
        </div>
      </div>

      <p>€ {fotmatCoffeeTotal}</p>
    </CheckoutCoffeeCardContainer>
  )
}
