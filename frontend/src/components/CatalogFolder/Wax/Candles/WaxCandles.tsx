import React, {useContext, useEffect, useState} from 'react';

import Header from '../../../MainPageFolder/Header/Header';
import styles from './WaxCandles.module.scss';
import { Link } from 'react-router-dom';

import sunflower1 from '../../../../assets/images/sunflower1.png';
import sunflower5 from '../../../../assets/images/sunflower5.png';

import cells10 from '../../../../assets/images/cells10.png';
import Footer from '../../../MainPageFolder/Footer/Footer';
import CatalogItem from '../../CatalogItem/CatalogItem';

import wax5 from '../../../../assets/images/CatalogImg/wax5.png';
import wax6 from '../../../../assets/images/CatalogImg/wax6.png';
import wax7 from '../../../../assets/images/CatalogImg/wax7.png';
import wax8 from '../../../../assets/images/CatalogImg/wax8.png';
import wax9 from '../../../../assets/images/CatalogImg/wax9.png';
import wax10 from '../../../../assets/images/CatalogImg/wax10.png';
import wax11 from '../../../../assets/images/CatalogImg/wax11.png';
import wax12 from '../../../../assets/images/CatalogImg/wax12.png';
import wax13 from '../../../../assets/images/CatalogImg/wax13.png';
import wax14 from '../../../../assets/images/CatalogImg/wax14.png';
import wax15 from '../../../../assets/images/CatalogImg/wax15.png';
import wax16 from '../../../../assets/images/CatalogImg/wax16.png';
import {UserContext} from "../../../../App";

const WaxCandles = () => {
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
        /*
        setUser(JSON.parse(window.localStorage.getItem('user')!))
        console.log(window.localStorage.getItem('user'))*/
        fetch('http://localhost:8000/items/wax/candles')
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
            <div className={styles.candles}>
                <Header />
                <div className={styles.candles__content}>
                    <div className={styles.candles__content__imgs1}>
                        <div className={styles.candles__content__imgs1__1}>
                            <img src={cells10} />
                        </div>

                        <div className={styles.candles__content__imgs1__2}>
                            <img src={sunflower1} width={150} />
                        </div>
                    </div>

                    <div className={styles.candles__content__mainblock}>
                        <div
                            className={
                                styles.candles__content__mainblock__title
                            }
                        >
                            <Link
                                to='/catalog/honey/all'
                                style={{ textDecoration: 'none' }}
                            >
                                <div
                                    className={
                                        styles.candles__content__mainblock__title__2
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
                                        styles.candles__content__mainblock__title__2
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
                                        styles.candles__content__mainblock__title__1
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
                                        styles.candles__content__mainblock__title__2
                                    }
                                >
                                    Подарочные наборы
                                </div>
                            </Link>
                        </div>

                        <div
                            className={
                                styles.candles__content__mainblock__categories
                            }
                        >
                            <Link
                                to='/catalog/wax/all'
                                style={{ textDecoration: 'none' }}
                            >
                                <div
                                    className={
                                        styles.candles__content__mainblock__categories__2
                                    }
                                >
                                    Все
                                </div>
                            </Link>
                            <Link
                                to='/catalog/wax/wax'
                                style={{ textDecoration: 'none' }}
                            >
                                <div
                                    className={
                                        styles.candles__content__mainblock__categories__2
                                    }
                                >
                                    Воск
                                </div>
                            </Link>
                            <Link
                                to='/catalog/wax/candles'
                                style={{ textDecoration: 'none' }}
                            >
                                <div
                                    className={
                                        styles.candles__content__mainblock__categories__1
                                    }
                                >
                                    Свечи
                                </div>
                            </Link>
                        </div>

                        <div
                            className={
                                styles.candles__content__mainblock__items
                            }
                        >
                            {items.map((item) => (
                                <div className={styles.item}>
                                    <Link
                                        to={`/products/candle/${item.id}`}
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

                    <div className={styles.candles__content__imgs2}>
                        <div className={styles.candles__content__imgs2__1}>
                            <img src={sunflower5} width={150} />
                        </div>

                        <div className={styles.candles__content__imgs2__2}>
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

export default WaxCandles;
