import React from "react";

import Menu from "../../components/Menu";

import { Button, Container } from "react-bootstrap";

import { Box } from "../../components/Box";

import Pagina from "./pag";

export const Pagina1 = () => {
  return (
    <div>

      
      <Container>


      <Box tittle="Error" />
      <Box tittle="Success" cor="success" />

      <Pagina />
      <Pagina />
      <Pagina />

      <br></br>

      <h1>Hello World</h1>

      <Button variant="primary">Primary</Button>
      </Container>
    </div>
  );
};
