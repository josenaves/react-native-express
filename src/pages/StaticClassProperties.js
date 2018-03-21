import React from 'react'
import markdown from 'markdown-in-js'

import markdownOptions from '../utils/MarkdownOptions'
import Page from './Page'
import { EditorTranspiler, PageHeader } from '../components'

const code = `class Cat {
  static legCount = 4
}
console.log(Cat.legCount) // 4`

const content = markdown(markdownOptions)`
Como vimos na seção ES6, funções estáticas em classes existem como parte do ES6. No ES7, podemos usar a palavra-chave \`static\` para declarar propriedades estáticas do mesmo modo.

<EditorTranspiler
  code=${code}
  title=${'Propriedades estáticas'}
/>
`

export default props =>
  <Page {...props}>
    <PageHeader
      title={props.title}
      author={"Gabe G'Sell"}
      authorURL={'http://gabegsell.com/'}
    />
    {content}
  </Page>
