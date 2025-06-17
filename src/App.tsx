import React from 'react';
import './App.css';
import { Header } from './Header/Header';
import { AboutSection } from './About/AboutSection';
import { ContactSection } from './Contact/ContactSection';
import { Footer } from './Footer/Footer';
import { HomeSection } from './Home/HomeSection';
import { ProjectsSection } from './Project/ProjectsSection';

function App() {
    // функция для прокрутки к блоку
    function scrollToSection(sectionId: string) {
        const sectionElement = document.getElementById(sectionId);
        if (sectionElement) {
            sectionElement.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <div className="app">
            
            <Header scrollToSection={scrollToSection} activeSection={''} />

            <main>
                <section id="home">
                    <HomeSection  />
                </section>

                <section id="about">
                    <AboutSection />
                </section>

                <section id="projects">
                    <ProjectsSection />
                </section>

                <section id="contact">
                    <ContactSection />
                </section>
            </main>

            <Footer />
        </div>
    );
}

export default App;