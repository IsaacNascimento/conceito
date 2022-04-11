// import logo from './logo.svg';
// import './App.css';

import {
  Button,
  Card,
  Container,
  Nav,
  Navbar,
  Row,
  Col,
  ButtonGroup,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Menu from "./components/Menu";

import Pagina from "./pages/pag";
import { Box } from "./components/Box";

import { Carros } from "./pages/Carros";
import { Objeto } from "./pages/Objeto";
import { Array } from "./pages/Array";
import {Pagina1} from "./pages/Pagina1";
import {Contador} from "./pages/Contador";

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { FilmesPopulares } from "./filmes/FilmesPopulares";
import {FilmesDetalhes} from "./filmes/FilmesDetalhes";
import { FilmesLancamentos } from "./filmes/FilmesLancamentos";
import { FilmesNowPlaying } from "./filmes/FilmesNowPlaying";


function App() {
  return (
    <body>
      
    
      <BrowserRouter>
       <Menu/>
        <Routes>
          {/* <Route path="/" element={<Pagina1/>} />
          <Route path="/carros" element={<Carros/>} />
          <Route path="/array" element={<Array/>} />
          <Route path="/objeto" element={<Objeto/>} />
          <Route path="/contador" element={<Contador/>} />       */}
          <Route path="/" element={<FilmesPopulares/>} />
          <Route path="/filmes/lancamentos" element={<FilmesLancamentos/>} />
          <Route path="/filmes/now_playing" element={<FilmesNowPlaying/>} />
          <Route path="/filmes/:id" element={<FilmesDetalhes/>} />
        </Routes>
      </BrowserRouter>

    </body>
  );
}

export default App;
