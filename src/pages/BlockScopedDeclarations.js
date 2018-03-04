import React from 'react'
import markdown from 'markdown-in-js'

import markdownOptions from '../utils/MarkdownOptions'
import DefaultPage from './DefaultPage'
import { EditorTranspiler } from '../components'

const code = `const a = 1
let b = 'foo'

// Não permitido !
// a = 2

// Ok!
b = 'bar'

if (true) {
  const a = 3
}`

const content = markdown(markdownOptions)`
Ao invés de usar \`var\` para declarar variáveis locais, usamos  \`const\` e \`let\`. A principal diferença é que \`var\` tem escopo de função, enquanto  \`const\` e \`let\` tem escopo de bloco.

Além disso, variáveis declaradas com \`const\` só podem ser atribuídas uma vez. A atribuição de outro valor para o mesmo nome resultará num erro de compilação. Observe que se o valur atribuído para uma \`const\` for um objeto ou array, o objeto ou array ainda podem ser modificados. Em outras palavras, apenas o nome da variável foi vinculado permanentemente -- o valor em sim ainda é mutável.
 
<EditorTranspiler
  code=${code}
  title=${'Usando const e let'}
/>

Você pode perceber que a saída do código compilado substitui \`const\` e \`let\` por \`var\`. Perceba também que Babel transforma \`const a = 3\` em \`var _a = 3\`. Isso é para que seu código possa executar em plataforma mais antigas que não suportam as novas declarações de variáveis de escopo de bloco. É o compilador Babel que impõe o uso correto e o escopo de bloco, em vez do engine de runtime JavaScript.
`

export default props => <DefaultPage {...props}>{content}</DefaultPage>
