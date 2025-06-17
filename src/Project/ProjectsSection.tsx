import React, { useEffect } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css";
import './ProjectsSection.css';
import projectImg1 from '../Assets/cat.png';
import projectImg2 from '../Assets/cat.png';
import projectImg3 from '../Assets/cat.png';

export function ProjectsSection() {
    const projects = [
        {
            id: 1,
            title: 'Проект 1',
            description: 'Описание проекта 1',
            image: projectImg1
        },
        {
            id: 2,
            title: 'Проект 2',
            description: 'Описание проекта 2',
            image: projectImg2
        },
        {
            id: 3,
            title: 'Проект 3',
            description: 'Описание проекта 3',
            image: projectImg3
        }
    ];

    return (
        <ScrollAnimation animateIn="fadeIn">
        <section className="projects-section">
            <ScrollAnimation animateIn="fadeInDown" duration={0.8} delay={100} animateOnce={true}>
                <h2>Мои проекты</h2>
            </ScrollAnimation>

            <div className="projects-grid">
                {projects.map(project => (
                    <ScrollAnimation
                        key={project.id}
                        animateIn="fadeInUp"
                        duration={0.6}
                        delay={200}
                        animateOnce={true}
                    >
                        <div className="project-card">
                            <div className="project-img">
                                <img src={project.image} alt={project.title} />
                            </div>
                            <div className="project-info">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                            </div>
                        </div>
                    </ScrollAnimation>
                ))}
            </div>
        </section>
        </ScrollAnimation>
    );
}