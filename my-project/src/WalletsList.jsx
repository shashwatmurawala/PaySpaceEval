import React, { useState, useEffect } from "react";
import TransferModal from './TransferModal.js'

function WalletsList() {
  const [openModal, setOpenModal] = useState(false);
  const [wallets, setWallets] = useState([]);
  const [currentWallet, setCurrentWallet] = useState({});

  const [data, setData] = useState([{}])

  useEffect(() => {
    fetch("/wallets").then(
      res => res.json()
    ).then(
      data => {
        setData(data);
        console.log(data);
        setWallets(data);
      }
    );
  }, []);

  return (
    <div>
      <ul role="list" className="divide-y p-3 divide-gray-100">
        {wallets.map((wallet, id) => (
          <li key={id} className="flex items-center justify-between gap-x-6 py-5 hover:bg-gray-50">
            <div className="min-w-0">
              <div className="flex items-start gap-x-3">
                <p className="text-sm font-semibold leading-6 text-gray-900">{wallet.balance} Satoshis</p>
                {/* <p
                className={classNames(
                  statuses[project.status],
                  'rounded-md whitespace-nowrap mt-0.5 px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset'
                )}
              >
                {project.status}
              </p> */}
              </div>
              <div className="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500">
                <p className="whitespace-nowrap">Address : {wallet.address}</p>
              </div>
              <div className="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500">
                <p className="whitespace-nowrap">Wallet Name : {wallet.name}</p>
              </div>
            </div>
            <span className=" flex-none items-center gap-x-4">
              <a
                href={`wallet/?address=${wallet.address}&balance=${wallet.balance}`}
                className="hidden text-center rounded-md bg-gray-100 mb-1 px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-white sm:block"
              >
                Add Funds<span className="sr-only">, Wallet {id}</span>
              </a>
              <button
                onClick={() => {
                  setOpenModal(true);
                  setCurrentWallet(wallet);
                }}
                className="hidden text-center rounded-md bg-green-400 mt-1 px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-green-300 sm:block"
              >
                Transfer From<span className="sr-only">, Wallet {id}</span>
              </button>
            </span>
          </li>
        ))}
      </ul>
      {(openModal && currentWallet) && <TransferModal open = {openModal} setOpen = {setOpenModal} wallet = {currentWallet} walletList = {wallets} setWalletList = {setWallets}/>}
    </div>
  );
}

export default WalletsList;
