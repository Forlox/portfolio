import React from 'react';

export function About() {
    return (
        <section id="about" className="section">
            <h2 className="section-title">Обо мне</h2>
            <div className="about-content">
                <div className="about-text">
                    <p>
                        Я профессиональный кто-то там с крутыми навыками. Моя специализация - лежать на диване.
                    </p>
                    <p>
                        Еще какая-то всем необходимая инфа!
                    </p>
                    <div className="skills">
                        <div className="skill">
                            <h4>Супер навык 1</h4>
                            <p>что-то еще</p>
                        </div>
                        <div className="skill">
                            <h4>Супер навык 2</h4>
                            <p>что-то еще</p>
                        </div>
                        <div className="skill">
                            <h4>Супер навык 3</h4>
                            <p>что-то еще</p>
                        </div>
                        <div className="skill">
                            <h4>Супер навык 4</h4>
                            <p>что-то еще</p>
                        </div>
                    </div>
                </div>
                <div className="about-img">
                    <div className="about-img-content">
                        <i className="fas fa-code text-5xl text-blue-500 mb-4"></i>
                        <h3>Крутой чувак</h3>
                        <p>что-то разрабатывает</p>
                    </div>
                </div>
            </div>
        </section>
    );
}