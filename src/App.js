import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import HomePage from './components/HomePage/HomePage';
import ContactPage from './components/ContactPage/ContactPage';
import SingleContact from './components/SingleContact/SingleContact';
import AddContactPage from './components/AddContactPage/AddContactPage';
import rubrica from './data/rubrica.json';

function App() {
    const [contatti, setContatti] = useState(rubrica);

    const addContact = (newContact) => {
        newContact.id = contatti.length + 1;
        setContatti([...contatti, newContact]);
    };

    const deleteContact = (id) => {
        setContatti(contatti.filter(contatto => contatto.id !== id));
    };

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout contatti={contatti} />}>
                    <Route index element={<HomePage />} />
                    <Route path="contacts/:letter" element={<ContactPage contatti={contatti} deleteContact={deleteContact} />} />
                    <Route path="contacts/:letter/:id" element={<SingleContact />} />
                    <Route path="add-contact" element={<AddContactPage contatti={contatti} addContact={addContact} />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
