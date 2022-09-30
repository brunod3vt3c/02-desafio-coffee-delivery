import { MapPin, Timer } from 'phosphor-react'
import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import imagemSuccess from '../../assets/illustration-success.png'
import { OrderDataType } from '../Checkout'
import { paymentMethods } from '../Checkout/components/CheckoutForm/CheckoutPaymentOptions'
import {
  IconSvg,
  OrderContainer,
  SuccessContainer,
  SucessContent,
} from './styles'

interface SuccessProps {
  state: OrderDataType
}

export function Success() {
  const navigate = useNavigate()
  const { state } = useLocation() as unknown as SuccessProps

  useEffect(() => {
    if (!state) {
      navigate('/')
    }
  }, [])

  const mintime = Math.floor(Math.random() * 20)
  const maxtime = Math.floor(Math.random() * 20)

  return (
    <SuccessContainer className="content">
      <div>
        <h2>Uhu! Pedido confirmado</h2>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </div>

      <SucessContent>
        <OrderContainer>
          <section>
            <IconSvg variant="purple">
              <MapPin weight="fill" size={16} />
            </IconSvg>
            <span>
              Olá {' '}
              <strong>
                {state.name},
              </strong>{' '}
               sua entrega na{' '}
              <strong>
                Rua {state.street}, {state.number}
              </strong>{' '}
              - {state.city}
            </span>
          </section>

          <section>
            <IconSvg variant="yellow-dark">
              <Timer weight="fill" size={16} />
            </IconSvg>
            <span>
              Previsão de entrega <br />
              <strong>{mintime < maxtime ? mintime : '10'} min - {maxtime > mintime ? maxtime : '20'} min </strong>
            </span>
          </section>

          <section>
            <IconSvg variant="yellow">
              <Timer weight="fill" size={16} />
            </IconSvg>
            <span>
              Pagamento na entrega
              <br />
              <strong>{paymentMethods[state.paymentMethod].label}</strong>
            </span>
          </section>
        </OrderContainer>
        <img src={imagemSuccess} alt="" />
      </SucessContent>
    </SuccessContainer>
  )
}
