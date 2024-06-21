import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SingleContact from "../SingleContact/SingleContact";
import "./ContactPage.css";

function ContactPage() {
  const { letter } = useParams();
  const [contatti, setContatti] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedContact, setSelectedContact] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(`http://localhost:8080/api/contatti/getAllContatti`)
      .then((response) => response.json())
      .then((data) => {
        setContatti(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [letter]);

  const filteredContacts = contatti.filter((contatto) =>
    contatto.cognome.startsWith(letter)
  );

  const handleShowDetails = (contact) => {
    setSelectedContact(contact);
  };

  const handleCloseModal = () => {
    setSelectedContact(null);
  };

  if (loading) {
    return <h2 className="contact-h2">Caricamento in corso...</h2>;
  }

  if (error) {
    return <h2 className="contact-h2">Errore: {error}</h2>;
  }

  if (filteredContacts.length === 0) {
    return (
      <h2 className="contact-h2">
        Nessun contatto trovato per la lettera "{letter}"
      </h2>
    );
  }

  return (
    <div className="contact-page container">
      <h2 className="contact-h2">I miei contatti con "{letter}"</h2>
      <div className="row">
        {filteredContacts.map((contatto) => (
          <div key={contatto.id} className="col-sm-12 col-md-6 col-lg-4 mb-4">
            <div className="card-custom" style={{ width: "100%" }}>
              <img
                className="card-img-top"
                src={contatto.foto}
                alt={`${contatto.nome} ${contatto.cognome}`}
              />
              <div className="card-body">
                <h3 className="card-title">
                  {contatto.nome} {contatto.cognome}
                </h3>
                <button
                  className="btn btn-outline-primary"
                  onClick={() => handleShowDetails(contatto)}
                >
                  Dettagli
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedContact && (
        <SingleContact
          contatto={selectedContact}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}

export default ContactPage;
