import React from 'react';
import './AboutSection.css';

// компонент возвращает jsx разметку
const AboutSection = ({ id }: { id: string }) => {
    return (
        <section id={id} className="about-section">
            <h2>Обо мне</h2>
            <div className="content">
                <div className="profile-img">Фото</div>
                <div className="about-text">
                    <p>Привет! Я [???]</p>
                    <p>Занимаюсь разработкой чего-то там</p>
                    <p>Специализируюсь на чем-то</p>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;