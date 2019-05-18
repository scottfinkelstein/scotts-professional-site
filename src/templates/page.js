import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const Page = ({ data }) => {
    const page = data.ghostPage

    return(
        <Layout>
            { page.feature_image ? (
                <img src={ page.feature_image } alt={ page.title } style={{ width: `100%`, height: `auto` }}/>
            ) : null }
            <h1>{ page.title }</h1>
            <div dangerouslySetInnerHTML={{ __html: page.html }} />
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