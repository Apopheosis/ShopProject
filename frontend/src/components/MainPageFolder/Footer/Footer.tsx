import React from 'react';
import styles from './Footer.module.scss';
import vk from '../../../assets/images/ContactsImg/vk.png';
import tg from '../../../assets/images/ContactsImg/tg.png';
import ok from '../../../assets/images/ContactsImg/ok.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <div className={styles.footer}>
                <div className={styles.footer__text}>
                    <Link to='/' style={{ textDecoration: 'none' }}>
                        <h1>Виноградовъ</h1>
                    </Link>
                    <Link
                        to='/'
                        style={{ textDecoration: 'none' }}
                        onClick={() =>
                            window.scrollTo({
                                top: 940,
                                behavior: 'smooth',
                            })
                        }
                    >
                        <h2>О компании</h2>
                    </Link>
                    <Link
                        to='/catalog/honey/all'
                        style={{ textDecoration: 'none' }}
                    >
                        <h2>Каталог</h2>
                    </Link>
                    <Link
                        to='/'
                        style={{ textDecoration: 'none' }}
                        onClick={() =>
                            window.scrollTo({
                                top: 4150,
                                behavior: 'smooth',
                            })
                        }
                    >
                        <h2>Оплата и доставка</h2>
                    </Link>
                    <Link
                        to='/'
                        style={{ textDecoration: 'none' }}
                        onClick={() =>
                            window.scrollTo({
                                top: 8295,
                                behavior: 'smooth',
                            })
                        }
                    >
                        <h2>Контакты</h2>
                    </Link>
                </div>
                <div className={styles.footer__icons}>
                    <img src={vk} />
                    <img src={tg} />
                    <img src={ok} />
                </div>
            </div>
        </div>
    );
};

export default Footer;
