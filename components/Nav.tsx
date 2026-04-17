import { Box, Heading, Flex, IconButton, useColorMode, Link as ChakraLink, HStack } from '@chakra-ui/react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

const MotionHeading = motion(Heading)

const navItems = [
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact-me', label: 'Contact' },
  { href: '/resume.pdf', label: 'Resume', external: true },
]

const SunIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
  </svg>
)

const MoonIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" />
  </svg>
)

const Nav: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const router = useRouter()
  const reduce = useReducedMotion()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const openPalette = () => {
    document.dispatchEvent(new Event('cmdk:toggle'))
  }

  return (
    <Box as="header" pt={8} pb={6}>
      <Flex alignItems="center" mb={6}>
        <Box flex={1} />
        <ChakraLink as={NextLink} href="/" _hover={{ textDecoration: 'none' }}>
          <MotionHeading
            as="h1"
            size="xl"
            color="fg"
            initial={reduce ? undefined : { opacity: 0, y: -6 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
          >
            Will Naugle
          </MotionHeading>
        </ChakraLink>
        <HStack flex={1} justify="flex-end" spacing={1}>
          <IconButton
            aria-label="Open command palette (⌘K)"
            variant="ghost"
            size="sm"
            color="fgMuted"
            _hover={{ color: 'accentFg', bg: 'borderSubtle' }}
            onClick={openPalette}
            icon={
              <Box
                as="span"
                fontFamily="mono"
                fontSize="xs"
                lineHeight="1"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                ⌘K
              </Box>
            }
          />
          <IconButton
            aria-label={colorMode === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            variant="ghost"
            size="sm"
            color="fgMuted"
            _hover={{ color: 'accentFg', bg: 'borderSubtle' }}
            onClick={toggleColorMode}
            icon={mounted ? (colorMode === 'light' ? <MoonIcon /> : <SunIcon />) : <Box w="16px" h="16px" />}
          />
        </HStack>
      </Flex>

      <Flex justifyContent="center" gap={{ base: 5, sm: 8 }} wrap="wrap">
        {navItems.map((item) => {
          const active = !item.external && router.route === item.href
          return (
            <ChakraLink
              key={item.href}
              as={item.external ? undefined : NextLink}
              href={item.href}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noopener noreferrer' : undefined}
              fontFamily="mono"
              fontSize="sm"
              color={active ? 'accentFg' : 'fg'}
              position="relative"
              py={1}
              transition="color 150ms ease"
              _hover={{ color: 'accentFg', textDecoration: 'none' }}
              _after={{
                content: '""',
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: 0,
                height: '1px',
                bg: 'accentFg',
                transform: active ? 'scaleX(1)' : 'scaleX(0)',
                transformOrigin: 'left',
                transition: 'transform 200ms ease',
              }}
              sx={{
                '&:hover::after': { transform: 'scaleX(1)' },
              }}
            >
              {item.label}
            </ChakraLink>
          )
        })}
      </Flex>
    </Box>
  )
}

export default Nav
