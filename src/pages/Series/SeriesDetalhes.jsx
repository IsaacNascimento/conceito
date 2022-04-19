import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import ApiFilmes from "../../services/ApiFilmes";

export const SeriesDetalhes = () => {

  const params = useParams();
  const [Serie, setSerie] = useState({});
  const [Elenco, setElenco] = useState([]);
  const [Temporadas, setTemporadas] = useState([]);



  useEffect(() => {
    ApiFilmes.get("/tv/" + params.id + "?language=pt-BR").then((resultado) => {
      console.log(resultado.data);
      setSerie(resultado.data);
    });
    ApiFilmes.get("/tv/" + params.id + "?language=pt-BR").then((resultado) => {
      console.log(resultado.data.seasons);
      setTemporadas(resultado.data.seasons);
    });
    ApiFilmes.get("/tv/" + params.id + "/credits?language=pt-BR").then(
      (resultado) => {
        console.log(resultado.data);
        setElenco(resultado.data.cast);
      }
    );
  }, []);

  return (
    <div>
      <Container>
        <h1>{Serie.name}</h1>

        <Row>
          <Col md={4}>
            <Card>
              <Card.Img
                variant="top"
                src={"https://image.tmdb.org/t/p/w500/" + Serie.backdrop_path}
              />
            </Card>
          </Col>
          <Col md={8}>
            <p>
              <strong>Título Original: </strong>
              {Serie.original_name}
            </p>
            <p>
              <strong>Popularidade: </strong>
              {Serie.popularity}
            </p>

            {/* <p>
                <strong>Gêneros:</strong>
                {Serie.genres.map((item) => (
                    <span> {item.name} </span>
                    ))}
              </p>  */}

            <p>
              <strong>Sinopse: </strong>
              {Serie.overview}
            </p>

            <Link className="btn btn-dark" to={-1}>
              Voltar
            </Link>
          </Col>
        </Row>
        <h1 className="mb-6">
          <strong>Temporadas</strong>
        </h1>
        <Row>
          {Temporadas.map((item) => (
            <Col md={2} className="mb-2">
              <Card>
                <Link to={"/filmes/elenco/" + item.id}>
                  <Card.Img
                    variant="top"
                    src={"https://image.tmdb.org/t/p/w500" + item.poster_path}
                  />
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
        <h1 className="mb-6">
          <strong>Elenco</strong>
        </h1>
        <Row>
          {Elenco.map((item) => (
            <Col md={2} className="mb-2">
              <Card>
                <Link to={"/filmes/elenco/" + item.id}>
                  <Card.Img
                    variant="top"
                    src={"https://image.tmdb.org/t/p/w500" + item.profile_path}
                  />
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};
