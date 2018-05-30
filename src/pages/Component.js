import React from 'react'
import markdown from 'markdown-in-js'

import markdownOptions from '../utils/MarkdownOptions'
import DefaultPage from './DefaultPage'

const content = markdown(markdownOptions)`
\`Componentes\` são as peças de montar de qualquer UI. React Native gerencia o mapeamento entre os componentes JavaScript e a UI nativa que está sendo renderizada.

Toda a UI da aplicação é especificada declarando quais componentes renderizar e em que ordem. Componentes são aninhados dentro de outros componentes, formando uma estrutura de árvore. O componente de nível mais alto, ou a raiz da árvore, é conhecido como componente raiz. Componentes aninhados são chamaods de componentes filhos.

Na próxima seção, nós cobriremos os dois aspectos mais importantes de se usar componentes, a <b>Component API</b> e a <b>Component Lifecycle API</b>.
`

export default props => <DefaultPage {...props}>{content}</DefaultPage>
