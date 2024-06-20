import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './Sidebar.css';

function Sidebar() {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    return (
        <div className="sidebar container">
            <h2 className="sidebar-h2 mt-4 mb-3">Rubrica Telefonica</h2>
            <div className="alphabet-list">
                {alphabet.map(letter => (
                    <div key={letter} className="alphabet-item">
                        <Link to={`/contacts/${letter}`} className="alphabet-link">
                            {letter}
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
