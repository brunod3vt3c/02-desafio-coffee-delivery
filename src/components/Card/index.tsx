import { ShoppingCartSimple } from 'phosphor-react'
import { useContext, useState } from 'react'
import { CartContextProps } from '../../context/CoffeeCartContextProvider'
import { formatMoney } from '../../utils/formatMoney'
import { QuantityCoffee } from '../QuantityCoffee'
import { CardContainer, CartContainer, QuantityinCart } from './styles'

export interface CoffeCardProps {
  id: number
  photo: string
  categories: string[]
  name: string
  description: string
  price: number
}

interface CoffeProps {
  coffee: CoffeCardProps
}

export function Card({ coffee }: CoffeProps) {
  const { addCoffeeToCart } = useContext(CartContextProps)
  const [quantyCoffe, setQuantyCoffe] = useState(1)

  function handleIncrementquantity() {
    setQuantyCoffe((state) => state - 1)
  }

  function handleDecrementquantity() {
    setQuantyCoffe((state) => state + 1)
  }

  function handleAddCoffeCart() {
    const coffeeToAdd = {
      ...coffee,
      quantyCoffe,
    }
    addCoffeeToCart(coffeeToAdd)
  }

  const coffePrice = formatMoney(coffee.price)
  return (
    <CardContainer>
      <img src={coffee.photo} alt="" />
      <div className="category">
        {coffee.categories.map((categorie) => (
          <p key={`${coffee.id}${categorie}`}>{categorie}</p>
        ))}
      </div>
      <h2>{coffee.name}</h2>
      <span className="text-card">{coffee.description}</span>

      <CartContainer>
        <div>
        €<strong>{coffePrice}</strong>
        </div>

        <QuantityinCart>
          <QuantityCoffee
            onDecrease={handleDecrementquantity}
            onIncrease={handleIncrementquantity}
            quantyCoffe={quantyCoffe}
          />
          <button onClick={handleAddCoffeCart} className="shopping-cart">
            <ShoppingCartSimple weight="fill" size={14} />
          </button>
        </QuantityinCart>
      </CartContainer>
    </CardContainer>
  )
}
