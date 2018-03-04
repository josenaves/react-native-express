import React, { Component } from 'react'

import WebPlayer from './WebPlayer'

export default class EditorTranspiler extends Component {

  shouldComponentUpdate() {
    return false
  }

  render() {
    return (
      <WebPlayer
        height={340}
        fullscreen={false}
        showTranspiler={true}
        transpilerTitle={'Saída compilada com Babel'}
        {...this.props}
      />
    )
  }
}
