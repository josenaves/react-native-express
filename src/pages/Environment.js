import React from "react"
import markdown from "markdown-in-js"

import markdownOptions from "../utils/MarkdownOptions"
import DefaultPage from "./DefaultPage"

const content = markdown(markdownOptions)`
Existem duas maneiras de se configurar o ambiente de desenvolvimento React Native: [\`create-react-native-app\`](https://github.com/react-community/create-react-native-app) e \`react-native-cli\`.

# \`create-react-native-app\`

A comunidade React Native mantém um utilitário de linha de comando chamado \`create-react-native-app\`, que gera automaticamente um projeto React Native. Esta é a melhor maneira de um iniciante começar. Esta ferramenta gera um QR code que você pode ler (escanear) para executar o aplicativo no seu dispositivo. Conforme você atualiza o seu código, as mudanças são automaticamente refletidas no seu dispositivo. Para ver o app no seu dispositivo, você será instruído a baixar o app  \`Expo\`, que é o app cliente usado para visualizar o preview.

O ponto negativo dessa abordagem é que ele funciona com apps feitos apenas com Javascript puro. Se em qualquer momento você usar módulos nativos (Objective-C/Swift, Java/Kotlin, etc), você precisará fazer um \`eject\`. O utilitário de linha de comando \`create-react-native-app\` tem a opção \`eject\` para exportar seu app no mesmo formato usado pelo comando \`react-native init\`, onde você pode adicionar módulos nativos.

Você passar por isso na próxima seção, [Início rápido](quick_start).

# \`react-native-cli\`

Se você sabe que irá usar módulos nativos em seu app, você tem que usar o comando  \`react-native-cli\` para criar seu app. Você pode ler como fazer isso na documentação do Facebook [Getting Started](https://facebook.github.io/react-native/docs/getting-started.html). Clique na aba "Building Projects with Native Code".

<br />

A próxima seção vai te guiar na criação de um app React Native usando  \`create-react-native-app\`.
`

export default props => <DefaultPage {...props}>{content}</DefaultPage>
