import { Fragment, useEffect, useRef, useState } from "react";
// import Fortmatic from "fortmatic";
// import { ethers, JsonRpcProvider } from "ethers";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";
// import { useSigner } from "react-signer";

export default function TransferModal({ open, setOpen, wallet, walletList, setWalletList }) {
  const cancelButtonRef = useRef(null);
  const [transferAmount, setTransferAmount] = useState(0);
  const [transferAddress, setTransferAddress] = useState("");


  // const BlockcypherSigner = () => {
  //   const [signature, setSignature] = useState(null);
  //   const [loadings, setLoadings] = useState(null);
  //   useEffect(() => {
  //     const fetchSigner = async() => {}
  //   }

  // const [signerValue, setSignerValue] = useState(null);
  // const fm = new Fortmatic('477ae410e9a34e8384f484edfdd233cd', 'test123');
  // const provider = new JsonRpcProvider('https://api.blockcypher.com/v1/bcy/test/txs/new?token=477ae410e9a34e8384f484edfdd233cd');
  // const wallet = new ethers.Wallet(wallet.keypair.private);
  // const signer = provider.getSigner();
  
  // const { getSigner } = useState();
  

  const handleTransfer = () => {
    newtransfer();
  } 

const newtransfer = async () => {
  
   
    const response = await fetch('https://api.blockcypher.com/v1/bcy/test/txs/new?token=477ae410e9a34e8384f484edfdd233cd', {
      method: 'POST',
      // headers: { 
      //   'token': '' },
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({
        inputs: [
          {
            addresses: [
               new String(wallet.address)
            ]
          }
        ],
        outputs: [
          {
            addresses: [
             new String(transferAddress)
            ],
            value: new Number(transferAmount)
          }
        ]
      })
     
    }
    )
    const data = await response.json();
    console.log(data);
  }

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <div>
                  {/* <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <CheckIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
                  </div> */}
                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                      Transfer Funds from Wallet with Address {wallet.address}
                    </Dialog.Title>
                    <div className="mt-2">
                      <h1 className=" text-gray-700">
                        Wallet {wallet.address} has a balance of <strong>{wallet.balance} Satoshis</strong>
                      </h1>
                      <div className="mt-1 p-1">
                        <p className="ml-1">Transfer this amount:</p>
                        <input onChange = {e => setTransferAmount(parseInt(e.target.value))} className = "rounded-md max-w-lg w-full" placeholder={`Amount to transfer (≤ ${wallet.balance})`}></input>
                      </div>
                      <div className="mt-1 p-1">
                        <p className="ml-1">Transfer to Wallet with address:</p>
                        <input onChange = {e => setTransferAddress(e.target.value)} className = "rounded-md w-full" placeholder="Wallet Address"></input>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2"
                    onClick={() => handleTransfer()}
                  >
                    Transfer
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
