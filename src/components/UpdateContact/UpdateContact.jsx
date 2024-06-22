import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import "./UpdateContact.css";

function UpdateContact({ updateContact }) {
    const location = useLocation();
    const navigate = useNavigate();
    const { contactsToEdit } = location.state;
    const [updatedContacts, setUpdatedContacts] = useState(contactsToEdit);
    const [showAlert, setShowAlert] = useState(false);

    const handleChange = (index, field, value) => {
        const newContacts = [...updatedContacts];
        newContacts[index] = { ...newContacts[index], [field]: value };
        setUpdatedContacts(newContacts);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        Promise.all(updatedContacts.map(contact => updateContact(contact)))
            .then(() => {
                setShowAlert(true);
                setTimeout(() => {
                    setShowAlert(false);
                    navigate('/');
                }, 3000); // Mostra l'alert per 3 secondi e poi reindirizza alla home
            });
    };

    return (
        <div className="update-contact container">
            <h2 className='contact-h2'>Modifica Contatti</h2>
            {showAlert && (
                <div className="alert alert-success" role="alert">
                    Contatti aggiornati con successo!
                </div>
            )}
            <form onSubmit={handleSubmit}>
                <div className="row">
                    {updatedContacts.map((contatto, index) => (
                        <div key={contatto.id} className="col-md-4 mb-3">
                            <div className="card p-3">
                                <div className="form-group">
                                    <label>Nome</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        value={contatto.nome} 
                                        onChange={(e) => handleChange(index, 'nome', e.target.value)} 
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Cognome</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        value={contatto.cognome} 
                                        onChange={(e) => handleChange(index, 'cognome', e.target.value)} 
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Indirizzo</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        value={contatto.indirizzo} 
                                        onChange={(e) => handleChange(index, 'indirizzo', e.target.value)} 
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Città</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        value={contatto.citta} 
                                        onChange={(e) => handleChange(index, 'citta', e.target.value)} 
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Provincia</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        value={contatto.provincia} 
                                        onChange={(e) => handleChange(index, 'provincia', e.target.value)} 
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Telefono</label>
                                    <input 
                                        type="tel" 
                                        className="form-control" 
                                        value={contatto.telefono} 
                                        onChange={(e) => handleChange(index, 'telefono', e.target.value)} 
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input 
                                        type="email" 
                                        className="form-control" 
                                        value={contatto.email} 
                                        onChange={(e) => handleChange(index, 'email', e.target.value)} 
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="btn btn-outline-primary mt-3 me-3" type="submit">Salva Modifiche</button>
                <button className="btn btn-outline-danger mt-3" type="button" onClick={() => navigate('/')}>Annulla</button>
            </form>
        </div>
    );
}

export default UpdateContact;
