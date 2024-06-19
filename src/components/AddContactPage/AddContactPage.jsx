import React from "react";
import MyForm from "../MyForm/MyForm";
import "./AddContactPage.css";

function AddContactPage({ contatti, addContact }) {
  // Ottieni gli attributi dal primo contatto per creare i campi del form, escludendo l'id
  const formFields = Object.keys(contatti[0])
    .filter((key) => key !== "id")
    .map((key) => {
      // Personalizza il tipo di input in base al nome del campo, se necessario
      let type = "text";
      if (key === "email") type = "email";
      if (key === "telefono") type = "tel";

      return {
        name: key,
        label: key.charAt(0).toUpperCase() + key.slice(1),
        type,
        required: true,
      };
    });

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
