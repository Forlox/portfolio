import React, { JSX } from 'react';
import '../Main/MainStyle.css';

export function MyProjects(): JSX.Element {
    return (
        <>
            <section id="projects">
                <h2>Мои проекты</h2>
                <div className="projects-grid">
                    <div className="project-card">
                        <div className="project-img">Изображение проекта</div>
                        <div className="project-info">
                            <h3>Интернет-магазин</h3>
                            <p>Полнофункциональный интернет-магазин с корзиной покупок, фильтрами товаров и системой
                                оплаты.</p>
                        </div>
                    </div>
                    <div className="project-card">
                        <div className="project-img">Изображение проекта</div>
                        <div className="project-info">
                            <h3>Социальная сеть</h3>
                            <p>Микросоциальная сеть с возможностью публикации постов, подписки на пользователей и
                                комментариями.</p>
                        </div>
                    </div>
                    <div className="project-card">
                        <div className="project-img">Изображение проекта</div>
                        <div className="project-info">
                            <h3>Панель аналитики</h3>
                            <p>Интерактивная панель аналитики с графиками, диаграммами и возможностью фильтрации
                                данных.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}