import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Header from '../components/header'

const mainStyle = {
    backgroundImage: `none`,
    backgroundColor: `#000`
}

const Page = ({ data }) => {
    const page = data.ghostPage

    return(
        <Layout>
            <div className="main" style={ mainStyle }>
                <Header />
                <div className="main-content">
                    <h2>{ page.title }</h2>
                    <div dangerouslySetInnerHTML={{ __html: page.html }} />
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