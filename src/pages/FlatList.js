import React from 'react'
import markdown from 'markdown-in-js'

import markdownOptions from '../utils/MarkdownOptions'
import DefaultPage from './DefaultPage'
import { WebPlayer, SnackPlayer } from '../components'

const content = markdown(markdownOptions)`
\`FlatList\`s são usadas para quantidades grandes de conteúdo rolável. Elas expõem o \`ScrollView\` usado por baixo, mas com melhorias de performance: apenas renderizam o conteúdo na tela (desprezando o conteúdo fora da tela), e apenas atualizam linhas que mudaram. Assim como  \`ScrollView\`s, elas podem rolar horizontal ou verticalmente.

Ao invés de renderizar suas props filhas, \`FlatList\`s renderizam cada um dos itens usando a prop  \`renderItem\`. A prop  \`renderItem\` é uma função que usa um item do array \`data\` e mapeia-o para um elemento React. Cada item em  \`data\` deve ser um objeto com um id único, para que React possa determinar quais itens foram rearranjados. O id único é buscado em  \`item.key\` por default, mas você pode especificar um outro jeito de encontrar/construir um id informando uma prop \`keyExtractor\`.

 # Exemplo básico
${<SnackPlayer id="SyKH_IDeZ" />}

`

export default props => <DefaultPage {...props}>{content}</DefaultPage>
