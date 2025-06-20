import { motion } from "framer-motion";
import catblow from "../Assets/catblow.gif"

export function About() {
    // Массив с навыками
    const skills = [
        {
            title: "React & TypeScript",
            description: "Создаю компоненты, которые иногда даже работают"
        },
        {
            title: "Java",
            description: "Пишу что-то похожее на код. Зато не на питоне!"
        },
        {
            title: "Дизайнер GUI",
                description: "Главное в GUI: перфектциониз м"
        },
        {
            title: "Git",
            description: "Умею жать на кнопку Commit and Push"
        }
    ];

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
                    <p>Я "профессиональный" программист с супер крутыми навыками. Моя специализация - лежать на диване с ноутбуком.</p>
                    <p>Вот мои супер профессиональные навыки:</p>

                    <div className="skills">
                        {skills.map((skill, i) => (
                            <motion.div key={i} className="skill"
                                        initial={{ x: -30, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                            >
                                <h4>{skill.title}</h4>
                                <p>{skill.description}</p>
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
                        <img
                            src={catblow}
                            alt="Тут должна быть гифка крутая"
                            style={{
                                filter: "drop-shadow(0 0 0 transparent)", // убирает белую окантовку
                                mixBlendMode: "multiply", // если фон светлый
                            }}
                        />
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
}