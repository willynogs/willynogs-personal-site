import { extendTheme } from "@chakra-ui/react"
import { Inter, Merriweather } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })
const merriweather = Merriweather({ subsets: ['latin'], weight: '400' })

export default extendTheme({
  fonts: {
    body: inter.style.fontFamily,
    heading: merriweather.style.fontFamily,
    mono: inter.style.fontFamily,
  },
})
