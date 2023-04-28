import React, {useContext, useEffect, useState} from 'react';

import Header from '../../../MainPageFolder/Header/Header';
import styles from './GiftsAll.module.scss';
import { Link } from 'react-router-dom';

import sunflower5 from '../../../../assets/images/sunflower5.png';

import cells10 from '../../../../assets/images/cells10.png';
import Footer from '../../../MainPageFolder/Footer/Footer';
import CatalogItem from '../../CatalogItem/CatalogItem';

import gift1 from '/frontend/src/assets/images/CatalogImg/gift1.png';
import gift2 from '/frontend/src/assets/images/CatalogImg/gift2.png';
import gift3 from '/frontend/src/assets/images/CatalogImg/gift3.png';
import gift4 from '/frontend/src/assets/images/CatalogImg/gift4.png';
import gift5 from '/frontend/src/assets/images/CatalogImg/gift5.png';
import gift6 from '/frontend/src/assets/images/CatalogImg/gift6.png';
import gift7 from '/frontend/src/assets/images/CatalogImg/gift7.png';
import gift8 from '/frontend/src/assets/images/CatalogImg/gift8.png';
import gift9 from '/frontend/src/assets/images/CatalogImg/gift9.png';
import {UserContext} from "../../../../App";


const GiftsAll = () => {
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
        fetch('http://localhost:8000/items/gifts')
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
    } else {

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
                    </div>

                    <div className={styles.all__content__mainblock}>
                        <div className={styles.all__content__mainblock__title}>
                            <Link
                                to='/catalog/honey/all'
                                style={{ textDecoration: 'none' }}
                            >
                                <div
                                    className={
                                        styles.all__content__mainblock__title__2
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

                            <div
                                className={
                                    styles.all__content__mainblock__title__1
                                }
                            >
                                Подарочные наборы
                            </div>
                        </div>

                        <div className={styles.all__content__mainblock__items}>


                                {items.map((item) => (
                                    <div className={styles.item}>
                                    <Link
                                        to={`/products/gift/${item.id}`}
                                        style={{ textDecoration: 'none' }}
                                    >
                                <div>
                                    <div key={item.id} >
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
                    </div>
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default GiftsAll;

/*                          <CatalogItem
                                img={gift3}
                                title='Мёд подарочный "Солнечный Крым", базилика'
                                price={2000}
                            />
                            <CatalogItem
                                img={gift2}
                                title='Мёд подарочный "Генуэзская крепость"'
                                price={2000}
                            />
                            <CatalogItem
                                img={gift1}
                                title='Мёд подарочный гора "Аю-Даг"'
                                price={2000}
                            />
                            <CatalogItem
                                img={gift4}
                                title='Мёд подарочный памятник "Затопленным кораблям"'
                                price={2000}
                            />
                            <CatalogItem
                                img={gift5}
                                title='Мёд подарочный крепость "Чембало" в Балаклаве'
                                price={2000}
                            />
                            <CatalogItem
                                img={gift6}
                                title='Мёд подарочный замок "Ласточкино гнездо"'
                                price={2000}
                            />
                            <CatalogItem
                                img={gift7}
                                title='Мёд подарочный "скала Св. Явления, мыс Фиолент"'
                                price={2000}
                            />
                            <CatalogItem
                                img={gift8}
                                title='Мёд подарочный собор св. равноап. Кн. Владимира'
                                price={2000}
                            />
                            <CatalogItem
                                img={gift9}
                                title='Мёд подарочный скала "Золотые ворота"'
                                price={2000}
                            />*/