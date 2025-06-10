import React, { JSX } from 'react';
import '../Main/MainStyle.css';

export function Contact(): JSX.Element {
    return (
        <>
            <section id="contact">
                <h2>Контакты</h2>
                <div className="contact-wrapper">
                    <div className="contact-info">
                        <h3>Свяжитесь со мной</h3>
                        <div className="contact-item">
                            <i>@</i>
                            <span>example@portfolio.com</span>
                        </div>
                        <div className="contact-item">
                            <i>#</i>
                            <span>+7 (999) 123-45-67</span>
                        </div>
                        <div className="contact-item">
                            <i>in</i>
                            <span>linkedin.com/in/portfolio</span>
                        </div>
                        <div className="contact-item">
                            <i>gh</i>
                            <span>github.com/portfolio</span>
                        </div>
                    </div>
                    <div className="contact-form">
                        <form id="contactForm">
                            <div className="form-group">
                                <label htmlFor="name">Имя</label>
                                <input type="text" id="name" required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Сообщение</label>
                                <textarea id="message" required></textarea>
                            </div>
                            <button type="submit" className="submit-btn">Отправить сообщение</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}