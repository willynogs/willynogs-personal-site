import { XMLParser } from 'fast-xml-parser';
import { Box, Heading, Link, Divider, Text } from '@chakra-ui/react'

interface MediumPost {
  title: string;
  pubDate: string;
  link: string;
  guid: string;
}

const Blog = ({ posts }: { posts: MediumPost[] }) => {
  return (
    <Box>
      <ul>
        {posts.map(post => (
          <Box key={post.guid}>
            <Link href={post.link} target='_blank'>
              <Heading as='h3' size='md' paddingBottom={4}>
                {post.title}
              </Heading>
              <Text fontSize='xs'>
                {post.pubDate}
              </Text>
            </Link>

            <Divider py={2} />
          </Box>
        ))}
      </ul>
      <Text fontSize='lg' textAlign='center' py={6}>
        More to come...
      </Text>
    </Box>
  )
}

export async function getServerSideProps() {
  const mediumRes = await fetch('https://medium.com/feed/@willynogs1')
  const rawXml = await mediumRes.text()
  const parser = new XMLParser();
  let parsedXml = parser.parse(rawXml).rss.channel.item;
  if (!Array.isArray(parsedXml)) {
    parsedXml = [parsedXml]
  }

  return {
    props: { posts: parsedXml },
  }
}

export default Blog
