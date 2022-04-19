import React, { useEffect, useState } from "react";
import { Button, Card, Carousel, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ApiFilmes  from "../../services/ApiFilmes";

export const FilmesPopulares = () => {
  const [filmes, setfilmes] = useState([]);

  useEffect(() => {
    ApiFilmes.get("movie/popular?language=pt-BR").then((result) => {
      console.log(result.data.results);
      setfilmes(result.data.results);

      
    });
  }, []);
  

  return (
    <body>
      <Container>
        <h1>filmes Populares</h1>

        {filmes.id && <h1>LOADING</h1>}
       
        {!filmes.id &&
         <>
        

        <Row>
          {filmes.map((item) => (
            <Col key={item.id} md={3} className="mb-3">
             
              <Card style={{ heigh: "18rem", width: "18rem"}}>
                <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500" + item.backdrop_path}/>
                <Card.Body>
                  <Card.Title>{item.title} </Card.Title>
                 
                  <Card.Text>
                  ({item.original_title})
                  </Card.Text>
                  <Card.Text>
                    Popularidade
                  ({item.popularity})
                  </Card.Text>

                  <Link className="btn btn-dark" to={'/filmes/' + item.id}>Ver detalhes</Link>

                  
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
         </>
          }
      </Container>
    </body>
  );
};
