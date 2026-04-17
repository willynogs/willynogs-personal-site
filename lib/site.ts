export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || 'https://willnaugle.com'

export const SITE_TITLE = 'Will Naugle'
export const SITE_DESCRIPTION =
  'Will Naugle — software engineer based in Los Angeles. Notes, writing, and a little about me.'
export const SITE_AUTHOR = 'Will Naugle'
export const SITE_TWITTER = '@willynogs'

export const ROUTES = [
  { path: '/', changefreq: 'monthly', priority: '1.0' },
  { path: '/about', changefreq: 'monthly', priority: '0.9' },
  { path: '/blog', changefreq: 'weekly', priority: '0.9' },
  { path: '/contact-me', changefreq: 'yearly', priority: '0.6' },
  { path: '/colophon', changefreq: 'yearly', priority: '0.4' },
]
