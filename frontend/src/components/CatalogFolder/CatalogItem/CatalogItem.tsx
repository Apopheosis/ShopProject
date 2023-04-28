import React from 'react';
import styles from './CatalogItem.module.scss';

interface CatalogItem {
    img: string;
    title: string;
    price: number;
}

const CatalogItem: React.FC<CatalogItem> = ({img, title, price }) => {
    return (
        <div>
            <div className={styles.item}>
                <img src={img} />
                <h1>{title}</h1>
                <h3>{price} руб.</h3>
                <button>В корзину</button>
            </div>
        </div>
    );
};

export default CatalogItem;
