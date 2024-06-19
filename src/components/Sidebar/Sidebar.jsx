import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './Sidebar.css';
function Sidebar({ contatti }) {
    return (
        <div className="sidebar container">
            <h2 className="sidebar-h2 mt-4 mb-3">Rubrica Telefonica</h2>
            <div className="sidebar-content">
                {contatti.map(contatto => (
                    <div key={contatto.id} className="sidebar-item">
                        <Link to={`/contacts/${contatto.id}`} className="sidebar-link">
                            <strong>{contatto.nome} {contatto.cognome}</strong>
                        </Link>
                    </div>
                ))}
            </div>
            <div className="mt-4 text-center">
                <Link to="/add-contact">
                    <Button variant="outline-danger" className="w-10">+</Button>
                </Link>
            </div>
        </div>
    );
}

export default Sidebar;
