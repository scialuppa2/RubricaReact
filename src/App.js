import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import HomePage from './components/HomePage/HomePage';
import ContactPage from './components/ContactPage/ContactPage';
import SingleContact from './components/SingleContact/SingleContact';
import AddContactPage from './components/AddContactPage/AddContactPage';
import UpdateContact from './components/UpdateContact/UpdateContact';

function App() {
    const [contatti, setContatti] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/contatti/getAllContatti')
            .then(response => response.json())
            .then(data => setContatti(data))
            .catch(error => console.error('Errore durante il recupero dei contatti:', error));
    }, []);

    const addContact = (newContact) => {
        fetch('http://localhost:8080/api/contatti', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newContact),
        })
        .then(response => response.json())
        .then(data => {
            setContatti([...contatti, data]);
        })
        .catch(error => {
            console.error('Errore durante l\'aggiunta del contatto:', error);
        });
    };

    const deleteContact = (id) => {
        fetch(`http://localhost:8080/api/contatti/${id}`, {
            method: 'DELETE',
        })
        .then(response => {
            if (response.ok) {
                setContatti(contatti.filter(contatto => contatto.id !== id));
            } else {
                console.error(`Errore durante l'eliminazione del contatto con id ${id}`);
            }
        })
        .catch(error => {
            console.error('Errore durante l\'eliminazione del contatto:', error);
        });
    };

    const updateContact = (updatedContact) => {
        fetch(`http://localhost:8080/api/contatti/${updatedContact.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedContact),
        })
        .then(response => response.json())
        .then(data => {
            setContatti(contatti.map(contatto => contatto.id === data.id ? data : contatto));
        })
        .catch(error => {
            console.error('Errore durante l\'aggiornamento del contatto:', error);
        });
    };

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout contatti={contatti} />}>
                    <Route index element={<HomePage />} />
                    <Route path="contacts/:letter" element={<ContactPage contatti={contatti} deleteContact={deleteContact} updateContact={updateContact} />} />
                    <Route path="contacts/:letter/:id" element={<SingleContact deleteContact={deleteContact} />} />
                    <Route path="add-contact" element={<AddContactPage contatti={contatti} addContact={addContact} />} />
                    <Route path="edit-contacts" element={<UpdateContact updateContact={updateContact} />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
