import React, {useContext, useEffect, useState} from 'react';
import styles from './CartItem.module.scss';
import cartitem1 from '../../../assets/images/cartitem1.png';
import cartitem2 from '../../../assets/images/cartitem2.png';
import cross from '../../../assets/images/cross.png';
import { UserContext} from "../../../App";

interface CartElements {
    id: number
    img: string;
    title: string;
    price: number;
    count: number;
    handleDelete: any,
    handleIncrease: any,
    handleDecrease: any
}


const CartItem: React.FC<CartElements> = ({
    id,
    img,
    title,
    price,
    count,
    handleDelete,
    handleIncrease,
    handleDecrease
}) => {
    console.log(count)

    return (
        <div>
            <div className={styles.cartitem}>
                <div className={styles.cartitem__img}>
                    <img src={img} />
                </div>

                <div className={styles.cartitem__title}>
                    <h1>{title}</h1>
                </div>

                <div className={styles.cartitem__price}>
                    <h1>{price} руб.</h1>
                </div>

                <div className={styles.cartitem__count}>
                    <div onClick={() => handleDecrease(id)}>-</div>
                    <h1>{count}</h1>
                    <div onClick={() => handleIncrease(id)}>+</div>
                </div>

                <div className={styles.cartitem__totalPrice}>
                    <h1>{count*price} руб.</h1>
                </div>

                <div className={styles.cartitem__img}>

                    <img src={cross} width={20} onClick={() => {handleDelete(id); console.log(id)}} />

                </div>

            </div>
        </div>
    );
};

export default CartItem;
