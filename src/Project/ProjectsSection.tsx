import { motion } from "framer-motion";

export function Projects() {
    const projects = [
        {
            title: "Проект 1",
            description: "Информация о проекте",
            tech: ["React", "Node.js"],
            icon: "fas fa-chart-line",
        },
        {
            title: "Проект 2",
            description: "Информация о проекте",
            tech: ["React", "Node.js"],
            icon: "fas fa-shopping-cart",
        },
        {
            title: "Проект 3",
            description: "Информация о проекте",
            tech: ["React", "Node.js"],
            icon: "fas fa-mobile-alt",
        },
        {
            title: "Проект 4",
            description: "Информация о проекте",
            tech: ["TypeScript", "TailwindCSS"],
            icon: "fas fa-code",
        },
    ];

    return (
        <motion.section
            id="projects"
            className="section"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <motion.h2
                className="section-title"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
            >
                Проекты
            </motion.h2>

            <div className="projects-grid">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="project-card"
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.2 }}
                        whileHover={{
                            scale: 1.03,
                            transition: { duration: 0.2 }
                        }}
                    >
                        <div className="project-img">
                            <i className={`${project.icon} text-3xl text-blue-500`}></i>
                        </div>
                        <div className="project-info">
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                            <div className="project-tech">
                                {project.tech.map((tech, i) => (
                                    <span key={i} className="tech-tag">
                    {tech}
                  </span>
                                ))}
                            </div>
                            <a href="#" className="project-link">
                                Подробнее <i className="fas fa-arrow-right"></i>
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
}