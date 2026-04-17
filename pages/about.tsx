import { Text, Box, Container, Flex, Grid, GridItem, AspectRatio, Divider } from '@chakra-ui/react'
import Image from 'next/image'
import { motion, useReducedMotion, Variants } from 'framer-motion'
import me from '@/public/headshot.jpg'
import meSarahDogs from '@/public/pumpkin-patch.jpg'
import osuLogo from '@/public/osu-logo.png'
import beamLogo from '@/public/beam-logo.webp'
import upstartLogo from '@/public/upstart-logo.png'
import SEO from '@/components/SEO'

const MotionBox = motion(Box)

const skills = [
  'Java',
  'Kotlin',
  'Spring',
  'Typescript',
  'React',
  'Next.js',
  'Material UI',
  'Tailwind CSS',
  'Ruby ',
  'Rails',
  'Postgres',
  'Redis',
  'Kafka',
  'Debezium',
  'Playwright',
  'Temporal',
  'KrakenD',
  'FastAPI',
  'pydantic-ai',
  'pydantic-evals',
]

const stagger: Variants = {
  initial: {},
  animate: { transition: { staggerChildren: 0.08, delayChildren: 0.04 } },
}

const fadeUp: Variants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.32, 0.72, 0, 1] } },
}

const About: React.FC = () => {
  const reduce = useReducedMotion()
  const base = reduce ? undefined : 'initial'
  const animate = reduce ? undefined : 'animate'

  return (
    <>
      <SEO
        title="About"
        description="Will Naugle, software engineer with 6+ years across education, insurance, and finance. LA via Cleveland."
      />
      <Container px={0}>
        <MotionBox variants={stagger} initial={base} animate={animate}>
          <MotionBox variants={fadeUp}>
            <Flex justifyContent="center" paddingBottom={6}>
              <Box w="50%" borderRadius="md" overflow="hidden">
                <Image src={me} alt="Will Naugle" placeholder="blur" priority />
              </Box>
            </Flex>
          </MotionBox>

          <MotionBox variants={fadeUp}>
            <Text fontSize="lg" textAlign="center">
              Hi! I&apos;m Will Naugle, a software engineer with 6+ years of experience across the education, insurance, and finance industries. Currently based out of Los Angeles, California by way of Cleveland, Ohio.
            </Text>
          </MotionBox>

          <Divider my={10} borderColor="borderSubtle" />

          <MotionBox variants={fadeUp}>
            <Grid templateColumns="repeat(3, 1fr)" gap={12} paddingBottom={6}>
              <Box bg="ink.50" borderRadius="md" p={3}>
                <AspectRatio ratio={1}>
                  <Image src={osuLogo} alt="The Ohio State University" placeholder="blur" />
                </AspectRatio>
              </Box>
              <Box bg="ink.50" borderRadius="md" p={3}>
                <AspectRatio ratio={1}>
                  <Image src={beamLogo} alt="Beam Benefits" placeholder="blur" />
                </AspectRatio>
              </Box>
              <Box bg="ink.50" borderRadius="md" p={3}>
                <AspectRatio ratio={1}>
                  <Image src={upstartLogo} alt="Upstart" placeholder="blur" />
                </AspectRatio>
              </Box>
            </Grid>
          </MotionBox>

          <MotionBox variants={fadeUp}>
            <Text align="center" fontSize="lg" paddingBottom={6}>
              I have had the opportunity to work with many different tech stacks throughout my career. I have worked at public institutions (The Ohio State University), early-stage start-ups (Beam Benefits), and late-stage start-ups as they transition into public companies (Upstart). Below you&apos;ll find a list of some of the technologies I&apos;ve worked most closely with:
            </Text>
          </MotionBox>

          <MotionBox
            variants={{
              initial: {},
              animate: { transition: { staggerChildren: 0.03 } },
            }}
          >
            <Grid templateColumns="repeat(2, 1fr)" gap={2}>
              {skills.map((skill) => (
                <GridItem key={skill}>
                  <MotionBox
                    variants={{
                      initial: { opacity: 0, y: 6 },
                      animate: { opacity: 1, y: 0, transition: { duration: 0.3 } },
                    }}
                  >
                    <Text fontWeight="bold" fontSize="lg" align="center">
                      {skill}
                    </Text>
                  </MotionBox>
                </GridItem>
              ))}
            </Grid>
          </MotionBox>

          <Divider my={10} borderColor="borderSubtle" />

          <MotionBox variants={fadeUp}>
            <Flex justifyContent="center" paddingBottom={6}>
              <Box w="100%" borderRadius="md" overflow="hidden">
                <Image src={meSarahDogs} alt="Me + Sarah + Dogs" placeholder="blur" />
              </Box>
            </Flex>
          </MotionBox>

          <MotionBox variants={fadeUp}>
            <Text align="center" fontSize="lg">
              When I&apos;m not working, I love to cook and explore the restaurants around Los Angeles. My girlfriend Sarah and I enjoy hiking and camping with our two dogs Merlin and Penelope.
              When we&apos;re not feeling as active, you can usually find us watching movies.
            </Text>
          </MotionBox>
        </MotionBox>
      </Container>
    </>
  )
}

export default About
