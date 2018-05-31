import React from 'react'
import markdown from 'markdown-in-js'

import markdownOptions from '../utils/MarkdownOptions'
import DefaultPage from './DefaultPage'
import { WebPlayer } from '../components'

const code = `import React, { Component } from 'react'
import { AppRegistry, View, Text, StyleSheet } from 'react-native'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Hello!</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    backgroundColor: 'whitesmoke',
    color: '#4A90E2',
    fontSize: 24,
    padding: 10,
  },
})

AppRegistry.registerComponent('App', () => App)
`

const content = markdown(markdownOptions)`
\`Text\` é usado para renderizar texto. Ao contrário da web, textos <i>devem</i> ser envolvidos num componente \`${'<Text>'}\`.

${<WebPlayer code={code} />}
`

export default props => <DefaultPage {...props}>{content}</DefaultPage>
