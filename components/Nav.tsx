import { Box, Heading, Link, Flex } from '@chakra-ui/react'

import NextLink from 'next/link'

const Nav: React.FC = () => {
  return (
    <Box py={6}>
      <Flex justifyContent='center' paddingBottom={4}>
        <Link as={NextLink} href='/'>
          <Heading as='h1' size='xl'>
            Will Naugle
          </Heading>
        </Link>
      </Flex>
      <Flex justifyContent='space-between'>
        <Link as={NextLink} href='/about'>
          About
        </Link>
        <Link as={NextLink} href='/blog'>
          Blog
        </Link>
        <Link as={NextLink} href='/contact-me'>
          Contact Me
        </Link>
        <Link as={NextLink} href='/resume'>
          Résumé
        </Link>
      </Flex>
    </Box>
  )
}

export default Nav;
