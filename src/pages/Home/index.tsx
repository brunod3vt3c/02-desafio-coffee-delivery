import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import coffeHome from '../../assets/coffee-home.png'
import { Card } from '../../components/Card'
import { coffes } from '../../services/coffes'
import {
  BannerCoffe,
  Container,
  IconsContainer,
  ItensBanner,
  SectionCoffe,
  SectionTextBanner,
} from './styles'

export function Home() {
  return (
    <>
      <BannerCoffe>
        <Container className="content">
          <div>
            <SectionTextBanner>
              <span>Encontre o café perfeito para qualquer hora do dia</span>
              <p>
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </p>
            </SectionTextBanner>

            <ItensBanner>
              <ul>
                <li>
                  <IconsContainer variant="yellow-dark">
                    <ShoppingCart size={16} />
                  </IconsContainer>
                  Compra simples e segura
                </li>
                <li>
                  <IconsContainer variant="base-text">
                    <Package size={16} />
                  </IconsContainer>
                  Embalagem mantém o café intacto
                </li>
                <li>
                  <IconsContainer variant="yellow">
                    <Timer size={16} />
                  </IconsContainer>
                  Entrega rápida e rastreada
                </li>
                <li>
                  <IconsContainer variant="purple">
                    <Coffee size={16} />
                  </IconsContainer>
                  O café chega fresquinho até você
                </li>
              </ul>
            </ItensBanner>
          </div>

          <img src={coffeHome} alt="" />
        </Container>
      </BannerCoffe>

      <SectionCoffe className="content">
        <span>Nossos cafés</span>
        <div>
          {coffes.map((item) => {
            return <Card key={item.id} coffee={item} />
          })}
        </div>
      </SectionCoffe>
    </>
  )
}
