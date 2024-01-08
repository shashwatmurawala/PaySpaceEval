from blockcypher import send_faucet_coins, generate_new_address, simple_spend, get_wallet_addresses

address = get_wallet_addresses(wallet_name="Shashwat", api_key='b07f0c5d691446b29ed9cf7f22dbfa3a', coin_symbol='bcy')
print(address)

'''
keypair = generate_new_address(coin_symbol='bcy',api_key='b07f0c5d691446b29ed9cf7f22dbfa3a')
print("My address is", keypair['address'])


faucet_tx = send_faucet_coins(
  address_to_fund='BxxqrS5NtLRFfqMaUYyzKKZjCyZMKwXZLG',satoshis=100000,coin_symbol='bcy',api_key='b07f0c5d691446b29ed9cf7f22dbfa3a')
print("Faucet txid is", faucet_tx['tx_ref'])


faucet_addr = keypair['address']
tx_ref = simple_spend(
  from_privkey=keypair['private'],to_address=faucet_addr,to_satoshis=100,coin_symbol='bcy',api_key='b07f0c5d691446b29ed9cf7f22dbfa3a')
print("Txid is", tx_ref)
'''
