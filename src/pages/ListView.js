import React from 'react'
import markdown from 'markdown-in-js'

import markdownOptions from '../utils/MarkdownOptions'
import DefaultPage from './DefaultPage'
import { WebPlayer } from '../components'

const code = `import React, { Component } from 'react'
import { AppRegistry, ListView, View, Text, StyleSheet } from 'react-native'

// Row data (hard-coded)
const rows = [
  {id: 0, text: 'View'},
  {id: 1, text: 'Text'},
  {id: 2, text: 'Image'},
  {id: 3, text: 'ScrollView'},
  {id: 4, text: 'ListView'},
]

// Row comparison function
const rowHasChanged = (r1, r2) => r1.id !== r2.id

// DataSource template object
const ds = new ListView.DataSource({rowHasChanged})

export default class App extends Component {

  state = {
    dataSource: ds.cloneWithRows(rows)
  }

  renderRow = (rowData) => {
    return (
      <Text style={styles.row}>
        {rowData.text}
      </Text>
    )
  }

  render() {
    return (
      <ListView
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'skyblue',
  },
})

AppRegistry.registerComponent('App', () => App)
`

const sectionsExample = `import React, { Component } from 'react'
import { AppRegistry, ListView, View, Text, StyleSheet } from 'react-native'

// Row data (hard-coded)
const rows = {
  'Basic Components': [
    {id: 0, text: 'View'},
    {id: 1, text: 'Text'},
    {id: 2, text: 'Image'},
  ],
  'List Components': [
    {id: 3, text: 'ScrollView'},
    {id: 4, text: 'ListView'},
  ],
}

// Row and section comparison functions
const rowHasChanged = (r1, r2) => r1.id !== r2.id
const sectionHeaderHasChanged = (s1, s2) => s1 !== s2

// DataSource template object
const ds = new ListView.DataSource({rowHasChanged, sectionHeaderHasChanged})

class App extends Component {

  state = {
    dataSource: ds.cloneWithRowsAndSections(rows)
  }

  renderRow = (rowData, sectionId) => {
    return (
      <Text style={styles.row}>
        {rowData.text}
      </Text>
    )
  }

  renderSectionHeader = (sectionRows, sectionId) => {
    return (
      <Text style={styles.header}>
        {sectionId} ({sectionRows.length})
      </Text>
    )
  }

  render() {
    return (
      <ListView
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
        renderSectionHeader={this.renderSectionHeader}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'skyblue',
  },
  header: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'steelblue',
    color: 'white',
    fontWeight: 'bold',
  },
})

AppRegistry.registerComponent('App', () => App)
`

const content = markdown(markdownOptions)`
\`ListViews\`s são usadas para grandes quantidades de conteúdo rolável. \`ListView\` existiam bem antes de \`FlatList\` and \`SectionList\`, e ainda tem algumas funcionalidades que os novos componentes de lista não tem ainda (por exemplo, headers fixos).

\`ListViews\`s  renderizam cada item de sua entrada \`dataSource\` usando a prop  \`renderRow\`. A prop  \`renderRow\` é uma função que pega um item do \`dataSource\`  e o mapeia num elemento React, por exemplo, se \`dataSource\` contém um array de strings, então \`${`(rowData) => <Text>{rowData}</Text>`}\`.

# DataSource

\`ListView\`s renderizam conteúdo usando a API \`DataSource\`. No seu uso mais simples, \`DataSource\` toma um array como entrada. O array pode conter qualquer tipo de dado.

Para fornecer dados para uma \`ListView\`, você pode criar uma nova fonte com \`new ListView.DataSource(options)\`, onde  \`options\` deve ser um objeto com a função \`rowHasChanged\` definida.  \`rowHasChanged\` compara dados das linhas para que apenas linhas que foram efetivamente alteradas sejam renderizadas. Dependendo dos tipos de dados que você estiver renderizando, uma função \`rowHasChanged\` pode ser assim:

- \`(r1, r2) => r1 !== r2\` (comparação de identidade)
- \`(r1, r2) => r1.id !== r2.id\` (comparação de um campo específico)
- \`(r1, r2) => !_.isEqual(r1, r2)\` (igualdade profunda com lodash)

Após instanciação, você deve chamar \`DataSource.cloneWithRows(inputArray)\` com seu array de dados de linha. Nós passaremos então o valor de retorno da chamada a \`cloneWithRows()\` para a prop \`dataSource\` da \`ListView\`. Uma vez que nós apenas queremos chamar \`cloneWithRows()\` na inicialização ou quando dados forem alterados (é lento, então não devemos chamá-la em render), nós frequentemente guardamos este valor no \`state\` do componente, e chamamos, por exemplo \`${`this.setState({dataSource: this.state.dataSource.cloneWithRows(newData)})`}\` quando precisamos atualizar o datasource.

Vamos olhar dois exemplos: um básico, e então um mais complexo que também renderiza cabeçalhos de seção.

# Exemplo Básico

${<WebPlayer code={code} />}

# Exemplo com Seções

\`ListView\`s pode também renderizar cabeçalhos de seção. No iOS, estes cabeçalhos podem ser fixos.

Para renderizar cabeçalhos de seção, você precisará:

- Formatar seus dados como um objeito, onde chaves são nomes das seções e valores os dados das linhas,  \`${`{firstSection: [rowData1, rowData2, ...], ...}`}\`
- Criar uma função \`sectionHeaderHasChanged = (s1, s2) => bool\` e passá-la para seu \`DataSource\` na instaciação
- Usar \`ds.cloneWithRowsAndSections(rows)\` na sua instância de \`DataSource\`
- Passar uma prop  \`renderSectionHeader\`, \`(rows, sectionId) => Element\`,  para a \`ListView\`

${<WebPlayer code={sectionsExample} />}
`

export default props => <DefaultPage {...props}>{content}</DefaultPage>
