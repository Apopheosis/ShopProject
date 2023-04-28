import React from 'react';
import styles from './Contacts.module.scss';
import point from '../../../assets/images/ContactsImg/point.png';
import cells7 from '../../../assets/images/cells7.png';
import mail from '../../../assets/images/ContactsImg/mail.png';
import phone from '../../../assets/images/ContactsImg/phone.png';
import vk from '../../../assets/images/ContactsImg/vk.png';
import tg from '../../../assets/images/ContactsImg/tg.png';
import ok from '../../../assets/images/ContactsImg/ok.png';

const Contacts = () => {
    return (
        <div>
            <div className={styles.contacts}>
                <div className={styles.contacts__title}>Контакты</div>
                <div className={styles.contacts__content}>
                    <div className={styles.contacts__content__text}>
                        <div className={styles.contacts__content__text__1}>
                            <div>
                                <img src={point} />
                            </div>
                            <div>
                                <h1>Адрес производства</h1>
                                <h2>
                                    Российская Федерация, г.Севастополь,
                                    с.Резервное, природный заказник "Байдарский"
                                </h2>
                            </div>
                        </div>

                        <div className={styles.contacts__content__text__2}>
                            <div>
                                <img src={point} />
                            </div>
                            <div>
                                <h1>Пункты выдачи заказов (самовывоз):</h1>
                                <h2>
                                    г. Севастополь, магазин чая и кофе
                                    "ШокоЛадно" Пр-т Античный, дом 26, корп. 4.
                                    <br />
                                    Телефон: +7 978 003 0204
                                    <br />
                                    <br />
                                    <br />
                                    г. Ялта, Вегетарианский магазин "Прасад"
                                    <br /> ул. Рузвельта, дом 12-а. <br />
                                    Телефон: +7 978 114 8646
                                </h2>
                            </div>
                        </div>

                        <div className={styles.contacts__content__text__3}>
                            <div>
                                <img src={phone} />
                            </div>
                            <div>
                                <h1>Телефон</h1>
                                <h2>+7 978 556 0739, Алексей</h2>
                            </div>
                        </div>

                        <div className={styles.contacts__content__text__4}>
                            <div>
                                <img src={mail} />
                            </div>
                            <div>
                                <h1>E-mail</h1>
                                <h2>sonnigekrim@ya.ru</h2>
                            </div>
                        </div>
                        <div
                            className={styles.contacts__content__text__buttons}
                        >
                            <button>
                                <img src={vk} />
                            </button>
                            <button>
                                <img src={tg} />
                            </button>
                            <button>
                                <img src={ok} />
                            </button>
                        </div>
                    </div>
                    <div className={styles.contacts__content__image}>
                        <img src={cells7} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;
