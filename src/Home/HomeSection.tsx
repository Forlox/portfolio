import React from 'react';

// Главная секция
export function Home() {
    return (
        
        <section id="home" className="hero">
            {/* 1-й уровень */}
            <h1 className="hero-title">
                Привет, я [???] профессиональный разработчик
            </h1>
            {/* отделяем текст */}
            <p className="hero-text">
                Создаю современные решения для сложных задач, сочетая техническую экспертизу и дизайн-мышление.
            </p>
            <a href="#projects" className="btn">
                <i className="fas fa-arrow-down"></i> Посмотреть работы
            </a>
        </section>
    );
}