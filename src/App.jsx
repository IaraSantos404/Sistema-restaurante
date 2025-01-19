import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from './pages/login';
import Cadastro from './pages/cadastro';
import Sobre from './pages/sobre';
import Menu from './pages/menu';
import Home from './pages/home';
import Footer from './pages/footer';
import Carrinho from "./pages/carrinho"

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
      </Routes>
    </Router>
  );
}

export default App;
