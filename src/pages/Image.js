import React from 'react'
import markdown from 'markdown-in-js'

import markdownOptions from '../utils/MarkdownOptions'
import DefaultPage from './DefaultPage'
import { WebPlayer } from '../components'

const code = `import React, { Component } from 'react'
import { AppRegistry, Image, StyleSheet } from 'react-native'

export default class App extends Component {
  render() {
    return (
      <Image
        style={styles.image}
        source={{uri: 'http://www.reactnativeexpress.com/logo.png'}}
      />
    )
  }
}

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
  },
})

AppRegistry.registerComponent('App', () => App)
`

const content = markdown(markdownOptions)`
\`Image\` é usada para renderizar imagens. Imagens podem estar dentro do app como um asset ou serem baixadas da web.

Para distribuir uma imagem no app, use \`require()\` no arquivo de imagem como você faria com qualquer outro arquivo. Ao carregar imagens dentro do app, as mesmas imagens são usadas para renderizar em iOS e Android. Ao escrever \`require('./test.png')\` , será usada a imagem mais apropriada para o tamanho do aparelho: \`test.png\`, \`test@2x.png\`, ou \`test@3x.png\`.

Para baixar imagens da web, o layout funciona diferentemente da maioria dos outros elementos. Uma vez que as dimensões da imagem não são conhecidas até que a imagem seja baixada, imagens não podem ser automaticamente esticadas com \`flex: 1\`. Neste caso, você precisa especificar as dimensões no estilo, por exemplo, \`${'style={{width: 100, height: 100}}'}\`. React Native está evoluíndo rapidamente, e este comportamento pode mudar - se tiver dúvida, tente layouts diferentes e veja o que acontece!

${<WebPlayer code={code} />}
`

export default props => <DefaultPage {...props}>{content}</DefaultPage>
