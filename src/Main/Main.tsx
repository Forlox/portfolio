import React, { JSX } from 'react';
import './MainStyle.css';

export function Main(): JSX.Element {
    return (
        <>
            <section id="home" className="section">
                <h1 className="heading1">Welcome to My Portfolio</h1>
                <p className="paragraph">This is a simple portfolio website.</p>
            </section>

            <section id="about" className="section">
                <h2 className="heading2">About Me</h2>
                <p className="paragraph">
                    Idk.
                </p>
            </section>

            <section id="projects" className="section">
                <h2 className="heading2">My Projects</h2>
                <p className="paragraph">something</p>
            </section>

            <section id="contact" className="section">
                <h2 className="heading2">Contact</h2>
                <p className="paragraph">Email: something@blabla.com</p>
                <p className="paragraph">Phone: (+11)</p>
                <a href="#" className="buttonWrapper">Download Resume</a>
            </section>
        </>
    );
}