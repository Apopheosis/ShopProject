import React, {useContext, useEffect, useState} from 'react';

import Header from '../../../MainPageFolder/Header/Header';
import styles from './HerbsMonastic.module.scss';
import { Link } from 'react-router-dom';

import sunflower1 from '../../../../assets/images/sunflower1.png';
import sunflower5 from '../../../../assets/images/sunflower5.png';

import cells10 from '../../../../assets/images/cells10.png';
import Footer from '../../../MainPageFolder/Footer/Footer';
import CatalogItem from '../../CatalogItem/CatalogItem';

import herb1 from '../../../../assets/images/CatalogImg/herb1.png';
import herb2 from '../../../../assets/images/CatalogImg/herb2.png';
import herb3 from '../../../../assets/images/CatalogImg/herb3.png';
import herb4 from '../../../../assets/images/CatalogImg/herb4.png';
import herb5 from '../../../../assets/images/CatalogImg/herb5.png';
import herb6 from '../../../../assets/images/CatalogImg/herb6.png';
import herb7 from '../../../../assets/images/CatalogImg/herb7.png';
import herb8 from '../../../../assets/images/CatalogImg/herb8.png';
import {UserContext} from "../../../../App";

const HerbsMonastic = () => {
    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const [items, setItems] = useState<any[]>([]);
    const {user, setUser} = useContext(UserContext)
    const {id, token, itemsOrdered} = user

    const addToOrder = (catalogueItem: any) => {
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
    }

    useEffect(() => {
        /*
        setUser(JSON.parse(window.localStorage.getItem('user')!))
        console.log(window.localStorage.getItem('user'))*/
        fetch('http://localhost:8000/items/herbs/monastic')
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
            <div className={styles.monastic}>
                <Header />
                <div className={styles.monastic__content}>
                    <div className={styles.monastic__content__imgs1}>
                        <div className={styles.monastic__content__imgs1__1}>
                            <img src={cells10} />
                        </div>

                        <div className={styles.monastic__content__imgs1__2}>
                            <img src={sunflower1} width={150} />
                        </div>
                    </div>

                    <div className={styles.monastic__content__mainblock}>
                        <div
                            className={
                                styles.monastic__content__mainblock__title
                            }
                        >
                            <Link
                                to='/catalog/honey/all'
                                style={{ textDecoration: 'none' }}
                            >
                                <div
                                    className={
                                        styles.monastic__content__mainblock__title__2
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
                                        styles.monastic__content__mainblock__title__1
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
                                        styles.monastic__content__mainblock__title__2
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
                                        styles.monastic__content__mainblock__title__2
                                    }
                                >
                                    Подарочные наборы
                                </div>
                            </Link>
                        </div>

                        <div
                            className={
                                styles.monastic__content__mainblock__categories
                            }
                        >
                            <Link
                                to='/catalog/herbs/all'
                                style={{ textDecoration: 'none' }}
                            >
                                <div
                                    className={
                                        styles.monastic__content__mainblock__categories__2
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
                                        styles.monastic__content__mainblock__categories__1
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
                                        styles.monastic__content__mainblock__categories__2
                                    }
                                >
                                    Фитосборы
                                </div>
                            </Link>
                        </div>

                        <div
                            className={
                                styles.monastic__content__mainblock__items
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

                    <div className={styles.monastic__content__imgs2}>
                        <div className={styles.monastic__content__imgs2__1}>
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

export default HerbsMonastic;
