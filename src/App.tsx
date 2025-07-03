import './App.css'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Home from './pages/home'
import Pagina from './pages/pagina'

function App() {
  return (
    <Router basename="/react-example">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aa" element={<Pagina />} />
      </Routes>
    </ Router>
  )
}

export default App
