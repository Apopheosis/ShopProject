import React, {useContext, useEffect, useState} from 'react';

import Header from '../../../MainPageFolder/Header/Header';
import styles from './WaxOnly.module.scss';
import { Link } from 'react-router-dom';

import sunflower1 from '../../../../assets/images/sunflower1.png';
import sunflower5 from '../../../../assets/images/sunflower5.png';

import cells10 from '../../../../assets/images/cells10.png';
import Footer from '../../../MainPageFolder/Footer/Footer';
import CatalogItem from '../../CatalogItem/CatalogItem';

import wax1 from '../../../../assets/images/CatalogImg/wax1.png';
import wax2 from '../../../../assets/images/CatalogImg/wax2.png';
import wax3 from '../../../../assets/images/CatalogImg/wax3.png';
import wax4 from '../../../../assets/images/CatalogImg/wax4.png';
import {UserContext} from "../../../../App";

const WaxOnly = () => {
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
        fetch('http://localhost:8000/items/wax/wax')
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
            <div className={styles.wax}>
                <Header />
                <div className={styles.wax__content}>
                    <div className={styles.wax__content__imgs1}>
                        <div className={styles.wax__content__imgs1__1}>
                            <img src={cells10} />
                        </div>

                        <div className={styles.wax__content__imgs1__2}>
                            <img src={sunflower1} width={150} />
                        </div>
                    </div>

                    <div className={styles.wax__content__mainblock}>
                        <div className={styles.wax__content__mainblock__title}>
                            <Link
                                to='/catalog/honey/all'
                                style={{ textDecoration: 'none' }}
                            >
                                <div
                                    className={
                                        styles.wax__content__mainblock__title__2
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
                                        styles.wax__content__mainblock__title__2
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
                                        styles.wax__content__mainblock__title__1
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
                                        styles.wax__content__mainblock__title__2
                                    }
                                >
                                    Подарочные наборы
                                </div>
                            </Link>
                        </div>

                        <div
                            className={
                                styles.wax__content__mainblock__categories
                            }
                        >
                            <Link
                                to='/catalog/wax/all'
                                style={{ textDecoration: 'none' }}
                            >
                                <div
                                    className={
                                        styles.wax__content__mainblock__categories__2
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
                                        styles.wax__content__mainblock__categories__1
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
                                        styles.wax__content__mainblock__categories__2
                                    }
                                >
                                    Свечи
                                </div>
                            </Link>
                        </div>

                        <div className={styles.wax__content__mainblock__items}>
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

                    <div className={styles.wax__content__imgs2}>
                        <div className={styles.wax__content__imgs2__1}>
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

export default WaxOnly;
