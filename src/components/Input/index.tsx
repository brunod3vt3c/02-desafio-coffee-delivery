import { forwardRef, InputHTMLAttributes } from 'react'
import {
  InputContainer,
  InputContent,
  InputOpcional,
  InputStyled,
} from './styled'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string
  rightText?: string
}

// eslint-disable-next-line react/display-name
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, rightText, className, ...props }, ref) => {
    return (
      <InputContent className={className}>
        <InputContainer hasError={!!error}>
          <InputStyled ref={ref} {...props} />
          {rightText && <InputOpcional>{rightText}</InputOpcional>}
        </InputContainer>
        {error && <p>{error}</p>}
      </InputContent>
    )
  },
)
