import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from './pages/About';

import { Footer } from './components/Footer';
import { Resultados } from './pages/Resultados';
import { QuemSomos } from './pages/QuemSomos';
import { MinhaCarteira } from './pages/MinhaCarteira';
import { Navbar2 } from './components/Navbar2';
import { Home2 } from './pages/Home2';



function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Navbar2 />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home2 />} />
              <Route path="/about" element={<About />} />
              <Route path="/resultados" element={<Resultados />} />
              <Route path="/quem_somos" element={<QuemSomos />} />
              <Route path="/minha_cartela" element={<MinhaCarteira />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;