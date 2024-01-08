from blockcypher import get_wallet_balance, create_wallet_from_address, get_wallet_addresses, generate_new_address, send_faucet_coins, simple_spend
from flask import Flask
import pymongo
from pymongo import MongoClient

cluster = MongoClient("mongodb+srv://fortheboys368:e0unb5cwco7GyIt7@cluster0.kg3ymi5.mongodb.net/?retryWrites=true&w=majority")

db = cluster["CaseStudy"]
collection = db["Wallet"]

wallet_name = ['Dan', 'Shivam', 'Shashwat', 'Alice', 'Bob', 'Charlie', 'Carl', 'Andy', 'Eva', 'Diana']
api_key = '477ae410e9a34e8384f484edfdd233cd'

x = 1

for i in wallet_name:
    keypair = generate_new_address(coin_symbol='bcy',api_key='477ae410e9a34e8384f484edfdd233cd')


    faucet_tx = send_faucet_coins(
        address_to_fund=keypair['address'],satoshis=(100000*x),coin_symbol='bcy',api_key='477ae410e9a34e8384f484edfdd233cd')

    create_wallet_from_address(wallet_name=i, address=keypair['address'], api_key='477ae410e9a34e8384f484edfdd233cd', coin_symbol='bcy')

    wallet_balance_result = get_wallet_balance(i, api_key, omit_addresses=False, coin_symbol='bcy')
    address = get_wallet_addresses(wallet_name=i, api_key=api_key, coin_symbol='bcy')
    only_address = address['addresses']
    balance_value = wallet_balance_result['balance']
    
    print(f"Wallet: {i}, Balance: {balance_value} Satoshis")

    collection.insert_one({"_id":x, "name":i, "balance":balance_value, "address":only_address, "keypair":keypair})
    x = x + 1
