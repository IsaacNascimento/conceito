import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
const Menu = () => {
  return (
    <div >
     
      <Navbar bg="dark" variant="dark" className="mb-5">
        <Container>
          <Navbar.Brand href="/">Filmes Populares</Navbar.Brand>
          <Nav className="me-auto">
            {/* <Link className="nav-link" to='/carros'>Carros</Link>
            <Link className="nav-link" to='/array'>Arrays</Link>
            <Link className="nav-link" to='/objeto'>Objetos</Link>
            <Link className="nav-link" to='/contador'>Contador</Link> */}
            {/* <Link className="nav-link" to='/'>Filmes populares</Link> */}
            <Link className="nav-link" to='/filmes/lancamentos'>Filmes lançamentos</Link>
            <Link className="nav-link" to='/filmes/now_playing'>Filmes em Cartaz</Link>
            
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Menu;
