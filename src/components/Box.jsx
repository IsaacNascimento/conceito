import React from 'react';



import {
    Button,
    Card,
    Container,
    Nav,
    Navbar,
    Row,
    Col,
    ButtonGroup,
    Alert,
  } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

export const Box = (props) => {

 
 
  return (
    <div>
        <Alert variant={props.cor ? props.cor : 'danger'} >
        <Alert.Heading>{props.tittle}</Alert.Heading>
        <p>
          Change this and that and try again. Duis mollis, est non commodo
          luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
          Cras mattis consectetur purus sit amet fermentum.
        </p>
      </Alert>
    </div>
  )
}
