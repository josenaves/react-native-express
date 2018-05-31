import React from 'react'
import markdown from 'markdown-in-js'

import markdownOptions from '../utils/MarkdownOptions'
import DefaultPage from './DefaultPage'

const content = markdown(markdownOptions)`
React Native inclui algumas dúzias de componentes base que podem ser usados de imediatamente. Componentes mais complexos podem ser construídos combinando componentes base de maneiras interessantes.

Praticamente todos os componentes base extendem o componente \`View\`, e podem receber uma prop  \`style\`  opcional. O estilo pode incluir propriedades visuais como cores e bordas, assim como propriedades de layout. Componentes usam o algoritmo flexbox para especificar o layout dos seus filhos.

Vamos dar uma olhada mais profunda no algoritmo flexbox e alguns dos componentes mais comuns.
`

export default props => <DefaultPage {...props}>{content}</DefaultPage>
