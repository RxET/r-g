import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Countdown from "../components/countdown"

const IndexPage = () => (
  <Layout>
    <SEO title="Roxie and Geneviève" />
    <Countdown/>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Staying with us?</Link>
  </Layout>
)

export default IndexPage
