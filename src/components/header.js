import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.css"

import Countdown from "../components/countdown"


const Header = ({ siteTitle }) => (
  <header>
        <Link
          to="/"
          style={{
            color: `#C12B34`,
            textDecoration: `none`,
            fontSize: '24px'
          }}
        >
        <Countdown/>
        </Link>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
