import React from 'react'
import markdown from 'markdown-in-js'

import markdownOptions from '../utils/MarkdownOptions'
import DefaultPage from './DefaultPage'
import { WebPlayer } from '../components'

const code = `import React, { Component } from 'react'
import { AppRegistry, View, Text, StyleSheet } from 'react-native'

class Counter extends Component {

  state = {count: 0}

  componentDidMount() {
    setInterval(() => {
      this.setState({count: this.state.count + 1})
    }, 1000)
  }

  render() {
    const {count} = this.state
    const {color, size} = this.props

    return (
      <Text style={{color, fontSize: size}}>
        {count}
      </Text>
    )
  }
}

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Counter color={'lightblue'} size={16} />
        <Counter color={'skyblue'} size={32} />
        <Counter color={'steelblue'} size={80} />
        <Counter color={'darkblue'} size={140} />
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
})

AppRegistry.registerComponent('App', () => App)
`

const content = markdown(markdownOptions)`
## **\`this.props\`**

\`Componentes\` podem ser configurados no momento de criação passando-se propriedades para o \`constructor\` - estas propriedades são chamadas de \`props\`. \`props\` podem ser acessadas de dentro dos métodos dos componentes usando \`this.props\`, para alterar como o componente é renderizado e/ou como ele se comporta. No entanto, \`props\` <b>não podem ser alteradas</b> dentro dos métodos do componente.

Um elemento pai pode alterar \`props\` de um componente filho a qualquer momento. O elemento filho geralmente irá renderizar de novo para refletir sua nova configuração. Um componente filho pode decidir não se renderizar novamente mesmo que sua configuração tenha mudado, como determidado pelo método \`shouldComponentUpdate()\` (mais na seção Component Lifecycle API).

## **\`this.state\`**

\`Componentes\` podem manter seu estado internamente com o objeto \`state\`. \`this.state\` pode ser acessado de dentro dos métodos do componente. Ao contrário de \`props\`, elementos pais não podem acessar o estado de um filho, como se destina gerenciar o estado interno do filho do que configuração externa.

Observe que você <i>nunca</i> deve atribuir uma chave específica dentro do objeto  \`state\`, por exemplo, \`this.state.foo = 'bar'\`. Neste caso, você deve usar o método \`this.setState()\`.

## **\`this.setState(object newState)\`**

\`Componentes\` podem atualizar seu \`state\` passando um objeto para o método \`this.setState()\`. Quaisquer chaves no objeto passado para o método serão mescladas dentro (e irão sobrescrever quaisquer chaves pré-existentes) de \`this.state\`.

# Exemplo

O exemplo a seguir inclui um componente \`Counter\` que mantém o tempo decorrido internamente como  \`state.count\`. O componente \`App\` renderiza o componente \`Counter\` com duas \`props\`: \`size\` e \`color\`.  \`App\` pode ser facilmente renderizar vários componentes \`Counter\` com diferentes tamanhos e cores.

<WebPlayer code=${code} />
`

export default props => <DefaultPage {...props}>{content}</DefaultPage>
