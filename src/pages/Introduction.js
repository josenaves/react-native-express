import React, { Component } from 'react'
import { Link } from 'react-router'
import markdown from 'markdown-in-js'

import markdownOptions from '../utils/MarkdownOptions'
import Page from './Page'
import styles from '../styles'
import { WebPlayer, GithubCorner, PageHeader } from '../components'

const code = `/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Project extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Project', () => Project);`

const buttonStyle = {
  padding: '10px 15px',
  color: 'white',
  borderRadius: 3,
  backgroundColor: 'rgb(54,203,170)',
  textAlign: 'center',
  display: 'block',
  marginTop: 40,
}

export default class extends Component {
  render() {
    const content = markdown(markdownOptions)`
React Native é um framework para se construir aplicativos cross-platform.

Construir com React Native é extremamente eficiente e altamente viciante - mas iniciar pode ser um pouco complicado. Você deve usar esse guia como um complemento da documentação oficial do Facebook [Getting started](https://facebook.github.io/react-native/docs/getting-started.html). O guia do Facebook assume algum conhecimento sobre desenvolvimento para web com React. Se você encontrar tópicos que não estão completamente detalhados, por exemplo, como Babel funciona, brinque com os exemplos nesse guia para ganhar velocidade. Este guia também cobre tópicos relacionados, como Redux, que estão além do escopo da documentação do React Native.

Espero que você curta aprender React Native. Entre em contato comigo, [@dvnabbott](https://twitter.com/dvnabbott), com comentários ou questões que você tiver durante sua jornada. Algumas páginas foram escritas por outros autores (listados no topo de cada página), então sinta-se a vontade para contatá-los também.

# Hello World

Quando você cria um novo app React Native, ele se parecerá com isso:

<WebPlayer code={code} />

Você pode reparar que o código não se parece como o Javascript que você escreve atualmente. Isso é porque ele usa novas features da linguagem (ES6 imports, classes, declarações de variáveis com escopo de bloco) e a extensão de linguagem JSX. Nas próximas seções, eu darei um breve explicação em cada um destes tópicos. Se um tópico já lhe for familiar, sinta-se a vontade para pulá-lo. A maioria das seções deste guia são independentes umas das outras.

Mas primeiro, vamos configurar nosso ambiente de desenvolvimento React Native!
`

    return (
      <Page
        footer={this.props.footer}
        title={'React Native Express'}
        subtitle={'Aprenda React Native, o framework para apps cross-platform'}
        logo={'//cdn.rawgit.com/dabbott/react-native-express/master/static/logo'}
        logoWidth={256}
        logoHeight={296}
        bannerHeight={560}
        shouldUpdatePageTitle={false}
      >
        <GithubCorner />
        <PageHeader
          title={'Aprendendo React Native'}
          author={'@dvnabbott'}
          authorURL={'https://twitter.com/dvnabbott'}
        />
        {content}
        <Link to={'environment'} style={buttonStyle}>
          Vamos começar!
        </Link>
      </Page>
    )
  }
}
