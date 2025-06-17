import React from 'react';
import './AboutSection.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css";
import profileImg from '../Assets/cat.png';

export function AboutSection() {
    return (
        <ScrollAnimation animateIn="fadeIn" duration={0.5}>
        <section className="about-section">

            <h2>Обо мне</h2>
            <div className="content">
                <div className="profile-img">
                    <img src={profileImg} alt="Профиль"/>
                </div>
                <div className="about-text">
                    <p>Привет! Я [???]</p>
                    <p>Занимаюсь разработкой чего-то там</p>
                    <p>Специализируюсь на чем-то</p>
                </div>
            </div>

        </section>
    </ScrollAnimation>
    );
}