import React from 'react'
import { Flex, Stack, Heading, Text, useColorModeValue } from '@chakra-ui/react'

export type Props = {
  title: string
  subtitle: string | React.ReactElement
  content: React.ReactElement
}

export const Auth: React.FC<Props> = ({ title, subtitle, content }: Props) => (
  <Flex
    minH='calc(100vh - 64px)'
    align='center'
    justify='center'
    bg={useColorModeValue('gray.50', 'gray.800')}
  >
    <Stack spacing={8} mx='auto' maxW='lg' py={12} px={6}>
      <Stack align='center'>
        <Heading fontSize='4xl'>{title}</Heading>
        <Text fontSize='lg' color='gray.600'>
          {subtitle}
        </Text>
      </Stack>
      {content}
    </Stack>
  </Flex>
)
