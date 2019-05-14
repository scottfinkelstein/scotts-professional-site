import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import "./index.css"

import agile_jpg from "../images/Agile.jpg"
import agile_mp4 from "../images/Agile.mp4"
import agile_webm from "../images/Agile.webm"
//import agile_ogg from "../images/Agile.ogv"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="main">

      <video loop muted autoPlay poster={ agile_jpg } className="agile-bg-video">
          <source src={ agile_mp4 } type="video/mp4" />
          <source src={ agile_webm } type="video/webm" />
          {/* <source src={ agile_ogg } type="video/ogg" /> */}
      </video>

      <header>
        <nav>
          <h1>Scott Finkelstein</h1>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>
      <div id="main-content">
        <h2>Welcome</h2>
        <p>Exploring the spaces between technology, design, leadership, and learning.</p>
      </div>
    </div>
    <div className="portfolio">
      <div className="grid-container">
        <div className="grid-row">
          {data.allGhostPost.edges.map(({ node }) => (
            <div key={ node.id } className="grid-item" style={{ backgroundImage: `url(${ node.feature_image })`, backgroundSize: `cover` }}>
              <Link to={ node.slug }>
              <div className="grid-item-desc">
                <h3>{ node.title }</h3>
                <p>Projects</p>
              </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage

export const postQuery = graphql`
  query {
    allGhostPost {
      edges {
        node {
          id
          title
          excerpt
          feature_image
          slug
        }
      }
    }
  }
`
