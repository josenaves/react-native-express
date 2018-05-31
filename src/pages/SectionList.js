import React from 'react'
import markdown from 'markdown-in-js'

import markdownOptions from '../utils/MarkdownOptions'
import DefaultPage from './DefaultPage'
import { WebPlayer, SnackPlayer } from '../components'

const content = markdown(markdownOptions)`
\`SectionList\`s são como \`FlatList\`s, mas elas podem ter cabeçalhos de seção para separar grupos de linhas.

\`SectionList\`s renderizam cada um dos itens de sua entrada  \`sections\` usando as props  \`renderSectionHeader\` e \`renderItem\`. Cada item em  \`sections\` deve ser um objeito com um id único (a chave), e um array \`data\` com dados das linhas. Cada item em  \`data\` também deve ser um objeto com id único. A prop \`renderSectionHeader\` é uma função que pega um item do array \`sections\` e o mapeia para um elemento React. A prop  \`renderItem\`, assim como \`FlatList\`, é uma função que pega item no array  \`data\` (para uma seção) e retorna um elemento React.

# Exemplo de Linha Homogêneo

Se cada uma das linhas for renderizdas com a mesma função \`renderItem\`, nós podemos chamar isso de renderização homogênea.

${<SnackPlayer id="HJDgGWugb" />}

# Exemplo de Linha Heterogênea

Uma função  \`renderItem\` pode ser especificada como parte dos dados de  \`sections\`, uma por seção, ao invés de uma  \`prop\` de \`SectionList\`. Isso nos permite renderizar cada uma das seções de maneira diferente. De maneira alternativa, você poderia usar os dados dos itens para determinar como renderizar os itens de maneira diferente.

${<SnackPlayer id="BJO0NZ_eW" />}
`

export default props => <DefaultPage {...props}>{content}</DefaultPage>
