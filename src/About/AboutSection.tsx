import { motion } from "framer-motion";

export function About() {
    return (
        <motion.section id="about" className="section"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <motion.h2 className="section-title"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
            >
                Обо мне
            </motion.h2>

            <div className="about-content">
                <motion.div
                    className="about-text"
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                >
                    <p>Я профессиональный кто-то там с крутыми навыками. Моя специализация - лежать на диване.</p>
                    <p>Еще какая-то всем необходимая инфа!</p>

                    <div className="skills">
                        {[1, 2, 3, 4].map((i) => (
                            <motion.div key={i} className="skill"
                                initial={{ x: -30, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                            >
                                <h4>Супер навык {i}</h4>
                                <p>что-то еще</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    className="about-img"
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    <div className="about-img-content">
                        <i className="fas fa-code text-5xl text-blue-500 mb-4"></i>
                        <h3>Крутой чувак</h3>
                        <p>что-то разрабатывает</p>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
}