import styled from 'styled-components'
import backgroundImage from '../../assets/background-home.png'

interface IconsContainerProps {
  variant: 'base-text' | 'purple' | 'yellow' | 'yellow-dark'
}

export const BannerCoffe = styled.section`
  width: 100%;
  height: 34rem;
  background: url(${backgroundImage}) no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: right;
`
export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;
`

export const SectionTextBanner = styled.section`
  span {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 3rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-title']};
  }

  p {
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    margin-top: 1rem;

    color: ${(props) => props.theme['base-subtitle']};
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
  }
`

export const ItensBanner = styled.div`
  width: 35.438rem;
  height: 5.25rem;
  left: calc(50% - 567px / 2 - 276.5px);
  margin-top: 3rem;

  ul {
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }

  li {
    font-size: 0.906rem;
    display: flex;
    align-items: center;
    color: ${(props) => props.theme['base-text']};
    gap: 0.75rem;
  }
`

export const IconsContainer = styled.span<IconsContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: ${(props) => props.theme[props.variant]};
  color: ${(props) => props.theme.white};
`
// SENCTION COFFE

export const SectionCoffe = styled.div`
  margin-top: 2rem;
  span {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 2rem;
    color: ${(props) => props.theme['base-title']};
    left: calc(50% - 193px / 2 - 463.5px);
  }

  div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`
