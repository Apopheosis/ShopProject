import React, {useContext, useEffect, useState} from 'react';

import Header from '../../../MainPageFolder/Header/Header';
import styles from './HerbsFitosbor.module.scss';
import { Link } from 'react-router-dom';

import sunflower1 from '../../../../assets/images/sunflower1.png';
import sunflower5 from '../../../../assets/images/sunflower5.png';

import cells10 from '../../../../assets/images/cells10.png';
import Footer from '../../../MainPageFolder/Footer/Footer';
import CatalogItem from '../../CatalogItem/CatalogItem';

import herb9 from '../../../../assets/images/CatalogImg/herb9.png';
import herb10 from '../../../../assets/images/CatalogImg/herb10.png';
import herb11 from '../../../../assets/images/CatalogImg/herb11.png';
import herb12 from '../../../../assets/images/CatalogImg/herb12.png';
import herb13 from '../../../../assets/images/CatalogImg/herb13.png';
import herb14 from '../../../../assets/images/CatalogImg/herb14.png';
import {UserContext} from "../../../../App";

const HerbsFitosbor = () => {
    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const [items, setItems] = useState<any[]>([]);
    const {user, setUser} = useContext(UserContext)
    const {id, token, itemsOrdered} = user

    const addToOrder = (catalogueItem: any) => {
        /*
        setUser(JSON.parse(window.localStorage.getItem('user')!))*/
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
        fetch('http://localhost:8000/items/herbs/fitosbor')
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
            <div className={styles.fitosbor}>
                <Header />
                <div className={styles.fitosbor__content}>
                    <div className={styles.fitosbor__content__imgs1}>
                        <div className={styles.fitosbor__content__imgs1__1}>
                            <img src={cells10} />
                        </div>
                    </div>

                    <div className={styles.fitosbor__content__mainblock}>
                        <div
                            className={
                                styles.fitosbor__content__mainblock__title
                            }
                        >
                            <Link
                                to='/catalog/honey/all'
                                style={{ textDecoration: 'none' }}
                            >
                                <div
                                    className={
                                        styles.fitosbor__content__mainblock__title__2
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
                                        styles.fitosbor__content__mainblock__title__1
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
                                        styles.fitosbor__content__mainblock__title__2
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
                                        styles.fitosbor__content__mainblock__title__2
                                    }
                                >
                                    Подарочные наборы
                                </div>
                            </Link>
                        </div>

                        <div
                            className={
                                styles.fitosbor__content__mainblock__categories
                            }
                        >
                            <Link
                                to='/catalog/herbs/all'
                                style={{ textDecoration: 'none' }}
                            >
                                <div
                                    className={
                                        styles.fitosbor__content__mainblock__categories__2
                                    }
                                >
                                    Все
                                </div>
                            </Link>
                            <Link
                                to='/catalog/herbs/monastic'
                                style={{ textDecoration: 'none' }}
                            >
                                <div
                                    className={
                                        styles.fitosbor__content__mainblock__categories__2
                                    }
                                >
                                    "Чай монастырский"
                                </div>
                            </Link>
                            <Link
                                to='/catalog/herbs/fitosbor'
                                style={{ textDecoration: 'none' }}
                            >
                                <div
                                    className={
                                        styles.fitosbor__content__mainblock__categories__1
                                    }
                                >
                                    Фитосборы
                                </div>
                            </Link>
                        </div>

                        <div
                            className={
                                styles.fitosbor__content__mainblock__items
                            }
                        >
                            {items.map((item) => (
                                <div className={styles.item}>
                                    <Link
                                        to={`/products/tea/${item.id}`}
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

                    <div className={styles.fitosbor__content__imgs2}>
                        <div className={styles.fitosbor__content__imgs2__1}>
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

export default HerbsFitosbor;
