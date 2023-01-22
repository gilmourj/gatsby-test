// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle='About'>
        <p>A little fun fact about me is that I am making a page using the Gatsby tutorial.</p>
    </Layout>
  )
}

export const Head = () => (
    <>
      <title>About Me</title>
      <meta name="description" content="Your description" />
    </>
  )

// Step 3: Export your component
export default AboutPage