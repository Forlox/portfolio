import React, { JSX } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css";
import logo from '../Assets/logo.svg';
import './style.css';

export function Hero(): JSX.Element {
    return (
        <ScrollAnimation animateIn="fadeIn" delay={1 * 100}>
            <div className="hero-container">
                <section id="home" className="hero-section">
                    <div className="hero-content">
                        <ScrollAnimation animateIn="fadeInUp" delay={2 * 100}>
                            <h1 className="hero-heading">Привет, я Иван Иванов</h1>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInUp" delay={3 * 100}>
                            <p className="hero-text">
                                Frontend разработчик с фокусом на создании чистых, функциональных и эстетичных пользовательских интерфейсов
                            </p>
                        </ScrollAnimation>
                    </div>
                    <div className="hero-image">
                        <img src={logo} alt="Логотип" />
                    </div>
                </section>
            </div>
        </ScrollAnimation>
    );
}