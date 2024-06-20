import React from 'react';
import { Modal } from 'react-bootstrap';
import "./SingleContact.css";

function SingleContact({ contatto, onClose, deleteContact }) {
    const handleDelete = () => {
        deleteContact(contatto.id);
        onClose();
    };

    return (
        <Modal show={true} onHide={onClose} className='modal'>
            <Modal.Header className="modal-header">
                <Modal.Title>{contatto.nome} {contatto.cognome}</Modal.Title>
                <button type="button" className="btn close-button" onClick={onClose} aria-label="Close">X
                </button>
            </Modal.Header>
            <Modal.Body className='modal-body'>
                <img src={contatto.foto} alt={`${contatto.nome} ${contatto.cognome}`} style={{ width: '18rem' }} />
                <p><strong>Telefono:</strong> {contatto.telefono}</p>
                <p><strong>Indirizzo:</strong> {contatto.indirizzo}</p>
                <p><strong>Città:</strong> {contatto.citta}</p>
                <p><strong>Provincia:</strong> {contatto.provincia}</p>
                <p><strong>Email:</strong> {contatto.email}</p>
            </Modal.Body>
            <Modal.Footer className='modal-footer'>
            <button className='btn btn-outline-danger me-2' onClick={handleDelete}>Elimina</button>
            <button className="btn btn-outline-primary" type="submit">Chiama</button>
            </Modal.Footer>
        </Modal>
    );
}

export default SingleContact;
