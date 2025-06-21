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

            {error && <p className="text-red-500">{error}</p>}
            {loading && <motion.i
                animate={{ rotate: 360 }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 1,
                }}
                className="fas fa-spinner"></motion.i>}

            <div className="projects-grid">
                {repos.map((repo, index) => (
                    <motion.div
                        key={index}
                        className="project-card"
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.1}}
                        whileHover={{ scale: 1.01 }}
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
                                {repo.topics?.slice(0, 3).map((topic, i) => (
                                    <span key={i} className="tech-tag">
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
                                Открыть на GitHub <i className="fas fa-arrow-right"></i>
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>

            {repos.length >= repoCount && (
                <button
                    onClick={() => setRepoCount(repoCount + 4)}
                    className="show-more-btn"
                >
                    Показать ещё
                    <i className="fas fa-chevron-down ml-2"></i>
                </button>
            )}
        </motion.section>
    );
}