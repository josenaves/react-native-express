import React, { Component } from 'react'
import markdown from 'markdown-in-js'

import markdownOptions from '../utils/MarkdownOptions'
import Page from './Page'
import { PageHeader } from '../components'


const content = markdown(markdownOptions)`
Criar um novo projeto React Native é fácil.

Você precisará ter Node.js instalado. Se você ainda não tem, baixe o instalador em [nodejs.org](https://nodejs.org/en/download/). Escolha o pacote apropriado para sua plataforma e siga as instruções de instalação.

## Instalação

Primeiro, vamos instalar o \`create-react-native-app\` (CRNA). [CRNA](https://github.com/react-community/create-react-native-app) é uma ferramenta de linha de comando para facilitar a criação de um novo projeto React Native.

${<pre><code>{
`npm install -g create-react-native-app`
}</code></pre>}

Agora, use CRNA para criar um novo app:

${<pre><code>{
`create-react-native-app my-app
cd my-app/
npm start`
}</code></pre>}

CRNA vai levar alguns minutos para baixar as dependências. Você deve ver um QR code como este no final:

${<img src="createnativeapp.png" style={{width: 550}} />}

Você acaba de criar seu primeiro aplicativo com React Native ! Agora você pode instalar o cliente Expo no [iOS](https://itunes.apple.com/us/app/expo-client/id982107779?mt=8) ou [Android](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en) e escanear o QR code para visualizá-lo.

Se aparecer isso, parabéns! Você está pronto para começar a trabalhar no seu novo app React Native.

${<img src="expo.png" style={{width: 250}} />}

## Fazendo alterações

Tente alterar o texto no arquivo  \`App.js\` , salvar e veja a atualização no seu dispositivo.

## A seguir

Agora que você tem um projeto configurado, vamos ver algumas features importantes da linguagem Javascript que você irá usar. Se você já estiver familiarizado com isso, pule para [Componentes](components) e aprendar mais sobre componentes em  React e o seu ciclo de vida. Se você já sabe React, pule para [Componentes Core](core_components) para aprender sobre os componentes prontos que React Native traz.

`

export default props =>
	<Page {...props}>
		<PageHeader
		  title={props.title}
	      author={"@jimmyliu"}
	      authorURL={'https://twitter.com/jimmyliu'}
	     />
		{content}
	</Page>
