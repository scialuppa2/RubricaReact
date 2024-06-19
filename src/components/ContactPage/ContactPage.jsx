import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, Row, Col } from 'react-bootstrap';
import "./ContactPage.css";

function ContactPage({ contatti, deleteContact }) {
    const { id } = useParams();
    const navigate = useNavigate();
    const contatto = contatti.find(c => c.id === parseInt(id));

    if (!contatto) {
        return <div>Contatto non trovato</div>;
    }

    const handleDelete = () => {
        deleteContact(contatto.id);
        navigate('/');
    };

    return (
        <div className="contact-page">
            <h2 className="contact-h2 mb-4">Dettagli Contatto</h2>
            <div className='container'>
            <Card className="card-custom mb-4">
                <Row noGutters>
                    <Col md={4}>
                        <Card.Img variant="top" src={contatto.foto} alt={`${contatto.nome} ${contatto.cognome}`} />
                    </Col>
                    <Col md={6}>
                        <Card.Body>
                            <Card.Title>
                                {contatto.nome} {contatto.cognome}
                            </Card.Title>
                            <Card.Text>
                                <p><strong>Indirizzo:</strong> {contatto.indirizzo}</p>
                                <p><strong>Città:</strong> {contatto.citta}</p>
                                <p><strong>Provincia:</strong> {contatto.provincia}</p>
                                <p><strong>Telefono:</strong> {contatto.telefono}</p>
                                <p><strong>Email:</strong> {contatto.email}</p>
                            </Card.Text>
                            <button className='btn btn-outline-danger me-2' onClick={handleDelete}>Elimina</button>
                            <button className="btn btn-outline-primary" type="submit">Chiama</button>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
            </div>
        </div>
    );
}

export default ContactPage;
