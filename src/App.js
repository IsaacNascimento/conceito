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

import Pagina from "./pages/Learning/pag";
import Box from "./components/Box"

import { Carros } from "./pages/Learning/Carros";
import { Objeto } from "./pages/Learning/Objeto";
import { Array } from "./pages/Learning/Array";
import {Pagina1} from "./pages/Learning/Pagina1";
import {Contador} from "./pages/Learning/Contador";

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { FilmesPopulares } from "./pages/filmes/FilmesPopulares";
import {FilmesDetalhes} from "./pages/filmes/FilmesDetalhes";
import { FilmesLancamentos } from "./pages/filmes/FilmesLancamentos";
import { FilmesNowPlaying } from "./pages/filmes/FilmesNowPlaying";
import { FilmesElencos } from "./pages/Ator/FilmesElencos";
import { SeriesPopulares } from "./pages/Series/SeriesPopulares";
import { SeriesDetalhes } from "./pages/Series/SeriesDetalhes";
import { SeriesNoAR } from "./pages/Series/SeriesNoAR";
import { SeriesEstrelandoHoje } from "./pages/Series/SeriesEstrelandoHoje";


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
          <Route path="/filmes/elenco/:id" element={<FilmesElencos/>}/>
          <Route path="/filmes/:id" element={<FilmesDetalhes/>} />
          <Route path="/series" element={<SeriesPopulares/>}/>
          <Route path="/series/no_ar" element={<SeriesNoAR/>}/>
          <Route path="/series/estrelando" element={<SeriesEstrelandoHoje/>}/>
          <Route path="/series/:id" element={<SeriesDetalhes/>} />
        </Routes>
      </BrowserRouter>

    </body>
  );
}

export default App;
