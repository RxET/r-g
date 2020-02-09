/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import Clouds from "../assets/Clouds.mp4"

const Layout = ({ children }) => {

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
    <video muted autoPlay loop preload="auto" src={Clouds}/>


    <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
          textAlign: `center`,
        }}
      >



        <main style={{minHeight: `100vh`,
        height: `100%`,}}>{children}</main>
        <footer style={{marginTop: `-150px`, height:`50px`}}>
          © {new Date().getFullYear()}, Built by
          {` `}
          <a href="https://www.github.com/RxET">Roxie</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
