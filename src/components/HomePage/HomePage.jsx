import React from 'react';
import "./HomePage.css";

function HomePage() {
    return (
        <div className="home-page text-center">
            <h1>La mia Rubrica Telefonica</h1>
            <img className='rubrica' src={`${process.env.PUBLIC_URL}/assets/rubrica.jpg`} alt="Rubrica" />

        </div>
    );
}

export default HomePage;
