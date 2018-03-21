import React from 'react'
import markdown from 'markdown-in-js'

import markdownOptions from '../utils/MarkdownOptions'
import DefaultPage from './DefaultPage'
import { EditorTranspiler } from '../components'

const code = `class Cat {
  name = 'Tom'
  state = {
    running: true
  }

  constructor() {
    console.log(this.name, this.state.running)
  }
}

new Cat() // => Tom true
`

const content = markdown(markdownOptions)`
Propriedade de instância é um modo conveniente de se declarar propriedades para cada uma das instâncias, equivalente a atribuir essas propriedades na função construtora.

<EditorTranspiler
  code=${code}
  title=${'Propriedades de instância'}
  height={400}
/>
`

export default props => <DefaultPage {...props}>{content}</DefaultPage>
