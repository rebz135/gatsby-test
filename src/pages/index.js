import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hi there</h1>
    <p>Welcome to my new Gatsby site.</p>
    <p>This is pretty cool. Excited to test this out for rapid prototyping against other tools.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
