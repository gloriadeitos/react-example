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