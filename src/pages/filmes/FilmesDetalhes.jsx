import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ApiFilmes from "../../services/ApiFilmes";

import { Link, useNavigate } from "react-router-dom";

export const FilmesDetalhes = () => {
  const params = useParams();

  const [filme, setFilme] = useState({});
  const [elenco, setelenco] = useState([]);

  useEffect(() => {
    ApiFilmes.get("movie/" + params.id + "?language=pt-BR").then(
      (resultado) => {
        setFilme(resultado.data);
      }
    );
  }, []);

  useEffect(() => {
    ApiFilmes.get("movie/" + params.id + "/credits?language=pt-BR").then(
      (resultado) => {
        console.log(resultado.data.cast);
        setelenco(resultado.data.cast);
      }
    );
  }, []);

  return (
    <div>
      {!filme.id && <h1>Carregando</h1>}

      {filme.id && (
        <>
          <Container>
            <h1>{filme.title}</h1>

            <Row>
              <Col md={4}>
                <Card>
                  <Card.Img
                    variant="top"
                    src={"https://image.tmdb.org/t/p/w500/" + filme.poster_path}
                  />
                </Card>
              </Col>
              <Col md={8}>
                <p>
                  <strong>Título Original: </strong>
                  {filme.original_title}
                </p>
                <p>
                  <strong>Popularidade: </strong>
                  {filme.popularity}
                </p>
                <p>
                  <strong>Data de Lançamento: </strong>
                  {filme.release_date}
                </p>
                <p>
                  <strong>Orçamento: </strong>
                  {filme.budget}
                </p>

                <p>
                  <strong>Gêneros:</strong>
                  {filme.genres.map((item) => (
                    <span> {item.name} </span>
                  ))}
                </p>

                <p>
                  <strong>Sinopse: </strong>
                  {filme.overview}
                </p>
                <Link className="btn btn-dark" to={-1}>
                  Voltar
                </Link>
              </Col>
            </Row>
            <h1 className="mb-6">
              <strong>Elenco</strong>
            </h1>

            <Row>
              {elenco.map((item) => (
                <Col md={2} className="mb-2">
                  <Card>
                  <Link to={'/filmes/elenco/' + item.id}>
                    <Card.Img
                      variant="top"
                      src={
                        "https://image.tmdb.org/t/p/w500" + item.profile_path
                      }
                    />
                    </Link>
                    {/* <Card.Body>
                      <Card.Title>{item.name} </Card.Title>
                      <Card.Text>{item.character}</Card.Text>
                      <Link className="btn btn-dark" to={'/filmes/elenco/' + item.id}>Ver detalhes</Link>
                    </Card.Body> */}
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </>
      )}
    </div>
  );
};
