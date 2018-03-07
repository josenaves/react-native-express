import React from 'react'
import markdown from 'markdown-in-js'

import { EditorTranspiler } from '../components'
import markdownOptions from '../utils/MarkdownOptions'
import DefaultPage from './DefaultPage'

const importExample = `// import the default export
import React from 'react-native'

// import other named exports
import {View, Text, Image} from 'react-native'

// import default and others simultaneously
// import React, {View, Text, Image} from 'react-native'`

const exportExample = `export default React
export {View, Text, Image}`

const content = markdown(markdownOptions)`
ES6 nos traz um padrão mais avançado de se importar/exportar módulos do que o tão utilizado padrão CommonJS. Contrastando com o velho \`${'module.exports = {...}'}\`, agora nós podemos exportar múltiplos \`named values\`. Da mesma maneira, podemos importar múltiplos \`named values\`.

Existe apenas um export default por arquivo, e esse valor exportado pode ser importado sem termos que referenciá-lo por nome. Todos os outros imports e exports devem ser nomeados.

Se você tentar importar um velho módulo CommonJS usando a nova sintaxe de import, Babel vai cuidar da diferença no formato automaticamente. Um módulo que segue o estilo antigo não terá a propriedade especial  \`__esModule\` adicionada pelo Babel ao ser exportada.

<EditorTranspiler
  code=${importExample}
  title=${'Importando'}
/>

Os imports no exemplo anterior estariam disponíveis caso fossem exportados do módulo \`react-native\` como no próximo exemplo.

<EditorTranspiler
  code=${exportExample}
  title=${'Exportando'}
/>

Para maiores detalhes na sintaxe de importação/exportação, veja a referência no MDN para [import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) e [export](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export).
`

export default props => <DefaultPage {...props}>{content}</DefaultPage>
