import React from 'react';

export function Home() {
    return (
        
        <section id="home" className="hero">
            <h1 className="hero-title">
                Привет, я Федя
            </h1>
            <p className="hero-text">
                Я студент-программист. На данный момент создаю учебные проекты, например этот сайт-портфолио
            </p>
            <a href="#projects" className="btn">
                <i className="fas fa-arrow-down"></i> Мои проекты
            </a>
        </section>
    );
}