import { useContext } from 'react'
import { CartContextProps } from '../../../../context/CoffeeCartContextProvider'
import { CheckoutCoffeeCard } from '../CheckoutCoffeeCard'
import { CheckoutConfirmationSection } from './CheckoutConfirmationSection'
import {
  CheckoutSelectedCoffeeContainer,
  SelectedCoffeContainer,
} from './styles'

export function CheckoutSelectedCoffee() {
  const { cartOrders } = useContext(CartContextProps)
  return (
    <CheckoutSelectedCoffeeContainer>
      <h3>Cafés selecionados</h3>

      <SelectedCoffeContainer>
        {cartOrders.map((coffees) => (
          <CheckoutCoffeeCard key={coffees.id} coffee={coffees} />
        ))}

        <CheckoutConfirmationSection />
      </SelectedCoffeContainer>
    </CheckoutSelectedCoffeeContainer>
  )
}
