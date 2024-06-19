import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./MyForm.css";

function MyForm({ formFields, onSubmit }) {
    const [formData, setFormData] = useState(
        formFields.reduce((acc, field) => {
            acc[field.name] = '';
            return acc;
        }, {})
    );

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        alert('Contatto aggiunto con successo!');
        navigate('/');
    };

    return (
        <form onSubmit={handleSubmit}>
            {formFields.map((field) => (
                <div key={field.name} className="form-group">
                    <label className='label' htmlFor={field.name}>{field.label}</label>
                    <input
                        type={field.type}
                        id={field.name}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        required={field.required}
                        className="form-control"
                    />
                </div>
            ))}
            <button className="btn btn-outline-primary mt-3" type="submit">Aggiungi</button>
        </form>
    );
}

export default MyForm;
