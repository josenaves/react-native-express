import React from 'react'
import markdown from 'markdown-in-js'

import markdownOptions from '../utils/MarkdownOptions'
import Page from './Page'
import { EditorTranspiler, PageHeader } from '../components'

const code = `const cat = {
  name: 'Luna',
  friends: { best: 'Ellie' },
  legs: 4,
}
const strangeCat = { ...cat, legs: 6 }

const sameCat = { ...cat }
console.log(cat.friends === sameCat.friends) // true
sameCat.friends.best = 'Buddy'
console.log(cat.friends.best) // Buddy`

const content = markdown(markdownOptions)`
Do mesmo modo que o operador de espalhamento de array do ES6, ES7 oferece um operador de espalhamento (spread)  \`...\` para objetos. Por baixo dos panos, ele tentará usar o \`Object.assign\` do ES6, como você verá quando visualizar a saída do Babel. Isso pode ser muito útil para cópia e para cópia e alteração de objetos.

Podemos copiar um objeto simplesmente com  \`${"{ ...originalObj }"}\`. Observe que isso é uma cópia rasa. Podemos também extender um objeto com \`${"{...originalObj, key1: 'newValue'}"}\`.

<EditorTranspiler
  code=${code}
  title=${'Operador de espalhamento de objeto'}
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
