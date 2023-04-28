import React, {useContext, useEffect, useState} from 'react';
import styles from './Registration.module.scss';
import cells1 from '../../../assets/images/cells1.png';
import cells2 from '../../../assets/images/cells2.png';
import Header from '../../MainPageFolder/Header/Header';
import Footer from '../../MainPageFolder/Footer/Footer';
import {UserContext} from "../../../App";
import { useNavigate } from 'react-router-dom';

const Registration = () => {
    let navigate = useNavigate()
    const [Name, setName] = useState('')
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const {user, setUser} = useContext(UserContext)


    useEffect(() => {
        setUser(JSON.parse(window.localStorage.getItem('user')!))
    },[])

    useEffect(() => {
        window.localStorage.setItem('user', JSON.stringify(user))
    },[user])

    const SignUp = () => {
        if (Email == '' || Name == '' || Password == '') {
            return
        }
        fetch('http://localhost:8000/sign-up', {
            method: 'POST',
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"email": Email, "name": Name, "password": Password})
        }).then(result => {
            if (result.status !== 200) {
                throw new Error('Unable to sign up.')
            }
            return result.json()
        }).then((data) => {
            setUser(data)
            data.itemsOrdered = []
            setIsLoaded(true)
            window.localStorage.setItem('user', JSON.stringify(user))
        }, (error) => {
            console.log(error)
            setError(error)
            setIsLoaded(true)
        }
        )

        navigate('/')
    }
    return (
        <div>
            <div className={styles.registration}>
                <Header />
                <div className={styles.registration__content}>
                    <div className={styles.registration__content__img1}>
                        <img src={cells1} />
                    </div>

                    <div className={styles.registration__content__text}>
                        <h1>Регистрация</h1>
                        <input type='text' placeholder='E-mail' value={Email} onInput={e => setEmail((e.target as HTMLInputElement).value)}/>
                        <input type='text' placeholder='Имя' value={Name} onInput={e => setName((e.target as HTMLInputElement).value)}/>
                        <input type='password' placeholder='Пароль' value={Password} onInput={e => setPassword((e.target as HTMLInputElement).value)} />

                        <div
                            className={
                                styles.registration__content__text__agreement
                            }
                        >
                            <input
                                type='checkbox'
                                className='checkbox'
                                id='box'
                            />

                            <h2>
                                Я даю согласие на обработку моих персональных
                                данных и выражаю согласие с политикой
                                конфиденциальности
                            </h2>
                        </div>

                        <button style={{ marginTop: '10px' }} onClick={() => {SignUp()}}>
                            Зарегистрироваться
                        </button>
                    </div>

                    <div className={styles.registration__content__img2}>
                        <img src={cells2} />
                    </div>
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default Registration;