import { XMLParser } from 'fast-xml-parser'
import { Box, Heading, Link, Text, Flex } from '@chakra-ui/react'
import { motion, useReducedMotion, Variants } from 'framer-motion'
import SEO from '@/components/SEO'

const MotionBox = motion(Box)

interface MediumPost {
  title: string
  pubDate: string
  link: string
  guid: string
}

const stagger: Variants = {
  initial: {},
  animate: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
}

const fadeUp: Variants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.32, 0.72, 0, 1] } },
}

const formatDate = (raw: string) => {
  const d = new Date(raw)
  if (isNaN(d.getTime())) return raw
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
}

const Blog = ({ posts }: { posts: MediumPost[] }) => {
  const reduce = useReducedMotion()

  return (
    <>
      <SEO
        title="Blog"
        description="Writing by Will Naugle, syndicated from Medium."
      />
      <MotionBox
        variants={stagger}
        initial={reduce ? undefined : 'initial'}
        animate={reduce ? undefined : 'animate'}
      >
        <MotionBox variants={fadeUp} mb={8}>
          <Heading as="h2" size="xl" fontFamily="heading" letterSpacing="-0.02em">
            Writing
          </Heading>
          <Text color="fgMuted" fontSize="sm" mt={2}>
            Syndicated from Medium.
          </Text>
        </MotionBox>

        <Box as="ul" listStyleType="none" m={0} p={0}>
          {posts.map((post) => (
            <MotionBox
              key={post.guid}
              as="li"
              variants={fadeUp}
              borderTop="1px solid"
              borderColor="borderSubtle"
              py={5}
              _last={{ borderBottom: '1px solid', borderBottomColor: 'borderSubtle' }}
              role="group"
              transition="background 150ms ease"
            >
              <Link
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                _hover={{ textDecoration: 'none' }}
                display="block"
              >
                <Flex
                  justify="space-between"
                  align={{ base: 'flex-start', sm: 'center' }}
                  direction={{ base: 'column', sm: 'row' }}
                  gap={2}
                >
                  <Heading
                    as="h3"
                    size="md"
                    fontFamily="heading"
                    fontWeight={500}
                    letterSpacing="-0.015em"
                    transition="color 150ms ease"
                    _groupHover={{ color: 'accentFg' }}
                  >
                    {post.title}
                  </Heading>
                  <Text
                    fontSize="xs"
                    color="fgSubtle"
                    fontFamily="mono"
                    whiteSpace="nowrap"
                  >
                    {formatDate(post.pubDate)}
                  </Text>
                </Flex>
              </Link>
            </MotionBox>
          ))}
        </Box>

        <MotionBox variants={fadeUp}>
          <Text fontSize="sm" textAlign="center" py={8} color="fgSubtle" fontFamily="mono">
            More to come…
          </Text>
        </MotionBox>
      </MotionBox>
    </>
  )
}

export async function getStaticProps() {
  try {
    const mediumRes = await fetch('https://medium.com/feed/@willynogs1')
    const rawXml = await mediumRes.text()
    const parser = new XMLParser()
    let parsedXml = parser.parse(rawXml).rss.channel.item

    if (!parsedXml) parsedXml = []
    if (!Array.isArray(parsedXml)) parsedXml = [parsedXml]

    return {
      props: { posts: parsedXml },
      revalidate: 3600,
    }
  } catch {
    return { props: { posts: [] }, revalidate: 600 }
  }
}

export default Blog
