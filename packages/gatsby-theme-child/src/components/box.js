import React from 'react'
import { colors } from 'gatsby-theme-stream'

export default ({ children }) => (
  <section style={{
    backgroundColor: colors.primary,
    color: colors.secondary
  }}>
    {children}
  </section>
)
