import React from 'react';
import styles from './MainPage.module.scss';

import CallForm from '../CallForm/CallForm';
import Contacts from '../Contacts/Contacts';
import DeliveryAndPay from '../DeliveryAndPay/DeliveryAndPay';
import Documents from '../Documents/Documents';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Home from '../Home/Home';
import OurProducts from '../OurProducts/OurProducts';
import WhyWe from '../WhyWe/WhyWe';
import History from '../History/History';
import Reviews from '../Reviews/Reviews';

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const MainPage = () => {
    function ScrollToTop() {
        const { pathname } = useLocation();

        useEffect(() => {
            window.scrollTo(0, 0);
        }, [pathname]);

        return null;
    }

    ScrollToTop();

    return (
        <div>
            <div className={styles.mainpage}>
                <Header />
                <Home />
                <History />
                <WhyWe />
                <OurProducts />
                <DeliveryAndPay />
                <CallForm />
                <Documents />
                <Reviews />
                <Contacts />
                <Footer />
            </div>
        </div>
    );
};

export default MainPage;
