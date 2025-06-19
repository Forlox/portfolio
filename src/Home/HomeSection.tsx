import React from 'react';

export function Home() {
    return (
        
        <section id="home" className="hero">
            <h1 className="hero-title">
                Привет, я [???] профессиональный разработчик
            </h1>
            <p className="hero-text">
                Создаю современные решения для сложных задач, сочетая техническую экспертизу и дизайн-мышление.
            </p>
            <a href="#projects" className="btn">
                <i className="fas fa-arrow-down"></i> Мои проекты
            </a>
        </section>
    );
}