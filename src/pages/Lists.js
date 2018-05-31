import React from 'react'
import markdown from 'markdown-in-js'

import markdownOptions from '../utils/MarkdownOptions'
import DefaultPage from './DefaultPage'
import { WebPlayer } from '../components'

const content = markdown(markdownOptions)`
Lists são com ScrollViews mas otimizadas para reciclar elementos e reduzir renderizações para melhor performance. Como resultado, a API é um pouco mais complicada que a do ScrollView. Os componentes de lista do React Native ainda estão evoluindo, então você pode esperar mais estabilidade e performance no futuro.

FlatList e SectionList são os novos componentes de lista recomendados para listas simples e peformáticas. Elas estão construídas em cima da VirtualizedList, que é uma implementação de lista altamente flexível e otimizada e que geralmente não deve ser usada diretamente.

No entanto, no tempo de escrita deste artigo, ambas não tem funcionalidades importantes como, por exemplo cabeçalhos fixos (sticky headers), então pode ser que você ainda precise usar o componente antigo de lista, o ListView.

Em geral, começe usandno uma FlatList ou SectionList. Normalmente, migrar entre estas duas e uma ListView não é tão difícil, então se você precisar de mais funcionalidades, você pode mudar mais tarde.
`

export default props => <DefaultPage {...props}>{content}</DefaultPage>
