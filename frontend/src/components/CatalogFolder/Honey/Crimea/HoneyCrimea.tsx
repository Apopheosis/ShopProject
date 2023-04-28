import React, {useContext, useEffect, useState} from 'react';
import Header from '../../../MainPageFolder/Header/Header';
import styles from './HoneyCrimea.module.scss';
import { Link } from 'react-router-dom';

import sunflower1 from '../../../../assets/images/sunflower1.png';
import sunflower5 from '../../../../assets/images/sunflower5.png';

import honey1 from '../../../../assets/images/CatalogImg/honey1.png';
import honey2 from '../../../../assets/images/CatalogImg/honey2.png';
import honey3 from '../../../../assets/images/CatalogImg/honey3.png';
import honey4 from '../../../../assets/images/CatalogImg/honey4.png';
import honey5 from '../../../../assets/images/CatalogImg/honey5.png';

import cells10 from '../../../../assets/images/cells10.png';
import Footer from '../../../MainPageFolder/Footer/Footer';
import CatalogItem from '../../CatalogItem/CatalogItem';
import {UserContext} from "../../../../App";

const HoneyCrimea = () => {
    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const [items, setItems] = useState<any[]>([]);
    const {user, setUser} = useContext(UserContext)
    const {id, token, itemsOrdered} = user

    const addToOrder = (catalogueItem: any) => {
        //setUser(JSON.parse(window.localStorage.getItem('user')!))
        const ind = itemsOrdered.findIndex(itemCount => itemCount.item.id == catalogueItem.id)

        if (ind !== -1) {
            setUser(prevUser => ({
                ...prevUser,
                ...itemsOrdered[ind],
                count: prevUser.itemsOrdered[ind].count++
            }))
        } else {
            setUser(prevUser => ({
                ...prevUser,
                itemsOrdered: [...prevUser.itemsOrdered, {item: catalogueItem, count: 1}]
            }))
        }
        console.log(itemsOrdered)
        window.localStorage.setItem('user', JSON.stringify(user))
    }

    useEffect(() => {
        /*setUser(JSON.parse(window.localStorage.getItem('user')!))
        console.log(window.localStorage.getItem('user'))*/
        fetch('http://localhost:8000/items/honey/crimea')
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true)
                    setItems(result)
                    console.log(result)
                },
                (error) => {
                    setIsLoaded(true)
                    setError(error)
                }
            )
    }, [])

    /*useEffect(() => {
        window.localStorage.setItem('user', JSON.stringify(user))
    },[itemsOrdered])*/
    return (
        <div>
            <div className={styles.crimea}>
                <Header />
                <div className={styles.crimea__content}>
                    <div className={styles.crimea__content__imgs1}>
                        <div className={styles.crimea__content__imgs1__1}>
                            <img src={cells10} />
                        </div>

                        <div className={styles.crimea__content__imgs1__2}>
                            <img src={sunflower1} width={150} />
                        </div>
                    </div>

                    <div className={styles.crimea__content__mainblock}>
                        <div className={styles.crimea__content__mainblock__title}>
                            <Link
                                to='/catalog/honey/all'
                                style={{ textDecoration: 'none' }}
                            >
                                <div
                                    className={
                                        styles.crimea__content__mainblock__title__1
                                    }
                                >
                                    Мёд
                                </div>
                            </Link>

                            <Link
                                to='/catalog/herbs/all'
                                style={{ textDecoration: 'none' }}
                            >
                                <div
                                    className={
                                        styles.crimea__content__mainblock__title__2
                                    }
                                >
                                    Травы
                                </div>
                            </Link>

                            <Link
                                to='/catalog/wax/all'
                                style={{ textDecoration: 'none' }}
                            >
                                <div
                                    className={
                                        styles.crimea__content__mainblock__title__2
                                    }
                                >
                                    Воск/Свечи
                                </div>
                            </Link>

                            <Link
                                to='/catalog/gifts/all'
                                style={{ textDecoration: 'none' }}
                            >
                                <div
                                    className={
                                        styles.crimea__content__mainblock__title__2
                                    }
                                >
                                    Подарочные наборы
                                </div>
                            </Link>
                        </div>

                        <div
                            className={
                                styles.crimea__content__mainblock__categories
                            }
                        >
                            <Link
                                to='/catalog/honey/all'
                                style={{ textDecoration: 'none' }}
                            >
                                <div
                                    className={
                                        styles.crimea__content__mainblock__categories__2
                                    }
                                >
                                    Все
                                </div>
                            </Link>
                            <Link
                                to='/catalog/honey/eco'
                                style={{ textDecoration: 'none' }}
                            >
                                <div
                                    className={
                                        styles.crimea__content__mainblock__categories__2
                                    }
                                >
                                    Горный Эко
                                </div>
                            </Link>
                            <Link
                                to='/catalog/honey/crimea'
                                style={{ textDecoration: 'none' }}
                            >
                                <div
                                    className={
                                        styles.crimea__content__mainblock__categories__1
                                    }
                                >
                                    Крымская коллекция
                                </div>
                            </Link>

                            <Link
                                to='/catalog/honey/lavender'
                                style={{ textDecoration: 'none' }}
                            >
                                <div
                                    className={
                                        styles.crimea__content__mainblock__categories__2
                                    }
                                >
                                    Лавандовый
                                </div>
                            </Link>

                            <Link
                                to='/catalog/honey/tavrida'
                                style={{ textDecoration: 'none' }}
                            >
                                <div
                                    className={
                                        styles.crimea__content__mainblock__categories__2
                                    }
                                >
                                    Сады Тавриды
                                </div>
                            </Link>
                        </div>

                        <div className={styles.crimea__content__mainblock__items}>
                            {items.map((item) => (
                                <div className={styles.item}>
                                    <Link
                                        to={`/products/honey/${item.id}`}
                                        style={{ textDecoration: 'none' }}
                                    >
                                        <div>
                                            <div key={item.id} className={styles.item}>
                                                <img src={item.img_url} />
                                                <h1>{item.item_name}</h1>
                                                <h3>{item.price} руб.</h3>

                                            </div>
                                        </div>
                                    </Link>
                                    <button onClick={() => {addToOrder(item)}}>В корзину</button>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={styles.crimea__content__imgs2}>
                        <div className={styles.crimea__content__imgs2__1}>
                            <img src={sunflower5} width={150} />
                        </div>
                    </div>
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default HoneyCrimea;
