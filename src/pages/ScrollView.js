import React from 'react'
import markdown from 'markdown-in-js'

import markdownOptions from '../utils/MarkdownOptions'
import DefaultPage from './DefaultPage'
import { WebPlayer } from '../components'

const code = `import React, { Component } from 'react'
import { AppRegistry, ScrollView, View, StyleSheet } from 'react-native'

export default class App extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.boxLarge} />
        <ScrollView horizontal>
          <View style={styles.boxSmall} />
          <View style={styles.boxSmall} />
          <View style={styles.boxSmall} />
        </ScrollView>
        <View style={styles.boxLarge} />
        <View style={styles.boxSmall} />
        <View style={styles.boxLarge} />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  boxSmall: {
    width: 200,
    height: 200,
    marginBottom: 10,
    marginRight: 10,
    backgroundColor: 'skyblue',
  },
  boxLarge: {
    width: 300,
    height: 300,
    marginBottom: 10,
    marginRight: 10,
    backgroundColor: 'steelblue',
  },
})

AppRegistry.registerComponent('App', () => App)
`

const content = markdown(markdownOptions)`
\`ScrollView\`s são usados para conteúdo **rolável**. Eles são bons para rolar pequenas quantidades de conteúdo (< 30 itens). Eles podem rolar horizontalmente ou verticalmente. Para quantidades grandes de itens, considere usar uma \`ListView\` para melhor performance.

${<WebPlayer code={code} />}
`

export default props => <DefaultPage {...props}>{content}</DefaultPage>
