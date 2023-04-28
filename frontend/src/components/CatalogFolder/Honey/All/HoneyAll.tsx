import React, {useContext, useEffect, useState} from 'react';
import Header from '../../../MainPageFolder/Header/Header';
import styles from './HoneyAll.module.scss';
import { Link } from 'react-router-dom';

import sunflower1 from '../../../../assets/images/sunflower1.png';
import sunflower5 from '../../../../assets/images/sunflower5.png';

import cells10 from '../../../../assets/images/cells10.png';
import Footer from '../../../MainPageFolder/Footer/Footer';
import CatalogItem from '../../CatalogItem/CatalogItem';

import honey1 from '../../../../assets/images/CatalogImg/honey1.png';
import honey2 from '../../../../assets/images/CatalogImg/honey2.png';
import honey3 from '../../../../assets/images/CatalogImg/honey3.png';
import honey4 from '../../../../assets/images/CatalogImg/honey4.png';
import honey5 from '../../../../assets/images/CatalogImg/honey5.png';
import honey6 from '../../../../assets/images/CatalogImg/honey6.png';
import honey7 from '../../../../assets/images/CatalogImg/honey7.png';
import honey8 from '../../../../assets/images/CatalogImg/honey8.png';
import honey9 from '../../../../assets/images/CatalogImg/honey9.png';
import honey10 from '../../../../assets/images/CatalogImg/honey10.png';
import honey11 from '../../../../assets/images/CatalogImg/honey11.png';
import honey12 from '../../../../assets/images/CatalogImg/honey12.png';
import honey13 from '../../../../assets/images/CatalogImg/honey13.png';
import honey14 from '../../../../assets/images/CatalogImg/honey14.png';
import honey15 from '../../../../assets/images/CatalogImg/honey15.png';
import honey16 from '../../../../assets/images/CatalogImg/honey16.png';
import honey17 from '../../../../assets/images/CatalogImg/honey17.png';
import honey18 from '../../../../assets/images/CatalogImg/honey18.png';
import honey19 from '../../../../assets/images/CatalogImg/honey19.png';
import honey20 from '../../../../assets/images/CatalogImg/honey20.png';
import {UserContext} from "../../../../App";


const HoneyAll = () => {
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
        fetch('http://localhost:8000/items/honey')
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

    if (error) {
        // @ts-ignore
        return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Загрузка...</div>
    }
    return (
        <div>
            <div className={styles.all}>
                <UserContext.Provider value={{user, setUser}}>
                    <Header />
                </UserContext.Provider>
                <div className={styles.all__content}>
                    <div className={styles.all__content__imgs1}>
                        <div className={styles.all__content__imgs1__1}>
                            <img src={cells10} />
                        </div>

                        <div className={styles.all__content__imgs1__2}>
                            <img src={sunflower1} width={150} />
                        </div>

                        <div className={styles.all__content__imgs1__3}>
                            <img src={sunflower1} width={150} />
                        </div>
                    </div>

                    <div className={styles.all__content__mainblock}>
                        <div className={styles.all__content__mainblock__title}>
                            <Link
                                to='/catalog/honey/all'
                                style={{ textDecoration: 'none' }}
                            >
                                <div
                                    className={
                                        styles.all__content__mainblock__title__1
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
                                        styles.all__content__mainblock__title__2
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
                                        styles.all__content__mainblock__title__2
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
                                        styles.all__content__mainblock__title__2
                                    }
                                >
                                    Подарочные наборы
                                </div>
                            </Link>
                        </div>

                        <div
                            className={
                                styles.all__content__mainblock__categories
                            }
                        >
                            <Link
                                to='/catalog/honey/all'
                                style={{ textDecoration: 'none' }}
                            >
                                <div
                                    className={
                                        styles.all__content__mainblock__categories__1
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
                                        styles.all__content__mainblock__categories__2
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
                                        styles.all__content__mainblock__categories__2
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
                                        styles.all__content__mainblock__categories__2
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
                                        styles.all__content__mainblock__categories__2
                                    }
                                >
                                    Сады Тавриды
                                </div>
                            </Link>
                        </div>

                        <div className={styles.all__content__mainblock__items}>
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

                    <div className={styles.all__content__imgs2}>
                        <div className={styles.all__content__imgs2__1}>
                            <img src={sunflower5} width={150} />
                        </div>

                        <div className={styles.all__content__imgs2__2}>
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

export default HoneyAll;

/*<CatalogItem
    img={honey4}
    title='Мёд Горный ЭКО 550 гр.'
    price={836}
/>

<CatalogItem
    img={honey2}
    title='Мёд Горный ЭКО 250 гр.'
    price={407}
/>
<CatalogItem
    img={honey3}
    title='Мёд Горный ЭКО 350 гр.'
    price={550}
/>
<CatalogItem
    img={honey1}
    title='Мёд Горный ЭКО 150 гр.'
    price={264}
/>
<CatalogItem
    img={honey5}
    title='Мёд Горный ЭКО 1000 гр.'
    price={1479}
/>
<CatalogItem
    img={honey6}
    title='Мёд “Крымская коллекция” 150 гр.'
    price={211}
/>
<CatalogItem
    img={honey7}
    title='Мёд “Крымская коллекция” 250 гр.'
    price={318}
/>
<CatalogItem
    img={honey8}
    title='Мёд “Крымская коллекция” 350 гр.'
    price={425}
/>
<CatalogItem
    img={honey9}
    title='Мёд “Крымская коллекция” 550 гр.'
    price={639}
/>
<CatalogItem
    img={honey10}
    title='Мёд “Крымская коллекция” 1000 гр.'
    price={1121}
/>
<CatalogItem
    img={honey11}
    title='Мёд Лавандовый 150 гр.'
    price={264}
/>
<CatalogItem
    img={honey12}
    title='Мёд Лавандовый 250 гр.'
    price={407}
/>
<CatalogItem
    img={honey13}
    title='Мёд Лавандовый 350 гр.'
    price={550}
/>
<CatalogItem
    img={honey14}
    title='Мёд Лавандовый 550 гр.'
    price={836}
/>
<CatalogItem
    img={honey15}
    title='Мёд Лавандовый 1000 гр.'
    price={1479}
/>
<CatalogItem
    img={honey16}
    title='Мёд “Сады Тавриды” 150 гр.'
    price={211}
/>
<CatalogItem
    img={honey17}
    title='Мёд “Сады Тавриды” 250 гр.'
    price={318}
/>
<CatalogItem
    img={honey18}
    title='Мёд “Сады Тавриды” 350 гр.'
    price={425}
/>
<CatalogItem
    img={honey19}
    title='Мёд “Сады Тавриды” 550 гр.'
    price={639}
/>
<CatalogItem
    img={honey20}
    title='Мёд “Сады Тавриды” 1000 гр.'
    price={1121}
/>*/
