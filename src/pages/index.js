import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import './index.css'

const IndexPage = () => (
  <Layout>
    <SEO title="Roxie and Geneviève" />
    <div className="mainContent">
      <div className="topLine">
        <h2 style={{color: `#C12B34`, fontSize: `60px`, fontWeight: 900}}>Save the Date</h2>
        <h2 style={{color: `#C12B34`, fontSize: `60px`, fontWeight: 900}}>09.12.2020</h2>
      </div>
      <h1 style={{color: `#C12B34`, fontSize: `120px`, fontWeight: 900, textAlign: `center`}}>Roxie &<br/>Geneviève</h1>
      <div className="bottomLine">
        <h3 style={{color: `#C12B34`, fontSize: `32px`, fontWeight: 900}}>New York, New York</h3>
        <h3 style={{color: `#C12B34`, fontSize: `32px`, fontWeight: 900}}><Link to="/page-2/">Staying with us?</Link></h3>
      </div>
    </div>
  </Layout>
)

export default IndexPage
