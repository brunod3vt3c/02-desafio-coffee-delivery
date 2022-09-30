import { forwardRef, InputHTMLAttributes, ReactNode } from 'react'
import { CheckoutPaymentContent, CheckoutPaymentContainer } from './styles'

type PaymentMethodInputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: ReactNode
  label: string
}

export const CheckoutPayment = forwardRef<
  HTMLInputElement,
  PaymentMethodInputProps
>(({ id, icon, label, ...props }, ref) => {
  return (
    <CheckoutPaymentContainer>
      <input id={id} type="radio" {...props} name="paymentMethod" ref={ref} />
      <label htmlFor={id}>
        <CheckoutPaymentContent>
          {icon}
          {label}
        </CheckoutPaymentContent>
      </label>
    </CheckoutPaymentContainer>
  )
})
