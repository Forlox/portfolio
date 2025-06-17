import React, { useState } from 'react';
import './Header.css';

const Header = ({ activeSection, scrollToSection }: {
    activeSection: string,
    scrollToSection: (id: string) => void
}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleNavClick = (e: React.MouseEvent, sectionId: string) => {
        e.preventDefault();
        scrollToSection(sectionId);
        setIsMenuOpen(false);
    };

    const handleDownloadResume = () => {
        console.log('Скачивание резюме...');
    };

    return (
        <header className="header">
            <div className="logo">Портфолио</div>
            <nav className="desktop-nav">
                <ul>
                    <li>
                        <a
                            href="#home"
                            className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
                            onClick={(e) => handleNavClick(e, 'home')}
                        >
                            Главная
                        </a>
                    </li>
                    <li>
                        <a
                            href="#about"
                            className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
                            onClick={(e) => handleNavClick(e, 'about')}
                        >
                            Обо мне
                        </a>
                    </li>
                    <li>
                        <a
                            href="#projects"
                            className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
                            onClick={(e) => handleNavClick(e, 'projects')}
                        >
                            Мои проекты
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
                            onClick={(e) => handleNavClick(e, 'contact')}
                        >
                            Контакты
                        </a>
                    </li>
                    <li>
                        <button className="resume-btn" onClick={handleDownloadResume}>
                            Скачать резюме
                        </button>
                    </li>
                </ul>
            </nav>
            <button
                className="mobile-menu-btn"
                onClick={() => setIsMenuOpen(true)}
            >
                ☰
            </button>

            {/* Мобильное меню */}
            <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
                <button
                    className="close-btn"
                    onClick={() => setIsMenuOpen(false)}
                >
                    ×
                </button>
                <ul>
                    <li>
                        <a
                            href="#home"
                            className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
                            onClick={(e) => handleNavClick(e, 'home')}
                        >
                            Главная
                        </a>
                    </li>
                    <li>
                        <a
                            href="#about"
                            className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
                            onClick={(e) => handleNavClick(e, 'about')}
                        >
                            Обо мне
                        </a>
                    </li>
                    <li>
                        <a
                            href="#projects"
                            className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
                            onClick={(e) => handleNavClick(e, 'projects')}
                        >
                            Мои проекты
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
                            onClick={(e) => handleNavClick(e, 'contact')}
                        >
                            Контакты
                        </a>
                    </li>
                    <li>
                        <button
                            className="resume-btn mobile-resume-btn"
                            onClick={handleDownloadResume}
                        >
                            Скачать резюме
                        </button>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;