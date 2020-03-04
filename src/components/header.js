import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.css"

import Countdown from "../components/countdown"


const Header = ({ siteTitle }) => (
  <header>
    <Countdown/>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
