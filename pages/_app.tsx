import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CommandPalette from '@/components/CommandPalette'
import PageTransition from '@/components/PageTransition'
import { ChakraProvider, Container, Grid, GridItem } from '@chakra-ui/react'
import theme from '@/theme'

import { Analytics } from '@vercel/analytics/react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta name="theme-color" content="#0a0a09" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#fafaf7" media="(prefers-color-scheme: light)" />
      </Head>
      <CommandPalette />
      <Container maxW="container.md" px={{ base: 5, md: 6 }}>
        <Grid gap={4}>
          <GridItem>
            <Nav />
          </GridItem>
          <GridItem>
            <PageTransition routeKey={router.route}>
              <Component {...pageProps} />
            </PageTransition>
          </GridItem>
          <GridItem>
            <Footer />
          </GridItem>
        </Grid>
      </Container>
      <Analytics />
    </ChakraProvider>
  )
}
