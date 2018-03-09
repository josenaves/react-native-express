import React from 'react'
import markdown from 'markdown-in-js'

import markdownOptions from '../utils/MarkdownOptions'
import DefaultPage from './DefaultPage'
import { EditorTranspiler } from '../components'

const code = `const arr = ['one!', 'two!', 'three!', 'four!']
const [one, two, ...rest] = arr

const obj = {a: 'x', b: 'y', c: 'z'}
const {a, b, c} = obj`

const content = markdown(markdownOptions)`
Destructuring é uma maneira conveniente de se extrair várias chaves de um objeto ou array e simultaneamente atribuir os valores a variáveis locais.

<EditorTranspiler
  code=${code}
  title=${'Destructuring'}
/>
`

export default props => <DefaultPage {...props}>{content}</DefaultPage>
