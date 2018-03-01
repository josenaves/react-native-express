import React, { Component, PropTypes } from 'react'
import createStyles from 'react-styles-provider'

@createStyles({
  author: {
    fontSize: 12,
    fontWeight: 400,
    fontStyle: 'italic',
    paddingBottom: 15,
  },
})
export default class Author extends Component {
  render() {
    const {styles, children, url} = this.props

    return (
      <div style={styles.author}>
        Por <a href={url}>{children}</a>
      </div>
    )
  }
}
