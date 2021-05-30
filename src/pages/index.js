import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "./index.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="mainContent">
      <div className="topLine">
        <h2 style={{ color: `#C12B34` }}>SAVE THE DATE</h2>
        <h2 style={{ color: `#C12B34`, fontFamily: `AntiqueOlive-Compact` }}>
          9.12.2020
        </h2>
      </div>
      <h1 style={{ color: `#C12B34`, fontWeight: 900, textAlign: `center` }}>
        ROXIE &<br />
        GENEVIÈVE
      </h1>
      <div className="bottomLine">
        <div className="leftLine 'button-jittery button'">
          <h3
            className="button-jittery button"
            style={{ color: `#C12B34`, fontWeight: 900 }}
          >
            <Link to="/page-2">COME STAY WITH US</Link>
          </h3>
        </div>
        <div className="rightLine">
          <h3 style={{ color: `#C12B34`, fontWeight: 900 }}>
            <a href="https://www.twahotel.com/">TWA HOTEL</a>
          </h3>
          <h3 style={{ color: `#C12B34`, fontWeight: 900 }}>
            NEW YORK, NEW YORK
          </h3>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
