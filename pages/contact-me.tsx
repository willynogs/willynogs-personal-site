import { Box, Text, Link } from '@chakra-ui/react'

const ContactMe: React.FC = () => {
  return (
    <Box>
      <Link href='mailto:willynogs@gmail.com'>
        <Text fontSize='xl' align='center' paddingBottom={6}>Email</Text>
      </Link>
      <Link href='https://www.linkedin.com/in/willnaugle' target='_blank'>
        <Text fontSize='xl' align='center' paddingBottom={6}>LinkedIn</Text>
      </Link>
      <Link href='https://github.com/willynogs' target='_blank'>
        <Text fontSize='xl' align='center' paddingBottom={6}>Github</Text>
      </Link>
      <Link href='https://www.instagram.com/willynogs' target='_blank'>
        <Text fontSize='xl' align='center' paddingBottom={6}>Instagram</Text>
      </Link>
    </Box>
  )
}

export default ContactMe
