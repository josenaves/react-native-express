import React from 'react'
import markdown from 'markdown-in-js'

import markdownOptions from '../utils/MarkdownOptions'
import DefaultPage from './DefaultPage'
import { WebPlayer } from '../components'

const toggleFile = `import React, { Component } from 'react'
import { AppRegistry, View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default class Toggle extends Component {

  onPress = (option) => {
    const {onChange} = this.props

    onChange(option)
  }

  renderOption = (option) => {
    const {value} = this.props

    return (
      <TouchableOpacity
        style={[styles.option, option === value && styles.activeOption]}
        onPress={this.onPress.bind(this, option)}
      >
        <Text style={styles.text}>
          {option}
        </Text>
      </TouchableOpacity>
    )
  }

  render() {
    const {label, options} = this.props

    return (
      <View style={styles.container}>
        <Text style={[styles.text, styles.label]}>
          {label}
        </Text>
        <View style={styles.optionsContainer}>
          {options.map(this.renderOption)}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    paddingBottom: 20,
  },
  text: {
    fontSize: 14,
  },
  label: {
    padding: 4,
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  option: {
    padding: 4,
    backgroundColor: 'whitesmoke',
  },
  activeOption: {
    backgroundColor: 'skyblue',
  },
})
`

const indexFile = `import React, { Component } from 'react'
import { AppRegistry, View, StyleSheet } from 'react-native'

import Toggle from './Toggle'

class App extends Component {

  state = {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }

  render() {
    const {flexDirection, alignItems, justifyContent} = this.state
    const layoutStyle = {flexDirection, justifyContent, alignItems}

    const primaryAxis = flexDirection === 'row' ? 'Horizontal' : 'Vertical'
    const secondaryAxis = flexDirection === 'row' ? 'Vertical' : 'Horizontal'

    return (
      <View style={styles.container}>
        <Toggle
          label={'Primary axis (flexDirection)'}
          value={flexDirection}
          options={['row', 'column']}
          onChange={(option) => this.setState({flexDirection: option})}
        />
        <Toggle
          label={primaryAxis + ' distribution (justifyContent)'}
          value={justifyContent}
          options={['flex-start', 'center', 'flex-end', 'space-around', 'space-between']}
          onChange={(option) => this.setState({justifyContent: option})}
        />
        <Toggle
          label={secondaryAxis + ' alignment (alignItems)'}
          value={alignItems}
          options={['flex-start', 'center', 'flex-end', 'stretch']}
          onChange={(option) => this.setState({alignItems: option})}
        />
        <View style={[styles.layout, layoutStyle]}>
          <View style={styles.box} />
          <View style={styles.box} />
          <View style={styles.box} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  layout: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.05)',
  },
  box: {
    padding: 25,
    backgroundColor: 'steelblue',
    margin: 5,
  },
})

AppRegistry.registerComponent('App', () => App)
`

const files = [
  ['index.js', indexFile],
  ['Toggle.js', toggleFile],
]

const content = markdown(markdownOptions)`
Componentes especificam o layout de seus filhos usando o algoritmo  <b>flexbox</b>. Usar flexbox permite que você especifique um layout que expanda ou encolha para preencher telas de várias dimensões. Você pode facilmente misturar e combinar estes layouts automáticos com tamanhos fixos como <code>width: 100</code>.

Para escolher o layout correto para um componente filho, você deve fazer 3 escolhas:

Propriedade | Valor padrão | Opções | Descrição
---      | ---     | ---     | ---
\`flexDirection\` | \`column\` | \`row, column\` | Você quer um layout vertical (\`column\`) ou horizontal (\`row\`) ? Essa escolha determina a orientação do **eixo primário** do seu layout.
\`justifyContent\` | \`flex-start\` | \`flex-start, center, flex-end, space-around, space-between\` | Como o conteúdo deve ser distribuído ao longo do <b>eixo primário</b> do seu layout? Ele deve estar no começo (start), no centro (center), ou igualmente espaçado?
\`alignItems\` | \`stretch\` | \`flex-start, center, flex-end, stretch\` | Como o conteúdo deve estar alinhado ao longo do <b>eixo secundário</b>  do seu layout? (Se o eixo primário for \`row\`, então o eixo secundário será \`column\`, e vice versa). O conteúdo deve estar alinhado no começo, no centro, no final, ou esticado para preencher o espaço?

O exemplo a seguir deixa você testar todas as possíveis combinações de propriedades flexbox e layouts.

${<WebPlayer files={files} />}
`

export default props => <DefaultPage {...props}>{content}</DefaultPage>
