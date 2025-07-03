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
