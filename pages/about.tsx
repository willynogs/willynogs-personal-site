import { Text, Flex, Container } from '@chakra-ui/react'

const About: React.FC = () => {
  return (
    <Container>
      [picture of me here]
      <br />
      <br />
      [work]
      <br />
      <br />
      [personal]
      <br />
      <br />
      <Text>
        Hi! My name is Will Naugle and I'm a software engineer with 6+ years of experience across the education, insurance, and finance industries.
      </Text>
      <br />
      <Text>
        I have been lucky to work with many different technologies, including:
        <ul>
          <li>Ruby on Rails</li>
          <li>RSpec</li>
          <li>Kotlin + Spring</li>
          <li>JUnit</li>
          <li>React + Next.js</li>
          <li>Jest + Testing Library React</li>
          <li>Playwright</li>
          <li>Kafka</li>
          <li>Postgres + MySQL</li>
        </ul>
      </Text>
      <Text>
        When I'm not working, I enjoy cooking (and eating), hiking, rock climbing, and watching movies.
      </Text>
    </Container>
  )
}

export default About
