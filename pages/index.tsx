import Head from 'next/head'
import Image from 'next/image'
import { Box } from '@chakra-ui/react'
import pic from '@/public/mammoth-camping.jpeg'

export default function Home() {
  return (
    <>
      <Head>
        <title>Will Naugle # Software Engineer</title>
        <meta name="description" content="Will Naugle personal website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <Box w='100%'>
        <Image src={pic} alt="Deer Lakes, Mammoth CA" />
      </Box>
    </>
  )
}
