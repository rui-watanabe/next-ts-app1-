import Head from 'next/head'
import { NextComponentType } from 'next'
import { Container } from 'semantic-ui-react'

import { Header } from './Header'
import { HeadContent } from './HeadContent'

export const Layout: NextComponentType = () => {
  return (
    <>
      <Head>
        <HeadContent />
        {/* Stylesheets */}
        <link rel="stylesheet" type="text/css" href="/static/styles.css" />
        <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
        <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css"
        />
        <title>NextApp</title>
      </Head>
      <Header />
      <Container text style={{ paddingTop: '1em' }}></Container>
    </>
  )
}
