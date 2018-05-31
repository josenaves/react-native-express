import React from 'react'
import markdown from 'markdown-in-js'

import markdownOptions from '../utils/MarkdownOptions'
import DefaultPage from './DefaultPage'
import { WebPlayer } from '../components'

const code = `import React, { Component } from 'react'
import { AppRegistry, View, StyleSheet } from 'react-native'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box} />
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
  box: {
    width: 200,
    height: 200,
    backgroundColor: 'skyblue',
    borderWidth: 2,
    borderColor: 'steelblue',
    borderRadius: 20,
  },
})

AppRegistry.registerComponent('App', () => App)
`

const content = markdown(markdownOptions)`
\`View\`s são as mais básicas peças de constução de apps React Native, assim como \`div\`s são as mais básicas peças de construção de websites. Em termos de implementação, \`View\` é uma camada de abstração em cima do equivalente nativo, seja \`UIView\`, \`android.view\`, \`${'<div>'}\`, ou qualquer outra.

\`View\`s são usadas primeiramente para estilo e layoutdos elementos filhos. Vamos dar uma olhada em alguns dos estilos que podemos aplicar as views. O exemplo abaixo contém duas \`View\`s: a mais externa que especifica o alinhamento do conteúdo contido dentro dela, e a mais interna que desenha um quadrado azul.

${<WebPlayer code={code} />}

Abaixo você pode ver os estilos mais comuns. Sinta-se a vontade para experimentar no código exemplo.

# Estilos de Layout

Propriedade | Tipo | Descrição
--- | --- | ---
\`flex\` | \`number\` | Qual proporção do espaço disponível deve este elemento expandir para preencher? 0 significa que o elemento não deve expandir.
\`flexDirection\` | \`string\` | Você quer um layout vertical (\`column\`) ou horizontal (\`row\`)? Esta escolha determina a orientação do <b>eixo primário</b> do seu layout. Deve ser um destes valores: \`row, column\`.
\`justifyContent\` | \`string\` | Como o conteúdo deve ser distribuído ao longo do <b>eixo primário</b> do seu layout? Deve estar no começo, centro, no final, ou igualmente espaçado? Deve ser um destes valores: \`flex-start, center, flex-end, space-around, space-between\`.
\`alignItems\` | \`string\` | Como o conteúdo deve estar alinhado ao longo do <b>eixo secundário</b> do seu layout? (Se o eixo primário for \`row\`, então o eixo secundário é \`column\`, e vice versa). O conteúdo deve estar alinhado no começo, no centro, no final, ou esticado para preencher o espaço? Deve ser um destes valores: \`flex-start, center, flex-end, stretch\`.
\`width\` | \`number\` | Uma largura fixa
\`height\` | \`number\` | Uma altura fixa
\`margin\` | \`number\` | Quanto espaço deve separar este elemento de outros elementos adjascentes? Para um controle mais granular, use as propriedades: \`marginTop, marginBottom, marginLeft, marginRight\`.
\`padding\` | \`number\` | Quanto de padding deve estar dentro deste elemento antes que seus filhos sejam mostrados? Para um controle mais granular, use as propriedades: \`paddingTop, paddingBottom, paddingLeft, paddingRight\`.

# Estilos Visuais

Propriedade | Tipo | Descrição
--- | --- | ---
\`backgroundColor\` | \`string\` | A cor de fundo
\`borderWidth\` | \`number\` | A espessura da borda. Para um controle mais granular, use as propriedades: \`borderTopWidth, borderBottomWidth, borderLeftWidth, borderRightWidth\`.
\`borderColor\` | \`string\` | A cor da borda. Para um controle mais granular, use as propriedades: \`borderTopColor, borderBottomColor, borderLeftColor, borderRightColor\`.
\`borderRadius\` | \`number\` | Cantos arredondados
\`opacity\` | \`number\` | Quão transparente esse elemento deve ser? 0 significa totalmente transparente, 1 significa totalmente opaco.
`

export default props => <DefaultPage {...props}>{content}</DefaultPage>
