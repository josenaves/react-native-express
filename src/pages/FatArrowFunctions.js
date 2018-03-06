import React from 'react'
import markdown from 'markdown-in-js'

import markdownOptions from '../utils/MarkdownOptions'
import DefaultPage from './DefaultPage'
import { EditorTranspiler } from '../components'

const code = `const foo = () => 'bar'

const baz = (x) => {
  return x + 1
}

const squareSum = (...args) => {
  const squared = args.map(x => Math.pow(x, 2))
  return squared.reduce((prev, curr) => prev + curr)
}

this.items.map(x => this.doSomethingWith(x))`

const content = markdown(markdownOptions)`
**Fat arrow** \`=>\` (literalmente 'seta gorda' - vamos manter o termo em inglês) é usada para definir funções anônimas. Existem duas diferenças importantes no comportamento dessas funções em comparação com as funções definidas com a palavra-chave \`function\`.

Primeiramente, o binding para a palavra-chave \`this\` é o mesmo dentro e fora da função fat arrow. Isso é diferente das funções declaradas com \`function\`,  as quais podem fazer bind do  \`this\` com outro objeto após chamada. Manter o binding do \`this\` é muito conveniente para operações como mapeamento: \`this.items.map(x => this.doSomethingWith(x))\`.

Segundo, funções fat arrow não tem um objeto \`arguments\` definido. Você pode fazer a mesma coisa usando a **sintaxe de spread**: \`(...args) => doSomething(args[0], args[1])\`.

A sintaxe de uma função fat arrow pode variar um pouco. Se a função tem exatamente um parâmetro, os parênteses podem ser omitidos: \`x => Math.pow(x, 2)\`. Qualquer outro número de argumentos precisará de parênteses: \`(x, y) => Math.pow(x, y)\`. Se o corpo da função não estiver envolvido por chaves (como nas sentenças anteriores), ela é executada como uma **expressão**, e o valor de retorno da função é o valor dessa expressão. O corpo da função pode ser envolvido entre chaves para criar um **bloco**, no qual será explicitamente necessário  \`retornar\` um valor, caso você queira retornar qualquer coisa. Você precisará usar a versão com chaves e blocos mais frequentemente, já que isso permite que o corpo da função inclua múltiplas linhas de código.

<EditorTranspiler
  code=${code}
  title=${'Fat arrow functions'}
/>
`

export default props => <DefaultPage {...props}>{content}</DefaultPage>
