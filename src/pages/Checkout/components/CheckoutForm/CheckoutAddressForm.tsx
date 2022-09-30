import { useFormContext } from 'react-hook-form'
import { Input } from '../../../../components/Input'
import { CheckoutAddressFormContainer } from './styles'

interface ErrorsProps {
  errors: {
    [key: string]: {
      message: string
    }
  }
}

export function CheckoutAddressForm() {
  const { register, formState } = useFormContext()

  const { errors } = formState as unknown as ErrorsProps
  return (
    <CheckoutAddressFormContainer>
      <Input
        placeholder="Nome"
        className="name"
        {...register('name')}
        error={errors.name?.message}
      />
      <Input
        placeholder="Rua"
        className="street"
        {...register('street')}
        error={errors.street?.message}
      />

      <Input
        placeholder="Número"
        type="number"
        {...register('number')}
        error={errors.number?.message}
      />
      <Input
        placeholder="Complemento"
        className="complement"
        {...register('complement')}
        error={errors.complement?.message}
        rightText="Opcional"
      />
      <Input
        placeholder="Cidade"
        {...register('city')}
        error={errors.city?.message}
      />
    </CheckoutAddressFormContainer>
  )
}
