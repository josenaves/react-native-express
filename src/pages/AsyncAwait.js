import React from 'react'
import markdown from 'markdown-in-js'

import markdownOptions from '../utils/MarkdownOptions'
import DefaultPage from './DefaultPage'
import { EditorTranspiler } from '../components'

const code = `const fetchData = async () => {
  return fetch('https://randomuser.me/api/')
}

const printData = async () => {
  try {
    const json = await fetchData()
    console.log(json)
  } catch(e) {
    console.error("Problem", e)
  }
}`

const content = markdown(markdownOptions)`
Podemos usar a palavra-chave \`async\` antes de uma função para 'envolver' o valor dessa função numa \`Promise\`. Podemos usar a palavra-chave \`await\` (numa função \`async\`) para aguardar a promise ser resolvida ou rejeitada antes de continuar com a execução do código naquele bloco.

Essa sintaxe também propaga exceções que ocorrem nas promises usando um bloco \`try\`/\`catch\`, como se o código estivesse sendo executado sincronamente.

<EditorTranspiler
  code=${code}
  title=${'Async e await'}
/>
`

export default props => <DefaultPage {...props}>{content}</DefaultPage>
