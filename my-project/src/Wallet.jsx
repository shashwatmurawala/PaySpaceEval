import React, { useState, useEffect } from 'react';
import { getQueryParameter } from './helpers';

function Wallet() {

  const [ address, setAddress ] = useState("");
  const [ balance, setBalance ] = useState("");

  useEffect(() => {
    setAddress(getQueryParameter('address'));

  }, [])

  useEffect(() => {
    setBalance(getQueryParameter('balance'));

  }, [])

  return (
    <div>
      Wallet Details
      <p><strong>Balance : </strong> {balance} Satoshis</p>
      <p><strong>Address : </strong> {address} </p>
      <div>
        <p>Send money to this wallet</p>
        <input className='rounded-md focus:ring max-w-sm' placeholder='Amount (Satoshis)'/>
        <button className='p-1 mx-1 rounded-md bg-gray-200 hover:bg-gray-500'>
          Send Funds
        </button>
      </div>
    </div>
  )
}

export default Wallet;