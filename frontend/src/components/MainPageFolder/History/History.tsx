import React from 'react';
import styles from './History.module.scss';
import sunflower1 from '../../../assets/images/sunflower1.png';
import beekeeper from '../../../assets/images/beekeeper.png';

const History: React.FC = () => {
    return (
        <div>
            <div className={styles.history}>
                <div className={styles.history__title}>
                    <h1>Наша история</h1>
                </div>
                <div className={styles.history__sunflower}>
                    <img src={sunflower1} />
                </div>

                <div className={styles.history__textAndPic}>
                    <div className={styles.history__textAndPic__text}>
                        <h2>
                            История крестьянского хозяйства Виноградовых берет
                            начало в 1959г., когда её основатель - Михаил
                            Виноградов решил воссоздать на благодатной земле
                            Крыма - Тавриды личное подсобное пасечное хозяйство.
                        </h2>
                        <h2>
                            Возрожденное, обновлённое, а также расширенное
                            крестьянское хозяйство Виноградовых - это фамильное
                            дело, где свято чтут традиции русского пчеловодства,
                            предлагая продукцию только безупречного качества.
                        </h2>
                        <button>Подробнее</button>
                    </div>
                    <div className={styles.history__textAndPic__image}>
                        <img src={beekeeper} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default History;
