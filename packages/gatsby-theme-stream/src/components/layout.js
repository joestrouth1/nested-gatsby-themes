import React from 'react'
import { MDXProvider } from '@mdx-js/react'

const components = {
  h1: props => (
    <h1
      style={{
        fontFamily: 'serif',
        fontSize: '2rem',
      }}
      {...props} />
  ),
  p: props => (
    <p
      style={{
        fontFamily: 'system-ui',
        fontSize: '1.25rem',
        lineHeight: '1.5'
      }}
      {...props} />
  ),
}

export default ({ children }) => (
  <MDXProvider components={components}>
    <section
      style={{
        maxWidth: '90%',
        width: '650px',
        fontFamily: 'system-ui',
        margin: '2rem auto'
      }}
    >
      {children}
    </section>
  </MDXProvider>
)
