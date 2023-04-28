import React from 'react';
import styles from './OurProducts.module.scss';
import bee2 from '../../../assets/images/bee2.png';
import pic1 from '../../../assets/images/OurProductsImg/1.png';
import pic2 from '../../../assets/images/OurProductsImg/2.png';
import pic3 from '../../../assets/images/OurProductsImg/3.png';
import pic4 from '../../../assets/images/OurProductsImg/4.png';

const OurProducts = () => {
    return (
        <div>
            <div className={styles.ourProducts}>
                <div className={styles.ourProducts__title}>
                    <h1>Наша продукция</h1>
                </div>

                <div className={styles.ourProducts__beeImage}>
                    <img src={bee2} />
                </div>

                <div className={styles.ourProducts__blocks}>
                    <div className={styles.ourProducts__blocks__1}>
                        <img src={pic1} />
                        <h1>Мёд</h1>
                        <h2>
                            Крымский натуральный
                            <br /> цветочный мёд от
                            <br /> крестьянского хозяйства
                            <br /> Виноградовых
                        </h2>
                    </div>
                    <div className={styles.ourProducts__blocks__2}>
                        <img src={pic2} />
                        <h1>Травы</h1>
                        <h2>
                            Лечебные травы Крыма
                            <br /> собираются вручную в
                            <br /> экологически чистых
                            <br /> горных и степных
                            <br /> районах
                        </h2>
                    </div>
                    <div className={styles.ourProducts__blocks__3}>
                        <img src={pic3} />
                        <h1>Воск и свечи</h1>
                        <h2>
                            Натуральный воск и
                            <br /> восковые свечи прямо с
                            <br /> пасеки
                        </h2>
                    </div>
                    <div className={styles.ourProducts__blocks__4}>
                        <img src={pic4} />
                        <h1>Подарочные наборы</h1>
                        <h2>
                            Подарочные наборы
                            <br /> банок мёда ручной
                            <br /> работы
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurProducts;
