import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import HomePage from './components/HomePage/HomePage';
import ContactPage from './components/ContactPage/ContactPage';
import rubrica from './data/rubrica.json'; // Importa il JSON con i dati della rubrica

function App() {
    const [contatti, setContatti] = useState([]);

    useEffect(() => {
        // Simula il caricamento dei dati dal JSON (puoi sostituire con il tuo metodo di caricamento dati)
        setContatti(rubrica);
    }, []);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout contatti={contatti} />}>
                    <Route index element={<HomePage />} />
                    <Route path="contacts/:id" element={<ContactPage contatti={contatti} />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
