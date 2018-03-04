import React from 'react'
import markdown from 'markdown-in-js'

import markdownOptions from '../utils/MarkdownOptions'
import DefaultPage from './DefaultPage'

const content = markdown(markdownOptions)`
ECMAScript é a especificação de linguagem usada para implementar JavaScript. ES6, ou ECMAScript 6, é a primeira atualização significante da linguagem desde que ES5 foi inicialmente lançada em 2009.

Muitas features da ES6 já estão disponíveis em engines JavaScript modernos. Usando Babel, no entanto, nós temos acesso a muitas outras features, garantindo que nosso JavaScript executará em mais plataformas. React Native usa Babel para habilitar features do ES6 e garantir consistência cross-platform, já que seu código JavaScript será executado em Android, iOS, Windows, e outras plataformas.

# Destaques da ES6

Vamos dar uma olhada em algumas features da "nova" linguagem que estaremos usando e como elas são compiladas via Babel. Há muitas features da linguagem para olhar, então se você ficar cansado, vá para [Componentes React](components), e termine as seções da linguagem uma outra hora.
`

export default props => <DefaultPage {...props}>{content}</DefaultPage>
