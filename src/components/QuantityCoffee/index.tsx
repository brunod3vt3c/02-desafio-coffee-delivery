import { Minus, Plus } from 'phosphor-react'
import { QuantityinCart } from './styles'

interface QuantityCoffeeProps {
  quantyCoffe: number
  onIncrease: () => void
  onDecrease: () => void
}

export function QuantityCoffee({
  quantyCoffe,
  onIncrease,
  onDecrease,
}: QuantityCoffeeProps) {
  return (
    <QuantityinCart>
      <button onClick={onIncrease} disabled={quantyCoffe <= 1}>
        <Minus size={14} />
      </button>{' '}
      {quantyCoffe}{' '}
      <button onClick={onDecrease}>
        <Plus size={14} />
      </button>
    </QuantityinCart>
  )
}
