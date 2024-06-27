import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import "./SingleContact.css";

function SingleContact({ contatto, onClose, deleteContact }) {
    const [confirmDelete, setConfirmDelete] = useState(false);
    const navigate = useNavigate();

    const handleDelete = () => {
        if (confirmDelete) {
            deleteContact(contatto.id)
                .then(() => {
                    onClose();
                    navigate('/');
                })
                .catch(error => {
                    console.error(`Errore durante l'eliminazione del contatto con id ${contatto.id}:`, error);
                });
        } else {
            setConfirmDelete(true);
        }
    };

    return (
        <Modal show={true} onHide={onClose} className='modal'>
            <Modal.Header className="modal-header">
                <Modal.Title>{contatto.nome} {contatto.cognome}</Modal.Title>
                <button type="button" className="btn close-button" onClick={onClose} aria-label="Close">X</button>
            </Modal.Header>
            <Modal.Body className='modal-body'>
                <img src={`${process.env.PUBLIC_URL}${contatto.foto}`} alt={`${contatto.nome} ${contatto.cognome}`} style={{ width: '18rem' }} />
                <p><strong>Telefono:</strong> {contatto.telefono}</p>
                <p><strong>Indirizzo:</strong> {contatto.indirizzo}</p>
                <p><strong>Città:</strong> {contatto.citta}</p>
                <p><strong>Provincia:</strong> {contatto.provincia}</p>
                <p><strong>Email:</strong> {contatto.email}</p>
            </Modal.Body>
            <Modal.Footer className='modal-footer'>
                {!confirmDelete && (
                    <button className='btn btn-outline-danger me-2' onClick={() => setConfirmDelete(true)}>Elimina</button>
                )}
                {confirmDelete && (
                    <>
                        <p>Sei sicuro di voler eliminare questo contatto?</p>
                        <button className='btn btn-outline-danger me-2' onClick={handleDelete}>Conferma Eliminazione</button>
                    </>
                )}
                <button className="btn btn-outline-primary" onClick={onClose}>Chiudi</button>
            </Modal.Footer>
        </Modal>
    );
}

export default SingleContact;
