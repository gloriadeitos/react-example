## Comando pra criar o projeto:

```bash
npm create vite@latest .
```

Se der o erro: "'vite' não é reconhecido como um comando interno" significa que falta a pasta node_modules, pra baixar ela, rode:

```bash
npm install
```

## Comando para rodar o projeto

Comando padrão pra rodar em todos os projetos feitos em algum Framework:

```bash
npm run dev
```

## Páginas do projeto

Seu projeto é renderizado no arquivo "App.tsx" em /src/App.tsx

Para criar mais páginas, crie uma pasta chamada "pages" em src/pages.

TODAS páginas precisam ter esse formato:

```bash
import './styles.css';

const Home = () => {
    return (
        <div>
        </div>
    );
}

export default Home;
```

Componentes usados em várias páginas, são colocados na pasta src/components

## Várias páginas com o router

Para navegar entre as página é necessário usar o reac-router, para instalá-lo, use o comando:

```bash
npm install react-router-dom
```

Pro router funcionar, no seu App.tsx coloque:

```bash
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
```

E o seu funcion App precisa ficar assim:

```bash
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </ Router>
  )
}
```

### Navegar entre as páginas

Adicione:

```bash
import './styles.css';
import { useNavigate } from 'react-router-dom';

import Header from '../../components/header';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Header />
            <p>Essa é a home</p>

            <button
                className="btn-access"
                onClick={() => navigate('/aa')}>
                Acessar
            </button>
        </div>
    );
}

export default Home;
```

## Biblioteca visual

Nesse caso vou usar o Tailwind, link: https://tailwindcss.com/docs/installation/using-vite
Siga o tutorial pra baixar o Tailwind no site oficial na aba "Installation"

O site oficial não fala, mas isso daqui:

```bash
@import "tailwindcss";
```

Você precisa colocar no App.css

## Ícones

Você pode usar vários, pessoalmente eu uso o FontAwesome: https://docs.fontawesome.com/v5/web/use-with/react

Use:

```bash
npm install --save @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/free-brands-svg-icons @fortawesome/react-fontawesome
```

Com os ícones baixados, pra melhor organização, importe eles em src/utils/icons.ts

Nesse icons.ts coloque:

```bash
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export { FontAwesomeIcon};
```

## Deploy

Para fazer deploy, você precisa rodar o comando

```bash
npm run build
```

Com isso, ele cria uma pasta chamada "dist", e no seu servidor você coloca esse dist.

Mas, como a pasta "dist" não vai pro GitHub, use o GitHub Actions pra fazer o deploy na branch "deploy" (não precisa criar, o GitHub Actions cria ela), usando o código:

```bash
name: Deploy React to deploy branch

on:
  push:
    branches:
      - main

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repositório
        uses: actions/checkout@v3

      - name: Instalar Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Instalar dependências
        run: npm install

      - name: Build do projeto
        run: npm run build

      - name: Deploy para branch deploy
        run: |
          git config --global user.name "github-actions[bot]"
          git config --global user.email "github-actions[bot]@users.noreply.github.com"

          # Pega apenas o conteúdo da dist
          git checkout --orphan deploy
          git --work-tree=dist add --all
          git --work-tree=dist commit -m "Deploy automático"

          # Força push para branch deploy
          git push origin HEAD:deploy --force

```

#### OBS: O deploy da errado e fica uma página em branco, daí vc precisa especificar pro React em qual link seu projeto vai ficar, caso seu projeto fique publicado no link 1, e posteriormente vc mude pro link 2, vc VAI PRECISAR alterar as configurações a seguir

1) Ir no App.tsx e dizer exatamente o caminhono qual o seu projeto vai ser publicado, dentro do Router. Exemplo:

```bash
<Router basename="/dev/gloria/DGEOMdocs">
```

No seu vite.config.ts também altere para:

```bash
export default defineConfig({
  base: '/dev/gloria/DGEOMdocs/', // Substitua pelo caminho desejado
  plugins: [
    react(),
    tailwindcss(),
  ],
})
```