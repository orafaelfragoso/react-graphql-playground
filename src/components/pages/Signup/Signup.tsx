import React from 'react'
import { SubmitHandler } from 'react-hook-form'

import { Inputs, SignupForm } from '@organisms/SignupForm'

export const Signup: React.FC = () => {
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  return (
    <div style={{ width: 320, margin: '0 auto' }}>
      <SignupForm onSubmit={onSubmit} />
    </div>
  )
}
