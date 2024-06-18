import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';
import './Sidebar.css';

function Sidebar({ contatti }) {
    return (
        <div className="sidebar">
            <h2 className="sidebar-h2 mt-4 mb-3">Rubrica Telefonica</h2>
            <ListGroup as="ul" className="sidebar-list">
                {contatti.map(contatto => (
                    <ListGroup.Item as="li" key={contatto.id} className="sidebar-item">
                        <Link to={`/contacts/${contatto.id}`} className="sidebar-link">
                            <strong>{contatto.nome} {contatto.cognome}</strong>
                        </Link>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    );
}

export default Sidebar;
