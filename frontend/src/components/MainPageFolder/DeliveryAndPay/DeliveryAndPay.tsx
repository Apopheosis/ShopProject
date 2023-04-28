import React from 'react';
import styles from './DeliveryAndPay.module.scss';
import sunflower2 from '../../../assets/images/sunflower2.png';
import sunflower3 from '../../../assets/images/sunflower3.png';
import cells4 from '../../../assets/images/cells4.png';

const DeliveryAndPay = () => {
    return (
        <div>
            <div className={styles.deliveryAndPay}>
                <div className={styles.deliveryAndPay__sunflowers}>
                    <div className={styles.deliveryAndPay__sunflowers__1}>
                        <img src={sunflower2} />
                    </div>

                    <div
                        className={styles.deliveryAndPay__sunflowers__mainInfo}
                    >
                        <h1>Доставка и оплата</h1>
                        <div
                            className={
                                styles.deliveryAndPay__sunflowers__mainInfo__content
                            }
                        >
                            <div
                                className={
                                    styles.deliveryAndPay__sunflowers__mainInfo__content__text1
                                }
                            >
                                <div
                                    className={
                                        styles.deliveryAndPay__sunflowers__mainInfo__content__text1__1
                                    }
                                >
                                    <h1>
                                        Осуществляем доставку по всей России и
                                        за рубеж.
                                    </h1>
                                </div>
                                <div
                                    className={
                                        styles.deliveryAndPay__sunflowers__mainInfo__content__text1__2
                                    }
                                >
                                    <h1>
                                        Бесплатная доставка в отделение Почты
                                        России — при сумме заказа от 4 300 руб.
                                        для большинства городов РФ.
                                    </h1>
                                </div>
                            </div>
                            <div
                                className={
                                    styles.deliveryAndPay__sunflowers__mainInfo__content__image
                                }
                            >
                                <img src={cells4} />
                            </div>
                            <div
                                className={
                                    styles.deliveryAndPay__sunflowers__mainInfo__content__text2
                                }
                            >
                                <div
                                    className={
                                        styles.deliveryAndPay__sunflowers__mainInfo__content__text2__1
                                    }
                                >
                                    <h1>
                                        Оплата доставки производится Покупателем
                                        при получении заказа.
                                    </h1>
                                </div>
                                <div
                                    className={
                                        styles.deliveryAndPay__sunflowers__mainInfo__content__text2__2
                                    }
                                >
                                    <h1>
                                        Бесплатная доставка по Севастополю — при
                                        сумме заказа от 1000 руб.
                                    </h1>
                                </div>
                                <div
                                    className={
                                        styles.deliveryAndPay__sunflowers__mainInfo__content__text2__3
                                    }
                                >
                                    <h1>
                                        Детали отправки согласовывайте с
                                        Оператором нашего магазина.
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.deliveryAndPay__sunflowers__2}>
                        <img src={sunflower3} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeliveryAndPay;
