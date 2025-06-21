import React from 'react';

export function Header() {
    return (
        <nav className="nav">
            <div className="logo">
                Portfolio
            </div>
            <div className="nav-links-container">
                <div className="nav-links">
                    <a href="#about" className="nav-link">Обо мне</a>
                    <a href="#projects" className="nav-link">Проекты</a>
                    <a href="#contact" className="nav-link">Контакты</a>
                </div>
            </div>
        </nav>
    );
}