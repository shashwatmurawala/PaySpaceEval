import React, {useEffect, useState} from 'react';
import App from './App.jsx';
import Wallet from './Wallet.jsx';
import WalletsList from './WalletsList.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const Router = () => {

    // const [wallets, setWallets] = useState([]);
    useEffect(() => {
        // 
        // data 
        // setWallets(data)
    
      }, [])

    return (
        <BrowserRouter>
            <Routes>
                <Route path = "/list" element = {<WalletsList/>} />
                <Route path = "/wallet/?" element = {<Wallet/>} />
                <Route path="/*" element={<App />} />
            </Routes>

        </BrowserRouter>

    );
}

export default Router;