import React from 'react'
import {MDXRenderer} from 'gatsby-plugin-mdx'


export default ({pageContext}) => (
  <MDXRenderer>
    {pageContext.body}
  </MDXRenderer>
)
