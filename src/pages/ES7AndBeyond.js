import React from 'react'
import markdown from 'markdown-in-js'

import markdownOptions from '../utils/MarkdownOptions'
import Page from './Page'
import { PageHeader } from '../components'

const content = markdown(markdownOptions)`
ES6 é o conjunto de features para Javascript de 2015. Já existem muitas outras features propostas para as futuras versões de Javascript, incluindo ES7 (2016) e ES8. Como Babel, nós podemos usar muitas destas features hoje.

Algumas destas features já se tornaram padrão no desenvolvimento Javascript moderno. Vamos ver algumas das features mais populares e úteis.
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
