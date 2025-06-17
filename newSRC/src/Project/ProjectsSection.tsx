import React from 'react';
import './ProjectsSection.css';

export function ProjectsSection() {
    const projects = [
        {
            id: 1,
            title: 'Проект 1',
            description: 'описание проекта'
        },
        {
            id: 2,
            title: 'Проект 2',
            description: 'описание проекта'
        },
        {
            id: 3,
            title: 'Проект 3',
            description: 'описание проекта'
        }
    ];

    return (
        <section className="projects-section">
            <h2>Мои проекты</h2>
            <div className="projects-grid">
                {projects.map(project => (
                    <div key={project.id} className="project-card">
                        <div className="project-img">Изображение проекта</div>
                        <div className="project-info">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}