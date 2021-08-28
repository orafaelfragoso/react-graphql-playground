import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import {
  Box,
  Stack,
  Checkbox,
  useColorModeValue,
  FormErrorMessage,
  Link,
} from '@chakra-ui/react'

import { Button } from '@atoms/Button'
import { Input } from '@atoms/Input'
import { Field } from '@molecules/Field'
import { Form } from './styles'

export type Props = {
  onSubmit: (data: Inputs) => void
}

export type Inputs = {
  email: string
  password: string
  rememberMe: boolean
}

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
  rememberMe: yup.boolean().default(false),
})

export const SigninForm: React.FC<Props> = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  })

  return (
    <Box
      rounded='lg'
      bg={useColorModeValue('white', 'gray.700')}
      boxShadow='lg'
      p={8}
      minW='sm'
    >
      <Stack spacing={4}>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Field isInvalid={!!errors?.email} style={{ marginBottom: 16 }}>
            <Input
              type='text'
              placeholder='E-mail'
              isInvalid={!!errors?.email}
              {...register('email')}
            />
            <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
          </Field>
          <Field isInvalid={!!errors?.password} style={{ marginBottom: 16 }}>
            <Input
              type='password'
              placeholder='Password'
              isInvalid={!!errors?.password}
              {...register('password')}
            />
            <FormErrorMessage>{errors?.password?.message}</FormErrorMessage>
          </Field>
          <Stack spacing={10}>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align='start'
              justify='space-between'
            >
              <Field isInvalid={!!errors?.rememberMe} width='auto'>
                <Checkbox
                  isInvalid={!!errors?.rememberMe}
                  {...register('rememberMe')}
                >
                  Lembrar-me
                </Checkbox>
              </Field>
              <Link href='/forgot-password' color='blue.400'>
                Esqueceu a senha?
              </Link>
            </Stack>
            <Button
              bg='blue.400'
              color='white'
              _hover={{
                bg: 'blue.500',
              }}
              type='submit'
              isLoading={isSubmitting}
              disabled={!isValid}
            >
              Entrar
            </Button>
          </Stack>
        </Form>
      </Stack>
    </Box>
  )
}
