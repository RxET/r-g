import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.css"

const Header = ({ siteTitle }) => (
  <header>
    <div
      className="container"
    >
      <p>{siteTitle}</p>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `#C12B34`,
            textDecoration: `none`,
            fontSize: '24px'
          }}
        >
          Up, up and away!
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
