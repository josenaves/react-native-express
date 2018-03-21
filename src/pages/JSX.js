import React from 'react'
import markdown from 'markdown-in-js'

import markdownOptions from '../utils/MarkdownOptions'
import DefaultPage from './DefaultPage'
import { EditorTranspiler } from '../components'

const code = `const a = <View />

const b = (
  <View
    foo='hello'
    bar={baz}>
    <Text>42</Text>
  </View>
)`

const content = markdown(markdownOptions)`
JSX é uma extensão do JavaScript que adiciona um novo tipo de expressão. Você pode usar <b>expressões</b> JSX em qualquer lugar que você usara qualquer outro tipo de expressão.

JSX é um atalho para o uso da API \`React.createElement()\`, que é muito mais conciso, fácil de ler, e visualmente se parece como a UI gerada (já que ambas são baseadas em árvores). Você não tem que usar JSX mas praticamente não há desvantagens, então provavelmente você deveria usar.

JSX é baseada em tags assim como XML. Cada tag, como \`${'<View />'}\`, é transformada em uma chamada para \`React.createElement()\`. Quaisquer atributos se tornam \`props\` do componente instanciado. Atributos podem ser strings como \`foo='hello'\` ou eles podem ser expressões JavaScript interpoladas quando são colocados entre chaves como em \`${'bar={baz}'}\` (que se refere a variável baz).

Tags podem ser 'auto-fechadas'como \`${'<View />'}\`, ou elas podem incluir tanto uma abertura e fechamento de tag como \`${'<View></View>'}\`. Para incluir elementos filhos, você precisará abrir e fechar a tag e colocar as tags filhas dentro.

<EditorTranspiler
  code=${code}
  title=${'JSX'}
/>
`

export default props => <DefaultPage {...props}>{content}</DefaultPage>
