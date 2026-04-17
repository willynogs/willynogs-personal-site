import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
import { Inconsolata, Fraunces } from 'next/font/google'

const inconsolata = Inconsolata({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  axes: ['SOFT', 'opsz'],
  variable: '--font-display',
})

export const fontVariables = `${fraunces.variable} ${inconsolata.variable}`

const config: ThemeConfig = {
  initialColorMode: 'system',
  useSystemColorMode: true,
}

const theme = extendTheme({
  config,
  fonts: {
    body: inconsolata.style.fontFamily,
    mono: inconsolata.style.fontFamily,
    heading: fraunces.style.fontFamily,
  },
  colors: {
    accent: {
      50: '#fff4ed',
      100: '#ffe6d4',
      200: '#ffc9a8',
      300: '#ffa471',
      400: '#ff7847',
      500: '#ff5f25',
      600: '#f04410',
      700: '#c73310',
      800: '#9e2b16',
      900: '#7f2715',
    },
    ink: {
      50: '#fafaf7',
      100: '#f0f0ec',
      200: '#dcdcd6',
      300: '#b8b8b0',
      400: '#8a8a82',
      500: '#5c5c56',
      600: '#3a3a36',
      700: '#23231f',
      800: '#141412',
      900: '#0a0a09',
    },
  },
  semanticTokens: {
    colors: {
      bg: {
        default: 'ink.50',
        _dark: 'ink.900',
      },
      bgElevated: {
        default: '#ffffff',
        _dark: 'ink.800',
      },
      fg: {
        default: 'ink.900',
        _dark: 'ink.50',
      },
      fgMuted: {
        default: 'ink.500',
        _dark: 'ink.300',
      },
      fgSubtle: {
        default: 'ink.400',
        _dark: 'ink.400',
      },
      border: {
        default: 'ink.200',
        _dark: 'ink.700',
      },
      borderSubtle: {
        default: 'ink.100',
        _dark: 'ink.800',
      },
      accentFg: {
        default: 'accent.500',
        _dark: 'accent.400',
      },
    },
  },
  styles: {
    global: {
      'html, body': {
        bg: 'bg',
        color: 'fg',
        fontFeatureSettings: '"ss01", "ss02", "cv01"',
        textRendering: 'optimizeLegibility',
        WebkitFontSmoothing: 'antialiased',
      },
      '::selection': {
        bg: 'accent.400',
        color: 'ink.900',
      },
      'a': {
        textUnderlineOffset: '0.2em',
      },
      '[data-focus-visible-added]': {
        outline: '2px solid',
        outlineColor: 'accentFg',
        outlineOffset: '2px',
      },
      '[cmdk-item][data-selected="true"]': {
        bg: 'borderSubtle',
        color: 'accentFg',
      },
      '[cmdk-group-heading]': {
        px: 5,
        pt: 3,
        pb: 1,
        fontSize: '2xs',
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        color: 'fgSubtle',
      },
      '[cmdk-input]::placeholder': {
        color: 'fgSubtle',
      },
    },
  },
  components: {
    Link: {
      baseStyle: {
        color: 'fg',
        transition: 'color 150ms ease',
        _hover: {
          color: 'accentFg',
          textDecoration: 'none',
        },
      },
    },
    Heading: {
      baseStyle: {
        fontFamily: 'heading',
        fontWeight: 500,
        letterSpacing: '-0.02em',
      },
    },
  },
})

export default theme
