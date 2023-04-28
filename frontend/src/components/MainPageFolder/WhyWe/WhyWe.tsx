import React from 'react';
import styles from './WhyWe.module.scss';
import cells3 from '../../../assets/images/cells3.png';

const WhyWe = () => {
    return (
        <div>
            <div className={styles.whywe}>
                <div className={styles.whywe__title}>
                    <h1>Почему мы?</h1>
                </div>

                <div className={styles.whywe__blocks}>
                    <div className={styles.whywe__blocks__1}>
                        <h1>Качество</h1>
                        <h2>
                            100% натуральный состав. Наш
                            <br /> мёд не содержит ГМО,
                            <br /> антибиотики и пестициды
                        </h2>
                    </div>

                    <div className={styles.whywe__blocks__2}>
                        <h1>Чистый продукт</h1>
                        <h2>
                            Собирается на экологически
                            <br /> чистых пасеках
                        </h2>
                        <img src={cells3} />
                    </div>

                    <div className={styles.whywe__blocks__3}>
                        <h1>Быстрая доставка</h1>
                        <h2>
                            Доставка по всей России
                            <br /> и за рубеж
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyWe;
