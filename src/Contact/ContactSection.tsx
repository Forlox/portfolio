import React from 'react';
import './ContactSection.css';
import { ContactForm } from './ContactForm';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css";

export function ContactSection() {
    const contactItems = [
        { icon: '@', value: 'example@portfolio.com' },
        { icon: '#', value: '+7 (999) 123-45-67' },
        { icon: '??', value: 'что-то тоже очень нужное' },
        { icon: 'gh', value: 'github.com/portfolio' }
    ];

    return (
        <ScrollAnimation animateIn="zoomIn" duration={0.5}>
        <section className="contact-section">
            <ScrollAnimation animateIn="fadeIn" duration={1} delay={100} animateOnce={true}>
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
            </ScrollAnimation>
        </section>
        </ScrollAnimation>
    );
}