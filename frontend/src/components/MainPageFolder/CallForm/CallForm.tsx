import React from 'react';
import styles from './CallForm.module.scss';
import pot1 from '../../../assets/images/pot1.png';

const CallForm = () => {
    return (
        <div>
            <div className={styles.callform}>
                <div className={styles.callform__form}>
                    <div className={styles.callform__form__content}>
                        <div className={styles.callform__form__content__title}>
                            <h1>
                                Если у вас остались вопросы, оставьте заявку и
                                мы свяжемся с вами
                            </h1>
                        </div>

                        <div className={styles.callform__form__content__input}>
                            <h2>Имя</h2>
                            <input type='text' placeholder='Ваше имя' />
                        </div>

                        <div className={styles.callform__form__content__input}>
                            <h2>Номер телефона</h2>
                            <input type='text' placeholder='Номер телефона' />
                        </div>

                        <div className={styles.callform__form__content__button}>
                            <button>Отправить</button>
                        </div>
                    </div>
                </div>
                <div className={styles.callform__image}>
                    <img src={pot1} />
                </div>
            </div>
        </div>
    );
};

export default CallForm;
