import React from 'react'

import DefaultLayout from '../layouts/defaultLayout'
import SEO from '../components/seo'

const IndexPage = () => (
  <DefaultLayout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
  </DefaultLayout>
)

export default IndexPage
