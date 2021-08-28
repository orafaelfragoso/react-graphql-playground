import React from 'react'

import { StyledButton } from './styles'

export type Props = {
  variant?: string
  type: 'button' | 'reset' | 'submit'
  children: React.ReactElement | string
  disabled: boolean
}

export const Button: React.FC<Props> = ({
  type,
  children,
  disabled,
}: Props) => (
  <StyledButton type={type || 'button'} disabled={disabled}>
    {children}
  </StyledButton>
)
