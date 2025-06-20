import { motion } from "framer-motion";

export function Contact() {
    return (
        <motion.section
            id="contact"
            className="section"
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
        >
            <motion.h2
                className="section-title"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
            >
                Контакты
            </motion.h2>

            <motion.div
                className="contact-container"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className="contact-info">
                    {[
                        {
                            icon: "fas fa-envelope",
                            title: "Email",
                            content: <a href="mailto:contact@example.com">contact@example.com</a>
                        },
                        {
                            icon: "fas fa-phone-alt",
                            title: "Телефон",
                            content: <a href="tel:+79991234567">+7 (999) 123-45-67</a>
                        },
                        {
                            icon: "fas fa-map-marker-alt",
                            title: "Локация",
                            content: <p>Пермь, Россия</p>
                        },
                        {
                            icon: "fas fa-share-alt",
                            title: "Ссылки",
                            content: (
                                <div className="social-links">
                                    {[
                                        {
                                            name: "github",
                                            url: "https://github.com/"
                                        },
                                        {
                                            name: "vk",
                                            url: "https://vk.com/"
                                        },
                                        {
                                            name: "telegram",
                                            url: "https://t.me/"
                                        }
                                    ].map((social) => (
                                        <motion.a
                                            key={social.name}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="social-link"
                                            whileHover={{ scale: 1.1 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <i className={`fab fa-${social.name}`}></i>
                                        </motion.a>
                                    ))}
                                </div>
                            )
                        }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            className="contact-item"
                            initial={{ x: -30, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                        >
                            <div className="contact-icon">
                                <i className={`${item.icon} text-blue-500 text-xl`}></i>
                            </div>
                            <div className="contact-text">
                                <h3>{item.title}</h3>
                                {item.content}
                            </div>
                        </motion.div>
                    ))}

                    <motion.a
                        href="#"
                        className="btn resume-btn"
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.2 }}
                    >
                        <i className="fas fa-download"></i> Скачать резюме
                    </motion.a>
                </div>

                <motion.div
                    className="contact-form"
                    initial={{ x: 30, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    {[
                        { id: "name", label: "Имя", type: "text", placeholder: "Ваше имя" },
                        { id: "email", label: "Email", type: "email", placeholder: "Ваш email" },
                        { id: "message", label: "Сообщение", type: "textarea", placeholder: "Ваше сообщение" }
                    ].map((field) => (
                        <div key={field.id} className="form-group">
                            <label className="form-label" htmlFor={field.id}>{field.label}</label>
                            {field.type === "textarea" ? (
                                <textarea
                                    id={field.id}
                                    className="form-input"
                                    placeholder={field.placeholder}
                                />
                            ) : (
                                <input
                                    type={field.type}
                                    id={field.id}
                                    className="form-input"
                                    placeholder={field.placeholder}
                                />
                            )}
                        </div>
                    ))}

                    <motion.button
                        className="btn"
                        transition={{ duration: 0.2 }}
                    >
                        <i className="fas fa-paper-plane"></i> Отправить сообщение
                    </motion.button>
                </motion.div>
            </motion.div>
        </motion.section>
    );
}