import { BrowserRouter as Router } from 'react-router-dom';
import { NavHashLink, HashLink } from 'react-router-hash-link';
import { useState } from 'react';
import './HeaderStyle.css';

export function Header() {
    const [isActive, setActive] = useState(false);
    function closeMenu() {
        setActive(false);
    }

    return (
        <header className="header">
            <Router>
                <nav className={isActive ? 'nav active' : 'nav'}>
                    <NavHashLink smooth to="#home" onClick={closeMenu}>
                        Главная
                    </NavHashLink>
                    <NavHashLink smooth to="#about" onClick={closeMenu}>
                        Обо мне
                    </NavHashLink>
                    <NavHashLink smooth to="#projects" onClick={closeMenu}>
                        Проекты
                    </NavHashLink>
                    <NavHashLink smooth to="#contact" onClick={closeMenu}>
                        Контакты
                    </NavHashLink>
                </nav>

                <HashLink smooth to="#home" className="logo">
                    Иван Иванов
                </HashLink>
            </Router>
        </header>
    );
}