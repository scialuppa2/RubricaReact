import React from "react";
import MyForm from "../MyForm/MyForm";
import "./AddContactPage.css";

function AddContactPage({ addContact }) {
  // Definisci i campi del form con i relativi attributi
  const formFields = [
    {
      name: "nome",
      label: "Nome",
      type: "text",
      required: true,
    },
    {
      name: "cognome",
      label: "Cognome",
      type: "text",
      required: true,
    },
    {
      name: "indirizzo",
      label: "Indirizzo",
      type: "text",
      required: true,
    },
    {
      name: "citta",
      label: "Città",
      type: "text",
      required: true,
    },
    {
      name: "provincia",
      label: "Provincia",
      type: "text",
      required: true,
    },
    {
      name: "telefono",
      label: "Telefono",
      type: "tel",
      required: true,
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      required: true,
    },
    {
      name: "foto",
      label: "URL Foto",
      type: "text",
      required: true,
    },
  ];

  const handleSubmit = (data) => {
    addContact(data);
  };

  return (
    <div className="form-container">
      <h2 className="mb-4 text-center">Aggiungi Contatto</h2>
      <div>
        <MyForm formFields={formFields} onSubmit={handleSubmit} />
      </div>
    </div>
  );
}

export default AddContactPage;
