import React from 'react'
import markdown from 'markdown-in-js'

import markdownOptions from '../utils/MarkdownOptions'
import Page from './Page'
import { EditorTranspiler, PageHeader } from '../components'

const code = `class Cat {
  constructor(name) {
    this.name = name
  }
  printName = () => {
    console.log(this.name)
  }
}`

const content = markdown(markdownOptions)`
Quando uma função é atribuída a uma propriedade de instância, ela se liga a instância.

Você provavelmente viu funções ligadas a instâncias no \`constructor\`, e.g., \`this.printName = this.printName.bind(this)\`. O bind aqui garante que um função de instância é invocada com o contexto correto.

Com as propriedades de instâncias de classe do ES7, podemos simplesmente fazer \`printName = () => ...\`.  A função \`printName\` abaixo é ligada a instância no momento que a instância é construída.

<EditorTranspiler
  code=${code}
  title=${'Métodos bind de instância'}
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
