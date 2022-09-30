import styled from 'styled-components'

interface IconProps {
  variant: 'purple' | 'yellow' | 'yellow-dark'
}

export const SuccessContainer = styled.div`
  div {
    margin-bottom: 2.5rem;
    h2 {
      font-family: 'Baloo 2', sans-serif;
      font-size: 800;
      font-size: 2rem;
      color: ${(props) => props.theme['yellow-dark']};
      margin-top: 2rem;
    }

    p {
      font-weight: 400;
      font-size: 1.25rem;
      color: ${(props) => props.theme['base-subtitle']};
    }
  }
`
export const SucessContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
`
export const OrderContainer = styled.div`
  padding: 2.5rem;
  border-radius: 6px 36px 6px 36px;
  position: relative;
  background: ${(props) => props.theme.white};
  min-width: 32rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  &::before {
    content: '';
    position: absolute;
    inset: -1px;
    z-index: -1;
    border-radius: 7px 37px 7px 37px;
    background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
  }

  section {
    display: flex;
    gap: 0.5rem;
    span {
      width: 19.375rem;
      height: 2.625rem;
      font-style: normal;
      font-size: 1rem;
      line-height: 130%;
    }
  }
`

export const IconSvg = styled.div<IconProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  gap: 0.5rem;

  width: 32px;
  height: 32px;

  border-radius: 50%;

  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme[props.variant]};

  flex: none;
  order: 0;
  flex-grow: 0;
`
