import { MapPin, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import logoCoffe from '../../assets/logo-coffe.svg'
import { CartContextProps } from '../../context/CoffeeCartContextProvider'

import { ButtoCart, ContainerButton, HeaderContainer } from './styles'

export function Header() {
  const { cartQuantity } = useContext(CartContextProps)

  return (
    <HeaderContainer>
      <div className="content">
        <NavLink to="/">
          <img src={logoCoffe} alt="" />
        </NavLink>

        <ContainerButton>
          <ButtoCart variant="purple">
            <MapPin weight="fill" size={20} />
            <strong>Porto, PT</strong>
          </ButtoCart>

          <NavLink to="/checkout">
            <ButtoCart variant="yellow">
              {cartQuantity >= 1 && <span>{cartQuantity}</span>}
              <ShoppingCart weight="fill" size={20} />
            </ButtoCart>
          </NavLink>
        </ContainerButton>
      </div>
    </HeaderContainer>
  )
}
