import React, {useContext, useEffect, useState} from 'react';
import styles from './Auth.module.scss';
import cells1 from '../../../assets/images/cells1.png';
import cells2 from '../../../assets/images/cells2.png';
import Header from '../../MainPageFolder/Header/Header';
import Footer from '../../MainPageFolder/Footer/Footer';
import {UserContext} from "../../../App";
import {useNavigate} from "react-router-dom";

const Auth = () => {
    let navigate = useNavigate()
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const {user, setUser} = useContext(UserContext)
    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)

    /*useEffect(() => {
        setUser(JSON.parse(window.localStorage.getItem('user')!))
    },[])

    useEffect(() => {
        window.localStorage.setItem('user', JSON.stringify(user))
    },[user])*/

    const Auth = () => {
        if (Email == '' || Password == '') {
            return
        }
        let formData = new FormData()
        formData.append('username', Email)
        formData.append('password', Password)
        fetch(`http://localhost:8000/auth`, {
            method: 'POST',
            headers: {
                accept: 'application/json'
            },
            body: formData
        }).then(result => {
            if (result.status !== 200) {
                throw new Error('Unable to sign up.')
            }
            return result.json()
        }).then((data) => {
                setUser(prevUser => ({
                    ...prevUser,
                    token: {
                        ...prevUser.token,
                        access_token: data.access_token,
                        expires: data.expires,
                        token_type: data.token_type
                    }
                }))
                setIsLoaded(true)
                navigate(-1)
            }, (error) => {
                console.log(error)
                setError(error)
                setIsLoaded(true)
            }
        )
    }
    if (error) {
        // @ts-ignore
        return <div>Ошибка: {error.message}</div>;
    } else {
        return (
            <div>
                <div className={styles.auth}>
                    <Header/>
                    <div className={styles.auth__content}>
                        <div className={styles.auth__content__img1}>
                            <img src={cells1}/>
                        </div>

                        <div className={styles.auth__content__text}>
                            <h1>Войти</h1>
                            <input type='text' placeholder='E-mail' value={Email}
                                   onInput={e => setEmail((e.target as HTMLInputElement).value)}/>
                            <input type='password' placeholder='Пароль' value={Password}
                                   onInput={e => setPassword((e.target as HTMLInputElement).value)}/>

                            <div className={styles.auth__content__text__agreement}>
                                <input
                                    type='checkbox'
                                    className='checkbox'
                                    id='box'
                                />

                                <h2 style={{fontSize: '20px'}}>Запомнить меня</h2>
                            </div>

                            <button style={{marginTop: '10px'}} onClick={() => {
                                Auth()
                            }}>Войти
                            </button>
                        </div>

                        <div className={styles.auth__content__img2}>
                            <img src={cells2}/>
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

export default Auth;