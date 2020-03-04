/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Location } from '@reach/router';



import Header from "./header"
import "./layout.css"
import Clouds from "../assets/Clouds.mp4"

// TODO: make 'go home' appear conditionally
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

  console.log(this, data)

  return (
    <>
      <div className="overlay"></div>
      <video muted autoPlay loop preload="auto" src={Clouds} />

      <Header siteTitle={data.site.siteMetadata.title} />

      <main>{children}</main>

      <footer>
      <div className='leftFoot'><Link to="/">Go home</Link></div>
      <div className='rightFoot'>
          made with ❤ by
          {` `}
          <a href="https://www.github.com/RxET">Roxie</a>
        </div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired
}

export default Layout
