import React from 'react';
import './FooterStyle.css';
import reactIcon from '../Assets/logo.svg';

export function Footer() {
    return (
        <footer className="footer">
            <div className="site">
                <span>localhost:3000</span>
            </div>
            <div>
                <p>
                    Сайт сделан с помощью<img src={reactIcon} alt="React" />
                </p>
            </div>
            <div className="social-media">
                <span>Ссылки на соцсети</span>
            </div>
        </footer>
    );
}