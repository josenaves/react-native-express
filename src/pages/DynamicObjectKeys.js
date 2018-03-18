import React from 'react'
import markdown from 'markdown-in-js'

import markdownOptions from '../utils/MarkdownOptions'
import Page from './Page'
import { EditorTranspiler, PageHeader } from '../components'

const code = `const chosenAnimal = 'cat'
const animals = {
  [\`animal\${chosenAnimal}\`]: true,
}
console.log(animals.animalcat) // true`

const content = markdown(markdownOptions)`
Com ES5, as chaves de objetos são sempre interpretadas como strings. ES6 nos permite usar valores computados como chaves usando colchetes: \`[minhaChave]\`.

<EditorTranspiler
  code=${code}
  title=${'Chaves dinânmicas'}
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
