import { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Box, useColorMode } from '@chakra-ui/react'
import { Command } from 'cmdk'
import { AnimatePresence, motion } from 'framer-motion'

const MotionBox = motion(Box)

type Action = {
  id: string
  label: string
  hint?: string
  perform: () => void
  keywords?: string
  group: 'Navigate' | 'External' | 'Actions'
}

const CommandPalette: React.FC = () => {
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const { colorMode, toggleColorMode } = useColorMode()

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((o) => !o)
      }
    }
    const toggle = () => setOpen((o) => !o)
    document.addEventListener('keydown', down)
    document.addEventListener('cmdk:toggle', toggle)
    return () => {
      document.removeEventListener('keydown', down)
      document.removeEventListener('cmdk:toggle', toggle)
    }
  }, [])

  const close = useCallback(() => setOpen(false), [])

  const go = useCallback(
    (href: string) => {
      close()
      router.push(href)
    },
    [close, router],
  )

  const openExternal = useCallback(
    (href: string) => {
      close()
      window.open(href, '_blank', 'noopener,noreferrer')
    },
    [close],
  )

  const actions: Action[] = [
    { id: 'home', group: 'Navigate', label: 'Home', hint: '/', perform: () => go('/') },
    { id: 'about', group: 'Navigate', label: 'About', hint: '/about', perform: () => go('/about') },
    { id: 'blog', group: 'Navigate', label: 'Blog', hint: '/blog', perform: () => go('/blog') },
    { id: 'contact', group: 'Navigate', label: 'Contact', hint: '/contact-me', perform: () => go('/contact-me') },
    { id: 'colophon', group: 'Navigate', label: 'Colophon', hint: '/colophon', perform: () => go('/colophon') },
    { id: 'resume', group: 'Actions', label: 'Open Resume', hint: 'PDF', perform: () => openExternal('/resume.pdf') },
    {
      id: 'theme',
      group: 'Actions',
      label: `Switch to ${colorMode === 'light' ? 'dark' : 'light'} mode`,
      hint: 'Theme',
      perform: () => {
        toggleColorMode()
        close()
      },
      keywords: 'theme dark light mode',
    },
    {
      id: 'email',
      group: 'External',
      label: 'Email',
      hint: 'willynogs@gmail.com',
      perform: () => {
        close()
        window.location.href = 'mailto:willynogs@gmail.com'
      },
    },
    {
      id: 'github',
      group: 'External',
      label: 'GitHub',
      hint: 'github.com/willynogs',
      perform: () => openExternal('https://github.com/willynogs'),
    },
    {
      id: 'linkedin',
      group: 'External',
      label: 'LinkedIn',
      hint: 'linkedin.com/in/willnaugle',
      perform: () => openExternal('https://www.linkedin.com/in/willnaugle'),
    },
    {
      id: 'instagram',
      group: 'External',
      label: 'Instagram',
      hint: 'instagram.com/willynogs',
      perform: () => openExternal('https://www.instagram.com/willynogs'),
    },
  ]

  const grouped = actions.reduce<Record<string, Action[]>>((acc, a) => {
    ;(acc[a.group] ||= []).push(a)
    return acc
  }, {})

  return (
    <AnimatePresence>
      {open && (
        <MotionBox
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 } as any}
          position="fixed"
          inset={0}
          zIndex={50}
          bg="blackAlpha.600"
          backdropFilter="blur(6px)"
          onClick={close}
          display="flex"
          alignItems="flex-start"
          justifyContent="center"
          pt={{ base: '15vh', md: '18vh' }}
          px={4}
        >
          <MotionBox
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.18, ease: [0.32, 0.72, 0, 1] } as any}
            w="100%"
            maxW="560px"
            bg="bgElevated"
            border="1px solid"
            borderColor="border"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="0 24px 60px -12px rgba(0,0,0,0.45)"
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
          >
            <Command
              label="Command palette"
              loop
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              <Box borderBottom="1px solid" borderColor="borderSubtle">
                <Command.Input
                  placeholder="Type a command or search…"
                  autoFocus
                  style={{
                    width: '100%',
                    padding: '16px 20px',
                    background: 'transparent',
                    border: 'none',
                    outline: 'none',
                    color: 'inherit',
                    fontSize: '15px',
                    fontFamily: 'var(--font-mono)',
                  }}
                />
              </Box>
              <Box maxH="60vh" overflowY="auto" py={2}>
                <Command.List>
                  <Command.Empty>
                    <Box px={5} py={6} color="fgMuted" fontSize="sm" textAlign="center">
                      No results.
                    </Box>
                  </Command.Empty>
                  {Object.entries(grouped).map(([group, items]) => (
                    <Command.Group key={group} heading={group}>
                      {items.map((a) => (
                        <Command.Item
                          key={a.id}
                          value={`${a.label} ${a.keywords || ''}`}
                          onSelect={() => a.perform()}
                        >
                          <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="space-between"
                            px={5}
                            py={2.5}
                            cursor="pointer"
                          >
                            <Box fontSize="sm">{a.label}</Box>
                            {a.hint && (
                              <Box fontSize="xs" color="fgSubtle">
                                {a.hint}
                              </Box>
                            )}
                          </Box>
                        </Command.Item>
                      ))}
                    </Command.Group>
                  ))}
                </Command.List>
              </Box>
              <Box
                px={5}
                py={2.5}
                borderTop="1px solid"
                borderColor="borderSubtle"
                fontSize="xs"
                color="fgSubtle"
                display="flex"
                justifyContent="space-between"
              >
                <Box>↑↓ navigate · ↵ select · esc close</Box>
                <Box>⌘K</Box>
              </Box>
            </Command>
          </MotionBox>
        </MotionBox>
      )}
    </AnimatePresence>
  )
}

export default CommandPalette
