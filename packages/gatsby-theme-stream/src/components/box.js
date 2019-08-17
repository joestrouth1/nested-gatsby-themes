import React from 'react'
import colors from '../tokens/colors'

export default ({ children }) => (
  <div style={{
    backgroundColor: colors.primary,
    padding: '1rem'
  }}>
    {children}
  </div>
)
