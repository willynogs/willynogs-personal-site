import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'
import useTextDistort from '../../hooks/use-text-distort'

const SideNav = styled.div`
  height: 100vh;
  width: 400px;
  background-color: #222222;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  a {
    color: #ffffff;
    text-decoration: none;
    font-size: 3em;
  }
`

const PageContent = styled.div`
  min-height: 100vh;
  width: calc(100vw - 400px);
  position: fixed;
  top: 0;
  right: 0;
`

const Layout = props => {
  const [homeLinkText, homeLinkProps] = useTextDistort('HOME', 3, 200)
  const [aboutLinkText, aboutLinkProps] = useTextDistort('ABOUT', 3, 200)
  const [blogLinkText, blogLinkProps] = useTextDistort('BLOG', 3, 200)
  const [contactLinkText, contactLinkProps] = useTextDistort('CONTACT', 3, 200)
  const [githubLinkText, githubLinkProps] = useTextDistort('GITHUB', 3, 200)

  return (
    <>
      <Head>
        <title>Will Naugle :: Software Engineer</title>
        <link rel="icon" href="/favicon.png" />
        <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap" rel="stylesheet" />
      </Head>
      <SideNav>
        <Link href='/'><a {...homeLinkProps}>{homeLinkText}</a></Link>
        <Link href='/about'><a {...aboutLinkProps}>{aboutLinkText}</a></Link>
        <a href='https://medium.com/@willynogs_97556' target='_blank' {...blogLinkProps}>{blogLinkText}</a>
        <a href='mailto:willynogs@gmail.com' target='_blank' {...contactLinkProps}>{contactLinkText}</a>
        <a href='https://github.com/willynogs' target='_blank' {...githubLinkProps}>{githubLinkText}</a>
      </SideNav>
      <PageContent>
        {props.children}
      </PageContent>
    </>
  )
}

export default Layout
