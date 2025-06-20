import React from 'react';
import '../App.css';
import reactIcon from '../Assets/logo.svg';
import { motion } from 'framer-motion';

export function Footer() {
    return (
        <footer className="footer">
            <div className="site">
                <span>localhost:3000</span>
            </div>
            <div className="made-with">
                <p>
                    Сайт сделан с помощью <img src={reactIcon} alt="React" />
                </p>
            </div>
            <div className="social-media">
                {[
                    {
                        name: "github",
                        url: "https://github.com/",
                        icon: "fab fa-github"
                    },
                    {
                        name: "vk",
                        url: "https://vk.com/",
                        icon: "fab fa-vk"
                    },
                    {
                        name: "telegram",
                        url: "https://t.me/",
                        icon: "fab fa-telegram-plane"
                    }
                ].map((social) => (
                    <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.1 }}
                        aria-label={social.name}
                    >
                        <i className={social.icon}></i>
                    </motion.a>
                ))}
            </div>
        </footer>
    );
}