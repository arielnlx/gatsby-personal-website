import * as React from "react"
import { graphql } from "gatsby"


import Layout from "../components/layout"
import Seo from "../components/seo"
import Bio from "../components/bio"
import WhatIDo from "../components/what-i-do"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />
      <Bio />
      <WhatIDo/>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
