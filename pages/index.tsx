import Image from 'next/image'
import { Box } from '@chakra-ui/react'
import pic from '@/public/mammoth-camping.jpeg'

export default function Home() {
  return (
    <Box w='100%'>
      <Image src={pic} alt="Deer Lakes, Mammoth CA" priority />
    </Box>
  )
}
