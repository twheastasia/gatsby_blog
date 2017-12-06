import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
       <p>
          Powered by <a href="https://www.gatsbyjs.org/">Gatsby</a>!
        </p>
      </div>
    )
  }
}

export default Bio
