import React from 'react'
import markdown from 'markdown-in-js'

import markdownOptions from '../utils/MarkdownOptions'
import DefaultPage from './DefaultPage'

const content = markdown(markdownOptions)`
Componentes tem um ciclo de vida: são instanciados, montados, renderizados, e eventualmente atualizados, desmontados, e destruídos. O ciclo de vida ajuda gerenciar a complexidade de diferentes plataformas (iOS, Android) fornecendo uma simples mas consistente camada de abstração. O ciclo de vida também permite que você execute opcionalmente código customizado em cada um dos passos para um controle mais fino da renderização.

Vamos ver cada uma das fases do ciclo de vida dos componentes.

## Ciclo de montagem

* \`constructor(object props)\`\\
O componente é instanciado. Os parâmetros do constructor são as \`props\` iniciais do elemento, como especificado pelo elemento pai. Você pode especificar opcionalmente um estado inicial para o elemento ao atribuir um objeto para \`this.state\`. Neste ponto, nenhuma UI nativa foi renderizada ainda para este elemento.

* \`componentWillMount()\`\\
Este método é chamado apenas uma vez, antes da renderização acontecer pela primeira vez. Neste ponto, ainda não há UI nativa renderizada para este elemento.

* \`render() -> React Element\`\\
O método render deve retornar um elemento React para ser renderizado (ou null, para não renderizar nada).

* \`componentDidMount()\`\\
Este método é invocado apenas uma vez, após a renderização ocorrer pela primeira vez. Neste ponto, a UI nativa pare este elemento terminou a renderização, e pode ser acessado atráves de  \`this.refs\` para manipulação direta. Se você pricisa fazer chamadas a APIs assíncronas ou executar código agendado com \`setTimeout\`, geralmente isso é feito nesse método.

## Ciclo de atualização

* \`componentWillReceiveProps(object nextProps)\`\\
O pai deste componente passou um novo conjunto de \`props\`. Este componente irá renderizar novamente. Você pode opcionalmente chamar  \`this.setState()\` para atualizar o estado interno deste componente antes do método \`render\` ser chamado.
 
* \`shouldComponentUpdate(object nextProps, object nextState) -> boolean\`\\
Baseado nos próximos valores de \`props\` e \`state\`, um componente pode decidir renderizar novamente ou não renderizar. A implementação base deste método sempre retorna  \`true\` (o componente <i>deve</i> ser renderizado novamente). Para otimização, sobrescreva esse método e verifique se tanto \`props\` ou \`state\` foram modificados, por exemplo, execute um teste de igualdade de chave/valor nestes objetos. Retornando \`false\` irá previnir que o método \`render\` seja chamado.

* \`componentWillUpdate(object nextProps, object nextState)\`\\
Este método é invocado após a decisão ser feita de renderizar novamente. Você não pode chamar  \`this.setState()\` aqui, uma vez que uma atualização já está em andamento.

* \`render() -> React Element\`\\
Este método é chamado assumindo que  \`shouldComponentUpdate\` retornou \`true\`. O método render deve retornar um elemento React para renderizar (ou null, para não renderizar nada).

* \`componentDidUpdate(object prevProps, object prevState)\`\\ß
Este método é chamado após uma renderização acontecer. Neste ponto, a UI nativa deste componente foi atualizada para refletir o elemento React retornado pelo método \`render()\`.
`

export default props => <DefaultPage {...props}>{content}</DefaultPage>
