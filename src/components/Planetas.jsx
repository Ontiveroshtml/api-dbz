import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import Spinner from 'react-bootstrap/Spinner';

function Planetas() {
    const [planetas, setPlanetas] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://dragonball-api.com/api/planets')
            .then((response) => response.json())
            .then((planetas) => {
                if (Array.isArray(planetas.items)) {
                    setPlanetas(planetas.items)
                    setLoading(false)
                } else {
                    throw new Error('error en la estructura')
                }
            })
    }, [])

    return (
        <div className="d-flex flex-column align-items-center">
            {loading ? (
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            ) : (
                <div className="d-flex flex-wrap gap-5 m-5">
                    {planetas.map((planeta) => (

                        <CardGroup key={planeta.id}>
                            <Card style={{ width: '20rem', borderRadius: '20px' }}>
                                <Card.Img
                                    variant="top"
                                    src={planeta.image}
                                    style={{ maxWidth: '100%', height: '320px', objectFit: 'fill', margin: 'auto', borderTopLeftRadius: '20px', borderTopRightRadius: '20px' }} // Tamaño fijo de la imagen
                                />
                                <Card.Body>
                                    <Card.Title>{planeta.name}</Card.Title>
                                    <ListGroup className="list-group-flush">
                                        <ListGroup.Item></ListGroup.Item>
                                        <ListGroup.Item><strong>Descripcion:</strong> {planeta.description} </ListGroup.Item>
                                    </ListGroup>
                                </Card.Body>
                            </Card>
                        </CardGroup>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Planetas
