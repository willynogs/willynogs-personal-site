import Image from 'next/image'
import { Box, AspectRatio } from '@chakra-ui/react'
import { motion, useReducedMotion } from 'framer-motion'
import pic from '@/public/mammoth-camping.jpeg'
import SEO from '@/components/SEO'

const MotionBox = motion(Box)

export default function Home() {
  const reduce = useReducedMotion()
  return (
    <>
      <SEO />
      <MotionBox
        w="100%"
        borderRadius="md"
        overflow="hidden"
        border="1px solid"
        borderColor="borderSubtle"
        initial={reduce ? undefined : { opacity: 0, scale: 0.99 }}
        animate={reduce ? undefined : { opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
      >
        <AspectRatio ratio={3 / 2}>
          <Image
            src={pic}
            alt="Deer Lakes, Mammoth CA"
            placeholder="blur"
            priority
            sizes="(max-width: 768px) 100vw, 720px"
            style={{ objectFit: 'cover' }}
          />
        </AspectRatio>
      </MotionBox>
    </>
  )
}
