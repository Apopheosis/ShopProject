import React, {useContext, useEffect, useState} from 'react';
import Header from '../../MainPageFolder/Header/Header';
import cells10 from '../../../assets/images/cells10.png';
import cells8 from '../../../assets/images/cells8.png';
import arrow_l from '../../../assets/images/arrow_l.png';
import Footer from '../../MainPageFolder/Footer/Footer';
import styles from './Candle.module.scss';

import candle1 from '../../../assets/images/ProductsImg/candle1.png';
import candle2 from '../../../assets/images/ProductsImg/candle2.png';
import candle3 from '../../../assets/images/ProductsImg/candle3.png';
import {useParams} from "react-router";
import {UserContext} from "../../../App";

interface item {
    id: number
    item_name: string
    price: number
    mass: number
    description: string
    category: string
    subcategory: string
    harvest_date: string | null
    compound: string
    package: string
    size: string | null
    tips: string | null
    manufacturer: string | null
    img_url: string[]
}


const Candle = () => {
    const {id} = useParams<{id: string}>();
    const [error, setError] = useState(null)
    const [result, setResult] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const [item, setItem] = useState<item | null>(null);
    const {user, setUser} = useContext(UserContext)
    const { itemsOrdered} = user

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
        fetch(`http://localhost:8000/products/${id}`)
            .then((res) =>
                res.json()
            )
            .then(
                data => {
                    setItem(data)
                    setIsLoaded(true)
                },
                (error) => {
                    setIsLoaded(true)
                    setError(error)
                }
            )

    }, [id])
    console.log(item)
    if (error) {
        // @ts-ignore
        return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Загрузка...</div>
    }
    return (
        <div>
            <div className={styles.candle}>
                <Header />
                <div className={styles.candle__content}>
                    <div className={styles.candle__content__img1}>
                        <img src={cells10} />
                    </div>

                    <div className={styles.candle__content__mainblock}>
                        <div
                            className={styles.candle__content__mainblock__path}
                        >
                            <h1>
                                <img src={arrow_l} width={12} /> Назад
                            </h1>
                            <h2>
                                | Главная / Воск/свечи / {(() => {
                                switch(item!.subcategory) {
                                    case 'all':
                                        return 'Все'
                                    case 'wax':
                                        return 'Воск'
                                    case 'candles':
                                        return 'Свечи'
                                    default:
                                        return 'unknown subcategory'
                                }
                            })()} / {item!.item_name}
                            </h2>
                        </div>

                        <div
                            className={
                                styles.candle__content__mainblock__product
                            }
                        >
                            <div
                                className={
                                    styles.candle__content__mainblock__product__images
                                }
                            >
                                <div
                                    className={
                                        styles.candle__content__mainblock__product__images__big
                                    }
                                >
                                    <div className={styles.left}>
                                        <img src={arrow_l} width={25} />
                                    </div>
                                    <img src={item!.img_url[0]} />
                                    <div className={styles.right}>
                                        <img src={arrow_l} width={25} />
                                    </div>
                                </div>
                                <div
                                    className={
                                        styles.candle__content__mainblock__product__images__small
                                    }
                                >
                                    <img src={item!.img_url[1]} />
                                    <img src={item!.img_url[2]} />
                                </div>
                            </div>

                            <div
                                className={
                                    styles.candle__content__mainblock__product__desc
                                }
                            >
                                <h1>{item!.item_name}</h1>

                                <h2>{item!.price} руб.</h2>
                                <h4>Масса нетто</h4>
                                <h6>{item!.mass} гр.</h6>

                                <h4>Упаковка</h4>
                                <h5>{item!.package}</h5>

                                <h4>Материалы</h4>
                                <h5>
                                    {item!.compound}
                                </h5>
                                <h4>Размер</h4>
                                <h5>{item!.size}</h5>
                                <button onClick={() => addToOrder(item)}>В корзину</button>
                            </div>
                        </div>
                        <div
                            className={styles.candle__content__mainblock__text}
                        >
                            <h1>Описание</h1>
                            <h2>
                                {item!.description}
                            </h2>
                            <h1>Полезные советы</h1>
                            <h2>
                                {item!.tips}
                            </h2>
                            <h1>Изготовитель/упаковщик</h1>
                            <h2>
                                {item?.manufacturer}
                            </h2>
                        </div>
                    </div>

                    <div className={styles.candle__content__img2}>
                        <img src={cells8} />
                    </div>
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default Candle;
