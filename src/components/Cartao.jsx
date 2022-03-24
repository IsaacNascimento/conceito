import React from "react";
import { Card, Col, Container, Nav, Navbar, Row } from "react-bootstrap";

const Cartao = (props) => {

  console.log(props.tittle)
  return (
    <div >
      <Container>
     <Row>
       <Col>

      <Card style={{ width: '18rem', height: '29rem'}} variant="success" border="danger" >
        <Card.Header variant="success">Header</Card.Header>
         <Card.Img style={{ width: '15rem', height: '15rem'}} variant="top" src={props.image}/>
        <Card.Body >
          <Card.Title>{props.tittle}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <br></br>
       </Col>

       <Col>

      <Card style={{ width: '18rem'}} border="danger" className="mb-3">
        <Card.Header>Heade</Card.Header>
        <Card.Img style={{ width: '17rem', height: '18rem'}} variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrbeyHJN3Gg_pFNtm9Jjf7xukgtdLuIT5wEw&usqp=CAU/100px180"/>
        <Card.Body>
          <Card.Title>É o trikas</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
       </Col>
      
      <br></br>
    
     <Col>

      <Card style={{ width: '18rem'}} border="danger" >
        <Card.Header>Header</Card.Header>
        <Card.Img style={{ width: '17rem', height: '18rem'}} variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrbeyHJN3Gg_pFNtm9Jjf7xukgtdLuIT5wEw&usqp=CAU/100px180" />
        <Card.Body>
          <Card.Title>É o trikas</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
     </Col>
     </Row>
      </Container>
    </div>
  );
};

export default Cartao;
