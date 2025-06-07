import React, { JSX } from 'react';
import logo from '../Assets/logo.svg';
import './style.css';

export function Hero(): JSX.Element {
    return (
        <div className="hero-container">
            <section id="home" className="hero-section">
                <div className="hero-content">
                    <h1 className="hero-heading">Привет, я Иван Иванов</h1>
                    <p className="hero-text">
                        Frontend разработчик с фокусом на создании чистых, функциональных и эстетичных пользовательских интерфейсов
                    </p>
                </div>
                <div className="hero-image">
                    <img src={logo} alt="Логотип" />
                </div>
            </section>
        </div>
    );
}