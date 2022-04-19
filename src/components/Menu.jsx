import React from "react";
import { Container, Nav, Navbar, Dropdown } from "react-bootstrap";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
const Menu = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" className="mb-5">
        <Container>
          <Navbar.Brand href="/">Filmes Populares</Navbar.Brand>
          <Nav className="me-auto">
            {/* <Link className="nav-link" to='/carros'>Carros</Link>
            <Link className="nav-link" to='/array'>Arrays</Link>
            <Link className="nav-link" to='/objeto'>Objetos</Link>
            <Link className="nav-link" to='/contador'>Contador</Link> */}
            {/* <Link className="nav-link" to='/'>Filmes populares</Link> */}

        

            <Dropdown>
              <Dropdown.Toggle variant="dark" id="dropdown-basic">
                Filmes
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item >
                  <Link className="nav-link text-dark" to="/filmes/lancamentos">
                    Filmes lançamentos
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link className="nav-link text-dark" to="/filmes/now_playing">
                    Filmes em Cartaz
                  </Link>
                </Dropdown.Item>

              </Dropdown.Menu>
            </Dropdown>


            <Dropdown>
              <Dropdown.Toggle variant="dark" id="dropdown-basic">
                Series de Tv
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item >
                  <Link className="nav-link text-dark" to="/series">
                    Series Populares
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item >
                  <Link className="nav-link text-dark" to="/series/no_ar">
                    Series no Ar
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item >
                  <Link className="nav-link text-dark" to="/series/estrelando">
                    Series Estrelando Hoje
                  </Link>
                </Dropdown.Item>

              </Dropdown.Menu>
            </Dropdown>


          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Menu;
