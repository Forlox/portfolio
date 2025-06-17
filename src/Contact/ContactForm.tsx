import React, { useState } from 'react';
import './ContactForm.css';

export function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        alert('Сообщение успешно отправлено!');
        setFormData({ name: '', email: '', message: '' });
    };

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="contact-form">
            <form onSubmit={handleSubmit} className="form">
                <div className="form-group">
                    <label htmlFor="name" className="label">Имя</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="input"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email" className="label">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="input"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message" className="label">Сообщение</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="textarea"
                    />
                </div>
                <button type="submit" className="submit-btn">Отправить сообщение</button>
            </form>
        </div>
    );
}