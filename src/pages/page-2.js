import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
    <h1>You clicked into the second page!</h1>
    <p>Welcome curious traveler</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
