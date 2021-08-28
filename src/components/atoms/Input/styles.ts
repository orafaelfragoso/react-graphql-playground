import React from 'react'
import styled from 'styled-components'

export type Props = {
  type: string
  placeholder?: string
  invalid?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const InputField = styled.input<Props>`
  width: 100%;
  padding: 8px 16px;
  border-radius: 8px;
  border: 1px solid ${(props) => (props.invalid ? 'red' : '#e8e8e8')};
  outline: none;
`
