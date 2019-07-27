import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Header from "../components/header"
import "./index.css"

import agile_jpg from "../images/Agile.jpg"
import agile_mp4 from "../images/Agile.mp4"
import agile_webm from "../images/Agile.webm"
//import agile_ogg from "../images/Agile.ogv"

const IndexPage = ({ data }) => (
  
  <Layout>
    <SEO title="Home" keywords={[`developer`, `user experience`, `ux`, `apps`, `web`, `leadership`, `technology`, `futurist`, `innovation`, `digital transformation`, `dx`]} />
    <div className="main">

      <video loop muted autoPlay poster={ agile_jpg } className="agile-bg-video">
          <source src={ agile_mp4 } type="video/mp4" />
          <source src={ agile_webm } type="video/webm" />
          {/* <source src={ agile_ogg } type="video/ogg" /> */}
      </video>

      <Header />
      
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
                { node.primary_tag ? (
                  <p>{ node.primary_tag.name }</p>
                ) : null }
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
          primary_tag {
            id
            name
          }
        }
      }
    }
  }
`