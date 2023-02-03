import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { ChakraProvider, Container, Grid, GridItem } from '@chakra-ui/react'
import theme from '@/theme'

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
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
    </ChakraProvider>
  )
}
