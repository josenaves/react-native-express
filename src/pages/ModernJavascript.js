import React, { Component } from 'react'
import markdown from 'markdown-in-js'

import markdownOptions from '../utils/MarkdownOptions'
import DefaultPage from './DefaultPage'

const content = markdown(markdownOptions)`
Nos velhos tempos, você apenas incluia uma tag \`${'<script>'}\` no header da página e seu JavaScript seria executado. Nos dias de hoje, nós *pre-processamos* nosso JavaScript para que possamos acessar features experimentais e extensões da linguagem como JSX.

# Babel

Babel é a ferramenta principal utilizada para pré-processar JavaScript. Babel é um compilador altamente configurável que te deixa usar features experimentais e extensões, compilando tudo para JavaScript antigo que é suportado num número maior de plataformas. É claro que, se uma plataforma não suportar nativamente uma feature ES6 como \`Promise()\`, Babel não poderá ajudar -- mas em muitos casos ela pode usar um polyfill para suportar a API.

Babel suporta o debug do código fonte original por incluir **mapas de fontes** com o JavaScript compilado. Interpretadores JavaScript executarão o código compilado e o mapearão para o código fonte no debugger para que você possa debugar o código fonte ao invés do código compilado (geralmente bem feio).

# Configuração do Babel

Você pode configurar o Babel incluíndo um arquivo \`.babelrc\` na diretório raiz do seu projeto. Este arquivo pode especificar quais features experimentais do JavaScript serão habilitadas e quais plugins serão usados (JSX).

React Native toma o cuidado de configurar o Babel para você, então geralmente você não precisará criar um arquivo \`.babelrc\`. Entretanto, se você quer modificar a configuração default, você pode usar o pacote npm [babel-preset-react-native](https://github.com/facebook/react-native/tree/master/babel-preset) como uma configuração base e aplicar plugins/configurações em cima.
`

export default props => <DefaultPage {...props}>{content}</DefaultPage>
