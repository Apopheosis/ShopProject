import React, {useContext, useState} from 'react';
import styles from './FinishOrder.module.scss';
import Header from '../../MainPageFolder/Header/Header';
import pot2 from '../../../assets/images/pot2.png';
import cells9 from '../../../assets/images/cells9.png';
import robokassa from '../../../assets/images/robokassa.png';
import Footer from '../../MainPageFolder/Footer/Footer';

import { useEffect } from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {UserContext} from "../../../App";

const FinishOrder = () => {
    let navigate = useNavigate()
    const {user, setUser} = useContext(UserContext)
    const {token, itemsOrdered} = user
    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    /*function ScrollToTop() {
        const { pathname } = useLocation();

        useEffect(() => {
            window.scrollTo(0, 0);
        }, [pathname]);

        return null;
    }*/

    useEffect(() => {
            const itemsCount = itemsOrdered.map(itemCount => ({'item_id': itemCount.item.id, 'count': itemCount.count}))
            console.log(itemsCount)
            fetch(`http://localhost:8000/orders`, {
                method: 'POST',
                headers: {
                    accept: 'application/json',
                    'Content-type': 'application/json',
                    Authorization: `Bearer ${token.access_token}`
                },
                body: JSON.stringify({'items': itemsCount})
            }).then(result => {
                if (result.status !== 200) {
                    throw new Error('Unable to sign up.')
                }
                return result.json()
            }).then((data) => {
                    setIsLoaded(true)
                }, (error) => {
                    console.log(error)
                    setError(error)
                    setIsLoaded(true)
                }
            )
        },[])
    if (error) {
        // @ts-ignore
        return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Загрузка...</div>;
    } else {
        return (
            <div>
                <div className={styles.finish}>
                    <Header/>
                    <div className={styles.finish__content}>
                        <div className={styles.finish__content__img1}>
                            <img src={cells9}/>
                        </div>

                        <div className={styles.finish__content__text}>
                            <h1>Спасибо! Ваш заказ принят.</h1>
                            <img src={robokassa}/>
                            <button>Оплатить</button>
                        </div>

                        <div className={styles.finish__content__img2}>
                            <img src={pot2}/>
                        </div>
                    </div>
                    <div>
                        <Footer/>
                    </div>
                </div>
            </div>
        );
    }
};

export default FinishOrder;
