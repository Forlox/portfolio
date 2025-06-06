import React from 'react';
import './HeaderStyle.css';

export function Header() {
    return (
        <nav className="nav">
            <ul>
                <li>
                    <a href="/">Main</a>
                </li>
                <li>
                    <a href="/about">About me</a>
                </li>
                <li>
                    <a href="/projects">Projects</a>
                </li>
            </ul>
        </nav>
    );
}