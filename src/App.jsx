import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './Components/paginas/Home';
import Home2 from './Components/paginas/Home2';
import Calculadoras from './Components/paginas/Calculadoras';
import Contato from './Components/paginas/Contato';
import Login from './Components/paginas/Login';
import Cadastro from './Components/paginas/Cadastro';
import EsqueceuSenha from './Components/paginas/EsqueceuSenha';
import CalculadoraPF from './Components/paginas/CalculadoraPF';
import CalculadoraPJ from './Components/paginas/CalculadoraPJ';
import Sobre from './Components/paginas/Sobre';

import Container from './Components/layout/Container';
import Navbar from './Components/layout/Navbar';
import Navbar2 from './Components/layout/NavBar2';
import Navbar3 from './Components/layout/NavBar3';
import Footer from './Components/layout/Footer';

//Cria um componente separado para poder usar o hook useLocation
function AppContent() {
  const location = useLocation()

  // Rotas que usarão a Navbar2
  const navbar2Routes = ['/sobre', '/calculadora-pf', '/calculadora-pj'];

  // Rotas que usarão a Navbar3
  const navbar3Routes = ['/home2'];

  // Verifica qual Navbar deve ser mostrada
  const showNavbar2 = navbar2Routes.includes(location.pathname.toLowerCase());
  const showNavbar3 = navbar3Routes.includes(location.pathname.toLowerCase());

return (
    <>
      {navbar3Routes.includes(location.pathname.toLowerCase()) ? (
        <Navbar3 />
      ) : showNavbar2 ? (
        <Navbar2 />
      ) : (
        <Navbar />
    )}

      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home2" element={<Home2 />} />
          <Route path="/calculadoras" element={<Calculadoras />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/login" element={<Login />} />
          <Route path="/esqueceusenha" element={<EsqueceuSenha />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/calculadora-pf" element={<CalculadoraPF />} />
          <Route path="/calculadora-pj" element={<CalculadoraPJ />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </Container>

      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;