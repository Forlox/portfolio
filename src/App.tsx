import React from 'react';

import './App.css';
import { Header } from './Header/Header';
import { About } from './About/AboutSection';
import { Contact } from './Contact/ContactSection';
import { Footer } from './Footer/Footer';
import { Home } from './Home/HomeSection';
import { Projects } from './Project/ProjectsSection';

function App() {
    return (
        <div className="container">
            <Header />
            <Home />
            <About />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
}
export default App;