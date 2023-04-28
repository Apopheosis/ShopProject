import React, {useContext} from 'react';
import styles from './Header.module.scss';
import cart from '../../../assets/images/cart.png';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {UserContext} from "../../../App";

const Header = () => {
    const {user, setUser} = useContext(UserContext)
    const {token} = user
    function ScrollToTop() {
        const { pathname } = useLocation();

        useEffect(() => {
            window.scrollTo(0, 0);
        }, [pathname]);

        return null;
    }
    console.log(user)
    ScrollToTop();

    return (
        <div>
            <div className={styles.header}>
                <div className={styles.header__logoAndCart}>
                    <Link to='/' style={{ textDecoration: 'none' }}>
                        <h1>Виноградовъ</h1>
                    </Link>
                    <div className={styles.header__logoAndCart__headerContent}>
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
                    <UserContext.Consumer>
                        {({user}) => {
                            if (user.token.access_token == '') {
                                return (
                                    <Link to='/auth'>
                                        <button
                                            style={{
                                                fontFamily: 'Mont',
                                                fontStyle: 'normal',
                                                fontWeight: '400',
                                                fontSize: '18px',
                                                lineHeight: '23px',
                                                background: '#ffe9af',
                                                borderRadius: '25px',
                                                width: '129px',
                                                height: '42px',
                                                boxSizing: 'border-box',
                                                border: '1px solid #ffe9af',
                                                marginRight: '5px',
                                                marginLeft: '50px',
                                                cursor: 'pointer',
                                            }}
                                        >
                                            Войти
                                        </button>
                                    </Link>
                                )
                            }
                        }
                    }
                    </UserContext.Consumer>
                    <UserContext.Consumer>
                        {({user}) => {
                            if (user.token.access_token == '') {
                                return (
                                    <Link to='/registration'>
                                        <button
                                            style={{
                                                fontFamily: 'Mont',
                                                fontStyle: 'normal',
                                                fontWeight: '400',
                                                fontSize: '18px',
                                                lineHeight: '23px',
                                                background: '#ffd465',
                                                borderRadius: '25px',
                                                width: '169px',
                                                height: '42px',
                                                boxSizing: 'border-box',
                                                border: '1px solid #ffd465',
                                                marginLeft: '20px',
                                                cursor: 'pointer',
                                            }}
                                        >
                                            Регистрация
                                        </button>
                                    </Link>
                                )
                            }
                        }
                    }
                    </UserContext.Consumer>
                    </div>
                    <UserContext.Consumer>
                        {({user}) => {
                            if (user.token.access_token != '') {
                                return (
                                    <Link to='/cart'>
                                        <img src={cart} />
                                    </Link>
                                )
                            }
                        }}
                    </UserContext.Consumer>

                </div>
            </div>
        </div>
    );
};

export default Header;
