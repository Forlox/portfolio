import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type GitHubRepo = {
    name: string;
    description: string | null;
    html_url: string;
    languages_url: string;
    topics?: string[];
};

export function Projects() {
    const [repos, setRepos] = useState<GitHubRepo[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [repoCount, setRepoCount] = useState(6);

    useEffect(() => {
        const handleResize = () => {
            setRepoCount(window.innerWidth <= 768 ? 3 : 6);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Загрузка репозиториев
    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const response = await fetch(
                    `https://api.github.com/users/Forlox/repos?sort=updated&per_page=${repoCount}`
                );
                if (!response.ok) throw new Error("Ошибка загрузки репозиториев");
                const data = await response.json();
                setRepos(data);
            } catch (err) {
                setError("Не удалось загрузить репозитории");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchRepos();
    }, [repoCount]);

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
                Мои Git-репозитории
            </motion.h2>

            {loading && (
                <motion.div
                    className="flex justify-center py-8"
                    animate={{ rotate: 360 }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 1,
                    }}
                >
                    <i className="fas fa-spinner text-4xl text-blue-500"></i>
                </motion.div>
            )}

            {error && <p className="text-red-500 text-center">{error}</p>}

            <div className="projects-grid">
                {repos.map((repo, index) => (
                    <motion.div
                        key={repo.name}
                        className="project-card"
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                    >
                        <div className="project-img">
                            <i className="fab fa-github text-4xl text-white"></i>
                        </div>
                        <div className="project-info">
                            <h3 className="project-title">{repo.name}</h3>
                            {repo.description && (
                                <p className="project-description">
                                    {repo.description}
                                </p>
                            )}
                            <div className="project-tech">
                                {repo.topics?.slice(0, 3).map((topic) => (
                                    <span key={topic} className="tech-tag">
                    {topic}
                  </span>
                                ))}
                            </div>
                            <a
                                href={repo.html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link"
                            >
                                Открыть на GitHub <i className="fas fa-arrow-right ml-1"></i>
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>

            {repos.length >= repoCount && (
                <motion.button
                    onClick={() => setRepoCount(prev => prev + (window.innerWidth <= 768 ? 3 : 6))}
                    className="show-more-btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Показать ещё
                    <i className="fas fa-chevron-down ml-2"></i>
                </motion.button>
            )}
        </motion.section>
    );
}