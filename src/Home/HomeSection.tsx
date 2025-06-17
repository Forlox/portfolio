import React, { JSX } from 'react';
import { motion } from 'framer-motion';
import logo from '../Assets/catGIF.gif';
import './HomeSection.css';

export function HomeSection(): JSX.Element {
    return (
        <div className="hero-container">
            <motion.section id="home" className="hero" transition={{ duration: 1 }}>
                <div className="hero-content">
                    <motion.h1
                        className="hero-heading"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        Привет, я Иван Иванов
                    </motion.h1>
                    <motion.p
                        className="hero-text"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        Frontend разработчик с фокусом на создании чистых, функциональных и эстетичных пользовательских интерфейсов
                    </motion.p>
                </div>
                <motion.div
                    className="hero-image"
                    initial={{ x: 20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <img src={logo} alt="Логотип" />
                </motion.div>
            </motion.section>
        </div>
    );
}