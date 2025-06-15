import React from 'react';
import Header from './Header/Header';
import HomeSection from './Home/HomeSection';
import AboutSection from './About/AboutSection';
import ProjectsSection from './Project/ProjectsSection';
import ContactSection from './Contact/ContactSection';
import Footer from './Footer/Footer';
import './App.css';

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
                    <HomeSection id={''} />
                </section>

                <section id="about">
                    <AboutSection id={''} />
                </section>

                <section id="projects">
                    <ProjectsSection id={''} />
                </section>

                <section id="contact">
                    <ContactSection id={''} />
                </section>
            </main>

            <Footer />
        </div>
    );
}

export default App;