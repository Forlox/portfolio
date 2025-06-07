import React, { JSX } from 'react';
import '../Main/MainStyle.css';

export function Contact(): JSX.Element {
    return (
        <>
            <section id="contact" className="section">
                <h2 className="heading2">Contact</h2>
                <p className="paragraph">Email: something@blabla.com</p>
                <p className="paragraph">Phone: (+11)</p>
                <a href="#" className="buttonWrapper">Download Resume</a>
            </section>

        </>
    );
}