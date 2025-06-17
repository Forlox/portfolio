import React from 'react';
import './HomeSection.css';

const HomeSection = ({ id }: { id: string }) => {
    return (
        <section id={id} className="home-section">
            <div className="content">
                <h1>Привет, я [???]</h1>
                <p>Разработчик</p>
            </div>
        </section>
    );
};

export default HomeSection;