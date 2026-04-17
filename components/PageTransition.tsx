import { Box } from '@chakra-ui/react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  routeKey: string
}

const PageTransition: React.FC<Props> = ({ children, routeKey }) => {
  const reduce = useReducedMotion()

  const variants = reduce
    ? { initial: { opacity: 1 }, animate: { opacity: 1 }, exit: { opacity: 1 } }
    : {
        initial: { opacity: 0, y: 8 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -8 },
      }

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={routeKey}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={variants}
        transition={{ duration: 0.28, ease: [0.32, 0.72, 0, 1] }}
      >
        <Box minH="50vh">{children}</Box>
      </motion.div>
    </AnimatePresence>
  )
}

export default PageTransition
