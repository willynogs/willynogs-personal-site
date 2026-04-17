import { Box, Flex, Link, Text, Heading, useToast, HStack } from '@chakra-ui/react'
import { motion, useReducedMotion, Variants } from 'framer-motion'
import SEO from '@/components/SEO'

const MotionBox = motion(Box)

const EMAIL = 'willynogs@gmail.com'

const links = [
  { label: 'Email', href: `mailto:${EMAIL}`, hint: EMAIL, external: false },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/willnaugle', hint: 'linkedin.com/in/willnaugle', external: true },
  { label: 'GitHub', href: 'https://github.com/willynogs', hint: 'github.com/willynogs', external: true },
  { label: 'Instagram', href: 'https://www.instagram.com/willynogs', hint: 'instagram.com/willynogs', external: true },
]

const stagger: Variants = {
  initial: {},
  animate: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
}

const fadeUp: Variants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.32, 0.72, 0, 1] } },
}

const ArrowIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M7 17L17 7M7 7h10v10" />
  </svg>
)

const ContactMe: React.FC = () => {
  const reduce = useReducedMotion()
  const toast = useToast()

  const copyEmail = async (e: React.MouseEvent) => {
    if (typeof navigator === 'undefined' || !navigator.clipboard) return
    e.preventDefault()
    try {
      await navigator.clipboard.writeText(EMAIL)
      toast({
        title: 'Email copied',
        description: EMAIL,
        status: 'success',
        duration: 1800,
        position: 'top',
        variant: 'subtle',
      })
    } catch {
      window.location.href = `mailto:${EMAIL}`
    }
  }

  return (
    <>
      <SEO title="Contact" description="Reach out to Will Naugle by email or social." />
      <MotionBox
        variants={stagger}
        initial={reduce ? undefined : 'initial'}
        animate={reduce ? undefined : 'animate'}
        py={4}
      >
        <MotionBox variants={fadeUp} mb={10}>
          <Heading as="h2" size="xl" fontFamily="heading" letterSpacing="-0.02em">
            Say hi.
          </Heading>
          <Text color="fgMuted" mt={3} fontSize="md">
            Best reached over email. Click to copy.
          </Text>
        </MotionBox>

        <Box>
          {links.map((link) => (
            <MotionBox
              key={link.label}
              variants={fadeUp}
              borderTop="1px solid"
              borderColor="borderSubtle"
              _last={{ borderBottom: '1px solid', borderBottomColor: 'borderSubtle' }}
            >
              <Link
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                onClick={link.label === 'Email' ? copyEmail : undefined}
                role="group"
                display="block"
                py={5}
                px={2}
                transition="background-color 200ms ease"
                _hover={{ textDecoration: 'none', bg: 'borderSubtle' }}
              >
                <Flex justify="space-between" align="center" gap={4}>
                  <HStack spacing={4} align="baseline">
                    <Text
                      fontFamily="heading"
                      fontSize="2xl"
                      fontWeight={500}
                      letterSpacing="-0.015em"
                      transition="color 150ms ease"
                      _groupHover={{ color: 'accentFg' }}
                    >
                      {link.label}
                    </Text>
                    <Text
                      fontFamily="mono"
                      fontSize="xs"
                      color="fgSubtle"
                      display={{ base: 'none', sm: 'block' }}
                    >
                      {link.hint}
                    </Text>
                  </HStack>
                  <Box
                    color="fgSubtle"
                    transition="transform 200ms ease, color 200ms ease"
                    _groupHover={{ color: 'accentFg', transform: 'translate(2px, -2px)' }}
                  >
                    <ArrowIcon />
                  </Box>
                </Flex>
              </Link>
            </MotionBox>
          ))}
        </Box>
      </MotionBox>
    </>
  )
}

export default ContactMe
