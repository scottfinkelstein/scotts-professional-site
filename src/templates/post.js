import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const Post = ({ data }) => {
    const post = data.ghostPost

    return(
        <Layout>
            { post.feature_image ? (
                <img src={ post.feature_image } alt={ post.title } />
            ) : null }
            <h1>{ post.title }</h1>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </Layout>
    )
}

export default Post

export const postQuery = graphql`
    query($slug: String!) {
        ghostPost(slug: { eq: $slug }) {
            id
            title
            slug
            feature_image
            html
        }
    }
`