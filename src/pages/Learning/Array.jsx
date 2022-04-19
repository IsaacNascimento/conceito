import React from "react";
import { Button, Container } from "react-bootstrap";
import { Box } from "../../components/Box";
import Pagina from "./pag";

export const Array = () => {

  const carros = [
    
    'fusca', 'gol', 'corola', 'celta'
  ]
  const person = ['Isaac', 'Souza', 'Carlos', 'Nascimento']

  return (
    <div>
      <Container>
       <h1> Cars </h1>

      
      <ul>
       {
         carros.map(item => (
           <li>{item}</li>
           ))
          }
      </ul>
       <br></br>
        <h1> People </h1>

        <ul>
       {
         person.map(item => (
           <li>{item}</li>
         ))
       }
       </ul> 

      </Container>
    </div>
  );
};
