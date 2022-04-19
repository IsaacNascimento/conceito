import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import ApiFilmes from '../../services/ApiFilmes';

export const SeriesEstrelandoHoje = () => { 
  
  const [series, setseries] = useState([]);

  useEffect(() => {
    ApiFilmes.get("/tv/airing_today?language=pt-BR").then((result) => {
      console.log(result.data.results);
      setseries(result.data.results);

      
    });
  }, []);

    return (
      <div>
        <Container>
         <h1>
             Series Estrelando Hoje
         </h1>
         <Row>
          {series.map((item) => (
            <Col key={item.id} md={3} className="mb-3">
             
              <Card style={{ heigh: "18rem", width: "18rem"}}>
                <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500" + item.backdrop_path}/>
                <Card.Body>
                  <Card.Title>{item.name} </Card.Title>
                 
                  <Card.Text>
                   Data de estreamento: {item.first_air_date}
                  </Card.Text>
                  <Card.Text>
                   País:
                  ({item.origin_country})
                  </Card.Text>
                  <Card.Text>
                    Popularidade
                  ({item.popularity})
                  </Card.Text>

                  <Link className="btn btn-dark" to={'/series/' + item.id}>Ver detalhes</Link>

                  
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        </Container>  
    </div>
  )
}
