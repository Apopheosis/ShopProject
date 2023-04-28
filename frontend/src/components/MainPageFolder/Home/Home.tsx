import React from 'react';
import styles from './Home.module.scss';
import cells1 from '../../../assets/images/cells1.png';
import cells2 from '../../../assets/images/cells2.png';

const Home = () => {
    return (
        <div>
            <div className={styles.home}>
                <div className={styles.home__cells}>
                    <div className={styles.home__cells__1}>
                        <img src={cells1} width={350} />
                    </div>

                    <div className={styles.home__cells__main}>
                        <div className={styles.home__cells__main__title}>
                            <h1>
                                Натуральный мед
                                <br />
                                из солнечного Крыма
                            </h1>
                        </div>

                        <div className={styles.home__cells__main__info}>
                            <h1>
                                Экологически чистый и вкусный мёд напрямую с
                                <br />
                                пасеки Виноградовых
                            </h1>
                        </div>

                        <div className={styles.home__cells__main__button}>
                            <button>Перейти в каталог</button>
                        </div>
                    </div>

                    <div className={styles.home__cells__2}>
                        <img src={cells2} width={300} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
