import React from 'react';
import './ContactSection.css';
import ContactForm from './ContactForm';

const ContactSection = ({ id }: { id: string }) => {
    // также через мап делаем
    const contactItems = [
        { icon: '@', value: 'example@portfolio.com' },
        { icon: '#', value: '+7 (999) 123-45-67' },
        { icon: '??', value: 'что-то тоже очень нужное' },
        { icon: 'gh', value: 'github.com/portfolio' }
    ];

    return (
        <section id={id} className="contact-section">
            <h2>Контакты</h2>
            <div className="contact-wrapper">
                <div className="contact-info">
                    <h3>Свяжитесь со мной</h3>
                    {contactItems.map((item, index) => (
                        <div key={index} className="contact-item">
                            <i>{item.icon}</i>
                            <span>{item.value}</span>
                        </div>
                    ))}
                </div>
                <ContactForm />
            </div>
        </section>
    );
};

export default ContactSection;