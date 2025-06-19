import React from 'react';

// Секция проектов
export function Projects() {
    const projects = [
        {
            title: 'Проект 1',
            description: 'Информация о проекте',
            tech: ['React', 'Node.js'],
            icon: 'fas fa-chart-line',
        },
        {
            title: 'Проект 2',
            description: 'Информация о проекте',
            tech: ['React', 'Node.js'],
            icon: 'fas fa-shopping-cart',
        },
        {
            title: 'Проект 3',
            description: 'Информация о проекте',
            tech: ['React', 'Node.js'],
            icon: 'fas fa-mobile-alt',
        },
    ];

    return (
        <section id="projects" className="section">
            <h2 className="section-title">Проекты</h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <div className="project-img">
                            <i className={`${project.icon} text-3xl text-blue-500`}></i>
                        </div>
                        <div className="project-info">
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                            <div className="project-tech">
                                {project.tech.map((tech, i) => (
                                    <span key={i} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                            <a href="#" className="project-link">
                                Подробнее <i className="fas fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}