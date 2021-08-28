import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { Button } from '@atoms/Button'
import { Input } from '@atoms/Input'
import { Field } from '@molecules/Field'
import { Container } from './styles'

export type Props = {
  onSubmit: (data: Inputs) => void
}

export type Inputs = {
  email: string
  password: string
}

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
})

export const SignupForm: React.FC<Props> = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  })

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <Field>
        <Input
          type='text'
          placeholder='E-mail'
          invalid={!!errors?.email}
          {...register('email')}
        />
      </Field>
      <Field>
        <Input
          type='password'
          placeholder='Password'
          invalid={!!errors?.password}
          {...register('password')}
        />
      </Field>
      <Button type='submit' disabled={isSubmitting}>
        Enviar
      </Button>
    </Container>
  )
}
