import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

const Layout = ({ location, title, children }) => {
  const ListLink = props => (
    <li style={{ display: `inline-block`, marginRight: `1rem` }}>
      <Link to={props.to}>{props.children}</Link>
    </li>
  )

  return (
    <div
      style={{
        backgroundColor: "#f5f5f5",
        padding: `3rem 1.5rem`,
        maxWidth: "50rem",
        marginLeft: `auto`,
        marginRight: `auto`,
        minHeight: "100rem",
        borderStyle: "solid",
        borderColor: "#dbdbdb",
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderTopWidth: 0,
        borderBottomWidth: 0,
      }}
    >
      <header style={{ marginBottom: `1.5rem` }}>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h3 style={{ display: `inline` }}>{title}</h3>
        </Link>
        <ul style={{ listStyle: `none`, float: `right` }}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
        </ul>
      </header>
      {children}
    </div>
  )
}

export default Layout
