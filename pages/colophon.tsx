import { Box, Grid, GridItem, Heading, Text, Link, Flex } from '@chakra-ui/react'
import { motion, useReducedMotion, Variants } from 'framer-motion'
import SEO from '@/components/SEO'

const MotionBox = motion(Box)

type Row = { term: string; detail: React.ReactNode }

const stack: Row[] = [
  { term: 'Framework', detail: 'Next.js 14 · React 18 · TypeScript' },
  { term: 'UI', detail: 'Chakra UI · Framer Motion · cmdk' },
  { term: 'Hosting', detail: 'Vercel' },
  { term: 'Analytics', detail: 'Vercel Analytics' },
  { term: 'Images', detail: 'next/image · Sharp · WebP / AVIF' },
  { term: 'OG images', detail: 'next/og on the edge runtime' },
]

const design: Row[] = [
  { term: 'Typeface', detail: 'Inconsolata, Google Fonts' },
  { term: 'Accent', detail: '#ff7847' },
  { term: 'Ink light', detail: '#fafaf7' },
  { term: 'Ink dark', detail: '#0a0a09' },
  { term: 'Theme', detail: 'System-synced light + dark' },
]

const niceties: Row[] = [
  { term: 'Command palette', detail: '⌘K, or tap the badge in the header' },
  { term: 'Motion', detail: 'Page transitions, magnetic nav, staggered entries' },
  { term: 'Reduced motion', detail: 'Respected via prefers-reduced-motion' },
  { term: 'Metadata', detail: 'Per-page SEO, canonical URLs, OG + Twitter' },
  { term: 'Sitemap', detail: '/sitemap.xml · /robots.txt' },
]

const stagger: Variants = {
  initial: {},
  animate: { transition: { staggerChildren: 0.05, delayChildren: 0.04 } },
}
const fadeUp: Variants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.32, 0.72, 0, 1] } },
}

const Section = ({ heading, rows }: { heading: string; rows: Row[] }) => (
  <MotionBox variants={fadeUp} mb={10}>
    <Text
      fontFamily="mono"
      fontSize="xs"
      textTransform="uppercase"
      letterSpacing="0.12em"
      color="fgSubtle"
      mb={4}
    >
      {heading}
    </Text>
    <Box borderTop="1px solid" borderColor="borderSubtle">
      {rows.map((r) => (
        <Grid
          key={r.term}
          templateColumns={{ base: '1fr', sm: '140px 1fr' }}
          gap={{ base: 1, sm: 6 }}
          py={3}
          borderBottom="1px solid"
          borderColor="borderSubtle"
        >
          <GridItem>
            <Text fontFamily="mono" fontSize="sm" color="fgMuted">
              {r.term}
            </Text>
          </GridItem>
          <GridItem>
            <Text fontSize="sm">{r.detail}</Text>
          </GridItem>
        </Grid>
      ))}
    </Box>
  </MotionBox>
)

const Colophon: React.FC = () => {
  const reduce = useReducedMotion()
  return (
    <>
      <SEO title="Colophon" description="How this site is built, typed, and colored." />
      <MotionBox
        variants={stagger}
        initial={reduce ? undefined : 'initial'}
        animate={reduce ? undefined : 'animate'}
        py={4}
      >
        <MotionBox variants={fadeUp} mb={10}>
          <Heading as="h2" size="xl">
            Colophon
          </Heading>
          <Text color="fgMuted" mt={3} fontSize="md">
            A quick note on how this site is built.
          </Text>
        </MotionBox>

        <Section heading="Stack" rows={stack} />
        <Section heading="Design" rows={design} />
        <Section heading="Niceties" rows={niceties} />

        <MotionBox variants={fadeUp}>
          <Flex
            borderTop="1px solid"
            borderColor="borderSubtle"
            pt={6}
            justify="space-between"
            fontSize="xs"
            fontFamily="mono"
            color="fgSubtle"
          >
            <Text>Source is public.</Text>
            <Link
              href="https://github.com/willynogs/willynogs-personal-site"
              target="_blank"
              rel="noopener noreferrer"
              color="fgSubtle"
              _hover={{ color: 'accentFg', textDecoration: 'none' }}
            >
              github.com/willynogs →
            </Link>
          </Flex>
        </MotionBox>
      </MotionBox>
    </>
  )
}

export default Colophon
