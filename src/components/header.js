import { Link, graphql, StaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = () => (
  <StaticQuery
    query={graphql`
      query {
        allGhostPage(sort: {fields: [title], order: ASC}) {
          edges {
            node {
              id
              slug
              title
            }
          }
        }
      }
    `}
    render={data => (
      <header>
        <nav>
          <h1><Link to="/">Scott Finkelstein</Link></h1>
          <ul>
            { data.allGhostPage.edges.map(({ node }) => (
              <li><Link to={ node.slug }>{ node.title }</Link></li>
            ))}
          </ul>
        </nav>
      </header>
    )}
  />
)

export default Header

