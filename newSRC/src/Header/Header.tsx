import React, { useState } from 'react';
import './Header.css';

export function Header({ activeSection, scrollToSection }: {
    activeSection: string,
    scrollToSection: (id: string) => void
}) {
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
                            //динамическое применения стилей
                            // когда переменная activeSection равна, например, "contact", то класс элемента становится nav-link active
                            href="#home" // ссылка на место id home
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
               //??? ☰
            </button>

        </header>
    );
}