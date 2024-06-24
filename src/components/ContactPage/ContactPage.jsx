import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import SingleContact from '../SingleContact/SingleContact';
import "./ContactPage.css";

function ContactPage({ contatti, deleteContact }) {
    const { letter } = useParams();
    const navigate = useNavigate();
    const filteredContacts = contatti.filter(contatto => contatto.cognome.startsWith(letter));

    const [selectedContact, setSelectedContact] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [selectedContacts, setSelectedContacts] = useState([]);

    const handleShowDetails = (contact) => {
        setSelectedContact(contact);
    };

    const handleCloseModal = () => {
        setSelectedContact(null);
    };

    const handleEditToggle = () => {
        setIsEditing(!isEditing);
        setSelectedContacts([]);
    };

    const handleCheckboxChange = (contact) => {
        if (selectedContacts.includes(contact.id)) {
            setSelectedContacts(selectedContacts.filter(id => id !== contact.id));
        } else {
            setSelectedContacts([...selectedContacts, contact.id]);
        }
    };

    const handleEditSelected = () => {
        navigate('/edit-contacts', { state: { contactsToEdit: filteredContacts.filter(contatto => selectedContacts.includes(contatto.id)) } });
    };

    if (filteredContacts.length === 0) {
        return <h2 className='contact-h2'>Nessun contatto trovato per la lettera "{letter}"</h2>;
    }

    return (
        <div className="contact-page container">
            <h2 className="contact-h2">I miei contatti con "{letter}"</h2>
            <button className="btn btn-outline-primary mb-4 me-4" onClick={handleEditToggle}>
                {isEditing ? 'Annulla Modifica' : 'Modifica'}
            </button>
            {isEditing && selectedContacts.length > 0 && (
                <button className="btn btn-outline-primary mb-4" onClick={handleEditSelected}>
                    Modifica Selezionati
                </button>
            )}
            <div className="row">
                {filteredContacts.map(contatto => (
                    <div key={contatto.id} className="col-sm-12 col-md-6 col-lg-4 mb-4">
                        <div className="card-custom" style={{ width: '100%' }}>
                            {isEditing && (
                                <input 
                                    type="checkbox" 
                                    checked={selectedContacts.includes(contatto.id)} 
                                    onChange={() => handleCheckboxChange(contatto)} 
                                />
                            )}
                            <img className="card-img-top" src={contatto.foto} alt={`${contatto.nome} ${contatto.cognome}`} />
                            <div className="card-body">
                                <h3 className="card-title">{contatto.nome} {contatto.cognome}</h3>
                                <button className="btn btn-outline-primary mt-4" onClick={() => handleShowDetails(contatto)}>Dettagli</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {selectedContact && (
                <SingleContact
                    contatto={selectedContact}
                    onClose={handleCloseModal}
                    deleteContact={deleteContact}
                />
            )}
        </div>
    );
}

export default ContactPage;
