
import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Listarcategorias from './components/categorias/listarcategorias/Listarcategorias';
import FormCategoria from './components/categorias/formcategorias/FormCategoria';

function App() {
  return (
    <>
   
        <BrowserRouter>
          <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
             
              
              <Route path="/categorias" element={<Listarcategorias />} />
              <Route path="/home" element={<Home />} />
              <Route path="/cadastroCategoria" element={<FormCategoria />} />
              <Route path="/DeletarCategoria" element={<Listarcategorias/>} />
              <Route path="/editarCategiria/:id" element={<FormCategoria />} />

            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      
    </>
  );
}
export default App;