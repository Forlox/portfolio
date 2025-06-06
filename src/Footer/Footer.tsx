import React, { JSX } from 'react';
import './FooterStyle.css';

export function Footer(): JSX.Element {
    return (
        <footer className="footer-container">
            <p>Made with nothing</p>
            <div className="footer-links">
                <a // �����������
                    href="https://www.linkedin.com/in/codevinayak"
                    target="_blank" // ����������� � ����� ������� ��������
                    rel="noreferrer" // ����������� �����-�� "��������" �����
                >
                    LinkedIn
                </a>
                |
                <a
                    href="https://github.com/CodeVinayak/"
                    target="_blank"
                    rel="noreferrer"
                >
                    GitHub
                </a>
            </div>
        </footer>
    );
}