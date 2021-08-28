import React from 'react'
import { SubmitHandler } from 'react-hook-form'

import { Inputs, SigninForm } from '@organisms/SigninForm'
import { Auth } from '@templates/Auth'

export const Signin: React.FC = () => {
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  return (
    <Auth
      title='Entre na sua conta'
      subtitle='Não tem uma conta? Cadastre-se!'
      content={<SigninForm onSubmit={onSubmit} />}
    />
  )
}
