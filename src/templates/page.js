import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Header from '../components/header'
import SEO from '../components/seo'



const Page = ({ data }) => {
    const page = data.ghostPage

    const mainStyle = {
        backgroundImage: `url(${page.feature_image})`,
        backgroundSize: `cover`
    }

    return(
        <Layout>
            <SEO title={ page.title } keywords={[`developer`, `user experience`, `ux`, `apps`, `web`, `leadership`, `technology`, `futurist`, `innovation`, `digital transformation`, `dx`]} />
            <div className="main" style={ mainStyle }>

                <Header />

                <div id="main-content">
                    <h2>{ page.title }</h2>
                    <span dangerouslySetInnerHTML={{ __html: page.html }} />
                </div>
            </div>
        </Layout>
    )
}

export default Page

export const postQuery = graphql`
    query($slug: String!) {
        ghostPage(slug: { eq: $slug }) {
            id
            title
            url
            feature_image
            html
        }
    }
`