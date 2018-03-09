import React from 'react'
import markdown from 'markdown-in-js'

import markdownOptions from '../utils/MarkdownOptions'
import Page from './Page'
import { EditorTranspiler, PageHeader } from '../components'

const classExample = `class Animal {
  constructor(name) {
    this.name = name
  }

  static beProud() {
    console.log('I AM AN ANIMAL')
  }

  printName() {
    console.log(this.name)
  }
}

const animal = new Animal('Cat')
animal.printName() // Cat
Animal.beProud() // I AM AN ANIMAL`

const classExtendsExample = `class Cat extends Animal {
  printName() {
    super.printName()
    console.log(\`My name is \${this.name}\`)
  }
}`

const content = markdown(markdownOptions)`
Em ES5, classes são apenas funções com métodos de instâncias atribuídos a \`MyFunction.prototype\`. ES6 permite usarmos a sintaxe mais simples de \`class\`.

\`class\` nos dá funções de instância, funções estáticas e herança.  \`constructor\` é uma função especial que é chamada automaticamente toda vez que uma instância da classe for criada. Nós podemos usar a palavra-chave  \`static\` para declarar funções estáticas de classe.

<EditorTranspiler
  code=${classExample}
  title=${'Using class'}
/>

# Herança

\`class\` nos dá herança simples com a palavra-chave \`extends\`. Em classes filhas, temos acesso a função \`super()\`. Dentro da função herdada na classe filha, \`super\` invocará a versão da função na classe pai.

<EditorTranspiler
  code=${classExtendsExample}
  title=${'Herança'}
/>

Para maiores detalhes sobre a sintaxe de \`class\`, veja a referência no MDN [class](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes).
`

export default props =>
  <Page {...props}>
    <PageHeader
      title={props.title}
      author={"Gabe G'Sell"}
      authorURL={'http://gabegsell.com/'}
    />
    {content}
  </Page>
