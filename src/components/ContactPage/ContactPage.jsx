import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, Row, Col } from 'react-bootstrap';
import "./ContactPage.css";

function ContactPage({ contatti }) {
    const { id } = useParams();
    const contatto = contatti.find(c => c.id === parseInt(id));

    if (!contatto) {
        return <div>Contatto non trovato</div>;
    }

    return (
        <div className="contact-page">
            <h2 className="contact-h2 mb-4">Dettagli Contatto</h2>
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
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </div>
    );
}

export default ContactPage;
