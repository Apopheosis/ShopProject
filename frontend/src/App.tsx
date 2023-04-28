
import React, {useEffect, useState} from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.scss';
import Cart from './components/CartFolder/Cart/Cart';
import FinishOrder from './components/CartFolder/FinishOrder/FinishOrder';
import OrderMaker from './components/CartFolder/OrderMaker/OrderMaker';
import Privacy from './components/CartFolder/Privacy/Privacy';
import MainPage from './components/MainPageFolder/MainPage/MainPage';

import Candle from './components/ProductsFolder/Candle/Candle';
import Gift from './components/ProductsFolder/Gift/Gift';
import Honey from './components/ProductsFolder/Honey/Honey';
import Tea from './components/ProductsFolder/Tea/Tea';

import HoneyAll from './components/CatalogFolder/Honey/All/HoneyAll';
import HoneyEco from './components/CatalogFolder/Honey/HoneyEco/HoneyEco';
import HoneyCrimea from './components/CatalogFolder/Honey/Crimea/HoneyCrimea';
import HoneyLavender from './components/CatalogFolder/Honey/Lavender/HoneyLavender';
import HoneyTavrida from './components/CatalogFolder/Honey/Tavrida/HoneyTavrida';

import HerbsAll from './components/CatalogFolder/Herbs/All/HerbsAll';
import HerbsMonastic from './components/CatalogFolder/Herbs/Monastic/HerbsMonastic';
import HerbsFitosbor from './components/CatalogFolder/Herbs/Fitosbor/HerbsFitosbor';
import WaxAll from './components/CatalogFolder/Wax/All/WaxAll';
import WaxOnly from './components/CatalogFolder/Wax/Wax/WaxOnly';
import WaxCandles from './components/CatalogFolder/Wax/Candles/WaxCandles';
import GiftsAll from './components/CatalogFolder/Gifts/All/GiftsAll';
import internal from "stream";
import Registration from './components/AuthReg/Registration/Registration';
import Auth from "./components/AuthReg/Auth/Auth";

interface item {
    id: number
    item_name: string
    price: number
    img_url: string
}

interface itemCount {
    item: item
    count: number
}

interface user {
    id: number
    email: string
    name: string
    password: string
    token: {
        access_token: string,
        expires: string,
        token_type: string
    }
    itemsOrdered: itemCount[

    ]
}

interface UserContextValue {
    user: user
    setUser: React.Dispatch<React.SetStateAction<user>>
}

export const UserContext = React.createContext<UserContextValue>({
    user: { id: 0, token: {access_token: '', expires: '', token_type: ''}, email: '', name: '', password: '', itemsOrdered: []},
    setUser: () => {}
})


function App() {
    const [user, setUser] = useState<user>({
        id: 0,
        email: '',
        name: '',
        password: '',
        token: {
            access_token: '',
            expires: '',
            token_type: ''
        },
        itemsOrdered: []
    })
    return (
        <UserContext.Provider value={{user, setUser}}>
        <div className='App'>
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/ordermaker' element={<OrderMaker />} />
                <Route path='/finishorder' element={<FinishOrder />} />
                <Route path='/privacy' element={<Privacy />} />

                <Route path='/products/honey/:id' element={<Honey />} />
                <Route path='/products/tea/:id' element={<Tea />} />
                <Route path='/products/candle/:id' element={<Candle />} />
                <Route path='/products/gift/:id' element={<Gift />} />

                <Route path='/catalog/honey/all' element={<HoneyAll />} />
                <Route path='/catalog/honey/eco' element={<HoneyEco />} />
                <Route path='/catalog/honey/crimea' element={<HoneyCrimea />} />
                <Route
                    path='/catalog/honey/tavrida'
                    element={<HoneyTavrida />}
                />
                <Route
                    path='/catalog/honey/lavender'
                    element={<HoneyLavender />}
                />

                <Route path='/catalog/herbs/all' element={<HerbsAll />} />
                <Route
                    path='/catalog/herbs/fitosbor'
                    element={<HerbsFitosbor />}
                />
                <Route
                    path='/catalog/herbs/monastic'
                    element={<HerbsMonastic />}
                />

                <Route path='/catalog/wax/all' element={<WaxAll />} />
                <Route path='/catalog/wax/wax' element={<WaxOnly />} />
                <Route path='/catalog/wax/candles' element={<WaxCandles />} />

                <Route path='/catalog/gifts/all' element={<GiftsAll />} />

                <Route path='/registration' element={<Registration />} />
                <Route path='/auth' element={<Auth />} />
            </Routes>
        </div>
        </UserContext.Provider>
    );
}

export default App;
