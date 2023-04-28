import React from 'react';
import styles from './Reviews.module.scss';
import cells5 from '../../../assets/images/cells5.png';
import cells6 from '../../../assets/images/cells6.png';

const Reviews = () => {
    return (
        <div>
            <div className={styles.reviews}>
                <div className={styles.reviews__title}>
                    <h1>Отзывы</h1>
                </div>
                <div className={styles.reviews__content}>
                    <div className={styles.reviews__content__pic1}>
                        <img src={cells5} />
                    </div>

                    <div className={styles.reviews__content__revs}>
                        <div className={styles.reviews__content__revs__rev1}>
                            <h1>Вадим Митрюшин</h1>
                            <hr />
                            <h2>
                                "Присутствие Вашего мёда в рационе питания
                                безусловно способствует повышению
                                результативности спортсменов! С наилучшими
                                пожеланиями, Вадим Митрюшин."
                            </h2>
                        </div>
                        <div className={styles.reviews__content__revs__rev2}>
                            <div
                                className={
                                    styles.reviews__content__revs__rev2__div
                                }
                            >
                                <h1>Елена Мытарева</h1>
                                <hr />
                                <h2>
                                    "Заказывали на пасеке Алексея Виноградова
                                    подарки к Новому году для школьных учителей
                                    и себе взяли немного мёда. Остались очень
                                    довольны. Мёд был заботливо упакован в
                                    красивые подарочные коробочки. Вкус и
                                    качество мёда - выше всяких похвал, очень
                                    душистый, ароматный, наисвежайший продукт!
                                    Елена."
                                </h2>
                            </div>
                            <div
                                className={
                                    styles.reviews__content__revs__rev2__button
                                }
                            >
                                <button>Оставить отзыв</button>
                            </div>
                        </div>
                        <div className={styles.reviews__content__revs__rev3}>
                            <h1>Герхард Конрад Шлеккер</h1>
                            <hr />
                            <h2>
                                "Каждый раз, собираясь в Крым, я спрашиваю у
                                друзей и близких, что им оттуда привезти.
                                Заказывают разное, но все просят обязательно
                                привезти Ваш замечательный мёд! С уважением,
                                Г.Шлеккер."
                            </h2>
                        </div>
                    </div>

                    <div className={styles.reviews__content__pic2}>
                        <img src={cells6} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;
