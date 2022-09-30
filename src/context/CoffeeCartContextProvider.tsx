import { produce } from 'immer'
import { createContext, ReactNode, useEffect, useState } from 'react'
import { CoffeCardProps } from '../components/Card'

export interface OrdersCartProps extends CoffeCardProps {
  quantyCoffe: number
}

interface CoffeeCartContextProps {
  children: ReactNode
}

interface CartProps {
  cartOrders: OrdersCartProps[]
  cartQuantity: number
  cartOrdersTotal: number
  addCoffeeToCart: (coffee: OrdersCartProps) => void
  completeCurrentOrder: (
    cartOrderId: number,
    type: 'increase' | 'decrease',
  ) => void
  removeCoffeeFromCart: (cartOrderId: number) => void
  cleanCart: () => void
}

export const CartContextProps = createContext({} as CartProps)

export function CoffeeCartContextProvider({
  children,
}: CoffeeCartContextProps) {
  const [cartOrders, setCartOrders] = useState<OrdersCartProps[]>(() => {
    const storageStateCart = localStorage.getItem('coffe-delivery-1.0.0')
    if (storageStateCart) {
      return JSON.parse(storageStateCart)
    }

    return []
  })

  const cartQuantity = cartOrders.length

  const cartOrdersTotal = cartOrders.reduce((total, cartOrder) => {
    return total + cartOrder.price * cartOrder.quantyCoffe
  }, 0)

  function addCoffeeToCart(coffee: OrdersCartProps) {
    const checkIfTheCoffeeExists = cartOrders.findIndex(
      (cartOrder) => cartOrder.id === coffee.id,
    )

    const newCart = produce(cartOrders, (draft) => {
      if (checkIfTheCoffeeExists < 0) {
        draft.push(coffee)
      } else {
        draft[checkIfTheCoffeeExists].quantyCoffe += coffee.quantyCoffe
      }
    })

    setCartOrders(newCart)
  }

  function completeCurrentOrder(
    cartOrderId: number,
    type: 'increase' | 'decrease',
  ) {
    const newCart = produce(cartOrders, (draft) => {
      const coffeeExistsInCart = cartOrders.findIndex(
        (cartOrder) => cartOrder.id === cartOrderId,
      )

      if (coffeeExistsInCart >= 0) {
        const order = draft[coffeeExistsInCart]
        draft[coffeeExistsInCart].quantyCoffe =
          type === 'decrease' ? order.quantyCoffe + 1 : order.quantyCoffe - 1
      }
    })

    setCartOrders(newCart)
  }

  function removeCoffeeFromCart(cartOrderId: number) {
    const newCart = produce(cartOrders, (draft) => {
      const coffeeExistsInCart = cartOrders.findIndex(
        (cartOrder) => cartOrder.id === cartOrderId,
      )
      if (coffeeExistsInCart >= 0) {
        draft.splice(coffeeExistsInCart, 1)
      }
    })

    setCartOrders(newCart)
  }

  function cleanCart() {
    setCartOrders([])
  }

  useEffect(() => {
    const stateJson = JSON.stringify(cartOrders)

    localStorage.setItem('coffe-delivery-1.0.0', stateJson)
  }, [cartOrders])

  return (
    <CartContextProps.Provider
      value={{
        cartOrders,
        cartQuantity,
        cartOrdersTotal,
        addCoffeeToCart,
        completeCurrentOrder,
        removeCoffeeFromCart,
        cleanCart,
      }}
    >
      {children}
    </CartContextProps.Provider>
  )
}
