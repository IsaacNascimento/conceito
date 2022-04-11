import React, { useEffect, useState } from "react";
import { Button, Card, Carousel, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ApiFilmes from "../ApiFilmes";

export const FilmesNowPlaying = () => {
  const [filmes, setfilmes] = useState([]);

  useEffect(() => {
    ApiFilmes.get("movie/now_playing?language=pt-BR").then((result) => {
      console.log(result.data.results);
      setfilmes(result.data.results);
    });
  }, []);

  return (
    <body>
      <Container>
        <h1>Filmes em Cartaz</h1>

        <Row>
          {filmes.map((item) => (
            <Col md={4} className="mb-3">
              <Card>
                <Card.Img
                  variant="top"
                  src={"https://image.tmdb.org/t/p/w500" + item.backdrop_path}
                />
                <Card.Body>
                  <Card.Title>{item.title} </Card.Title>

                  <Link
                    style={{ marginTop: "15px" }}
                    className="btn btn-danger"
                    to={"/filmes/" + item.id}
                  >
                    Ver detalhes
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </body>
  );
};
