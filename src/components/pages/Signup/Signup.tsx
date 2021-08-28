import React from 'react'
import { SubmitHandler } from 'react-hook-form'

import { Inputs, SignupForm } from '@organisms/SignupForm'
import { Auth } from '@templates/Auth'

export const Signup: React.FC = () => {
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  return (
    <Auth
      title='Crie a sua conta'
      subtitle='Já tem uma conta? Faça seu login!'
      content={<SignupForm onSubmit={onSubmit} />}
    />
  )
}
