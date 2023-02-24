import { extendTheme } from "@chakra-ui/react"
import { Inconsolata } from '@next/font/google'

const inconsolata = Inconsolata({ subsets: ['latin'] });

export default extendTheme({
  fonts: {
    body: inconsolata.style.fontFamily,
    heading: inconsolata.style.fontFamily,
    mono: inconsolata.style.fontFamily,
  },
})
