import { Box, Flex, Link, Text, Divider } from '@chakra-ui/react'
import NextLink from 'next/link'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <Box as="footer" mt={12} mb={8}>
      <Divider mb={6} borderColor="borderSubtle" />
      <Flex
        justifyContent="space-between"
        alignItems="center"
        fontSize="xs"
        color="fgSubtle"
        fontFamily="mono"
        gap={4}
        flexWrap="wrap"
      >
        <Text>© {currentYear} Will Naugle</Text>
        <Flex gap={4}>
          <Link
            as={NextLink}
            href="/colophon"
            color="fgSubtle"
            _hover={{ color: 'accentFg', textDecoration: 'none' }}
          >
            Colophon
          </Link>
          <Link
            href="https://github.com/willynogs/willynogs-personal-site"
            target="_blank"
            rel="noopener noreferrer"
            color="fgSubtle"
            _hover={{ color: 'accentFg', textDecoration: 'none' }}
          >
            Source
          </Link>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Footer
