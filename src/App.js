import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import HomePage from './components/HomePage/HomePage';
import ContactPage from './components/ContactPage/ContactPage';
import AddContactPage from './components/AddContactPage/AddContactPage';
import rubrica from './data/rubrica.json';

  
function App() {
    const [contatti, setContatti] = useState(rubrica);

    const addContact = (newContact) => {
        newContact.id = contatti.length + 1;
        setContatti([...contatti, newContact]);
    };

    const deleteContact = (id) => {
        const updatedContacts = contatti.filter(contact => contact.id !== id);
        setContatti(updatedContacts);
    };

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout contatti={contatti} />}>
                    <Route index element={<HomePage />} />
                    <Route path="contacts/:id" element={<ContactPage contatti={contatti} deleteContact={deleteContact} />} />
                    <Route path="add-contact" element={<AddContactPage contatti={contatti} addContact={addContact} />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
