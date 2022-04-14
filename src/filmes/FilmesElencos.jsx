import React, { useEffect, useState } from 'react'

import {useParams} from "react-router-dom";
import ApiFilmes from '../ApiFilmes';

import {Container, Row, Col, Card} from 'react-bootstrap';

export const FilmesElencos = () => {
    const params = useParams();

    const [elenco, setelenco] = useState([]);

    useEffect(() => {
        ApiFilmes.get("person/" + params.id + "?language=pt-BR").then(
          (resultado) => {
            console.log(resultado.data);
            setelenco(resultado.data);
          }
        );
      }, []);

  return (
    <div>
      <Container>
        <h1>{elenco.name}</h1>
        <Row>
                <Col md={4}>
                  <Card>
                    <Card.Img
                      variant="top"
                      src={
                        "https://image.tmdb.org/t/p/w500" + elenco.profile_path
                      }
                    />
                  </Card>
                </Col>
                <Col md={8}>
                <p>
                  <strong>Data de Nascimento: </strong>
                  {elenco.birthday}
                </p>
                <p>
                  <strong>Área de atuação: </strong>
                  {elenco.known_for_department}
                </p>
                </Col>
            </Row> 
      </Container>
    </div>
  )
}
