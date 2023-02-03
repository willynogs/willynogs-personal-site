import { Text, Box, Container, Flex, Grid, GridItem, AspectRatio, Divider, UnorderedList, ListItem, List } from '@chakra-ui/react'
import Image from 'next/image'
import me from '@/public/me-with-bear-can.jpeg'
import meSarahDogs from '@/public/me-sarah-dogs.png'
import osuLogo from '@/public/osu-logo.png'
import beamLogo from '@/public/beam-logo.webp'
import upstartLogo from '@/public/upstart-logo.png'

const About: React.FC = () => {
  return (
    <Container>
      <Box>
        <Flex justifyContent='center' paddingBottom={6}>
          <Box w='50%'>
            <Image src={me} alt="Deer Lakes, Mammoth CA" />
          </Box>
        </Flex>
        <Text fontSize='lg' textAlign='center'>
          Hi! My name is Will Naugle. I'm a software engineer with 6+ years of experience across the education, insurance, and finance industries. I am based out of Los Angeles, California by way of Cleveland, Ohio.
        </Text>
      </Box>

      <Divider my={10} />

      <Box>
        <Grid templateColumns='repeat(3, 1fr)' gap={12} paddingBottom={6}>
          <AspectRatio ratio={1}>
            <GridItem>
              <Image src={osuLogo} alt='The Ohio State University' />
            </GridItem>
          </AspectRatio>
          <AspectRatio ratio={1}>
            <GridItem>
              <Image src={beamLogo} alt='Beam Benefits' />
            </GridItem>
          </AspectRatio>
          <AspectRatio ratio={1}>
            <GridItem>
              <Image src={upstartLogo} alt='Upstart' />
            </GridItem>
          </AspectRatio>
        </Grid>

        <Text align='center' fontSize='lg' paddingBottom={6}>
          I have had the opportunity to work with many different tech stacks throughout my career. I have worked at public institutions (The Ohio State University), early-stage start-ups (Beam Benefits), and late-stage start-ups as they transition into public companies (Upstart). Below you'll find a list of some of the technologies I've worked most closely with:
        </Text>
        <Flex justifyContent='center'>
          <Text fontWeight='bold' fontSize='lg'>
            <UnorderedList>
              <ListItem>Ruby on Rails</ListItem>
              <ListItem>RSpec</ListItem>
              <ListItem>Kotlin + Spring</ListItem>
              <ListItem>JUnit</ListItem>
              <ListItem>Typescript</ListItem>
              <ListItem>React + Next.js</ListItem>
              <ListItem>Jest + Testing Library React</ListItem>
              <ListItem>Playwright</ListItem>
              <ListItem>Kafka</ListItem>
              <ListItem>Postgres + MySQL</ListItem>
            </UnorderedList>
          </Text>
        </Flex>
      </Box>

      <Divider my={10} />

      <Flex justifyContent='center' paddingBottom={6}>
        <Box w='100%'>
          <Image src={meSarahDogs} alt='Me + Sarah + Dogs' />
        </Box>
      </Flex>
      <Text align='center' fontSize='lg'>
        When I'm not working, I love to cook and explore the restaurants around Los Angeles. My girlfriend Sarah and I enjoy hiking and camping with our two dogs Merlin and Penelope. I've recently taken up rock climbing and bouldering.
        When we're not feeling as active, you can usually find us watching movies.
      </Text>
    </Container>
  )
}

export default About
