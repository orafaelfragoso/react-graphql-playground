import React from 'react'
import { Button as BaseButton, ButtonProps } from '@chakra-ui/react'

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => (
  <BaseButton {...props} />
)
