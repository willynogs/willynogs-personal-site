import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { ChakraProvider, Container, Grid, GridItem } from '@chakra-ui/react'
import theme from '@/theme'

import { Analytics } from '@vercel/analytics/react';
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>Will Naugle - Software Engineer</title>
        <meta name="description" content="Will Naugle personal website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <Container>
        <Grid gap={4}>
          <GridItem>
            <Nav />
          </GridItem>
          <GridItem>
            <Component {...pageProps} />
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
