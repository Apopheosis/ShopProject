import React, {useContext, useState} from 'react';
import Footer from '../../MainPageFolder/Footer/Footer';
import Header from '../../MainPageFolder/Header/Header';
import styles from './Cart.module.scss';
import cells8 from '../../../assets/images/cells8.png';
import sunflower4 from '../../../assets/images/sunflower4.png';
import CartItem from '../CartItem/CartItem';
import cartitem1 from '../../../assets/images/cartitem1.png';
import cartitem2 from '../../../assets/images/cartitem2.png';

import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { UserContext} from "../../../App";

const titleItem1: string = 'Мёд Горный ЭКО 550 гр.';
const priceItem1: number = 836;
const countItem1: number = 2;
const totalPriceItem1: number = 1672;

const titleItem2: string = '"Чай Монастырский" успокоительный';
const priceItem2: number = 520;
const countItem2: number = 1;
const totalPriceItem2: number = 520;



const Cart = () => {
    const {user, setUser} = useContext(UserContext)
    const {id, token, itemsOrdered} = user
    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const [items, setItems] = useState([])

    const removeElement = (catalogueItemId: number) => {
        //setUser(JSON.parse(window.localStorage.getItem('user')!))
        const catalogueItem = itemsOrdered.find(itemCount => itemCount.item.id == catalogueItemId)!
        setUser(prevUser => ({
            ...prevUser,
            itemsOrdered: prevUser.itemsOrdered.filter((member) => member.item.id !== catalogueItem.item.id)
        }))
        window.localStorage.setItem('user', JSON.stringify(user))
    }

    const IncreaseCount = (catalogueItemId: number) => {
        //setUser(JSON.parse(window.localStorage.getItem('user')!))
        const catalogueItem = itemsOrdered.find(itemCount => itemCount.item.id == catalogueItemId)!
        const ind = itemsOrdered.findIndex(itemCount => itemCount.item.id === catalogueItem.item.id)
        console.log(ind)
        setUser(prevUser => ({
            ...prevUser,
            ...itemsOrdered[ind],
            count: prevUser.itemsOrdered[ind].count++
        }))
        window.localStorage.setItem('user', JSON.stringify(user))
    }

    const DecreaseCount = (catalogueItemId: number) => {
        //setUser(JSON.parse(window.localStorage.getItem('user')!))
        const catalogueItem = itemsOrdered.find(itemCount => itemCount.item.id == catalogueItemId)!
        const ind = itemsOrdered.findIndex(itemCount => itemCount.item.id === catalogueItem.item.id)
        const count = itemsOrdered[ind].count
        if (count - 1 == 0) {
            removeElement(catalogueItemId)
            return
        }
        setUser(prevUser => ({
            ...prevUser,
            ...itemsOrdered[ind],
            count: prevUser.itemsOrdered[ind].count--
        }))
        window.localStorage.setItem('user', JSON.stringify(user))
    }


    /*useEffect(() => {
        setUser(JSON.parse(window.localStorage.getItem('user')!))
        console.log(window.localStorage.getItem('user'))
    },[])*/

    /*useEffect(() => {
        window.localStorage.setItem('user', JSON.stringify(user))
        console.log(window.localStorage.getItem('user'))
    },[itemsOrdered])*/


    /*function ScrollToTop() {
        const { pathname } = useLocation();

        useEffect(() => {
            window.scrollTo(0, 0);
        }, [pathname]);

        return null;
    }*/

    console.log(itemsOrdered)
    /*
    if (error) {
        // @ts-ignore
        return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Загрузка...</div>;
    } else {*/
        return (
            <div>
                <div className={styles.cart}>
                    <Header/>
                    <div className={styles.cart__content}>
                        <div className={styles.cart__content__img1}>
                            <img src={sunflower4}/>
                        </div>

                        <div className={styles.cart__content__block}>
                            <div className={styles.cart__content__block__info}>
                                <h1>Корзина</h1>
                            </div>

                            <div className={styles.cart__content__block__items}>
                                <UserContext.Consumer>
                                    {({user}) => (
                                        user.itemsOrdered != undefined && user.itemsOrdered.map((item: any) => (
                                                <CartItem
                                                    id={item.item.id}
                                                    img={item.item.img_url}
                                                    title={item.item.item_name}
                                                    price={item.item.price}
                                                    count={item.count}
                                                    handleDelete={() => removeElement(item.item.id)}
                                                    handleIncrease={() => IncreaseCount(item.item.id)}
                                                    handleDecrease={() => DecreaseCount(item.item.id)}
                                                />
                                            )))
                                    }
                                </UserContext.Consumer>

                            </div>

                            <div className={styles.cart__content__block__hr}>
                                <hr/>
                            </div>

                            <div className={styles.cart__content__block__finals}>
                                <UserContext.Consumer>
                                    {
                                        ({user}) => (
                                            <h1>Итого {user.itemsOrdered != undefined && user.itemsOrdered.reduce((accumulator: any, currentValue: any) => accumulator + currentValue.item.price*currentValue.count, 0)} руб.</h1>
                                        )
                                    }
                                </UserContext.Consumer>
                                <UserContext.Consumer>
                                    {
                                        ({user}) => (
                                            ((user.itemsOrdered != undefined) && (user.itemsOrdered.length > 0) ) ? (
                                                <Link to='/finishorder'>
                                                    <button>Оформить заказ</button>
                                                </Link>
                                            ) : (
                                                <button>Оформить заказ</button>
                                            ))
                                    }
                                </UserContext.Consumer>


                                <h2>
                                    Оплата доставки производится Покупателем при
                                    получении заказа.
                                </h2>
                            </div>
                        </div>

                        <div className={styles.cart__content__img2}>
                            <img src={cells8}/>
                        </div>
                    </div>
                    <div>
                        <Footer/>
                    </div>
                </div>
            </div>
        );
};

export default Cart;
