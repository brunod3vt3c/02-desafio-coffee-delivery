import styled from 'styled-components'

export const CardContainer = styled.div`
  position: relative;
  width: 16rem;
  height: 19.375rem;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;
  margin-top: 3rem;

  img {
    position: absolute;
    width: 120px;
    height: 120px;
    left: calc(50% - 120px / 2);
    top: -20px;
  }

  .category {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 4px;

    position: absolute;
    width: 140px;
    height: 21px;
    left: calc(50% - 140px / 2);
    top: 112px;

    p {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.25rem 0.5rem;
      font-size: 0.55rem;
      font-weight: 700;
      width: 5.063rem;
      height: 1.313rem;
      font-weight: 700;
      border-radius: 100px;
      color: ${(props) => props.theme['yellow-dark']};
      background: ${(props) => props.theme['yellow-light']};
      text-transform: uppercase;
      line-height: 130%;
    }
  }

  h2 {
    text-align: center;
    position: absolute;

    height: 1.625rem;
    left: 1.25rem;
    right: 1.25rem;
    top: 9.313rem;

    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 130%;

    color: ${(props) => props.theme['base-subtitle']};
  }

  .text-card {
    position: absolute;
    height: 36px;
    left: 20px;
    right: 20px;
    top: 183px;
    text-align: center;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 0.874rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-label']};
  }
`

export const CartContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  position: absolute;
  gap: 0.75rem;

  height: 2.375rem;
  left: 1.5rem;
  right: 1.5rem;
  bottom: 1.25rem;

  > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.138rem;

    strong {
      display: flex;
      align-items: center;
      font-family: 'Baloo 2', sans-serif;
      font-weight: 800;
      font-size: 1.5rem;
      line-height: 1.95rem;
      text-align: right;
    }
  }
`

export const QuantityinCart = styled.div`
  width: 7.5rem;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4.5rem;
    height: 2.375rem;
    padding: 0.5rem;
    border-radius: 6px;
    gap: 0.25rem;

    font-size: 1rem;

    button {
      display: flex;
      align-items: center;
      background: ${(props) => props.theme['base-button']};
      color: ${(props) => props.theme.purple};
      border: none;

      &:disabled {
        opacity: 0.4;
      }
    }
  }

  .shopping-cart {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    width: 2.375rem;
    height: 2.375rem;

    padding: 0.5rem;
    gap: 0.5rem;
    border: none;
    border-radius: 6px;

    background: ${(props) => props.theme['purple-dark']};

    svg {
      color: ${(props) => props.theme['base-card']};
    }
  }
`
