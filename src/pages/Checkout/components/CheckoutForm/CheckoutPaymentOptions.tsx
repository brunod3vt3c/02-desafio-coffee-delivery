import { Bank, CreditCard, Money } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
import { CheckoutPayment } from '../CheckoutPayment'
import { CheckoutPaymentOptionsContainer } from './styles'

export const paymentMethods = {
  credit: {
    label: 'Cartão de crédito',
    icon: <CreditCard size={16} />,
  },
  debit: {
    label: 'Cartão de débito',
    icon: <Bank size={16} />,
  },
  money: {
    label: 'Dinheiro',
    icon: <Money size={16} />,
  },
}

export function CheckoutPaymentOptions() {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  const paymentMethodError = errors?.paymentMethod?.message as unknown as string

  return (
    <CheckoutPaymentOptionsContainer>
      {Object.entries(paymentMethods).map(([key, { label, icon }]) => (
        <CheckoutPayment
          key={label}
          id={key}
          icon={icon}
          label={label}
          value={key}
          {...register('paymentMethod')}
        />
      ))}

      {paymentMethodError && <p>{paymentMethodError}</p>}
    </CheckoutPaymentOptionsContainer>
  )
}