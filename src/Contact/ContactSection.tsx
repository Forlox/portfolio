import React from 'react';

// Секция контактов
export function Contact() {
    return (
        <section id="contact" className="section">
            <h2 className="section-title">Контакты</h2>
            <div className="contact-container">
                <div className="contact-info">
                    <div className="contact-item">
                        <div className="contact-icon">
                            <i className="fas fa-envelope text-blue-500 text-xl"></i>
                        </div>
                        <div className="contact-text">
                            <h3>Email</h3>
                            <a href="mailto:contact@example.com">contact@example.com</a>
                        </div>
                    </div>
                    <div className="contact-item">
                        <div className="contact-icon">
                            <i className="fas fa-phone-alt text-blue-500 text-xl"></i>
                        </div>
                        <div className="contact-text">
                            <h3>Телефон</h3>
                            <a href="tel:+79991234567">+7 (999) 123-45-67</a>
                        </div>
                    </div>
                    <div className="contact-item">
                        <div className="contact-icon">
                            <i className="fas fa-map-marker-alt text-blue-500 text-xl"></i>
                        </div>
                        <div className="contact-text">
                            <h3>Локация</h3>
                            <p>Пермь, Россия</p>
                        </div>
                    </div>
                    <div className="contact-item">
                        <div className="contact-icon">
                            <i className="fas fa-share-alt text-blue-500 text-xl"></i>
                        </div>
                        <div className="contact-text">
                            <h3>Ссылки</h3>
                            <div className="social-links">
                                <a href="#" className="social-link">
                                    <i className="fab fa-github"></i>
                                </a>
                                <a href="#" className="social-link">
                                    <i className="fab fa-vk"></i>
                                </a>
                                <a href="#" className="social-link">
                                    <i className="fab fa-telegram"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <a href="#" className="btn resume-btn">
                        <i className="fas fa-download"></i> Скачать резюме
                    </a>
                </div>
                <div className="contact-form">
                    <div className="form-group">
                        <label className="form-label" htmlFor="name">Имя</label>
                        <input type="text" id="name" className="form-input" placeholder="Ваше имя" />
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="email">Email</label>
                        <input type="email" id="email" className="form-input" placeholder="Ваш email" />
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="message">Сообщение</label>
                        <textarea id="message" className="form-input" placeholder="Ваше сообщение"></textarea>
                    </div>
                    <button className="btn">
                        <i className="fas fa-paper-plane"></i> Отправить сообщение
                    </button>
                </div>
            </div>
        </section>
    );
}