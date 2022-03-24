// import logo from './logo.svg';
// import './App.css';

import { Button, Card, Container, Nav, Navbar, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Menu from "./components/Menu";
import Cartao from "./components/Cartao";





function App() {
  return (
    <body>

      <Menu/>

      <Cartao tittle="É o trikas" image="https://img.freepik.com/fotos-gratis/imagem-aproximada-em-tons-de-cinza-de-uma-aguia-careca-americana-em-um-fundo-escuro_181624-31795.jpg"/>

      <br>
      </br>

      <h1>Hello World</h1>
     
      <Button variant="primary">Primary</Button>
    </body>
  );
}

export default App;
