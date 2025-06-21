import React from 'react';
import { motion } from "framer-motion";

export function Home() {
    return (
        
        <motion.section id="home" className="hero" initial={{opacity: 0}} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{once: false}}>
            <motion.h1
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                transition={{duration:1, delay:0.5}}
                viewport={{once: true}}
                className="hero-title">
                Привет, я Федя
            </motion.h1>
            <motion.p
                initial={{y:30, opacity:0}}
                whileInView={{y:0, opacity:1}}
                transition={{duration:0.5, delay:1.3}}
                viewport={{once:true}}
                className="hero-text">
                Я студент-программист. На данный момент создаю учебные проекты, например этот сайт-портфолио
            </motion.p>
            <motion.a
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                transition={{duration:1, delay:2}}
                viewport={{once:true}}
                href="#about" className="btn">
                <i className="fas fa-arrow-down"></i>
            </motion.a>
        </motion.section>
    );
}