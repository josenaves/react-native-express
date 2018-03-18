import React from 'react'
import markdown from 'markdown-in-js'

import markdownOptions from '../utils/MarkdownOptions'
import Page from './Page'
import { EditorTranspiler, PageHeader } from '../components'

const code = `const animals = ['cat', 'dog', 'moose']
const newAnimals = [...animals]
const lotsOfAnimals = [...animals, 'bear', 'mouse', 'donkey']
const fruits = [{name: 'banana', color: 'yellow'}, {name: 'apple', color: 'red'}]
const newFruits = [...fruits]
console.log(fruits[0] === newFruits[0]) // true
newFruits[0].name = 'fofana'
console.log(fruits[0].name) // fofana`

const content = markdown(markdownOptions)`
A sintaxe de *array spread* (algo como espalhamento de array) torna fácil expandirmos um array. Isso pode ser utilizado para fazer uma *cópia rasa* de um array, opcionalmente com outros elementos adicionados a cópia.
<EditorTranspiler
  code=${code}
  title=${'Array spread'}
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
