import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from './pages/login';
import Cadastro from './pages/cadastro';
import Sobre from './pages/sobre';
import Menu from './pages/menu';
import Home from './pages/home';
import Footer from './pages/footer';
import Carrinho from "./pages/carrinho"
import AdicionarProduto from './pages/adicionar-produto';
import Admin from './pages/admin';

function App() {
  
  return (
    <Router>
      <Routes>
        {/* Página inicial com seus componentes */}
        <Route 
          path="/" 
          element={
            <>
              <Home />
              <Sobre />
              <Menu />
              <Footer />
            </>
          } 
        />

        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/carrinho" element={<Carrinho />} />
        <Route path='/adicionar' element={<AdicionarProduto/>}/>
        <Route path='/admin' element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
