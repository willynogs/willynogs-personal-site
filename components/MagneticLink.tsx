import { Link as ChakraLink, LinkProps } from '@chakra-ui/react'
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'
import NextLink from 'next/link'
import { ReactNode, useRef } from 'react'

const MotionLink = motion(ChakraLink)

type Props = LinkProps & {
  href: string
  children: ReactNode
  strength?: number
  external?: boolean
}

const MagneticLink: React.FC<Props> = ({ href, children, strength = 18, external, ...rest }) => {
  const ref = useRef<HTMLAnchorElement>(null)
  const reduce = useReducedMotion()

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 })
  const springY = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 })

  const handleMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (reduce || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const dx = (e.clientX - cx) / (rect.width / 2)
    const dy = (e.clientY - cy) / (rect.height / 2)
    x.set(dx * strength)
    y.set(dy * strength)
  }

  const handleLeave = () => {
    x.set(0)
    y.set(0)
  }

  const linkAs = external ? undefined : NextLink

  return (
    <MotionLink
      ref={ref}
      as={linkAs}
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: springX, y: springY, display: 'inline-block' }}
      {...rest}
    >
      {children}
    </MotionLink>
  )
}

export default MagneticLink
