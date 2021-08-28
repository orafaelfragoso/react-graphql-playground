import React from 'react'
import {
  Box,
  Flex,
  Button,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { Container } from './styles'

export const Navbar: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Container>
      <Box bg={useColorModeValue('white', 'gray.700')} boxShadow='lg' px={4}>
        <Flex h={16} alignItems='center' justifyContent='space-between'>
          <IconButton
            size='md'
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label='Open Menu'
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems='center'>
            <Box>Twitch</Box>
            <HStack as='nav' spacing={4} display={{ base: 'none', md: 'flex' }}>
              <Link
                px={2}
                py={1}
                rounded='md'
                _hover={{
                  textDecoration: 'none',
                  bg: useColorModeValue('gray.200', 'gray.700'),
                }}
                href='/'
              >
                Home
              </Link>
              <Link
                px={2}
                py={1}
                rounded='md'
                _hover={{
                  textDecoration: 'none',
                  bg: useColorModeValue('gray.200', 'gray.700'),
                }}
                href='/dashboard'
              >
                Dashboard
              </Link>
            </HStack>
          </HStack>
          <Stack
            flex={{ base: 1, md: 0 }}
            justify='flex-end'
            direction='row'
            spacing={6}
          >
            <Button
              as='a'
              fontSize='md'
              fontWeight={400}
              variant='link'
              href='/signin'
            >
              Login
            </Button>
            <Button
              as='a'
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize='md'
              fontWeight={600}
              color='white'
              bg='pink.400'
              href='/signup'
              _hover={{
                bg: 'pink.300',
              }}
            >
              Cadastre-se
            </Button>
          </Stack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as='nav' spacing={4}>
              <Link
                px={2}
                py={1}
                rounded='md'
                _hover={{
                  textDecoration: 'none',
                  bg: useColorModeValue('gray.200', 'gray.700'),
                }}
                href='/dashboard'
              >
                Dashboard
              </Link>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </Container>
  )
}
