import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import Spinner from 'react-bootstrap/Spinner';
import 'bootstrap/dist/css/bootstrap.min.css'; 

function Personajes() {
    const [personajes, setPersonajes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://dragonball-api.com/api/characters")
            .then((response) => response.json())
            .then((data) => {
                if (Array.isArray(data.items)) {
                    setPersonajes(data.items);
                    setLoading(false);
                } else {
                    throw new Error('Hubo un error al conseguir los personajes');
                }
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setLoading(false); 
            });
    }, []);

    return (
        <div className="d-flex flex-column align-items-center">
            {loading ? (
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            ) : (
                <div className="d-flex flex-wrap gap-5 m-5" >
                    {personajes.map((personaje) => (
                        <CardGroup key={personaje.id} > 
                            <Card style={{ width: '20rem' }} className="mx-auto"> 
                                <Card.Img
                                    variant="top"
                                    src={personaje.image}
                                    style={{ maxWidth: '70%', height: '50vh', objectFit: 'fill', margin: 'auto' }}
                                />
                                <Card.Body>
                                    <Card.Title>{personaje.name}</Card.Title>
                                    <ListGroup className="list-group-flush">
                                        <ListGroup.Item><strong>Raza:</strong> {personaje.race} </ListGroup.Item>
                                        <ListGroup.Item><strong>Ki base:</strong> {personaje.ki} </ListGroup.Item>
                                        <ListGroup.Item><strong>Ki máximo:</strong> {personaje.maxKi} </ListGroup.Item>
                                    </ListGroup>
                                </Card.Body>
                            </Card>
                        </CardGroup>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Personajes;
