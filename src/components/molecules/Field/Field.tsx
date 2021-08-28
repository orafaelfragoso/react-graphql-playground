import React from 'react'

import { Container } from './styles'

export type Props = {
  children: React.ReactElement
}

export const Field: React.FC<Props> = ({ children }: Props) => (
  <Container>{children}</Container>
)
