import Head from 'next/head'
import { useRouter } from 'next/router'
import { SITE_DESCRIPTION, SITE_TITLE, SITE_TWITTER, SITE_URL } from '@/lib/site'

type Props = {
  title?: string
  description?: string
  image?: string
  noIndex?: boolean
}

const SEO: React.FC<Props> = ({ title, description, image, noIndex }) => {
  const router = useRouter()
  const pageTitle = title ? `${title} — ${SITE_TITLE}` : `${SITE_TITLE} — Software Engineer`
  const pageDescription = description || SITE_DESCRIPTION
  const canonical = `${SITE_URL}${router.asPath === '/' ? '' : router.asPath.split('?')[0]}`
  const ogImage =
    image ||
    `${SITE_URL}/api/og?title=${encodeURIComponent(title || SITE_TITLE)}&subtitle=${encodeURIComponent(
      description ? description.slice(0, 110) : 'Software Engineer · Los Angeles',
    )}`

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <link rel="canonical" href={canonical} />
      {noIndex && <meta name="robots" content="noindex,nofollow" />}

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_TITLE} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={SITE_TWITTER} />
      <meta name="twitter:creator" content={SITE_TWITTER} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={ogImage} />
    </Head>
  )
}

export default SEO
