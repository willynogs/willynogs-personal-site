import { Text, Box, Container, Flex, Grid, GridItem, AspectRatio, Divider, UnorderedList, ListItem } from '@chakra-ui/react'
import Image from 'next/image'
import me from '@/public/me-with-bear-can.jpeg'
import meSarahDogs from '@/public/me-sarah-dogs.jpg'
import osuLogo from '@/public/osu-logo.png'
import beamLogo from '@/public/beam-logo.webp'
import upstartLogo from '@/public/upstart-logo.png'

const skills = [
  'Ruby on Rails',
  'RSpec',
  'Kotlin + Spring',
  'JUnit',
  'Typescript',
  'React + Next.js',
  'Jest + Testing Library React',
  'Playwright',
  'Kafka',
  'Postgres + MySQL',
];

const About: React.FC = () => {
  return (
    <Container>
      <Box>
        <Flex justifyContent='center' paddingBottom={6}>
          <Box w='50%'>
            <Image src={me} alt="Deer Lakes, Mammoth CA" placeholder="blur" priority />
          </Box>
        </Flex>
        <Text fontSize='lg' textAlign='center'>
          Hi! My name is Will Naugle. I&apos;m a software engineer with 6+ years of experience across the education, insurance, and finance industries. I am based out of Los Angeles, California by way of Cleveland, Ohio.
        </Text>
      </Box>

      <Divider my={10} />

      <Box>
        <Grid templateColumns='repeat(3, 1fr)' gap={12} paddingBottom={6}>
          <AspectRatio ratio={1}>
            <GridItem>
              <Image src={osuLogo} alt='The Ohio State University' placeholder="blur" priority />
            </GridItem>
          </AspectRatio>
          <AspectRatio ratio={1}>
            <GridItem>
              <Image src={beamLogo} alt='Beam Benefits' placeholder="blur" priority />
            </GridItem>
          </AspectRatio>
          <AspectRatio ratio={1}>
            <GridItem>
              <Image src={upstartLogo} alt='Upstart' placeholder="blur" priority />
            </GridItem>
          </AspectRatio>
        </Grid>

        <Text align='center' fontSize='lg' paddingBottom={6}>
          I have had the opportunity to work with many different tech stacks throughout my career. I have worked at public institutions (The Ohio State University), early-stage start-ups (Beam Benefits), and late-stage start-ups as they transition into public companies (Upstart). Below you&apos;ll find a list of some of the technologies I&apos;ve worked most closely with:
        </Text>
        <Flex justifyContent='center'>
          <UnorderedList>
            {skills.map(skill => (
              <ListItem key={skill}>
                <Text fontWeight='bold' fontSize='lg'>{skill}</Text>
              </ListItem>
            ))}
          </UnorderedList>
        </Flex>
      </Box>

      <Divider my={10} />

      <Flex justifyContent='center' paddingBottom={6}>
        <Box w='100%'>
          <Image src={meSarahDogs} alt='Me + Sarah + Dogs' placeholder="blur" priority />
        </Box>
      </Flex>
      <Text align='center' fontSize='lg'>
        When I&apos;m not working, I love to cook and explore the restaurants around Los Angeles. My girlfriend Sarah and I enjoy hiking and camping with our two dogs Merlin and Penelope. I&apos;ve recently taken up rock climbing and bouldering.
        When we&apos;re not feeling as active, you can usually find us watching movies.
      </Text>
    </Container>
  )
}

export default About
