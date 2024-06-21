import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import HomePage from './components/HomePage/HomePage';
import ContactPage from './components/ContactPage/ContactPage';
import SingleContact from './components/SingleContact/SingleContact';
import AddContactPage from './components/AddContactPage/AddContactPage';

function App() {

    const addContact = (newContact) => {
        fetch('http://localhost:8080/api/contatti', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newContact),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('Contatto aggiunto:', data);
        })
        .catch(error => {
            console.error('Errore durante l\'aggiunta del contatto:', error);
        });
    };
    

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="contacts/:letter" element={<ContactPage />} />
                    <Route path="contacts/:letter/:id" element={<SingleContact />} />
                    <Route path="add-contact" element={<AddContactPage addContact={addContact} />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
