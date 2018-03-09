import React from 'react'
import markdown from 'markdown-in-js'

import markdownOptions from '../utils/MarkdownOptions'
import Page from './Page'
import { EditorTranspiler, PageHeader } from '../components'

const code = `const printAnimal = (animal = 'cat') => {
  console.log(animal)
}
printAnimal() // cat
printAnimal('dog') // dog`

const content = markdown(markdownOptions)`
Podemos atribuir valores default para parâmetros de função dentro da declaração da função. Um valor default é atribuído para um parâmetro se ele estiver  \`undefined\`.
<EditorTranspiler
  code=${code}
  title=${'Default parameters'}
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
