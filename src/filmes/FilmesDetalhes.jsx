import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import ApiFilmes from '../ApiFilmes';

export const FilmesDetalhes = () => {

    const params = useParams()

    const [filme, setFilme] = useState({})

    useEffect(() => {
        ApiFilmes.get('movie/' + params.id + '?language=pt-BR').then(resultado => {
            setFilme(resultado.data)
        })
    }, [])

    return (
        <div>
         <Container>
          <h1>{filme.title}</h1>

            <Row>
                <Col md={4}>
                    <Card>
                        <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + filme.poster_path} />
                    </Card>
                </Col>
                <Col md={8}>
                    <p><strong>Título Original: </strong>{filme.original_title}</p>
                    <p><strong>Popularidade: </strong>{filme.popularity}</p>
                    <p><strong>Data de Lançamento: </strong>{filme.release_date}</p>
                    <p><strong>Orçamento: </strong>{filme.budget}</p>
                    <p><strong>Sinopse: </strong>{filme.overview}</p>
                </Col>
            </Row>

         </Container>   
        </div>
    )
}

